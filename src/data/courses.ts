import type { Course } from "../types";

// Curriculum for Track 1: expanding access to AI tools, infrastructure and
// skills. Lessons are short, plain-language and designed to build practical
// skill and confidence WITHOUT replacing a learner's own creativity or
// independent thinking. English is the source language; the most-used strings
// (titles, summaries, outcomes, quizzes) are translated into Bemba, Nyanja and
// Tonga. Lesson bodies fall back to English where a translation is not yet
// contributed.

export const COURSES: Course[] = [
  {
    id: "ai-basics",
    icon: "spark",
    level: "foundation",
    title: {
      en: "Understanding AI in everyday life",
      bem: "Ukumfwa AI mu bwikashi bwa cila bushiku",
      nya: "Kumvetsa AI pa moyo wa tsiku ndi tsiku",
      toi: "Kumvwa AI mubuumi bwabuzuba abuzuba",
    },
    summary: {
      en: "What AI really is, where you already meet it, and how to think clearly about its promise and its risks.",
      bem: "Ico AI cine cine ciba, uko mwakumana naco kale, ne fyakutontonkanya bwino pa fisuma ne fyakofya.",
      nya: "Kuti AI ndi chiyani, komwe mumakumana nayo kale, ndi mmene mungaganizire mozama za ubwino ndi zoopsa zake.",
      toi: "AI ncibeenzi, ooko nkomwakonzya kuswaangana anguwo kale, ambomukonzya kuyeeya kabotu atala azibotu azintu ziyoosya.",
    },
    outcomes: [
      {
        en: "Explain what AI is in your own words",
        bem: "Ukulondolola ico AI ciba mu mashiwi yenu",
        nya: "Kufotokoza kuti AI ndi chiyani m'mawu anu",
        toi: "Kupandulula AI ncibeenzi mumajwi aako",
      },
      {
        en: "Spot AI already working in your phone and community",
        bem: "Ukwishiba AI iilebomba kale mu foni yenu na mu mushi",
        nya: "Kuzindikira AI yomwe ikugwira kale ntchito mu foni ndi dera lanu",
        toi: "Kuzyiba AI iibeleka kale mufoni yako amucisi",
      },
      {
        en: "Judge when to trust AI and when to think for yourself",
        bem: "Ukwishiba lintu wingacetekela AI ne lintu wingatontonkanya we mwine",
        nya: "Kudziwa nthawi yokhulupirira AI ndi nthawi yoganiza wekha",
        toi: "Kuzyiba ciindi cakusyoma AI aciindi cakuliyeeyela nolikke",
      },
    ],
    lessons: [
      {
        id: "what-is-ai",
        minutes: 6,
        title: {
          en: "What is AI?",
          bem: "AI nicinshi?",
          nya: "Kodi AI ndi chiyani?",
          toi: "AI ninzi?",
        },
        blocks: [
          {
            type: "text",
            value: {
              en: "AI, or artificial intelligence, is computer software that learns patterns from lots of examples and then uses those patterns to make guesses, suggestions or decisions.",
              bem: "AI, nangu artificial intelligence, ni software ya pa kompyuta iisambilila imipangile ukufuma ku fyabufwayo ifingi, e lyo iibomfya iyo mipangile ku kupanga amatontonkanyo, ifyakupandaula, nangu ukusala.",
              nya: "AI, kapena luntha lopangidwa, ndi pulogalamu ya pa kompyuta yomwe imaphunzira mapangidwe kuchokera ku zitsanzo zambiri kenako imagwiritsa ntchito mapangidwewo kuti ipange maganizo, malingaliro, kapena zosankha.",
              toi: "AI, naa luzibo lupangidwe, mmulimo wapakompyuta uuya kwiiya nzila kuzwa kuzikozyanyo zinji mpoona ubelesya nzila eezyo kupanga miyeeyo, milayo, naa kusala.",
            },
          },
          {
            type: "text",
            value: {
              en: "It is not a robot with feelings, and it does not 'know' things the way a person does. It is very good at finding patterns, but it has no life experience and no wisdom of its own.",
              bem: "Te robot iyakwete inkumbu, kabili tayishiba ifintu ngefyo umuntu eshiba. Ilicibwenge sana pa kusanga imipangile, lelo tayakwata amano ya bwikashi nangu mano yakwe iine.",
            },
          },
          {
            type: "heading",
            value: { en: "A simple picture", nya: "Chithunzi chosavuta" },
          },
          {
            type: "text",
            value: {
              en: "Imagine showing a child thousands of photos of maize and beans until they can tell them apart. AI learns in a similar way — from examples — but with numbers instead of understanding.",
              bem: "Elenganyeni ukulanga umwana amakope ayengi aya mataba ne cilemba mpaka aishibe ukupusanya. AI isambilila muli iyi nshila — ukufuma ku fyabufwayo — lelo na manamba ukucila ukumfwikisha.",
            },
          },
          {
            type: "tip",
            value: {
              en: "AI is a tool, like a hoe or a phone. A tool is only as good — or as harmful — as the way we choose to use it.",
              bem: "AI cipe, ngefumbwe nangu foni. Icipe ciba icisuma — nangu icabipa — ukulingana ne nshila iyo twaisalila ukubomfya.",
              nya: "AI ndi chida, ngati khasu kapena foni. Chida ndi chabwino — kapena choyipa — malinga ndi mmene tasankhira kuchigwiritsa ntchito.",
              toi: "AI ncibelesyo, mbuli jamba naa foni. Cibelesyo cibotu — naa cibi — mbuli mbotusala kucibelesya.",
            },
          },
        ],
        practice: {
          en: "Look at your phone. Name three things on it that might use AI (for example: predictive text, photo effects, video suggestions). You do not need internet to think about this.",
          bem: "Langa foni yobe. Luminta ifintu fitatu ifingabomfya AI (ku ca kumwenako: amashiwi ayasokolola, ifikope, ifyakupandaula ifya mavidiyo). Tamufwaya intaneti ku kutontonkanya pali ici.",
          nya: "Yang'anani foni yanu. Tchulani zinthu zitatu zomwe zingagwiritse ntchito AI (mwachitsanzo: mawu olosera, zithunzi, malingaliro a makanema). Simufuna intaneti kuti muganizire za ichi.",
        },
        quiz: [
          {
            id: "q1",
            prompt: {
              en: "Which sentence describes AI best?",
              bem: "Lishiwi nshi lilondolola bwino AI?",
              nya: "Kodi chiganizo chiti chimafotokoza bwino AI?",
              toi: "Ncaambo nzi cipandulula kabotu AI?",
            },
            options: [
              {
                id: "a",
                text: {
                  en: "A living robot that has feelings",
                  bem: "Robot iya mweo iyakwete inkumbu",
                  nya: "Loboti wamoyo amene ali ndi m'maganizo",
                  toi: "Loboti muumi uujisi miyeeyo",
                },
              },
              {
                id: "b",
                text: {
                  en: "Software that learns patterns from examples",
                  bem: "Software iisambilila imipangile ukufuma ku fyabufwayo",
                  nya: "Pulogalamu yophunzira mapangidwe kuchokera ku zitsanzo",
                  toi: "Mulimo wiiya nzila kuzwa kuzikozyanyo",
                },
              },
              {
                id: "c",
                text: {
                  en: "Magic that is always correct",
                  bem: "Amalele ayaba ayalungama lyonse",
                  nya: "Matsenga omwe amakhala olondola nthawi zonse",
                  toi: "Malele aali ncobeni lyoonse",
                },
              },
            ],
            correctOptionId: "b",
            explanation: {
              en: "AI learns patterns from many examples. It is powerful but not alive, and not always right.",
              bem: "AI isambilila imipangile ukufuma ku fyabufwayo ifingi. Yakwete amaka lelo taili ya mweo, kabili tailungama lyonse.",
              nya: "AI imaphunzira mapangidwe kuchokera ku zitsanzo zambiri. Ndi yamphamvu koma siyamoyo, ndipo siyolondola nthawi zonse.",
              toi: "AI iiya nzila kuzwa kuzikozyanyo zinji. Ilijisi nguzu pele tiili yabuumi, alimwi tiili ncobeni lyoonse.",
            },
          },
        ],
      },
      {
        id: "ai-around-you",
        minutes: 5,
        title: {
          en: "AI already around you",
          bem: "AI ili kale mupepi na imwe",
          nya: "AI ili kale pafupi nanu",
          toi: "AI ili kale afwaafwi anduwe",
        },
        blocks: [
          {
            type: "text",
            value: {
              en: "You may already use AI every day without noticing. It suggests the next word as you type, filters spam messages, recommends songs, and helps mobile-money apps spot fraud.",
              bem: "Napamo mwalabomfya kale AI cila bushiku ukwabula ukwishiba. Ilapandaula ishiwi lyakonkapo ilyo mulelemba, ilecefya ubukalata bwa fye, ilepandaula inyimbo, kabili ilyafwa ama-app ya mobile money ukwishiba ubupupu.",
            },
          },
          {
            type: "list",
            value: [
              {
                en: "Typing: word suggestions and autocorrect",
                bem: "Ukulemba: ukupandaula amashiwi ne kuwamya",
                nya: "Kulemba: malingaliro a mawu ndi kukonza",
                toi: "Kulemba: milayo yamajwi akululamika",
              },
              {
                en: "Photos: making blurry pictures clearer",
                bem: "Amakope: ukulenga ifikope ukumoneka bwino",
                nya: "Zithunzi: kupanga zithunzi zosaoneka bwino kuti zioneke",
                toi: "Zifwanikiso: kupanga zifwanikiso kuti ziboneke kabotu",
              },
              {
                en: "Money: spotting unusual transactions to protect you",
                bem: "Indalama: ukwishiba amakwebo ayashaba bwino ku kumucingilila",
                nya: "Ndalama: kuzindikira zochitika zachilendo kuti akutetezeni",
                toi: "Mali: kuzyiba milimo iitali kabotu kutegwa akukwabilile",
              },
            ],
          },
          {
            type: "text",
            value: {
              en: "Knowing where AI is helping you is the first step to using it on purpose — and to noticing when it might be steering you the wrong way.",
              bem: "Ukwishiba uko AI ilekwafwa e ntanshi ya kutampa ukuibomfya mu kufwaya — kabili ukwishiba lintu ingamutungulula mu nshila iyabipa.",
            },
          },
        ],
        practice: {
          en: "For one day, notice each time your phone predicts or suggests something. Was the suggestion helpful, or did you have a better idea yourself?",
          bem: "Pa bushiku bumo, ishiba lyonse ilyo foni yobe ipandaula nangu isokolola cintu. Bushe ukusokolola kwakafwilishe, nangu mwakwete ubwino ubwacila mwe bene?",
        },
      },
      {
        id: "promise-and-risk",
        minutes: 7,
        title: {
          en: "Promise and risk",
          bem: "Ubusuma no busanso",
          nya: "Ubwino ndi zoopsa",
          toi: "Zibotu azintu ziyoosya",
        },
        blocks: [
          {
            type: "text",
            value: {
              en: "AI can open doors: cheaper learning, faster information, new ways to earn. But it can also repeat unfair patterns, invade privacy, or give confident answers that are simply wrong.",
              bem: "AI ingashitula ifiibi: ukusambilila kwa mutengo unono, ilyashi ilyafupi, inshila ishipya isha kwaula. Lelo kuti yabwekeshapo imipangile iyabula ubulungami, ukwingila mu nkama, nangu ukupeela amasuko ayacetekela ayashilungeme.",
            },
          },
          {
            type: "heading",
            value: { en: "Two things to remember" },
          },
          {
            type: "list",
            value: [
              {
                en: "AI can be biased: it learns from data that may leave people out.",
              },
              {
                en: "AI can be confidently wrong: always check important facts.",
              },
            ],
          },
          {
            type: "tip",
            value: {
              en: "Your own thinking is your superpower. Use AI to do more of what you decide — never to decide for you on things that matter.",
              bem: "Ukutontonkanya kobe e maka yobe ayakalamba. Bomfya AI ku kucita ifingi ifyo waisalapo — te kukusalila pa fintu ifyacindama.",
              nya: "Kuganiza kwanu ndi mphamvu yanu yayikulu. Gwiritsani ntchito AI kuchita zambiri zomwe mwasankha — osati kukusankhirani pa zinthu zofunika.",
              toi: "Kuyeeya kwako nkanguzu zyako zipati. Belesya AI kucita zinji nzwasala — kutali kukusalila azintu ziyandika.",
            },
          },
        ],
        quiz: [
          {
            id: "q1",
            prompt: {
              en: "An AI tool gives you a very confident answer about a health question. What is the safest next step?",
              bem: "Icipe ca AI camupeela icasuko icacetekela pa cipusho ca bumi. Cinshi cintu icaba bwino ico wingacita?",
              nya: "Chida cha AI chikupatsani yankho lodzikhulupirira pa funso la thanzi. Kodi ndi chiyani chotsatira chotetezeka?",
              toi: "Cibelesyo ca AI cikupa insandulo iisyomeka atala amubuzyo wabulwazi. Ncinzi cintu citobela cikwabilidwe?",
            },
            options: [
              {
                id: "a",
                text: {
                  en: "Trust it completely and act right away",
                  bem: "Ukucicetekela conse no kucita bwangu",
                  nya: "Kuchikhulupirira kwathunthu ndi kuchita nthawi yomweyo",
                  toi: "Kucisyoma coonse akucita mpoonya",
                },
              },
              {
                id: "b",
                text: {
                  en: "Check it with a clinic, nurse or trusted source",
                  bem: "Ukuceba na ku cipatala, namukashi wa cipatala, nangu uwacetekelwa",
                  nya: "Kuchionanso ndi chipatala, namwino kapena gwero lodalirika",
                  toi: "Kulanga acibbadela, muceembezi naa uusyomeka",
                },
              },
              {
                id: "c",
                text: {
                  en: "Ignore all health advice from anyone",
                  bem: "Ukusuula ukufunda konse ukwa bumi ukufuma ku muntu onse",
                  nya: "Kunyalanyaza malangizo onse a thanzi kuchokera kwa aliyense",
                  toi: "Kutalanga lulayo lwabulwazi kuzwa kuli umwi awumwi",
                },
              },
            ],
            correctOptionId: "b",
            explanation: {
              en: "AI can sound sure and still be wrong. For anything important — health, money, legal — confirm with a trusted human source.",
              bem: "AI kuti yaomba ngeyalishiba lelo iyaba iyashilungeme. Pa cintu conse icacindama — ubumi, indalama, ifya mafunde — shininkishya ku muntu uwacetekelwa.",
              nya: "AI ingamveke yotsimikiza koma ikhale yolakwika. Pa chilichonse chofunika — thanzi, ndalama, zamalamulo — tsimikizani ndi munthu wodalirika.",
              toi: "AI ilakonzya kumvwika iisinizyide pele yaba iilubide. Azintu ziyandika — bulwazi, mali, milawo — sinizya amuntu uusyomeka.",
            },
          },
        ],
      },
    ],
  },

  {
    id: "digital-skills",
    icon: "phone",
    level: "core",
    title: {
      en: "Practical digital skills",
      bem: "Amano ya digitali aya bufwayo",
      nya: "Luso lothandiza la digito",
      toi: "Luzibo lugwasya lwa digito",
    },
    summary: {
      en: "Get confident with a smartphone and the internet: searching, saving data, staying safe and using mobile money wisely.",
      bem: "Kwata ukushininkisha na foni ne intaneti: ukufwaya, ukusunga data, ukuba abacingililwa, no kubomfya mobile money mu mano.",
      nya: "Khalani odzidalira ndi foni ndi intaneti: kusaka, kusunga data, kukhala otetezeka ndi kugwiritsa ntchito mobile money mwanzeru.",
      toi: "Ba aakusyoma afoni a intaneti: kuyandaula, kuyobola data, kukwabililwa akubelesya mobile money camaano.",
    },
    outcomes: [
      { en: "Search the internet and judge what you find", bem: "Ukufwaya pa intaneti no kutontonkanya pa ifyo wasanga", nya: "Kusaka pa intaneti ndi kuweruza zomwe mwapeza", toi: "Kuyandaula a intaneti akubeteka nzwajana" },
      { en: "Cut your data costs", bem: "Ukucefya indalama sha data", nya: "Kuchepetsa ndalama za data", toi: "Kucesya mali aa data" },
      { en: "Protect yourself from scams and account theft", bem: "Ukuicingilila ku bupupu no kwiba akaunti", nya: "Kudziteteza ku zachinyengo ndi kuba akaunti", toi: "Kulikwabilila kubulewusi akubbidwa akaunti" },
    ],
    lessons: [
      {
        id: "smart-search",
        minutes: 6,
        title: { en: "Search smart", bem: "Fwaya mu mano", nya: "Sakani mwanzeru", toi: "Yandaula camaano" },
        blocks: [
          {
            type: "text",
            value: {
              en: "A good search uses a few clear key words, not a whole sentence. Think about the exact words that would appear on the page you want.",
              bem: "Ukufwaya bwino kubomfya amashiwi ayacindama ayanono, te lishiwi lyonse. Tontonkanya pa mashiwi yene yene ayengaba pe peji ilyo ulefwaya.",
            },
          },
          {
            type: "list",
            value: [
              { en: "Use key words: 'bus times Lusaka Kabwe' not 'what time is the bus'" },
              { en: "Put exact phrases in quotes: \"grade 12 results\"" },
              { en: "Check the source: is it official, recent, and honest?" },
            ],
          },
          {
            type: "tip",
            value: {
              en: "The first result is not always the best or the truest. Compare two or three sources before you trust something important.",
              bem: "Ico cabalilapo te cisuma nangu ica cine lyonse. Linganya ifintu fibili nangu fitatu ilyo ushilacetekela icacindama.",
            },
          },
        ],
        practice: {
          en: "Write down one question you really want answered. Turn it into 3–5 key words you could search. That skill works the same when you talk to an AI tool.",
          bem: "Lemba icipusho cimo ico ulefwaya sana ukwasukwa. Cipilibule mu mashiwi 3–5 ayo wingafwaya. Uku kucenjela kubomba cimo cine ilyo ulelanshanya ne cipe ca AI.",
        },
      },
      {
        id: "save-data",
        minutes: 6,
        title: { en: "Make your data last", bem: "Lenga data yobe ishale", nya: "Pangani data yanu ikhalitse", toi: "Panga data yako iikkale" },
        blocks: [
          {
            type: "text",
            value: {
              en: "Data is expensive, so use it on purpose. Small habits can make one bundle last much longer.",
              bem: "Data yalidula, kanshi ibomfye mu kufwaya. Imicitile inono ingalenga bundle imo ishale panono.",
            },
          },
          {
            type: "list",
            value: [
              { en: "Download once over Wi‑Fi, then use offline (like this app!)" },
              { en: "Turn off auto‑play videos and auto‑download in chat apps" },
              { en: "Watch videos at lower quality (360p) when you can" },
              { en: "Check which apps use background data and limit them" },
            ],
          },
          {
            type: "tip",
            value: {
              en: "Chipego AI is built to work offline. Once it loads, you can keep learning with no data at all.",
              bem: "Chipego AI yapangilwa ukubomba ukwabula intaneti. Nga yaingila, kuti mwatwalilila ukusambilila ukwabula data nakalya.",
              nya: "Chipego AI yapangidwa kuti izigwira popanda intaneti. Ikakhazikika, mutha kupitiriza kuphunzira popanda data.",
            },
          },
        ],
        practice: {
          en: "Open your phone settings and find 'data usage'. Which app uses the most? Decide one change you can make today to save data.",
          bem: "Fungula settings sha foni yobe usange 'data usage'. Ni app nshi ibomfya sana? Salapo ukwaluka kumo uko wingacita lelo pa kusunga data.",
        },
      },
      {
        id: "stay-safe",
        minutes: 7,
        title: { en: "Stay safe online", bem: "Ba uwacingililwa pa intaneti", nya: "Khalani otetezeka pa intaneti", toi: "Kkala kokwabililwe a intaneti" },
        blocks: [
          {
            type: "text",
            value: {
              en: "Scammers try to rush you and to scare you. If a message pushes you to act fast, share a PIN, or send money — slow down. That pressure is the warning sign.",
              bem: "Abapupu balesha ukumucushafya no kumutinya. Nga ubukalata bulemupatikisha ukucita bwangu, ukwaba PIN, nangu ukutuma indalama — cefyapo. Uko kupatikisha e cishibilo ca kusoka.",
            },
          },
          {
            type: "list",
            value: [
              { en: "Never share your mobile‑money PIN or one‑time code — not even with 'the bank'" },
              { en: "Real companies do not ask for your PIN by SMS or call" },
              { en: "Use a strong screen lock and a different password for important accounts" },
              { en: "If an offer sounds too good to be true, it usually is" },
            ],
          },
          {
            type: "tip",
            value: {
              en: "AI can now write very convincing scam messages and even fake voices. Verify surprising requests through a second, known channel before acting.",
              bem: "AI nomba kuti yalemba ubukalata bwa bupupu ubucetekela nangu amashiwi ya bufi. Shininkisha ifipusho ifyakupapusha ukupitila mu nshila imbi iyo waishiba ilyo ushilacita.",
            },
          },
        ],
        quiz: [
          {
            id: "q1",
            prompt: {
              en: "You get an SMS: 'Your account is blocked. Reply with your PIN to unlock now.' What do you do?",
              bem: "Wapokelela SMS: 'Akaunti yobe yashinkwa. Asuka na PIN yobe pa kwisula nomba.' Bushe ulacita shani?",
            },
            options: [
              { id: "a", text: { en: "Reply quickly with the PIN", bem: "Asuka bwangu na PIN" } },
              { id: "b", text: { en: "Delete it; never share a PIN by message", bem: "Ifutepo; wilaaba PIN mu bukalata" } },
              { id: "c", text: { en: "Forward it to friends to warn them and include your PIN", bem: "Tumina abanobe ku kubasoka no kubikapo PIN yobe" } },
            ],
            correctOptionId: "b",
            explanation: {
              en: "No genuine service asks for your PIN. Sharing it — or spreading the message with it — gives scammers control of your money.",
              bem: "Takuli umulimo wa cine uulomba PIN yobe. Ukuipeela — nangu ukwananya ubukalata na yo — kupeela abapupu amaka pa ndalama shobe.",
            },
          },
        ],
      },
    ],
  },

  {
    id: "using-ai-tools",
    icon: "chat",
    level: "applied",
    title: {
      en: "Using AI tools well",
      bem: "Ukubomfya ifipe fya AI bwino",
      nya: "Kugwiritsa ntchito zida za AI bwino",
      toi: "Kubelesya zibelesyo zya AI kabotu",
    },
    summary: {
      en: "How to talk to AI assistants, get useful answers, and keep your own thinking and creativity in charge.",
      bem: "Ifyakulanshanya ne bafwilishi ba AI, ukukwata amasuko ayawama, no kubaka ukutontonkanya kobe no bumpuka bobe pa ntanshi.",
      nya: "Mmene mungalankhulire ndi othandiza a AI, kupeza mayankho othandiza, ndi kusunga kuganiza kwanu ndi luso lanu patsogolo.",
      toi: "Mbomukonzya kwaambaula abagwasyi ba AI, kujana insandulo zigwasya, akubikka kuyeeya kwanu abunkabaru bwanu kunembo.",
    },
    outcomes: [
      { en: "Write clear prompts that get better answers", bem: "Ukulemba amaipusho ayaumfwika ayaleta amasuko ayawama", nya: "Kulemba mafunso omveka omwe amabweretsa mayankho abwino", toi: "Kulemba mibuzyo iimvwika iileta insandulo zibotu" },
      { en: "Use AI to learn faster without copying blindly", bem: "Ukubomfya AI ku kusambilila bwangu ukwabula ukukopolola fye", nya: "Kugwiritsa ntchito AI kuphunzira msanga popanda kungokopera", toi: "Kubelesya AI kwiiya cakufwambaana kotakolooli buyo" },
      { en: "Check AI answers and protect your creativity", bem: "Ukuceba amasuko ya AI no kucingilila ubumpuka bobe", nya: "Kuonanso mayankho a AI ndi kuteteza luso lanu", toi: "Kulanga insandulo za AI akukwabilila bunkabaru bwako" },
    ],
    lessons: [
      {
        id: "good-prompts",
        minutes: 7,
        title: { en: "Ask AI well (prompts)", bem: "Ipusha AI bwino", nya: "Funsani AI bwino", toi: "Buzya AI kabotu" },
        blocks: [
          {
            type: "text",
            value: {
              en: "An AI assistant answers based on how you ask. A clear request with context gets a far better answer than a vague one.",
              bem: "Umufwilishi wa AI asuka ukulingana ne fyo waipusha. Icipusho icaumfwika icakwete ilyashi cileta icasuko icawama ukucila icabula ubwishibilo.",
            },
          },
          {
            type: "heading",
            value: { en: "A simple recipe for good prompts" },
          },
          {
            type: "list",
            value: [
              { en: "Role: 'You are a farming helper for a small maize plot.'" },
              { en: "Task: 'Explain how to test my soil cheaply.'" },
              { en: "Details: 'I am in Southern Province, rainy season, low budget.'" },
              { en: "Format: 'Give 5 short steps in simple English.'" },
            ],
          },
          {
            type: "tip",
            value: {
              en: "If the first answer is not useful, say what was wrong and ask again. Talking with AI is a back‑and‑forth, not one shot.",
              bem: "Nga icasuko cakubalilapo tacawama, landa ico cabipe no kwipusha na kabili. Ukulanshanya ne AI kwenda ku ntanshi na ku numa, te limo fye.",
            },
          },
        ],
        practice: {
          en: "Take a real task you have (a letter, a study topic, a business idea). Write a prompt with Role, Task, Details and Format. Notice how much clearer your own goal becomes just by writing it down.",
          bem: "Buula umulimo wa cine uo wakwata (kalata, ico ulesambilila, ubwikashi bwa makwebo). Lemba icipusho na Role, Task, Details na Format. Mona ifyo ubuyo bobe bwaumfwika bwino pa kulemba fye.",
        },
      },
      {
        id: "learn-not-copy",
        minutes: 7,
        title: { en: "Learn with AI, don't just copy", bem: "Sambilila na AI, wilakopolola fye", nya: "Phunzirani ndi AI, osangokopera", toi: "Iya a AI, utakolooli buyo" },
        blocks: [
          {
            type: "text",
            value: {
              en: "AI can hand you an answer, but the goal is for YOUR mind to grow. If you copy without understanding, you stay dependent and your skills do not build.",
              bem: "AI kuti yakupeela icasuko, lelo ubuyo kukula kwa muntontonkanyo WOBE. Nga wakopolola ukwabula ukumfwikisha, uba uwatungililwa kabili amano yobe tayakula.",
            },
          },
          {
            type: "list",
            value: [
              { en: "Ask AI to explain, not just to answer: 'Why is this the answer?'" },
              { en: "Redo the work yourself and compare" },
              { en: "Ask for a simpler explanation until it truly clicks" },
              { en: "Use AI to check your work after you try, not before" },
            ],
          },
          {
            type: "tip",
            value: {
              en: "Think of AI as a study partner, not a shortcut. The struggle of thinking is where real learning happens.",
              bem: "Elenganya AI ngo munobe wa kusambilila, te nshila iyanono. Ubwafya bwa kutontonkanya e uko ukusambilila kwa cine kuba.",
              nya: "Ganizirani AI ngati mnzanu wophunzira, osati njira yachidule. Kuvutika kuganiza ndi komwe kuphunzira kwenikweni kumachitika.",
            },
          },
        ],
        quiz: [
          {
            id: "q1",
            prompt: {
              en: "What is the healthiest way to use AI for your homework?",
              bem: "Nshila nshi iiwamisha iya kubomfya AI ku homework yobe?",
            },
            options: [
              { id: "a", text: { en: "Copy its answer word for word", bem: "Ukukopolola icasuko cakwe ishiwi ku shiwi" } },
              { id: "b", text: { en: "Try first, then use AI to check and explain", bem: "Yesha intanshi, e lyo ubomfye AI ku kuceba no kulondolola" } },
              { id: "c", text: { en: "Let AI do all of it so you save time", bem: "Ukuleka AI icite fyonse pa kusunga inshita" } },
            ],
            correctOptionId: "b",
            explanation: {
              en: "Trying first builds your skill; AI then becomes a checker and tutor, not a replacement for your thinking.",
              bem: "Ukuyesha intanshi kukusha amano yobe; e lyo AI aba uwakuceba no kufunda, te wakupyanapo ukutontonkanya kobe.",
            },
          },
        ],
      },
      {
        id: "spot-mistakes",
        minutes: 6,
        title: { en: "Spot AI mistakes", bem: "Ishiba amalubo ya AI", nya: "Zindikirani zolakwika za AI", toi: "Zyiba zilubido za AI" },
        blocks: [
          {
            type: "text",
            value: {
              en: "AI sometimes makes things up — names, facts, even fake references. This is called a 'hallucination'. It can look completely real.",
              bem: "AI limbi ilaipangila ifintu — amashina, ifya cine, nangu ifyakwebekesha ifya bufi. Ici baleita ati 'hallucination'. Kuti caumfwika ica cine cine.",
            },
          },
          {
            type: "list",
            value: [
              { en: "Be extra careful with numbers, dates, names and quotes" },
              { en: "Ask: 'How do you know? What is your source?'" },
              { en: "Cross‑check anything important elsewhere" },
              { en: "Remember AI may not know recent or local facts" },
            ],
          },
          {
            type: "tip",
            value: {
              en: "You are the editor. AI writes a first draft; your judgement decides what is true and what to keep.",
              bem: "Niwe kapangamabuku. AI ilemba icakubalilapo; amano yobe e yasala ico caba ca cine ne ca kusunga.",
            },
          },
        ],
        practice: {
          en: "Ask an AI tool for a fact you already know well (like a local landmark or a school subject). See if it gets details right — this teaches you to never trust blindly.",
          bem: "Ipusha icipe ca AI icintu ico waishiba bwino kale (nga icifulo icaishibikwa nangu ico wasambilile ku sukulu). Mona nga cakwata ifintu bwino — ici cikakusambilisha ukukanacetekela ukwabula ukumona.",
        },
      },
    ],
  },

  {
    id: "ai-for-opportunity",
    icon: "rise",
    level: "applied",
    title: {
      en: "AI for opportunity",
      bem: "AI ku mwenso wa ntanshi",
      nya: "AI ya mwayi",
      toi: "AI yamweenya",
    },
    summary: {
      en: "Turn skills into income and voice: find work, learn for free, build a simple online presence, and know your digital rights.",
      bem: "Pilibula amano ku ndalama ne shiwi: fwaya incito, sambilila apa waca, kuula ubwikashi bwa pa intaneti, no kwishiba insambu shobe sha digitali.",
      nya: "Sandulani luso kukhala ndalama ndi mawu: pezani ntchito, phunzirani kwaulere, mangani malo anu a pa intaneti, ndi kudziwa ufulu wanu wa digito.",
      toi: "Sandula luzibo kuti lube mali ajwi: jana mulimo, iya cabuyo, panga busena bwako bwa intaneti, akuzyiba nkomboni zyako zya digito.",
    },
    outcomes: [
      { en: "Use AI to find and apply for opportunities", bem: "Ukubomfya AI ku kufwaya no kufwaisha imwenso", nya: "Kugwiritsa ntchito AI kupeza ndi kufunsira mwayi", toi: "Kubelesya AI kujana akukumbila mweenya" },
      { en: "Build a simple CV and online profile", bem: "Ukupanga CV iyanono no bwikashi bwa pa intaneti", nya: "Kupanga CV yosavuta ndi mbiri yanu ya pa intaneti", toi: "Kupanga CV iituba abukkale bwako bwa intaneti" },
      { en: "Protect your data, privacy and rights", bem: "Ukucingilila data, inkama ne nsambu shobe", nya: "Kuteteza data, zachinsinsi ndi ufulu wanu", toi: "Kukwabilila data, buumbulu ankomboni zyako" },
    ],
    lessons: [
      {
        id: "find-work",
        minutes: 7,
        title: { en: "Find opportunities with AI", bem: "Fwaya imwenso na AI", nya: "Pezani mwayi ndi AI", toi: "Jana mweenya a AI" },
        blocks: [
          {
            type: "text",
            value: {
              en: "AI can help you discover options you did not know existed and prepare for them — from apprenticeships and grants to online freelancing.",
              bem: "AI kuti yamwafwa ukusanga inshila isho mwaleishiba iyo na kuipekanya — ukufuma ku kusambilila incito, ifipo, ukufika ku ncito sha pa intaneti.",
            },
          },
          {
            type: "list",
            value: [
              { en: "Ask: 'What kinds of paid work suit someone who can do X in my area?'" },
              { en: "Ask AI to explain requirements and how to prepare" },
              { en: "Have it draft questions to ask an employer or mentor" },
              { en: "Always verify real openings through trusted local contacts" },
            ],
          },
          {
            type: "tip",
            value: {
              en: "AI widens your view, but your network and hustle close the deal. Combine AI ideas with real people you trust.",
              bem: "AI ikusha ifyo umona, lelo abantu obe ne fyo ubombesha e fyalenga ukupwa. Sanshanya amano ya AI na bantu ba cine abo wacetekela.",
            },
          },
        ],
        practice: {
          en: "List three skills you already have (even everyday ones). Ask an AI tool, or brainstorm yourself, how each could earn money locally.",
          bem: "Lemba amano yatatu ayo wakwata kale (nangu ya cila bushiku). Ipusha icipe ca AI, nangu utontonkanye we mwine, ifyo limo lilonse lyingaleta indalama mu mushi.",
        },
      },
      {
        id: "cv-profile",
        minutes: 8,
        title: { en: "Your CV and online profile", bem: "CV yobe no bwikashi bwa pa intaneti", nya: "CV yanu ndi mbiri ya pa intaneti", toi: "CV yako abukkale bwa intaneti" },
        blocks: [
          {
            type: "text",
            value: {
              en: "A clear CV tells your story: who you are, what you can do, and proof. AI can help you phrase it well — but every word must be true to you.",
              bem: "CV iyaumfwika ilanda ilyashi lyobe: uwo uli, ico wingacita, ne bushinishi. AI kuta yamwafwa ukulanda bwino — lelo ishiwi lilonse lifwile ukuba ilya cine kuli iwe.",
            },
          },
          {
            type: "list",
            value: [
              { en: "Start with skills and results, not just job titles" },
              { en: "Use AI to fix grammar and shorten long sentences" },
              { en: "Keep it honest — never let AI invent qualifications" },
              { en: "Save a copy offline so you always have it ready" },
            ],
          },
          {
            type: "tip",
            value: {
              en: "Employers value your real voice. Use AI to polish, not to pretend. Your authentic story is your strongest asset.",
              bem: "Ba bomfi bacindika ishiwi lyobe ilya cine. Bomfya AI ku kusalula, te ku kubepa. Ilyashi lyobe ilya cine e cuma cobe icakosa.",
            },
          },
        ],
        practice: {
          en: "Write 3 sentences about what you can do and one thing you are proud of. This is the seed of a CV — keep it saved on your phone.",
          bem: "Lemba amashiwi 3 pa fyo wingacita ne cintu cimo ico waitasha. Ici e mbuto ya CV — cisunge pa foni yobe.",
        },
      },
      {
        id: "rights-privacy",
        minutes: 7,
        title: { en: "Your data and your rights", bem: "Data yobe ne nsambu shobe", nya: "Data yanu ndi ufulu wanu", toi: "Data yako ankomboni zyako" },
        blocks: [
          {
            type: "text",
            value: {
              en: "Your data — messages, photos, location, voice — has value. Companies and AI systems collect it. You have the right to understand and to say no.",
              bem: "Data yobe — ubukalata, amakope, ncito uli, ishiwi — ilikwete umutengo. Amakampani ne AI filaikonganya. Ukwete insambu sha kumfwikisha no kukaana.",
            },
          },
          {
            type: "list",
            value: [
              { en: "Read what an app asks permission for before you accept" },
              { en: "Share the least you can; think before posting about others" },
              { en: "You can ask why a decision was made about you" },
              { en: "Speak up when AI systems in your community treat people unfairly" },
            ],
          },
          {
            type: "tip",
            value: {
              en: "Digital equity means young people help shape the rules — not just follow them. Your voice about how AI is used in your community matters.",
              bem: "Digital equity cipilibula ukuti abacaice bafwe ukupanga amafunde — te kuyakonka fye. Ishiwi lyobe pa fyo AI ibomfiwa mu mushi wobe lyacindama.",
              nya: "Digital equity ikutanthauza kuti achinyamata athandize kupanga malamulo — osati kungowatsatira. Mawu anu pa mmene AI imagwiritsidwira ntchito m'dera lanu ndi ofunika.",
            },
          },
        ],
        quiz: [
          {
            id: "q1",
            prompt: {
              en: "A free game app asks for access to your contacts, messages and location. What is wise?",
              bem: "App ya masango iya waca ilalomba ukwingila mu ba contact, ubukalata na ncito uli. Cinshi caba ca mano?",
            },
            options: [
              { id: "a", text: { en: "Accept everything so it works", bem: "Ukusuminisha fyonse pa kuti ibombe" } },
              { id: "b", text: { en: "Question why a game needs all that, and deny what it doesn't need", bem: "Ukwipusha umulandu icangalo cifwaila fyonse ifyo, no kukaana ifyo cishilefwaya" } },
              { id: "c", text: { en: "Share it with friends first", bem: "Ukwabana na banobe intanshi" } },
            ],
            correctOptionId: "b",
            explanation: {
              en: "A game rarely needs your messages or contacts. Granting only what is necessary protects your privacy and the people you know.",
              bem: "Icangalo tacifwaya sana ubukalata nangu ba contact bobe. Ukupeela fye ifyafwaikwa kucingilila inkama yobe na bantu abo waishiba.",
            },
          },
        ],
      },
    ],
  },
];

export function getCourse(id: string): Course | undefined {
  return COURSES.find((c) => c.id === id);
}
