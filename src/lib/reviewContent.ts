import { UI_STRINGS } from "../i18n/strings";
import { COURSES } from "../data/courses";
import { COACH_ENTRIES } from "../data/coach";
import { RESOURCE_HUBS, DATA_SAVER_TIPS } from "../data/connect";
import { BADGES } from "../data/badges";
import type { LangCode, Localized } from "../types";

// A single translatable string surfaced to native-speaker reviewers.
export interface ReviewItem {
  id: string;
  group: string;
  en: string;
  /** Existing translation for the chosen language, if any. */
  translation?: string;
}

// Walks every piece of user-facing content in the app and returns it as a flat,
// reviewable list for the given language. This is what powers the in-app
// translation review tool. Keeping it data-driven means new lessons or strings
// automatically show up for review with no extra wiring.
export function collectReviewItems(lang: LangCode): ReviewItem[] {
  const items: ReviewItem[] = [];

  const pushLoc = (id: string, group: string, v: Localized) => {
    const en = v.en?.trim();
    if (!en) return;
    items.push({ id, group, en, translation: v[lang]?.trim() || undefined });
  };

  // 1. Interface strings
  const enUI = UI_STRINGS.en;
  for (const key of Object.keys(enUI) as (keyof typeof enUI)[]) {
    const en = enUI[key];
    if (!en) continue;
    items.push({
      id: `ui/${key}`,
      group: "Interface",
      en,
      translation: UI_STRINGS[lang]?.[key]?.trim() || undefined,
    });
  }

  // 2. Courses, lessons, quizzes
  for (const c of COURSES) {
    const g = `Course: ${c.title.en}`;
    pushLoc(`course/${c.id}/title`, g, c.title);
    pushLoc(`course/${c.id}/summary`, g, c.summary);
    c.outcomes.forEach((o, i) =>
      pushLoc(`course/${c.id}/outcome/${i}`, g, o)
    );
    for (const l of c.lessons) {
      const lg = `${c.title.en} → ${l.title.en}`;
      pushLoc(`course/${c.id}/lesson/${l.id}/title`, lg, l.title);
      l.blocks.forEach((b, bi) => {
        if (b.type === "list") {
          b.value.forEach((v, vi) =>
            pushLoc(`course/${c.id}/lesson/${l.id}/block/${bi}/${vi}`, lg, v)
          );
        } else {
          pushLoc(`course/${c.id}/lesson/${l.id}/block/${bi}`, lg, b.value);
        }
      });
      if (l.practice) {
        pushLoc(`course/${c.id}/lesson/${l.id}/practice`, lg, l.practice);
      }
      l.quiz?.forEach((q, qi) => {
        pushLoc(`course/${c.id}/lesson/${l.id}/quiz/${qi}/prompt`, lg, q.prompt);
        q.options.forEach((o) =>
          pushLoc(
            `course/${c.id}/lesson/${l.id}/quiz/${qi}/opt/${o.id}`,
            lg,
            o.text
          )
        );
        pushLoc(
          `course/${c.id}/lesson/${l.id}/quiz/${qi}/explanation`,
          lg,
          q.explanation
        );
      });
    }
  }

  // 3. AI Coach knowledge base
  for (const e of COACH_ENTRIES) {
    const g = "AI Coach answers";
    pushLoc(`coach/${e.id}/question`, g, e.question);
    pushLoc(`coach/${e.id}/answer`, g, e.answer);
  }

  // 4. Connect directory + data-saver tips
  for (const h of RESOURCE_HUBS) {
    pushLoc(`hub/${h.id}/description`, `Connect: ${h.name}`, h.description);
  }
  for (const t of DATA_SAVER_TIPS) {
    const g = "Data-saver tips";
    pushLoc(`tip/${t.id}/title`, g, t.title);
    pushLoc(`tip/${t.id}/body`, g, t.body);
  }

  // 5. Badges
  for (const b of BADGES) {
    const g = "Badges";
    pushLoc(`badge/${b.id}/title`, g, b.title);
    pushLoc(`badge/${b.id}/description`, g, b.description);
  }

  return items;
}

export interface CoverageStats {
  total: number;
  translated: number;
  missing: number;
  pct: number;
}

export function coverage(items: ReviewItem[]): CoverageStats {
  const total = items.length;
  const translated = items.filter((i) => i.translation).length;
  const missing = total - translated;
  return {
    total,
    translated,
    missing,
    pct: total ? Math.round((translated / total) * 100) : 0,
  };
}
