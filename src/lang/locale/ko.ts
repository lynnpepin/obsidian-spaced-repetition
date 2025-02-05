// 한국어

export default {
    // flashcard-modal.tsx
    DECKS: "덱",
    DUE_CARDS: "다시 볼 카드들",
    NEW_CARDS: "새로운 카드들",
    TOTAL_CARDS: "전체 카드들",
    BACK: "Back",
    SKIP: "Skip",
    EDIT_CARD: "Edit Card",
    RESET_CARD_PROGRESS: "카드의 진행상황을 초기화합니다.",
    RESHUFFLE: "Reshuffle",
    HARD: "어려움(Hard)",
    GOOD: "좋음(Good)",
    EASY: "쉬움(Easy)",
    SHOW_ANSWER: "정답 확인하기",
    CARD_PROGRESS_RESET: "카드의 진행상황이 초기화되었습니다.",
    SAVE: "Save",
    CANCEL: "Cancel",
    NO_INPUT: "No input provided.",
    CURRENT_EASE_HELP_TEXT: "Current Ease: ",
    CURRENT_INTERVAL_HELP_TEXT: "Current Interval: ",
    CARD_GENERATED_FROM: "Generated from: ${notePath}",

    // main.ts
    OPEN_NOTE_FOR_REVIEW: "리뷰할 노트 열기",
    REVIEW_CARDS: "플래시카드 리뷰",
    REVIEW_DIFFICULTY_FILE_MENU: "리뷰: ${difficulty}",
    REVIEW_NOTE_DIFFICULTY_CMD: "노트를 ${difficulty}으로 리뷰합니다",
    REVIEW_ALL_CARDS: "모든 노트들의 플래시카드들을 리뷰합니다",
    CRAM_ALL_CARDS: "Select a deck to cram",
    REVIEW_CARDS_IN_NOTE: "이 노트의 플래시카드들을 리뷰합니다",
    CRAM_CARDS_IN_NOTE: "이 노트의 플래시카드들을 벼락치기합니다.",
    VIEW_STATS: "통계 확인",
    OPEN_REVIEW_QUEUE_VIEW: "Open Notes Review Queue in sidebar",
    STATUS_BAR: "--리뷰: ${dueNotesCount} 노트, ${dueFlashcardsCount} 카드 남았습니다.",
    SYNC_TIME_TAKEN: "동기화에 ${t}밀리초 걸렸습니다",
    NOTE_IN_IGNORED_FOLDER: "노트가 무시된 폴더 아래에 저장되어 있습니다. (설정을 확인해주세요)",
    PLEASE_TAG_NOTE: "리뷰를 하기위해 노트에 적절히 태그해주세요. (설정을 확인해주세요)",
    RESPONSE_RECEIVED: "요청이 완료되었습니다",
    NO_DECK_EXISTS: "${deckName}이라는 이름의 덱이 존재하지 않습니다.",
    ALL_CAUGHT_UP: "모두 확인했습니다. :D",

    // scheduling.ts
    DAYS_STR_IVL: "${interval} 일 후",
    MONTHS_STR_IVL: "${interval} 개월 후",
    YEARS_STR_IVL: "${interval} 년 후",
    DAYS_STR_IVL_MOBILE: "${interval}d",
    MONTHS_STR_IVL_MOBILE: "${interval}m",
    YEARS_STR_IVL_MOBILE: "${interval}y",

    // settings.ts
    SETTINGS_HEADER: "Spaced Repetition",
    GROUP_TAGS_FOLDERS: "Tags & Folders",
    GROUP_FLASHCARD_REVIEW: "Flashcard Review",
    GROUP_FLASHCARD_SEPARATORS: "Flashcard Separators",
    GROUP_DATA_STORAGE: "Storage of Scheduling Data",
    GROUP_DATA_STORAGE_DESC: "Choose where to store the scheduling data",
    GROUP_FLASHCARDS_NOTES: "Flashcards & Notes",
    GROUP_CONTRIBUTING: "Contributing",
    CHECK_WIKI: '더 많은 정보를 원하시면, <a href="${wikiUrl}">wiki</a>를 확인해주세요.',
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
    FOLDERS_TO_IGNORE: "무시할 폴더들",
    FOLDERS_TO_IGNORE_DESC:
        "Enter folder paths or glob patterns on separate lines e.g. Templates/Scripts or **/*.excalidraw.md. This setting is common to both flashcards and notes.",
    OBSIDIAN_INTEGRATION: "Integration into Obsidian",
    FLASHCARDS: "플래시카드",
    FLASHCARD_EASY_LABEL: "Easy Button Text",
    FLASHCARD_GOOD_LABEL: "Good Button Text",
    FLASHCARD_HARD_LABEL: "Hard Button Text",
    FLASHCARD_RESHUFFLE_LABEL: "Reshuffle Button Text",
    FLASHCARD_EASY_DESC: 'Customize the label for the "Easy" Button',
    FLASHCARD_GOOD_DESC: 'Customize the label for the "Good" Button',
    FLASHCARD_HARD_DESC: 'Customize the label for the "Hard" Button',
    FLASHCARD_RESHUFFLE_DESC: 'Customize the label for the "Reshuffle" Button',
    REVIEW_BUTTON_DELAY: "Button Press Delay (ms)",
    REVIEW_BUTTON_DELAY_DESC: "Add a delay to the review buttons before they can be pressed again.",
    FLASHCARD_TAGS: "플래시카드 태그",
    FLASHCARD_TAGS_DESC:
        "태그를 공백 또는 빈 줄로 구분해서 입력해주세요. 예) '#flashcards #deck2 #deck3'",
    CONVERT_FOLDERS_TO_DECKS: "폴더를 덱과 서브덱으로 사용할까요?",
    CONVERT_FOLDERS_TO_DECKS_DESC: "이 기능은 위의 플래시카드 태그 옵션을 대체합니다.",
    INLINE_SCHEDULING_COMMENTS:
        "플래시카드의 마지막 줄과 동일한 줄에 스케줄링 코멘트를 저장하시겠습니까?",
    INLINE_SCHEDULING_COMMENTS_DESC:
        "이 옵션을 사용하면 HTML 주석이 목록의 포매팅을 무너트리지 않습니다.",
    BURY_SIBLINGS_TILL_NEXT_DAY: "Sibling 카드를 다음날까지 묻어두시겠습니까?",
    BURY_SIBLINGS_TILL_NEXT_DAY_DESC:
        "Sibling 카드는 동일한 카드 텍스트에서 생성된 카드입니다. i.e. cloze deletions",
    SHOW_CARD_CONTEXT: "카드의 문맥(context)을 표시하시겠습니까?",
    SHOW_CARD_CONTEXT_DESC:
        "카드에서 'Title > Heading 1 > Subheading > ... > Subheading' 의 표시를 할지 설정합니다.",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS: "Show next review time in the review buttons",
    SHOW_INTERVAL_IN_REVIEW_BUTTONS_DESC:
        "Useful to know how far in the future your cards are being pushed.",
    CARD_MODAL_HEIGHT_PERCENT: "플래시카드 높이 비율",
    CARD_MODAL_SIZE_PERCENT_DESC:
        "모바일 버전 혹은 매우 큰 이미지가 있는 경우 100%로 설정해야 합니다.",
    RESET_DEFAULT: "기본값으로 초기화",
    CARD_MODAL_WIDTH_PERCENT: "플래시카드 너비 비율",
    RANDOMIZE_CARD_ORDER: "리뷰중인 카드의 순서를 랜덤으로 두시겠습니까?",
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
    DISABLE_CLOZE_CARDS: "빈 칸 채우기 카드를 비활성화하시겠습니까?",
    CONVERT_HIGHLIGHTS_TO_CLOZES: "==highlights== 를 빈 칸 채우기로 전환하시겠습니까?",
    CONVERT_BOLD_TEXT_TO_CLOZES: "**bolded text** 를 빈 칸 채우기로 전환하시겠습니까?",
    CONVERT_CURLY_BRACKETS_TO_CLOZES: "{{curly brackets}} 를 빈 칸 채우기로 전환하시겠습니까?",
    CLOZE_PATTERNS: "빈 칸 채우기 패턴",
    CLOZE_PATTERNS_DESC:
        '빈 칸 채우기 패턴을 입력해주세요. 줄바꿈으로 구분합니다. Check the <a href="${docsUrl}">wiki</a> for guidance.',
    INLINE_CARDS_SEPARATOR: "인라인 플래시카드 구분자",
    FIX_SEPARATORS_MANUALLY_WARNING:
        "주의: 이 옵션을 수정한 후에는 이미 작성된 플래시카드를 수동으로 수정해야 함을 주의하십시오.",
    INLINE_REVERSED_CARDS_SEPARATOR: "인라인 반전 플래시카드 구분자",
    MULTILINE_CARDS_SEPARATOR: "여러 줄 플래시카드 구분자",
    MULTILINE_REVERSED_CARDS_SEPARATOR: "여러 줄 반전 플래시카드 구분자",
    MULTILINE_CARDS_END_MARKER: "클로즈와 다중 행 플래시카드의 끝을 나타내는 문자",
    NOTES: "노트",
    NOTE: "Note",
    REVIEW_PANE_ON_STARTUP: "Enable note review pane on startup",
    TAGS_TO_REVIEW: "리뷰에 사용할 태그",
    TAGS_TO_REVIEW_DESC:
        "태그를 공백 또는 빈 줄로 구분해서 입력해주세요. 예) '#review #tag2 #tag3'",
    OPEN_RANDOM_NOTE: "리뷰를 위해 랜덤 노트를 엽니다.",
    OPEN_RANDOM_NOTE_DESC: "이 옵션이 꺼져있으면, 노트는 중요도(페이지 랭크)에 따라 정렬됩니다.",
    AUTO_NEXT_NOTE: "리뷰 후에 다음 노트를 자동으로 엽니다.",
    ENABLE_FILE_MENU_REVIEW_OPTIONS:
        "파일 메뉴에서 검토 옵션을 활성화하세요 (예: 검토: 쉬움, 좋음, 어려움)",
    ENABLE_FILE_MENU_REVIEW_OPTIONS_DESC:
        "파일 메뉴에서 검토 옵션을 비활성화하면 플러그인 명령을 사용해 노트를 검토할 수 있으며, 정의된 경우에는 관련된 단축키도 사용할 수 있습니다.",
    MAX_N_DAYS_REVIEW_QUEUE: "오른쪽 패널에 표시할 최대 일수",
    MIN_ONE_DAY: "적어도 1이상이어야 합니다.",
    VALID_NUMBER_WARNING: "유효한 숫자를 입력해주세요.",
    UI: "User Interface",
    SHOW_STATUS_BAR: "Show status bar",
    SHOW_STATUS_BAR_DESC:
        "Turn this off to hide the flashcard's review status in Obsidian's status bar",
    SHOW_RIBBON_ICON: "Show icon in the ribbon bar",
    SHOW_RIBBON_ICON_DESC: "Turn this off to hide the plugin icon from Obsidian's ribbon bar",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE: "덱 트리는 처음에 확장된 것으로 표시되어야 합니다.",
    INITIALLY_EXPAND_SUBDECKS_IN_TREE_DESC:
        "같은 카드에 중첩된 덱을 접으려면 이 옵션을 끄십시오. 같은 파일에 여러 덱에 속한 카드가 있는 경우 유용합니다.",
    ALGORITHM: "알고리즘",
    CHECK_ALGORITHM_WIKI:
        '더 많은 정보를 원하시면, <a href="${algoUrl}">algorithm details</a>을 확인해주세요.',
    SM2_OSR_VARIANT: "OSR's variant of SM-2",
    BASE_EASE: "기본 ease",
    BASE_EASE_DESC: "최솟값 = 130, 적정치는 대략 250입니다.",
    BASE_EASE_MIN_WARNING: "기본 ease는 적어도 130 이어야 합니다.",
    LAPSE_INTERVAL_CHANGE: "플래시카드/노트를 어려움(Hard)으로 리뷰했을 때의 간격 변경",
    LAPSE_INTERVAL_CHANGE_DESC: "새로운 간격 = 이전 간격 * 간격변경 값 / 100.",
    EASY_BONUS: "쉬움(Easy) 보너스",
    EASY_BONUS_DESC:
        "쉬움(Easy) 보너스는 플래시카드/노트에서 좋음(Good)과 쉬움(Easy) 사이의 간격 차이를 설정할 수 있습니다. (최소 = 100%)",
    EASY_BONUS_MIN_WARNING: "쉬움(Easy) 보너스는 적어도 100이어야 합니다.",
    LOAD_BALANCE: "Enable load balancer",
    LOAD_BALANCE_DESC: `Slightly tweaks the interval so that the number of reviews per day is more consistent.
        It's like Anki's fuzz but instead of being random, it picks the day with the least amount of reviews.
        It's turned off for small intervals.`,
    MAX_INTERVAL: "Maximum interval in days",
    MAX_INTERVAL_DESC: "간격의 상한선을 둘 수 있습니다. (기본값 = 100년)",
    MAX_INTERVAL_MIN_WARNING: "최대 간격은 적어도 1일이어야 합니다.",
    MAX_LINK_CONTRIB: "최대 연결 기여도",
    MAX_LINK_CONTRIB_DESC:
        "링크된 노트의 초기 ease에 대한 가중치가 적용된 ease의 최대 기여도입니다.",
    LOGGING: "로깅",
    DISPLAY_SCHEDULING_DEBUG_INFO: "디버깅 정보를 개발자 콘솔에 표시하시겠습니까",
    DISPLAY_PARSER_DEBUG_INFO: "Show the parser's debugging information on the developer console",
    SCHEDULING: "Scheduling",
    EXPERIMENTAL: "Experimental",
    HELP: "Help",
    STORE_IN_NOTES: "In the notes",

    // sidebar.ts
    NOTES_REVIEW_QUEUE: "리뷰할 노트 대기열",
    CLOSE: "닫기",
    NEW: "New",
    YESTERDAY: "어제",
    TODAY: "오늘",
    TOMORROW: "내일",

    // stats-modal.tsx
    STATS_TITLE: "통계",
    MONTH: "월",
    QUARTER: "분기",
    YEAR: "년",
    LIFETIME: "평생",
    FORECAST: "예측",
    FORECAST_DESC: "이후에 학습할 카드의 수",
    SCHEDULED: "Scheduled",
    DAYS: "일",
    NUMBER_OF_CARDS: "카드의 수",
    REVIEWS_PER_DAY: "평균: ${avg} 리뷰/일",
    INTERVALS: "간격",
    INTERVALS_DESC: "리뷰를 다시 할 때 까지의 기간",
    COUNT: "Count",
    INTERVALS_SUMMARY: "평균 간격: ${avg}, 가장 긴 간격: ${longest}",
    EASES: "Eases",
    EASES_SUMMARY: "Average ease: ${avgEase}",
    EASE: "Ease",
    CARD_TYPES: "카드 타입",
    CARD_TYPES_DESC: "여기에는 묻어둔 카드도 포함됩니다.",
    CARD_TYPE_NEW: "New",
    CARD_TYPE_YOUNG: "Young",
    CARD_TYPE_MATURE: "Mature",
    CARD_TYPES_SUMMARY: "전체 카드 수: ${totalCardsCount}",
    SEARCH: "Search",
    PREVIOUS: "Previous",
    NEXT: "Next",
};
