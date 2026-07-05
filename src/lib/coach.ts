import { COACH_ENTRIES } from "../data/coach";
import type { CoachEntry } from "../types";

// Lightweight, fully offline matcher. We score each curated entry by how many of
// its keywords appear in the learner's question. This is intentionally simple so
// it runs instantly on the cheapest phones with zero data and zero privacy risk.
export function matchCoach(query: string): CoachEntry | null {
  const q = normalize(query);
  if (!q) return null;

  let best: { entry: CoachEntry; score: number } | null = null;

  for (const entry of COACH_ENTRIES) {
    let score = 0;
    for (const kw of entry.keywords) {
      const k = normalize(kw);
      if (!k) continue;
      if (q.includes(k)) {
        // Longer keyword phrases are stronger signals.
        score += k.includes(" ") ? 3 : 1;
      } else if (overlapWords(q, k)) {
        score += 0.5;
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { entry, score };
    }
  }

  return best ? best.entry : null;
}

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function overlapWords(q: string, keyword: string): boolean {
  const qWords = new Set(q.split(" ").filter((w) => w.length > 3));
  return keyword
    .split(" ")
    .some((w) => w.length > 3 && qWords.has(w));
}
