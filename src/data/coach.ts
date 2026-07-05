import type { CoachEntry } from "../types";

// The Coach is a fully on-device, private helper. It matches a learner's
// question to a curated answer using keywords (English + local terms). No data
// leaves the phone and no internet is required — this keeps it free, private and
// usable anywhere. It never pretends to be a person and always points learners
// back to their own thinking and to trusted human sources for serious matters.

export const COACH_ENTRIES: CoachEntry[] = [
  {
    id: "what-is-ai",
    keywords: ["what is ai", "ai mean", "artificial intelligence", "define ai", "ai nicinshi", "ai ndi chiyani", "ai ninzi"],
    question: {
      en: "What is AI?",
      bem: "AI nicinshi?",
      nya: "Kodi AI ndi chiyani?",
      toi: "AI ninzi?",
    },
    answer: {
      en: "AI (artificial intelligence) is software that learns patterns from many examples and uses them to make suggestions, guesses or decisions. It is a powerful tool — not a living being — and it is not always right. Think of it like a very fast helper that has read a lot but has no real-life experience or wisdom of its own.",
      bem: "AI (artificial intelligence) ni software iisambilila imipangile ukufuma ku fyabufwayo ifingi e lyo iibomfya ku kupanda amano, ukwelenganya, nangu ukusala. Cipe icakwete amaka — te ca mweo — kabili tacilungama lyonse. Cimoneka ngo mwafwilishi uwabwangu uwabelenga ifingi lelo uwabula amano ya bwikashi.",
      nya: "AI ndi pulogalamu yophunzira mapangidwe kuchokera ku zitsanzo zambiri ndipo imazigwiritsa ntchito kupereka malingaliro kapena zosankha. Ndi chida champhamvu — osati chamoyo — ndipo sichimakhala cholondola nthawi zonse.",
      toi: "AI mmulimo wiiya nzila kuzwa kuzikozyanyo zinji mpoona ubelesya kupa milayo naa kusala. Ncibelesyo cijisi nguzu — kutali cabuumi — alimwi tacili ncobeni lyoonse.",
    },
  },
  {
    id: "use-ai-phone",
    keywords: ["how use ai", "ai on phone", "use ai tool", "ai app", "chatbot", "assistant", "how to start ai"],
    question: {
      en: "How do I start using AI on my phone?",
      bem: "Ningatampa shani ukubomfya AI pa foni yandi?",
      nya: "Kodi ndingayambe bwanji kugwiritsa ntchito AI pa foni yanga?",
    },
    answer: {
      en: "Many AI assistants work through a normal web browser or a small app. To get a good answer, ask clearly: say who you want the AI to be, what you need, useful details, and the format (for example '5 short steps'). If the answer is not helpful, tell it what was wrong and ask again. See the course 'Using AI tools well' in Learn for step-by-step practice.",
      bem: "Abafwilishi ba AI abengi babomba ukupitila mu browser nangu app iyanono. Pa kukwata icasuko icawama, ipusha bwino: landa uwo ulefwaya AI abe, ico ulefwaya, ilyashi, ne fyo ulefwaya (ku ca kumwenako '5 short steps'). Nga icasuko tacawama, landa ico cabipe no kwipusha na kabili. Mona isambililo 'Ukubomfya ifipe fya AI bwino' mu Sambilila.",
    },
  },
  {
    id: "trust-ai",
    keywords: ["trust ai", "is ai correct", "ai wrong", "ai lie", "hallucination", "ai true", "believe ai"],
    question: {
      en: "Can I trust what AI tells me?",
      bem: "Bushe ningacetekela ifyo AI ilanda?",
      nya: "Kodi ndingakhulupirire zomwe AI imandiuza?",
    },
    answer: {
      en: "Not blindly. AI can sound very confident and still be wrong — it can even invent facts, names or sources (called a 'hallucination'). For anything important — health, money, legal or safety — always confirm with a trusted human or official source. You are the editor: AI can write a first draft, but your judgement decides what is true.",
      bem: "Te ukwabula ukumona. AI kuti yaomba ngeyalishiba lelo iyaba iyashilungeme — kuti yaipangila ifya cine, amashina, nangu ifyakwebekesha. Pa cintu conse icacindama — ubumi, indalama, ifya mafunde nangu ubulinda — shininkisha ku muntu uwacetekelwa. Niwe kapangamabuku: AI ilemba icakubalilapo, lelo amano yobe e yasala ica cine.",
    },
  },
  {
    id: "save-data",
    keywords: ["save data", "data expensive", "reduce data", "less data", "bundle", "cheap data", "data cost", "sunga data"],
    question: {
      en: "How can I save mobile data?",
      bem: "Ningasunga shani data ya pa foni?",
      nya: "Kodi ndingasunge bwanji data?",
    },
    answer: {
      en: "Download things once over Wi‑Fi and use them offline (this app works offline!). Turn off auto‑play videos and auto‑download in chat apps. Watch videos at lower quality (360p). Check settings > data usage to see which app uses the most, and limit its background data. Small habits make one bundle last much longer.",
      bem: "Downloada ifintu limo pa Wi‑Fi no kubomfya ukwabula intaneti (app iyi ilabomba ukwabula intaneti!). Ushako auto‑play videos na auto‑download mu ma‑app ya kulanshanya. Tamba amavidiyo pa quality iyanono (360p). Ceba settings > data usage umone app iibomfya sana. Imicitile inono ilenga bundle ishale panono.",
    },
  },
  {
    id: "scam-safety",
    keywords: ["scam", "fraud", "pin", "stolen", "phishing", "fake message", "safe online", "password", "bupupu", "security"],
    question: {
      en: "How do I stay safe from scams?",
      bem: "Ningaicingilila shani ku bupupu?",
      nya: "Kodi ndingadziteteze bwanji ku zachinyengo?",
    },
    answer: {
      en: "Never share your mobile‑money PIN or one‑time code with anyone — real companies never ask for it. Be suspicious of messages that rush you or scare you; that pressure is the warning sign. Use a strong screen lock and different passwords for important accounts. AI can now write very convincing fake messages and voices, so verify surprising requests through a second channel you already know before acting.",
      bem: "Wilaaba PIN ya mobile‑money nangu koodi ya kabili ku muntu onse — amakampani ya cine tayalomba. Twishika ubukalata ubulekupatikisha nangu ukumutinya; uko kupatikisha e cishibilo. Bomfya screen lock iyakosa na ma password ayapusana ku ma akaunti ayacindama. AI nomba kuta yalemba ubukalata na mashiwi ya bufi ayacetekela, kanshi shininkisha ifipusho ifyakupapusha ukupitila mu nshila imbi.",
    },
  },
  {
    id: "learn-not-copy",
    keywords: ["copy", "homework", "cheat", "learn better", "study with ai", "creativity", "think myself", "independent"],
    question: {
      en: "If AI can answer everything, why should I learn?",
      bem: "Nga AI ingasuka fyonse, mulandu nshi nifwile ukusambilila?",
      nya: "Ngati AI ingayankhe zonse, chifukwa chiyani ndiphunzire?",
    },
    answer: {
      en: "Because the goal is for YOUR mind to grow. If you copy without understanding, you stay dependent and your skills never build — and you will not be able to check when AI is wrong. Use AI as a study partner: try the work yourself first, then ask AI to explain or check it. The struggle of thinking is exactly where real learning and creativity happen.",
      bem: "Pantu ubuyo kukula kwa muntontonkanyo WOBE. Nga wakopolola ukwabula ukumfwikisha, uba uwatungililwa kabili amano yobe tayakula — kabili tawakalekwanisha ukuceba ilyo AI yalufyanya. Bomfya AI ngo munobe wa kusambilila: yesha intanshi, e lyo wipushe AI ku kulondolola. Ubwafya bwa kutontonkanya e uko ukusambilila kwa cine kuba.",
    },
  },
  {
    id: "no-internet",
    keywords: ["no internet", "offline", "connection", "network", "data finished", "without internet", "kwabula intaneti"],
    question: {
      en: "What can I do with no internet?",
      bem: "Cinshi ningacita ukwabula intaneti?",
      nya: "Kodi ndingachite chiyani popanda intaneti?",
    },
    answer: {
      en: "A lot! Chipego AI is built to work offline. Once the app has loaded, all the lessons, the Coach, and the Connect resources keep working with no data at all. Learn while offline, then use data or Wi‑Fi only when you specifically need to try an online AI tool. Check the Connect page for free and low‑cost places to get online near you.",
      bem: "Ifingi! Chipego AI yapangilwa ukubomba ukwabula intaneti. Nga app yaingila kale, amasambililo yonse, Kafundisha, ne fya pa Connect fitwalilila ukubomba ukwabula data. Sambilila ukwabula intaneti, e lyo ubomfye data nangu Wi‑Fi fye lintu ulefwaya ukwesha icipe ca AI ca pa intaneti. Mona ipeji lya Connect ku fifulo ifya waca ne fya mutengo unono.",
    },
  },
  {
    id: "find-work",
    keywords: ["job", "work", "money", "income", "earn", "employment", "business", "opportunity", "hustle", "incito"],
    question: {
      en: "Can AI help me find work or earn money?",
      bem: "Bushe AI ingamwafwa ukufwaya incito nangu ukwaula indalama?",
      nya: "Kodi AI ingandithandize kupeza ntchito kapena kupeza ndalama?",
    },
    answer: {
      en: "Yes, as a helper. AI can suggest kinds of work that fit your skills, explain what an opportunity needs, and help you draft a CV or messages in clear language. But it cannot replace your network and effort — verify real openings through people you trust locally. Start with the course 'AI for opportunity' in Learn. Remember: keep every word in your CV honest and truly yours.",
      bem: "Ee, ngo mwafwilishi. AI kuti yapanda incito iyalingana na mano yobe, ilondolole ico imwenso ifwaya, no kumwafwa ukulemba CV nangu ubukalata mu mashiwi ayaumfwika. Lelo tekuti ipyane abantu obe ne fyo ubombesha — shininkisha incito sha cine ku bantu abo wacetekela. Tampa ne sambililo 'AI ku mwenso wa ntanshi' mu Sambilila.",
    },
  },
  {
    id: "local-language",
    keywords: ["language", "bemba", "nyanja", "tonga", "translate", "my language", "local", "lulimi", "chinenero"],
    question: {
      en: "Can I use this in my own language?",
      bem: "Bushe ningabomfya ici mu lulimi lwandi?",
      nya: "Kodi ndingagwiritse ntchito ichi mu chinenero changa?",
    },
    answer: {
      en: "Yes. Tap the language button at the top to switch between English, Bemba (Ichibemba), Nyanja (Chinyanja) and Tonga (Chitonga). Some lesson details are still being translated by the community and will show in English until then. If you speak one of these languages well, you can help improve the translations — see the project README.",
      bem: "Ee. Konkonsha pa buto lya lulimi pa mulu ku kupilibula pakati pa Cishilishi, Ichibemba, Chinyanja na Chitonga. Ifimo mu masambililo ficili filepilibulwa kabili fikamoneka mu Cishilishi. Nga walanda bwino ulimi umo, kuti wayafwa ukuwamya ukupilibula.",
    },
  },
  {
    id: "get-online",
    keywords: ["get online", "free wifi", "internet access", "where internet", "connect", "hotspot", "library"],
    question: {
      en: "Where can I get online for free or cheaply?",
      bem: "Kwi ningengila pa intaneti apa waca nangu pa mutengo unono?",
      nya: "Kodi ndingapeze kuti intaneti yaulere kapena yotchipa?",
    },
    answer: {
      en: "Check the Connect page in this app. It lists community libraries, telecentres, schools and NGO hubs across Zambia that offer free or low‑cost internet and computer access, plus a helpline. Public libraries and telecentres are often the most affordable places to get online and to practise your new skills.",
      bem: "Ceba ipeji lya Connect muli iyi app. Lilanga amaraibulari ya mushi, ama telecentre, amasukulu ne fifulo fya ma NGO mu Zambia ifipeela intaneti iya waca nangu iya mutengo unono. Amaraibulari ya baume ne ma telecentre e fifulo ifingi ifya mutengo unono ku kwingila pa intaneti.",
    },
  },
];
