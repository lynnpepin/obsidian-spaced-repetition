import { Notice, Plugin, addIcon, iterateCacheRefs, getLinkpath, ItemView, PluginSettingTab, Setting, WorkspaceLeaf } from 'obsidian';

const SCHEDULING_INFO_REGEX = /^---\n((?:.*\n)*)due: ([0-9A-Za-z ]+)\ninterval: ([0-9]+)\nease: ([0-9]+)\n((?:.*\n)*)---/;
const YAML_FRONT_MATTER_REGEX = /^---\n((?:.*\n)*)---/;
const IGNORE_REGEX = /review: ignore/;
const DUE_DATES_VIEW_TYPE = 'due-dates-list-view';

interface ConceptsReviewSettings {
	default_ease: number;
	o_factor: number;
	i_factor: number;
	initial_interval: number;
	lapses_interval_change: number;
}

const DEFAULT_SETTINGS: ConceptsReviewSettings = {
	default_ease: 250,
	o_factor: 0.5,
	i_factor: 0.25,
	initial_interval: 1,
	lapses_interval_change: 0.5
}

export default class ConceptsReviewPlugin extends Plugin {
	private scheduled_notes: [];
	private overdue_notes: [];
	private statusBar;
	settings: ConceptsReviewSettings;
	due_view: DueDatesListView;

	async onload(): void {
		await this.loadSettings();

		addIcon('crosshairs', crossHairsIcon);

		this.scheduled_notes = {};
		this.overdue_notes = [];
		this.statusBar = this.addStatusBarItem();
		this.statusBar.classList.add("mod-clickable");
		this.statusBar.addEventListener("click", _ => {
			this.reviewNextNote();
		});

		this.addRibbonIcon('crosshairs', 'Sync notes scheduling', async () => {
			await this.sync();
			new Notice("Sync done.");
		});

		this.registerView(DUE_DATES_VIEW_TYPE, (leaf) => this.due_view = new DueDatesListView(leaf, this, this.scheduled_notes));
		if (this.app.workspace.layoutReady)
			this.initView();
		else
			this.registerEvent(this.app.workspace.on('layout-ready', _ => this.initView()));

		this.app.workspace.on("file-menu", ((menu, file: TFile) => {
			menu.addItem((item) =>{
				item.setTitle("Concept Review: Easy").setIcon("crosshairs")
					.onClick(evt => {
						this.saveReviewResponse(file, 1);
				});
			})
		}));

		this.app.workspace.on("file-menu", ((menu, file: TFile) => {
			menu.addItem((item) =>{
				item.setTitle("Concept Review: Hard").setIcon("crosshairs")
					.onClick(evt => {
						this.saveReviewResponse(file, 0);
				});
			})
		}));

		this.addCommand({
			id: "note-review-open-note",
			name: "Open most overdue note for review",
			callback: () => {
				this.reviewNextNote();
			}
		});

		this.addSettingTab(new ConceptsReviewSettingTab(this.app, this));

		await sleep(2000);
		await this.sync();
	}

	async sync(): void {
		let notes = this.app.vault.getMarkdownFiles();
		this.scheduled_notes = {};
		this.overdue_notes = [];

		let links = {};
		notes.forEach(n_file => {
			links[n_file.path] = {"list": []};
		});

		notes.forEach(n_file => {
			iterateCacheRefs(this.app.metadataCache.getFileCache(n_file), cb => {
				let txt = this.app.metadataCache.getFirstLinkpathDest(getLinkpath(cb.link), n_file.path);
				if (txt != null && txt.extension == "md") {
					links[n_file.path]["list"].push([txt.path, "out"]);
					links[txt.path]["list"].push([n_file.path, "in"]);
				}
			});
		});
		
		let now = +new Date();
		let temp_new = [];
		for (let note of notes) {
			let file_text = await this.app.vault.read(note);

			if (!IGNORE_REGEX.test(file_text) && getFileLength(file_text) > 1) { // checks if note should be ignored
				if (!SCHEDULING_INFO_REGEX.test(file_text)) { // file has no scheduling information
					temp_new.push([note, file_text]);
					continue;
				}

				let scheduling_info = SCHEDULING_INFO_REGEX.exec(file_text);
				let due_unix = Date.parse(scheduling_info[2]);
				let interval = parseInt(scheduling_info[3]);
				let ease = parseInt(scheduling_info[4]);

				if (!(due_unix in this.scheduled_notes))
					this.scheduled_notes[due_unix] = {};
				this.scheduled_notes[due_unix][note.path] = [note, due_unix, interval, ease];
				links[note.path]["ease"] = ease;

				if (due_unix <= now)
					this.overdue_notes.push({note: note[0], due_unix: note[1], interval: note[2], ease: note[3]});
			}
		}

		let interval = this.settings.initial_interval;
		let due = new Date(+new Date + interval * 24 * 3600 * 1000);
		let date_str = due.toDateString();
		let due_unix = Date.parse(date_str); // cause timezones

		for (let new_note of temp_new) {
			let outgoing_link_total = 0, outgoing_link_count = 0;
			let incoming_link_total = 0, incoming_link_count = 0;
			for (let linked_file of links[new_note[0].path]["list"]) {
				let ease = links[linked_file[0]]["ease"];
				if (ease) {
					if (linked_file[1] == "out") {
						outgoing_link_total += ease;
						outgoing_link_count += 1;
					} else {
						incoming_link_total += ease;
						incoming_link_count += 1;
					}
				}
			}

			let initial_ease = (1.0 - this.settings.o_factor - this.settings.i_factor) * this.settings.default_ease;
			initial_ease += (outgoing_link_count > 0 ? this.settings.o_factor * outgoing_link_total / outgoing_link_count : this.settings.o_factor * this.settings.default_ease);
			initial_ease += (incoming_link_count > 0 ? this.settings.i_factor * incoming_link_total / incoming_link_count : this.settings.i_factor * this.settings.default_ease);
			initial_ease = Math.floor(initial_ease);

			if (YAML_FRONT_MATTER_REGEX.test(new_note[1])) {
				let info = YAML_FRONT_MATTER_REGEX.exec(new_note[1]);
				file_text = new_note[1].replace(YAML_FRONT_MATTER_REGEX, `---\n${info[1]}due: ${date_str}\ninterval: ${interval}\nease: ${initial_ease}\n---`);
			} else {
				file_text = `---\ndue: ${due.toDateString()}\ninterval: ${interval}\nease: ${initial_ease}\n---\n\n${new_note[1]}`;
			}
			this.app.vault.modify(new_note[0], file_text);

			if (!(due_unix in this.scheduled_notes))
				this.scheduled_notes[due_unix] = {};
			this.scheduled_notes[due_unix][new_note.path] = [note, due_unix, interval, initial_ease];
		}

		this.scheduled_notes = Object.keys(this.scheduled_notes).sort().reduce((obj, key) => { 
			obj[key] = this.scheduled_notes[key]; 
			return obj;
		}, {});
		
		this.statusBar.setText(`Review: ${this.overdue_notes.length} due, ${Object.keys(this.scheduled_notes).length} total`);
		this.due_view.redraw();
	}

	async saveReviewResponse(note: TFile, quality: number): void {
		let file_text = await this.app.vault.read(note);

		if (!IGNORE_REGEX.test(file_text) && getFileLength(file_text) > 1) { // checks if note should be ignored 
			let scheduling_info = SCHEDULING_INFO_REGEX.exec(file_text);

			let interval = parseInt(scheduling_info[3]);
			let ease = parseInt(scheduling_info[4]);

			ease = (quality == 1 ? ease + 20 : Math.max(130, ease - 20));
			interval = Math.max(1, Math.floor(quality == 1 ? interval * ease / 100 : interval * this.settings.lapses_interval_change));
			if (interval >= 8) { // fuzz
				let fuzz = Math.ceil(0.05 * interval);
				let r = Math.random();
				interval += (r < 0.33 ? -fuzz : (r < 0.67 ? 0 : fuzz));
			}

			let due = new Date(+new Date + interval * 24 * 3600 * 1000);
			file_text = file_text.replace(SCHEDULING_INFO_REGEX, `---\n${scheduling_info[1]}due: ${due.toDateString()}\ninterval: ${interval}\nease: ${ease}\n${scheduling_info[6]}---`);
			this.app.vault.modify(note, file_text);

			new Notice("Response received.");
		} else {
			new Notice("Note marked as IGNORE or has no content.");
		}
		await this.sync();
		this.reviewNextNote();
	}

	async reviewNextNote(): void {
		if (this.overdue_notes.length == 0) {
			new Notice("You're done for the day :D.");
			return;
		}

		if (this.overdue_notes.length > 0) {
			let cNote = this.overdue_notes[Math.floor(Math.random() * this.overdue_notes.length)];
			for (let note of this.overdue_notes) {
				if (note['due_unix'] < cNote['due_unix'])
					cNote = note;
			}
			this.app.workspace.activeLeaf.openFile(cNote['note']);
		}
	}

	async loadSettings(): void {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings(): void {
		await this.saveData(this.settings);
	}

	initView(): void {
		if (this.app.workspace.getLeavesOfType(DUE_DATES_VIEW_TYPE).length) {
			return;
		}

		this.app.workspace.getRightLeaf(false).setViewState({
			type: DUE_DATES_VIEW_TYPE,
			active: true,
		});
	};
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

function getFileLength(file_text: string) {
	let yaml_front_matter = YAML_FRONT_MATTER_REGEX.exec(file_text);
	let yaml_front_matter_length = (yaml_front_matter == null ? 0 : yaml_front_matter[0].split(/\r\n|\r|\n/).length);
	return file_text.split(/\r\n|\r|\n/).length - yaml_front_matter_length;
}

class ConceptsReviewSettingTab extends PluginSettingTab {
	plugin: ConceptsReviewPlugin;

	constructor(app: App, plugin: ConceptsReviewPlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		let {containerEl} = this;

		containerEl.empty();
		containerEl.createEl('h2', {text: 'Concepts Review Plugin - Settings'});
		let helpEl = containerEl.createEl('div', {cls: "help-div"});
		helpEl.innerHTML = '<a href="https://github.com/st3v3nmw/concepts-review/blob/master/README.md">For more information, check the README.</a>';

		new Setting(containerEl)
			.setName('Base ease')
			.setDesc('(minimum = 130, preferrably approx. 250)')
			.addText(text => text
				.setValue(`${this.plugin.settings.default_ease}`)
				.onChange(async (value) => {
					this.plugin.settings.default_ease = Math.max(130, Number.parseInt(value));
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('o_factor')
			.setDesc('Weighting for outgoing links (0% <= i_factor + o_factor <= 100%)')
			.addText(text => text
				.setValue(`${this.plugin.settings.o_factor * 100}`)
				.onChange(async (value) => {
					value = Number.parseInt(value) / 100;
					if (this.plugin.settings.i_factor + value > 1.0) {
						new Notice("i_factor + o_factor must be less than 100");
						return;
					}
					this.plugin.settings.o_factor = Math.max(0.0, Math.min(1.0, value));
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('i_factor')
			.setDesc('Weighting for incoming links (0% <= i_factor + o_factor <= 100%)')
			.addText(text => text
				.setValue(`${this.plugin.settings.i_factor * 100}`)
				.onChange(async (value) => {
					value = Number.parseInt(value) / 100;
					if (this.plugin.settings.i_factor + value > 1.0) {
						new Notice("i_factor + o_factor must be less than 100");
						return;
					}
					this.plugin.settings.i_factor = Math.max(0.0, Math.min(1.0, value));
					await this.plugin.saveSettings();
				}));
		
		new Setting(containerEl)
			.setName('Initial interval')
			.setDesc('Delay in # of days before reviewing concept for the 1st time (minimum = 1)')
			.addText(text => text
				.setValue(`${this.plugin.settings.initial_interval}`)
				.onChange(async (value) => {
					this.plugin.settings.initial_interval = Math.max(1, Number.parseInt(value));
					await this.plugin.saveSettings();
				}));

		new Setting(containerEl)
			.setName('Interval change when you review a concept as hard')
			.setDesc('(new_interval = old_interval * interval_change / 100, 0% < interval_change < 100%)')
			.addText(text => text
				.setValue(`${this.plugin.settings.lapses_interval_change * 100}`)
				.onChange(async (value) => {
					this.plugin.settings.lapses_interval_change = Math.max(0.01, Math.min(0.99, Number.parseInt(value) / 100));
					await this.plugin.saveSettings();
				}));
	}
}

class DueDatesListView extends ItemView {
	plugin: ConceptsReviewPlugin;

	constructor(leaf: WorkspaceLeaf, plugin: ConceptsReviewPlugin) {
		super(leaf);

		this.plugin = plugin;
		this.active_date = '';
		this.registerEvent(this.app.workspace.on('file-open', _ => this.redraw()));
		this.registerEvent(this.app.vault.on('rename', _ => this.redraw()));
		this.redraw();
	}

	public getViewType(): string {
		return DUE_DATES_VIEW_TYPE;
	}

	public getDisplayText(): string {
		return 'Due Dates';
	}

	public getIcon(): string {
		return 'crosshairs';
	}

	public onHeaderMenu(menu: Menu): void {
		menu.addItem(item => {
			item.setTitle('Close')
				.setIcon('cross')
				.onClick(() => {
					this.app.workspace.detachLeavesOfType(DUE_DATES_VIEW_TYPE);
				});
		});
	}

	public redraw(): void {
		const openFile = this.app.workspace.getActiveFile();

		const rootEl = createDiv({cls: 'nav-folder mod-root'});
		const childrenEl = rootEl.createDiv({cls: 'nav-folder-children'});

		let now = +new Date();
		let count = 0;
		for (let due_unix in this.plugin.scheduled_notes) {
			let due_on_date = this.plugin.scheduled_notes[due_unix];
			let due = new Date(Number.parseInt(due_unix));
			const dateFolderEl = childrenEl.createDiv({cls: 'nav-folder'});
			const dateFolderTitleEl = dateFolderEl.createDiv({cls: 'nav-folder-title'});
			const dateChildrenEl = dateFolderEl.createDiv({cls: 'nav-folder-children'});
			const collapseIconEl = dateFolderTitleEl.createDiv({cls: 'nav-folder-collapse-indicator collapse-icon'});
			collapseIconEl.innerHTML = collapseIcon;

			if (count > 0 || this.active_date == due_unix)
				collapseIconEl.childNodes[0].style.transform = 'rotate(-90deg)';

			let n_days = Math.ceil((due_unix - now) / (24 * 3600 * 1000));
			dateFolderTitleEl.createDiv({cls: 'nav-folder-title-content', text: (n_days == -1 ? 'Yesterday' : (n_days == 0 ? 'Today' : n_days == 1 ? 'Tomorrow' : due.toDateString()))});

			dateFolderTitleEl.onClickEvent(_ => {
				for (let child of dateChildrenEl.childNodes) {
					if (child.style.display == "block" || child.style.display == "") {
						child.style.display = "none";
						collapseIconEl.childNodes[0].style.transform = 'rotate(-90deg)';
					} else {
						child.style.display = "block";
						collapseIconEl.childNodes[0].style.transform = '';
					}
				}
			});
		
			for (let currentFile in due_on_date) {
				currentFile = due_on_date[currentFile];

				const navFile = dateChildrenEl.createDiv({cls: 'nav-file'});
				if (count > 0 && this.active_date != due_unix)
					navFile.style.display = "none";
				
				const navFileTitle = navFile.createDiv({cls: 'nav-file-title'});
				if (openFile && currentFile[0].path === openFile.path)
					navFileTitle.addClass('is-active');
				navFileTitle.createDiv({cls: 'nav-file-title-content', text: currentFile[0].basename});
				navFileTitle.onClickEvent(_ => {
					this.app.workspace.activeLeaf.openFile(currentFile[0]);
					this.active_date = due_unix;
				});
			}

			count++;
		}

		const contentEl = this.containerEl.children[1];
		contentEl.empty();
		contentEl.appendChild(rootEl);
	}
}

const crossHairsIcon = `<path style=" stroke:none;fill-rule:nonzero;fill:currentColor;fill-opacity:1;" d="M 99.921875 47.941406 L 93.074219 47.941406 C 92.84375 42.03125 91.390625 36.238281 88.800781 30.921875 L 85.367188 32.582031 C 87.667969 37.355469 88.964844 42.550781 89.183594 47.84375 L 82.238281 47.84375 C 82.097656 44.617188 81.589844 41.417969 80.734375 38.304688 L 77.050781 39.335938 C 77.808594 42.089844 78.261719 44.917969 78.40625 47.769531 L 65.871094 47.769531 C 64.914062 40.507812 59.144531 34.832031 51.871094 33.996094 L 51.871094 21.386719 C 54.816406 21.507812 57.742188 21.960938 60.585938 22.738281 L 61.617188 19.058594 C 58.4375 18.191406 55.164062 17.691406 51.871094 17.570312 L 51.871094 10.550781 C 57.164062 10.769531 62.355469 12.066406 67.132812 14.363281 L 68.789062 10.929688 C 63.5 8.382812 57.738281 6.953125 51.871094 6.734375 L 51.871094 0.0390625 L 48.054688 0.0390625 L 48.054688 6.734375 C 42.179688 6.976562 36.417969 8.433594 31.132812 11.007812 L 32.792969 14.441406 C 37.566406 12.140625 42.761719 10.84375 48.054688 10.625 L 48.054688 17.570312 C 44.828125 17.714844 41.628906 18.21875 38.515625 19.078125 L 39.546875 22.757812 C 42.324219 21.988281 45.175781 21.53125 48.054688 21.386719 L 48.054688 34.03125 C 40.796875 34.949219 35.089844 40.679688 34.203125 47.941406 L 21.5 47.941406 C 21.632812 45.042969 22.089844 42.171875 22.855469 39.375 L 19.171875 38.34375 C 18.3125 41.457031 17.808594 44.65625 17.664062 47.882812 L 10.664062 47.882812 C 10.882812 42.589844 12.179688 37.394531 14.480469 32.621094 L 11.121094 30.921875 C 8.535156 36.238281 7.078125 42.03125 6.847656 47.941406 L 0 47.941406 L 0 51.753906 L 6.847656 51.753906 C 7.089844 57.636719 8.542969 63.402344 11.121094 68.695312 L 14.554688 67.035156 C 12.257812 62.261719 10.957031 57.066406 10.738281 51.773438 L 17.742188 51.773438 C 17.855469 55.042969 18.34375 58.289062 19.191406 61.445312 L 22.871094 60.414062 C 22.089844 57.5625 21.628906 54.632812 21.5 51.679688 L 34.203125 51.679688 C 35.058594 58.96875 40.773438 64.738281 48.054688 65.660156 L 48.054688 78.308594 C 45.105469 78.1875 42.183594 77.730469 39.335938 76.957031 L 38.304688 80.636719 C 41.488281 81.511719 44.757812 82.015625 48.054688 82.144531 L 48.054688 89.144531 C 42.761719 88.925781 37.566406 87.628906 32.792969 85.328125 L 31.132812 88.765625 C 36.425781 91.3125 42.183594 92.742188 48.054688 92.960938 L 48.054688 99.960938 L 51.871094 99.960938 L 51.871094 92.960938 C 57.75 92.71875 63.519531 91.265625 68.808594 88.6875 L 67.132812 85.253906 C 62.355469 87.550781 57.164062 88.851562 51.871094 89.070312 L 51.871094 82.125 C 55.09375 81.980469 58.292969 81.476562 61.40625 80.617188 L 60.378906 76.9375 C 57.574219 77.703125 54.695312 78.15625 51.792969 78.289062 L 51.792969 65.679688 C 59.121094 64.828125 64.910156 59.0625 65.796875 51.734375 L 78.367188 51.734375 C 78.25 54.734375 77.789062 57.710938 76.992188 60.605469 L 80.675781 61.636719 C 81.558594 58.40625 82.066406 55.082031 82.183594 51.734375 L 89.261719 51.734375 C 89.042969 57.03125 87.742188 62.222656 85.445312 66.996094 L 88.878906 68.65625 C 91.457031 63.367188 92.910156 57.597656 93.152344 51.71875 L 100 51.71875 Z M 62.019531 51.734375 C 61.183594 56.945312 57.085938 61.023438 51.871094 61.828125 L 51.871094 57.515625 L 48.054688 57.515625 L 48.054688 61.808594 C 42.910156 60.949219 38.886719 56.902344 38.058594 51.753906 L 42.332031 51.753906 L 42.332031 47.941406 L 38.058594 47.941406 C 38.886719 42.789062 42.910156 38.746094 48.054688 37.886719 L 48.054688 42.179688 L 51.871094 42.179688 L 51.871094 37.847656 C 57.078125 38.648438 61.179688 42.71875 62.019531 47.921875 L 57.707031 47.921875 L 57.707031 51.734375 Z M 62.019531 51.734375 "/>`;
const collapseIcon = `<svg viewBox="0 0 100 100" width="8" height="8" class="right-triangle"><path fill="currentColor" stroke="currentColor" d="M94.9,20.8c-1.4-2.5-4.1-4.1-7.1-4.1H12.2c-3,0-5.7,1.6-7.1,4.1c-1.3,2.4-1.2,5.2,0.2,7.6L43.1,88c1.5,2.3,4,3.7,6.9,3.7 s5.4-1.4,6.9-3.7l37.8-59.6C96.1,26,96.2,23.2,94.9,20.8L94.9,20.8z"></path></svg>`;