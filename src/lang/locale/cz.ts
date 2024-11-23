// čeština

export default {
    // flashcard-modal.tsx
    DECKS: "Balíčky",
    DUE_CARDS: "Kartičky po termínu",
    NEW_CARDS: "Nové kartičky",
    TOTAL_CARDS: "Kartiček celkem",
    BACK: "Back",
    SKIP: "Skip",
    EDIT_CARD: "Edit Card",
    RESET_CARD_PROGRESS: "Vynulovat pokrok kartičky",
    RESHUFFLE: "Reshuffle",
    HARD: "Těžké",
    GOOD: "Dobré",
    EASY: "Jednoduché",
    SHOW_ANSWER: "Ukázat odpověď",
    CARD_PROGRESS_RESET: "Pokrok kartičky byl vynulován.",
    SAVE: "Save",
    CANCEL: "Cancel",
    NO_INPUT: "No input provided.",
    CURRENT_EASE_HELP_TEXT: "Current Ease: ",
    CURRENT_INTERVAL_HELP_TEXT: "Current Interval: ",
    CARD_GENERATED_FROM: "Generated from: ${notePath}",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "Otevřít poznámku k revizi",
    REVIEW_CARDS: "Poznámek k revizi",
    REVIEW_DIFFICULTY_FILE_MENU: "Revize: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "Označit poznámku jako ${difficulty}",
    REVIEW_ALL_CARDS: "Revidovat kartičky ve všech poznámkách",
    CRAM_ALL_CARDS: "Select a deck to cram",
    REVIEW_CARDS_IN_NOTE: "Revidovat kartičky v této poznámce.",
    CRAM_CARDS_IN_NOTE: "Cram kartičky v této poznámce.",
    VIEW_STATS: "Ukázat statistiky",
    OPEN_REVIEW_QUEUE_VIEW: "Open Notes Review Queue in sidebar",
    STATUS_BAR: "Revize: ${dueNotesCount} poznámek, ${dueFlashcardsCount} kartiček po termínu",
    SYNC_TIME_TAKEN: "Synchronizace trvala ${t}ms",
    NOTE_IN_IGNORED_FOLDER: "Poznámka je uložena v ignorované složce (zkontrolujte nastavení).",
    PLEASE_TAG_NOTE: "Prosím označne poznámku odpovídajícím tagem pro revizi (v nastavení).",
    RESPONSE_RECEIVED: "Odpověď přijata.",
    NO_DECK_EXISTS: "Neexistuje žádný balíček pro ${deckName}",
    ALL_CAUGHT_UP: "Vše zrevidováno",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} den/dní",
    MONTHS_STR_IVL: "${interval} měsíc(ů)",
    YEARS_STR_IVL: "${interval} rok(ů)",
    DAYS_STR_IVL_MOBILE: "${interval}d",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}r",

    // settings.ts
    SETTINGS_HEADER: "Spaced Repetition",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_DATA_STORAGE_DESC: "Choose where to store the scheduling data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: 'Pro více informací jděte na <a href="${wikiUrl}">wiki</a>.',
    GITHUB_DISCUSSIONS:
        'Visit the <a href="${discussionsUrl}">discussions</a> section for Q&A help, feedback, and general discussion.',
    GITHUB_ISSUES:
        'Raise an issue <a href="${issuesUrl}">here</a> if you have a feature request or a bug report.',
    GITHUB_SOURCE_CODE:
        'The project\'s source code is available on <a href="${githubProjectUrl}">GitHub</a>.',
    CODE_CONTRIBUTION_INFO:
        '<a href="${codeContributionUrl}">Here\'s</a> how to contribute code to the plugin.',
    TRANSLATION_CONTRIBUTION_INFO:
        '<a href="${translationContributionUrl}">Here\'s</a> how to translate the plugin to another language.',
    FOLDERS_TO_IGNORE: "Ignorované složky",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "Kartičky",
    FLASHCARD_EASY_LABEL: "Easy Button Text",
    FLASHCARD_GOOD_LABEL: "Good Button Text",
    FLASHCARD_HARD_LABEL: "Hard Button Text",
    FLASHCARD_RESHUFFLE_LABEL: "Reshuffle Button Text",
    FLASHCARD_RESHUFFLE_LABEL: "Reshuffle Button Text",
    FLASHCARD_EASY_DESC: 'Customize the label for the "Easy" Button',
    FLASHCARD_GOOD_DESC: 'Customize the label for the "Good" Button',
    FLASHCARD_HARD_DESC: 'Customize the label for the "Hard" Button',
    FLASHCARD_RESHUFFLE_DESC: 'Customize the label for the "Reshuffle" Button',
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "Tag pro kartičky",
    FLASHCARD_TAGS_DESC:
        "Zadete tagy oodělené mezerou nebo odřádkováním například. #kartičky #balíčke2 #balíček3.",
    CONVERT_FOLDERS_TO_DECKS: "Převést složky na balíčky a podbalíčky?",
    CONVERT_FOLDERS_TO_DECKS_DESC: "Toto je alternativa k tagům kartiček viz nastavení výše.",
    INLINE_SCHEDULING_COMMENTS:
        "Uložit plánovací komentář na stejný řádek jako poslední položka kartičky?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "Zapnutí této volby způsobí, že HTML komentáře nebudou rozbíjet formátování listů.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Odložit příbuzné kartičky na další den?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Příbuzné kartičky jsou kartičky generované z textu stejné poznámky například cloze smazání",
    SHOW_CARD_CONTEXT: "Ukázat kontext v kartičce?",
    SHOW_CARD_CONTEXT_DESC: "například Titulek > Nadpis1 > Podnadpis > ... > Podnadpis",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "Výška kartiček v procentech",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "Mělo by být nastaveno na 100% na mobilu nebo když používáte velké obrázky",
    RESET_DEFAULT: "Resetovat výchozí nastavení",
    CARD_MODAL_WIDTH_PERCENT: "Šířka kartiček v procentech",
    RANDOMIZE_CARD_ORDER: "Náhodně změnit pořadí kartiček během revize?",
    REVIEW_CARD_ORDER_WITHIN_DECK: "Order cards in a deck are displayed during review",
    REVIEW_CARD_ORDER_NEW_FIRST_SEQUENTIAL: "Sequentially within a deck (All new cards first)",
    REVIEW_CARD_ORDER_DUE_FIRST_SEQUENTIAL: "Sequentially within a deck (All due cards first)",
    REVIEW_CARD_ORDER_NEW_FIRST_RANDOM: "Randomly within a deck (All new cards first)",
    REVIEW_CARD_ORDER_DUE_FIRST_RANDOM: "Randomly within a deck (All due cards first)",
    REVIEW_CARD_ORDER_RANDOM_DECK_AND_CARD: "Random card from random deck",
    REVIEW_DECK_ORDER: "Order decks are displayed during review",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_SEQUENTIAL:
        "Sequentially (once all cards in previous deck reviewed)",
    REVIEW_DECK_ORDER_PREV_DECK_COMPLETE_RANDOM:
        "Randomly (once all cards in previous deck reviewed)",
    REVIEW_DECK_ORDER_RANDOM_DECK_AND_CARD: "Random card from random deck",
    DISABLE_CLOZE_CARDS: "Vypnout cloze kartičky?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "Převést ==zvýraznění== na clozes?",
    CONVERT_BOLD_TEXT_TO_CLOZES: "Převést **tučný text** na clozes?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "Převést {{složené závorky}} na clozes?",
    CLOZE_PATTERNS: "Cloze vzory",
    CLOZE_PATTERNS_DESC:
        'Zadejte cloze vzory oddělené odřádkováním. Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "Oddělovač pro inline kartičky",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "Pozor. Jakmile toto změníte, budete muset ručně upravit všechny existující kartičky.",
    INLINE_REVERSED_CARDS_SEPARATOR: "Oddělovač pro otočené inline kartičky",
    MULTILINE_CARDS_SEPARATOR: "Oddělovač pro víceřádkové kartičky",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "Oddělovač pro víceřádkove otočené kartičky",
    MULTILINE_CARDS_END_MARKER: "Znaky označující konec clozes a víceřádkových flash karet",
    NOTES: "Poznámky",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Enable note review pane on startup",
    TAGS_TO_REVIEW: "Tag pro revizi",
    TAGS_TO_REVIEW_DESC:
        "Zadejte tagy oddělené mezerami nebo odřádkováním například #review #tag2 #tag3.",
    OPEN_RANDOM_NOTE: "Otevřít náhodnou poznámku pro revizi",
    OPEN_RANDOM_NOTE_DESC: "Pokud toto vypnete, poznámky budou řazeny dle důležitosti (PageRank).",
    AUTO_NEXT_NOTE: "Otevřít automaticky další poznámku po dokončení revize",
    ENABLE_FILE_MENU_REVIEW_OPTIONS:
        "Povolte možnosti revize v nabídce souboru (např. Revize: Jednoduché, Dobré, Těžké)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "Pokud v nabídce souboru zakážete možnosti revize, můžete své poznámky revidovat pomocí příkazů pluginu a, pokud jste je definovali, pomocí přiřazených klávesových zkratek.",
    MAX_N_DAYS_REVIEW_QUEUE: "Maximální počet dní zobrazených v pravém panelu",
    MIN_ONE_DAY: "Počet dní musí být minimálně 1.",
    VALID_NUMBER_WARNING: "Prosím zadejte validní číslo.",
    UI: "Předvolby uživatelského rozhraní",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC:
        "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE:
        "Stromy balíčky by měly být zpočátku zobrazeny jako rozbalené",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "Vypněte toto, chcete-li sbalit vnořené balíčky na stejné kartě. To je užitečné, pokud máte kartičky, které patří k mnoha balíčkům ve stejném souboru.",
    ALGORITHM: "Algoritmus",
    CHECK_ALGORITHM_WIKI: 'Pro více informací jděte na <a href="${algoUrl}">popis algoritmu</a>.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "Základní složitost",
    BASE_EASE_DESC: "minimum = 130, nejlépe přibližně 250.",
    BASE_EASE_MIN_WARNING: "Základní složitost musí být minimálně 130.",
    LAPSE_INTERVAL_CHANGE: "Změna intervalu pokud kartičku/poznámku označíte jako složitou",
    LAPSE_INTERVAL_CHANGE_DESC: "nový_inteval = starý_interval * změna_intevalu / 100.",
    EASY_BONUS: "Bonus pro jednoduché",
    EASY_BONUS_DESC:
        "Tento bonus umožňuje nastavit rozdíl intervalu mezi jednoduchými a dobrými kartičkami/poznámkami (minimum = 100%).",
    EASY_BONUS_MIN_WARNING: "Bonus pro jednoduchost musí být minimálně 100.",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Maximum interval in days",
    MAX_INTERVAL_DESC: "Umožňuje nastavit horní limit pro interval (defaultně = 100 let).",
    MAX_INTERVAL_MIN_WARNING: "Maximální interval musí být alespoň 1 den.",
    MAX_LINK_CONTRIB: "Maximální příspěvěk prolinkování",
    MAX_LINK_CONTRIB_DESC:
        "Maximální příspěvek vážené složitosti prolinkovaných poznámek použitý pro určení počáteční složitosti.",
    LOGGING: "Zaznamenávám",
    DISPLAY_SCHEDULING_DEBUG_INFO: "Zobrazit informace pro ladění na vývojářské konzoli",
    DISPLAY_PARSER_DEBUG_INFO: "Show the parser's debugging information on the developer console",
    SCHEDULING: "Scheduling",
    EXPERIMENTAL: "Experimental",
    HELP: "Help",
    STORE_IN_NOTES: "In the notes",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "Fronta poznámek k revizi",
    CLOSE: "Uzavřené",
    NEW: "Nové",
    YESTERDAY: "Včera",
    TODAY: "Dnes",
    TOMORROW: "Zítra",

    // stats-modal.tsx
    STATS_TITLE: "Statistiky",
    MONTH: "Měsíc",
    QUARTER: "Čtvrtletí",
    YEAR: "Rok",
    LIFETIME: "Celkově",
    FORECAST: "Předpověď",
    FORECAST_DESC: "Celkový počet kartiček, kterým vyprší termín",
    SCHEDULED: "Naplánováno",
    DAYS: "Dní",
    NUMBER_OF_CARDS: "Počet kartiček",
    REVIEWS_PER_DAY: "Průměr: ${avg} revize/den",
    INTERVALS: "Intervaly",
    INTERVALS_DESC: "Doba, za kterou bude znovu zobrazeno k revize",
    COUNT: "Počet",
    INTERVALS_SUMMARY: "Průměrný interval: ${avg}, Nejdelší interval: ${longest}",
    EASES: "Složitost",
    EASES_SUMMARY: "Průměrná složitost: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "Typy kartiček",
    CARD_TYPES_DESC: "Obsahuje i odložené kartičky (pokud existují)",
    CARD_TYPE_NEW: "Nová",
    CARD_TYPE_YOUNG: "Mladá",
    CARD_TYPE_MATURE: "Dospělá",
    CARD_TYPES_SUMMARY: "Kartiček celkem: ${totalCardsCount}",
    SEARCH: "Search",
    PREVIOUS: "Previous",
    NEXT: "Next",
};
