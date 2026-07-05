import type { LangCode } from "../types";

// Interface strings. Translations for Bemba (bem), Nyanja (nya) and Tonga (toi)
// are community-reviewable — see CONTRIBUTING notes in the README. English is the
// source of truth; any missing key falls back to English at runtime.
export type UIKey =
  | "app.name"
  | "app.tagline"
  | "nav.home"
  | "nav.learn"
  | "nav.coach"
  | "nav.connect"
  | "nav.progress"
  | "nav.about"
  | "home.hero.title"
  | "home.hero.subtitle"
  | "home.hero.cta"
  | "home.hero.coach"
  | "home.mission.title"
  | "home.mission.body"
  | "home.pillars.title"
  | "home.continue"
  | "home.offlineBadge"
  | "home.startHere"
  | "learn.title"
  | "learn.subtitle"
  | "learn.allLevels"
  | "learn.lessons"
  | "learn.minutes"
  | "learn.start"
  | "learn.continue"
  | "learn.completed"
  | "learn.outcomes"
  | "course.back"
  | "course.lessonList"
  | "course.progress"
  | "lesson.back"
  | "lesson.tip"
  | "lesson.practice"
  | "lesson.quiz"
  | "lesson.check"
  | "lesson.correct"
  | "lesson.tryAgain"
  | "lesson.next"
  | "lesson.finish"
  | "lesson.markDone"
  | "lesson.done"
  | "coach.title"
  | "coach.subtitle"
  | "coach.placeholder"
  | "coach.ask"
  | "coach.suggested"
  | "coach.empty"
  | "coach.noMatch"
  | "coach.offlineNote"
  | "connect.title"
  | "connect.subtitle"
  | "connect.hubs"
  | "connect.datasaver"
  | "connect.free"
  | "connect.lowcost"
  | "connect.filterAll"
  | "progress.title"
  | "progress.subtitle"
  | "progress.lessonsDone"
  | "progress.coursesDone"
  | "progress.streak"
  | "progress.badges"
  | "progress.noBadges"
  | "progress.reset"
  | "progress.resetConfirm"
  | "about.title"
  | "nav.review"
  | "review.title"
  | "review.subtitle"
  | "review.intro"
  | "review.pickLang"
  | "review.coverage"
  | "review.translated"
  | "review.missing"
  | "review.reviewed"
  | "review.filterMissing"
  | "review.filterAll"
  | "review.filterMine"
  | "review.source"
  | "review.current"
  | "review.notTranslated"
  | "review.yourSuggestion"
  | "review.suggestionPlaceholder"
  | "review.saved"
  | "review.export"
  | "review.exportHint"
  | "review.copy"
  | "review.copied"
  | "review.clear"
  | "review.clearConfirm"
  | "review.search"
  | "review.noResults"
  | "review.thanks"
  | "review.enOnly"
  | "review.cta"
  | "settings.language"
  | "settings.dataSaver"
  | "settings.dataSaverHint"
  | "common.min"
  | "common.of"
  | "common.free"
  | "footer.builtWith";

type Dict = Record<UIKey, string>;

const en: Dict = {
  "app.name": "Chipego AI",
  "app.tagline": "AI skills for every young Zambian",
  "nav.home": "Home",
  "nav.learn": "Learn",
  "nav.coach": "Coach",
  "nav.connect": "Connect",
  "nav.progress": "Progress",
  "nav.about": "About",
  "home.hero.title": "Learn AI in your language. Even offline.",
  "home.hero.subtitle":
    "Free, practical AI and digital skills built for and with young people in under-resourced communities across Zambia.",
  "home.hero.cta": "Start learning",
  "home.hero.coach": "Ask the Coach",
  "home.mission.title": "Why Chipego AI",
  "home.mission.body":
    "Too many young Zambians are being left out of the digital economy because of cost, connectivity and language. Chipego AI turns AI into a tool for empowerment — not exclusion — so no young person becomes invisible.",
  "home.pillars.title": "What makes it work for you",
  "home.continue": "Keep going",
  "home.offlineBadge": "Works offline",
  "home.startHere": "New here? Start here",
  "learn.title": "Learn",
  "learn.subtitle": "Short lessons you can finish on a small phone, with no data.",
  "learn.allLevels": "All levels",
  "learn.lessons": "lessons",
  "learn.minutes": "min",
  "learn.start": "Start",
  "learn.continue": "Continue",
  "learn.completed": "Completed",
  "learn.outcomes": "You will be able to",
  "course.back": "All courses",
  "course.lessonList": "Lessons",
  "course.progress": "Course progress",
  "lesson.back": "Back to course",
  "lesson.tip": "Tip",
  "lesson.practice": "Try it yourself",
  "lesson.quiz": "Quick check",
  "lesson.check": "Check answer",
  "lesson.correct": "Correct!",
  "lesson.tryAgain": "Not quite — try again.",
  "lesson.next": "Next lesson",
  "lesson.finish": "Finish course",
  "lesson.markDone": "Mark lesson as done",
  "lesson.done": "Lesson done",
  "coach.title": "AI Coach",
  "coach.subtitle": "A private helper that runs on your phone. No internet needed.",
  "coach.placeholder": "Ask about AI, phones, jobs, safety…",
  "coach.ask": "Ask",
  "coach.suggested": "Try asking",
  "coach.empty": "Ask a question to get started. Your questions never leave this phone.",
  "coach.noMatch":
    "I don't have a saved answer for that yet. Try the suggested questions, or explore the lessons in Learn.",
  "coach.offlineNote": "Runs fully on-device • private • no data used",
  "connect.title": "Connect",
  "connect.subtitle": "Free and low-cost places to get online, plus tips to save data.",
  "connect.hubs": "Access points",
  "connect.datasaver": "Save your data",
  "connect.free": "Free",
  "connect.lowcost": "Low cost",
  "connect.filterAll": "All",
  "progress.title": "Your progress",
  "progress.subtitle": "Everything is saved on your phone.",
  "progress.lessonsDone": "Lessons done",
  "progress.coursesDone": "Courses finished",
  "progress.streak": "Day streak",
  "progress.badges": "Badges",
  "progress.noBadges": "Finish a lesson to earn your first badge.",
  "progress.reset": "Reset progress",
  "progress.resetConfirm": "Reset all your progress on this phone?",
  "about.title": "About",
  "nav.review": "Help translate",
  "review.title": "Help improve translations",
  "review.subtitle": "This platform is meant to be shaped by young Zambians. If you speak Bemba, Nyanja or Tonga, your review makes it better for everyone.",
  "review.intro":
    "English is the source. Other languages start as community drafts that need native-speaker review. Pick a language, fix or add translations, then export your suggestions to share with the maintainers.",
  "review.pickLang": "Language to review",
  "review.coverage": "Coverage",
  "review.translated": "translated",
  "review.missing": "Missing translation",
  "review.reviewed": "Community draft — needs review",
  "review.filterMissing": "Needs translation",
  "review.filterAll": "All",
  "review.filterMine": "My suggestions",
  "review.source": "English (source)",
  "review.current": "Current",
  "review.notTranslated": "Not yet translated — shows English",
  "review.yourSuggestion": "Your suggestion",
  "review.suggestionPlaceholder": "Type a better translation…",
  "review.saved": "Saved on this phone",
  "review.export": "Export my suggestions",
  "review.exportHint": "Copy this and send it to the project maintainers (e.g. paste into a GitHub issue or message).",
  "review.copy": "Copy",
  "review.copied": "Copied!",
  "review.clear": "Clear my suggestions",
  "review.clearConfirm": "Delete all your saved suggestions for this language?",
  "review.search": "Search text…",
  "review.noResults": "Nothing matches your filter.",
  "review.thanks": "Thank you — every correction helps a young person learn in their own language.",
  "review.enOnly": "English is the source language, so there is nothing to review here. Pick Bemba, Nyanja or Tonga.",
  "review.cta": "Help translate",
  "settings.language": "Language",
  "settings.dataSaver": "Data saver",
  "settings.dataSaverHint": "Hide images and heavy elements",
  "common.min": "min",
  "common.of": "of",
  "common.free": "Free",
  "footer.builtWith": "Built for and shaped by young people in Zambia.",
};

const bem: Partial<Dict> = {
  "app.tagline": "Amano ya AI ku bacaice bonse aba mu Zambia",
  "nav.home": " Apa ng'anda",
  "nav.learn": "Sambilila",
  "nav.coach": "Kafundisha",
  "nav.connect": "Kumana",
  "nav.progress": "Ifyo waendako",
  "nav.about": "Pali ifi",
  "home.hero.title": "Sambilila AI mu lulimi lobe. Nangu ukwabula intaneti.",
  "home.hero.subtitle":
    "Amano ya AI na ya digitali aya bufwayo, aya bwafya, ayapangilwa ku bacaice aba mu fifulo ifyabula ifipe mu Zambia.",
  "home.hero.cta": "Tampa ukusambilila",
  "home.hero.coach": "Ipusha Kafundisha",
  "home.mission.title": "Mulandu nshi Chipego AI",
  "home.mission.body":
    "Abacaice abengi mu Zambia balesheelwa mu digitali pa mulandu wa ndalama, intaneti na ululimi. Chipego AI ipilibula AI ukuba icipe ca kukoshako — te kutamfya — pakuti takuli umwaice uwingaba uwabula ukumonwa.",
  "home.pillars.title": "Ifilenga cibombele kuli imwe",
  "home.continue": "Twalililako",
  "home.offlineBadge": "Cibomba nangu kwabula intaneti",
  "home.startHere": "Muno mupya? Tampeni pano",
  "learn.title": "Sambilila",
  "learn.subtitle": "Amasambililo ayaipi ayo mwingapwisha pa foni inono, ukwabula data.",
  "learn.allLevels": "Amabuku yonse",
  "learn.lessons": "amasambililo",
  "learn.minutes": "miniti",
  "learn.start": "Tampa",
  "learn.continue": "Twalilila",
  "learn.completed": "Napwa",
  "learn.outcomes": "Mukakwanisha",
  "course.back": "Amasambililo yonse",
  "course.lessonList": "Amasambililo",
  "course.progress": "Ifyo isambililo lyaendako",
  "lesson.back": "Bwelela ku sambililo",
  "lesson.tip": "Ukupanda amano",
  "lesson.practice": "Yeseni mwe bene",
  "lesson.quiz": "Ukwesha kwangufyanya",
  "lesson.check": "Ceba icasuko",
  "lesson.correct": "Calungama!",
  "lesson.tryAgain": "Tacilalungama — yeseni na kabili.",
  "lesson.next": "Isambililo lyakonkapo",
  "lesson.finish": "Pwisha isambililo",
  "lesson.markDone": "Lemba ati isambililo lyapwa",
  "lesson.done": "Isambililo lyapwa",
  "coach.title": "Kafundisha wa AI",
  "coach.subtitle": "Umwafwilishi uwa nkama uubomba pa foni yobe. Tapafwaikwa intaneti.",
  "coach.placeholder": "Ipusha pali AI, mafoni, incito, ubulinda…",
  "coach.ask": "Ipusha",
  "coach.suggested": "Yesha ukwipusha",
  "coach.empty": "Ipusha icipusho pa kutampa. Ifipusho fyobe tafifuma pa foni iyi.",
  "coach.noMatch":
    "Nshikwete icasuko pali cilya nomba. Yesha ifipusho ifyapandwa, nangu uk'sambilila mu Sambilila.",
  "coach.offlineNote": "Cibomba conse pa foni • ca nkama • tapabomba data",
  "connect.title": "Kumana",
  "connect.subtitle": "Ififulo ifya waca ne fya mutengo unono ifya kwingila pa intaneti, ne fya kusunga data.",
  "connect.hubs": "Ififulo fya kwingila",
  "connect.datasaver": "Sunga data yobe",
  "connect.free": "Ica waca",
  "connect.lowcost": "Umutengo unono",
  "connect.filterAll": "Fyonse",
  "progress.title": "Ifyo waendako",
  "progress.subtitle": "Fyonse fyasungwa pa foni yobe.",
  "progress.lessonsDone": "Amasambililo yapwa",
  "progress.coursesDone": "Amasambililo yakalamba yapwa",
  "progress.streak": "Inshiku shakonkana",
  "progress.badges": "Amabaji",
  "progress.noBadges": "Pwisha isambililo pa kukwata ibaji lyobe lyakubalilapo.",
  "progress.reset": "Fumyapo fyonse",
  "progress.resetConfirm": "Fumyapo fyonse ifyo waendako pa foni iyi?",
  "about.title": "Pali ifi",
  "nav.review": "Afwako ukupilibula",
  "review.cta": "Afwako ukupilibula",
  "review.title": "Afwako ukuwamya ukupilibula",
  "settings.language": "Ululimi",
  "settings.dataSaver": "Ukusunga data",
  "settings.dataSaverHint": "Fisa ifikope ne fintu ifyafina",
  "common.min": "miniti",
  "common.of": "pa",
  "common.free": "Ica waca",
  "footer.builtWith": "Capangilwa kabili capangwa na bacaice mu Zambia.",
};

const nya: Partial<Dict> = {
  "app.tagline": "Luso lwa AI kwa achinyamata onse a mu Zambia",
  "nav.home": "Kunyumba",
  "nav.learn": "Phunzira",
  "nav.coach": "Mphunzitsi",
  "nav.connect": "Lumikizana",
  "nav.progress": "Mmene mukuyendera",
  "nav.about": "Za ife",
  "home.hero.title": "Phunzira AI mu chinenero chako. Ngakhale popanda intaneti.",
  "home.hero.subtitle":
    "Luso la AI ndi la digito laulere, lothandiza, lopangidwa kwa achinyamata a m'madera osauka mu Zambia.",
  "home.hero.cta": "Yambani kuphunzira",
  "home.hero.coach": "Funsani Mphunzitsi",
  "home.mission.title": "Chifukwa chiyani Chipego AI",
  "home.mission.body":
    "Achinyamata ambiri a mu Zambia akusiyidwa m'chuma cha digito chifukwa cha mtengo, intaneti ndi chinenero. Chipego AI ikusintha AI kukhala chida cholimbikitsa — osati chotsekereza — kuti palibe wachinyamata amene angakhale wosaoneka.",
  "home.pillars.title": "Zomwe zimapangitsa kuti zigwire ntchito kwa inu",
  "home.continue": "Pitirizani",
  "home.offlineBadge": "Imagwira popanda intaneti",
  "home.startHere": "Mwatsopano kuno? Yambani pano",
  "learn.title": "Phunzira",
  "learn.subtitle": "Maphunziro afupi omwe mungamalize pa foni yaing'ono, popanda data.",
  "learn.allLevels": "Magulu onse",
  "learn.lessons": "maphunziro",
  "learn.minutes": "mphindi",
  "learn.start": "Yambani",
  "learn.continue": "Pitirizani",
  "learn.completed": "Zamalizidwa",
  "learn.outcomes": "Mudzatha",
  "course.back": "Maphunziro onse",
  "course.lessonList": "Maphunziro",
  "course.progress": "Mmene phunziro likuyendera",
  "lesson.back": "Bwererani ku phunziro",
  "lesson.tip": "Malangizo",
  "lesson.practice": "Yesani nokha",
  "lesson.quiz": "Kuyesa kwachangu",
  "lesson.check": "Onani yankho",
  "lesson.correct": "Zolondola!",
  "lesson.tryAgain": "Sizolondola — yesaninso.",
  "lesson.next": "Phunziro lotsatira",
  "lesson.finish": "Malizani phunziro",
  "lesson.markDone": "Lembani kuti phunziro lamalizidwa",
  "lesson.done": "Phunziro lamalizidwa",
  "coach.title": "Mphunzitsi wa AI",
  "coach.subtitle": "Wothandiza wachinsinsi amene amagwira pa foni yanu. Palibe intaneti yofunika.",
  "coach.placeholder": "Funsani za AI, mafoni, ntchito, chitetezo…",
  "coach.ask": "Funsani",
  "coach.suggested": "Yesani kufunsa",
  "coach.empty": "Funsani funso kuti muyambe. Mafunso anu satuluka pa foni iyi.",
  "coach.noMatch":
    "Ndilibe yankho losungidwa pa zimenezo pakadali pano. Yesani mafunso operekedwa, kapena onani maphunziro mu Phunzira.",
  "coach.offlineNote": "Imagwira yonse pa foni • yachinsinsi • palibe data",
  "connect.title": "Lumikizana",
  "connect.subtitle": "Malo aulere ndi otchipa opezekera intaneti, ndi malangizo osungira data.",
  "connect.hubs": "Malo olowera",
  "connect.datasaver": "Sungani data yanu",
  "connect.free": "Zaulere",
  "connect.lowcost": "Mtengo wotsika",
  "connect.filterAll": "Zonse",
  "progress.title": "Mmene mukuyendera",
  "progress.subtitle": "Zonse zasungidwa pa foni yanu.",
  "progress.lessonsDone": "Maphunziro omalizidwa",
  "progress.coursesDone": "Maphunziro akulu omalizidwa",
  "progress.streak": "Masiku olumikizana",
  "progress.badges": "Mabaji",
  "progress.noBadges": "Malizani phunziro kuti mupeze baji yanu yoyamba.",
  "progress.reset": "Chotsani zonse",
  "progress.resetConfirm": "Chotsani zonse zomwe mwachita pa foni iyi?",
  "about.title": "Za ife",
  "nav.review": "Thandizani kumasulira",
  "review.cta": "Thandizani kumasulira",
  "review.title": "Thandizani kukonza kumasulira",
  "settings.language": "Chinenero",
  "settings.dataSaver": "Kusunga data",
  "settings.dataSaverHint": "Bisani zithunzi ndi zinthu zolemera",
  "common.min": "mphindi",
  "common.of": "pa",
  "common.free": "Zaulere",
  "footer.builtWith": "Zopangidwa ndi kupangidwa ndi achinyamata a mu Zambia.",
};

const toi: Partial<Dict> = {
  "app.tagline": "Luzibo lwa AI kubana boonse ba mu Zambia",
  "nav.home": "Kuŋanda",
  "nav.learn": "Iya",
  "nav.coach": "Mwiiyi",
  "nav.connect": "Swaangana",
  "nav.progress": "Mbuli mboya kunembo",
  "nav.about": "Atwiini",
  "home.hero.title": "Iya AI mumwaambo wako. Nikuba kakunyina intaneti.",
  "home.hero.subtitle":
    "Luzibo lwa AI alwa digito lwabuyo, luligwasya, lupangidwe kubana ba muzisi zitajisi zintu mu Zambia.",
  "home.hero.cta": "Talika kwiiya",
  "home.hero.coach": "Buzya Mwiiyi",
  "home.mission.title": "Nkaambo nzi Chipego AI",
  "home.mission.body":
    "Bana banji ba mu Zambia balasiigwa mubuvubi bwa digito akaambo kamuulo, intaneti amwaambo. Chipego AI ilasandula AI kuti ibe cintu cigwasya — kutali cikasya — kutegwa kutabi mwana uutalibonyi.",
  "home.pillars.title": "Zicita kuti zibeleke kulinduwe",
  "home.continue": "Zumanana",
  "home.offlineBadge": "Ilabeleka kakunyina intaneti",
  "home.startHere": "Mupya kuno? Talika ano",
  "learn.title": "Iya",
  "learn.subtitle": "Ziiyo zifwiifwi nzomukonzya kumanizya afoni niini, kakunyina data.",
  "learn.allLevels": "Mazuba oonse",
  "learn.lessons": "ziiyo",
  "learn.minutes": "miniti",
  "learn.start": "Talika",
  "learn.continue": "Zumanana",
  "learn.completed": "Zyamana",
  "learn.outcomes": "Muyoocikonzya",
  "course.back": "Ziiyo zyoonse",
  "course.lessonList": "Ziiyo",
  "course.progress": "Mbuli ciiyo mboceenda",
  "lesson.back": "Piluka kuciiyo",
  "lesson.tip": "Lulayo",
  "lesson.practice": "Sola nolikke",
  "lesson.quiz": "Kusunka kufwambaana",
  "lesson.check": "Langa insandulo",
  "lesson.correct": "Ncobeni!",
  "lesson.tryAgain": "Tacili cini — sola alimwi.",
  "lesson.next": "Ciiyo citobela",
  "lesson.finish": "Manizya ciiyo",
  "lesson.markDone": "Lemba kuti ciiyo cyamana",
  "lesson.done": "Ciiyo cyamana",
  "coach.title": "Mwiiyi wa AI",
  "coach.subtitle": "Sikugwasya uusisikene uubeleka afoni yako. Kunyina intaneti iyandika.",
  "coach.placeholder": "Buzya atala a AI, mafoni, milimo, lukwabililo…",
  "coach.ask": "Buzya",
  "coach.suggested": "Sola kubuzya",
  "coach.empty": "Buzya mubuzyo kutegwa utalike. Mibuzyo yako tiizwi afoni eeyi.",
  "coach.noMatch":
    "Nsijisi insandulo iiyobwedwe atala anceeco lino. Sola mibuzyo iipedwe, naa langa ziiyo mu Iya.",
  "coach.offlineNote": "Ilabeleka yoonse afoni • yasisikene • kunyina data lubelesegwa",
  "connect.title": "Swaangana",
  "connect.subtitle": "Masena aabuyo aajisi muulo munini aakunjila intaneti, alulayo lwakuyobola data.",
  "connect.hubs": "Masena aakunjila",
  "connect.datasaver": "Yobola data yako",
  "connect.free": "Cabuyo",
  "connect.lowcost": "Muulo munini",
  "connect.filterAll": "Zyoonse",
  "progress.title": "Mbuli mboya kunembo",
  "progress.subtitle": "Zyoonse zilayobwedwe afoni yako.",
  "progress.lessonsDone": "Ziiyo zyamana",
  "progress.coursesDone": "Ziiyo zipati zyamana",
  "progress.streak": "Mazuba aatobelene",
  "progress.badges": "Mabbeji",
  "progress.noBadges": "Manizya ciiyo kutegwa ujane bbeji lyako lyakusaanguna.",
  "progress.reset": "Gwisya zyoonse",
  "progress.resetConfirm": "Gwisya zyoonse nzwakacita afoni eeyi?",
  "about.title": "Atwiini",
  "nav.review": "Gwasya kusandulula",
  "review.cta": "Gwasya kusandulula",
  "review.title": "Gwasya kubotya kusandulula",
  "settings.language": "Mwaambo",
  "settings.dataSaver": "Kuyobola data",
  "settings.dataSaverHint": "Sisa zifwanikiso azintu zilemu",
  "common.min": "miniti",
  "common.of": "mu",
  "common.free": "Cabuyo",
  "footer.builtWith": "Cyakapangwa alimwi cyakapangidwe abana ba mu Zambia.",
};

export const UI_STRINGS: Record<LangCode, Partial<Dict>> = {
  en,
  bem,
  nya,
  toi,
};

export function uiString(lang: LangCode, key: UIKey): string {
  return UI_STRINGS[lang]?.[key] ?? en[key];
}
