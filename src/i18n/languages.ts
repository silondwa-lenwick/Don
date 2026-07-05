import type { LangCode } from "../types";

export interface LanguageMeta {
  code: LangCode;
  name: string; // endonym
  english: string; // english name
  flagLabel: string;
}

// The four most widely spoken languages of instruction in Zambia plus English.
// Designing in local languages is central to inclusion and AI literacy here.
export const LANGUAGES: LanguageMeta[] = [
  { code: "en", name: "English", english: "English", flagLabel: "EN" },
  { code: "bem", name: "Ichibemba", english: "Bemba", flagLabel: "BEM" },
  { code: "nya", name: "Chinyanja", english: "Nyanja", flagLabel: "NYA" },
  { code: "toi", name: "Chitonga", english: "Tonga", flagLabel: "TOI" },
];

export const DEFAULT_LANG: LangCode = "en";
