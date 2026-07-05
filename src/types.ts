// Shared domain types for Chipego AI.
// Text that learners read can be provided in several Zambian languages, so we
// model it as a map from language code to string ("localized string").

export type LangCode = "en" | "bem" | "nya" | "toi";

// English is always required as the source of truth; other languages are
// optional and fall back to English at runtime when a translation is missing.
export type Localized = { en: string } & Partial<Record<LangCode, string>>;

export type Level = "foundation" | "core" | "applied";

export interface QuizOption {
  id: string;
  text: Localized;
}

export interface QuizQuestion {
  id: string;
  prompt: Localized;
  options: QuizOption[];
  correctOptionId: string;
  explanation: Localized;
}

export interface Lesson {
  id: string;
  title: Localized;
  minutes: number;
  // Lesson body is authored as an ordered list of blocks so it renders well
  // and stays readable on small, low-cost phones.
  blocks: LessonBlock[];
  quiz?: QuizQuestion[];
  // A concrete, offline-friendly practical task the learner can try.
  practice?: Localized;
}

export type LessonBlock =
  | { type: "text"; value: Localized }
  | { type: "heading"; value: Localized }
  | { type: "tip"; value: Localized }
  | { type: "list"; value: Localized[] };

export interface Course {
  id: string;
  title: Localized;
  summary: Localized;
  level: Level;
  icon: string;
  // Estimated total data usage note — everything is bundled, so it is ~0.
  lessons: Lesson[];
  outcomes: Localized[];
}

export interface CoachEntry {
  id: string;
  // Keywords (English + local) used to match a learner's question offline.
  keywords: string[];
  question: Localized;
  answer: Localized;
}

export interface ResourceHub {
  id: string;
  name: string;
  kind: "library" | "telecentre" | "school" | "ngo" | "wifi" | "helpline";
  province: string;
  town: string;
  description: Localized;
  cost: "free" | "low-cost";
  contact?: string;
}

export interface DataSaverTip {
  id: string;
  title: Localized;
  body: Localized;
}
