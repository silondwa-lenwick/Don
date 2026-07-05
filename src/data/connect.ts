import type { DataSaverTip, ResourceHub } from "../types";

// Community-maintained directory of affordable ways to get online and build
// skills in Zambia. Entries are examples/templates meant to be verified and
// expanded by local partners — details (opening hours, exact fees, contacts)
// should always be confirmed on the ground. This keeps the platform honest
// while still pointing youth toward real categories of support that exist.
export const RESOURCE_HUBS: ResourceHub[] = [
  {
    id: "lusaka-city-library",
    name: "Lusaka City Library",
    kind: "library",
    province: "Lusaka",
    town: "Lusaka",
    cost: "low-cost",
    description: {
      en: "Public library with reading space and periodic computer/internet access. Good quiet place to study and practise digital skills.",
      bem: "Iraibulari ya baume iya kubelengela kabili limbi iyakwete makompyuta ne intaneti. Icifulo icawama ica kusambililamo.",
    },
    contact: "Visit in person • confirm current computer/internet hours",
  },
  {
    id: "provincial-libraries",
    name: "Provincial & district public libraries",
    kind: "library",
    province: "All provinces",
    town: "Provincial centres",
    cost: "low-cost",
    description: {
      en: "Zambia Library Service runs libraries in provincial and many district towns. Ask about study space, books and any computer access.",
      bem: "Zambia Library Service ikwete amaraibulari mu maprovince ne mu ma district ayengi. Ipusha pa cifulo ca kusambilila, ifitabo, ne makompyuta.",
    },
    contact: "Ask at your nearest provincial/district library",
  },
  {
    id: "telecentres",
    name: "Community telecentres (ZICTA-supported)",
    kind: "telecentre",
    province: "Rural & peri-urban districts",
    town: "Various districts",
    cost: "low-cost",
    description: {
      en: "Shared digital centres set up to bring internet and computers to underserved areas. Often the most affordable way to get online outside big towns.",
      bem: "Ififulo fya digitali ifyaikwa ku kuleta intaneti ne makompyuta ku fifulo ifyabula ifipe. Inshila iya mutengo unono iya kwingila pa intaneti.",
    },
    contact: "Ask locally for the nearest telecentre • zicta.zm for guidance",
  },
  {
    id: "school-ict-labs",
    name: "School & college ICT labs",
    kind: "school",
    province: "All provinces",
    town: "Many towns",
    cost: "low-cost",
    description: {
      en: "Many secondary schools and colleges have computer labs. Learners and nearby youth can sometimes arrange supervised access.",
      bem: "Amasukulu ayengi ne makoleji yakwete ama lab ya makompyuta. Abasambi na bacaice ba mupepi limbi kuti bakwanisha ukwingilamo.",
    },
    contact: "Ask a teacher or the ICT department at a nearby school",
  },
  {
    id: "youth-ngo-hubs",
    name: "Youth & digital-skills NGO hubs",
    kind: "ngo",
    province: "Lusaka, Copperbelt & others",
    town: "Various",
    cost: "free",
    description: {
      en: "NGOs and innovation hubs run free coding, digital-skills and entrepreneurship programmes for young people. Great for mentorship and equipment.",
      bem: "Ama NGO ne ma hub yaba na maprogram ya waca aya coding, amano ya digitali no bukwebo ku bacaice. Yasuma ku kufunda ne fya kubomfya.",
    },
    contact: "Search for youth innovation hubs in your town",
  },
  {
    id: "public-wifi",
    name: "Public & campus Wi‑Fi points",
    kind: "wifi",
    province: "Urban areas",
    town: "Towns & campuses",
    cost: "free",
    description: {
      en: "Some campuses, malls and public buildings offer free Wi‑Fi. Use it to download lessons and updates once, then keep learning offline.",
      bem: "Amashule yamo, ama mall ne mayanda ya baume yakwete Wi‑Fi ya waca. Ibomfye ku ku downloada amasambililo limo, e lyo utwalilile ukwabula intaneti.",
    },
    contact: "Ask staff whether free Wi‑Fi is available",
  },
  {
    id: "zicta-info",
    name: "ZICTA — communications authority",
    kind: "helpline",
    province: "National",
    town: "Lusaka",
    cost: "free",
    description: {
      en: "The Zambia Information and Communications Technology Authority shares guidance on connectivity, online safety and consumer rights.",
      bem: "ZICTA ipeela ukutungulula pa fya intaneti, ubulinda pa intaneti, ne nsambu sha bakashita.",
    },
    contact: "zicta.zm • for connectivity and online-safety guidance",
  },
];

export const DATA_SAVER_TIPS: DataSaverTip[] = [
  {
    id: "download-offline",
    title: {
      en: "Download once, use offline",
      bem: "Downloada limo, bomfya ukwabula intaneti",
      nya: "Tsitsani kamodzi, gwiritsani popanda intaneti",
    },
    body: {
      en: "Load this app and your lessons over Wi‑Fi, then everything keeps working with no data. Do the same with documents you need.",
      bem: "Ingisha app iyi na masambililo pa Wi‑Fi, e lyo fyonse fitwalilila ukwabula data.",
    },
  },
  {
    id: "video-quality",
    title: {
      en: "Lower video quality",
      bem: "Cefya video quality",
      nya: "Chepetsani ubwino wa makanema",
    },
    body: {
      en: "Set videos to 360p. You still learn the same thing while using a fraction of the data.",
      bem: "Bika amavidiyo pa 360p. Usambilila cimo cine ilyo ulebomfya data inono.",
    },
  },
  {
    id: "auto-off",
    title: {
      en: "Turn off auto‑play & auto‑download",
      bem: "Ushako auto‑play na auto‑download",
      nya: "Zimitsani auto‑play ndi auto‑download",
    },
    body: {
      en: "In chat and social apps, stop videos and images from downloading by themselves. This alone can save a lot of data.",
      bem: "Mu ma‑app ya kulanshanya, ushako amavidiyo ne fikope ukwibela downloada. Ici cileka ilekeleka data iingi.",
    },
  },
  {
    id: "background",
    title: {
      en: "Limit background data",
      bem: "Kanya background data",
      nya: "Lepheretsani background data",
    },
    body: {
      en: "In settings > data usage, restrict apps that use data when you are not using them. Update apps only over Wi‑Fi.",
      bem: "Mu settings > data usage, kanya ama‑app ayabomfya data ilyo tamulebomfya. Updeeta ama‑app fye pa Wi‑Fi.",
    },
  },
];
