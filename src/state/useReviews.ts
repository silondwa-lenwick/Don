import { useCallback, useEffect, useState } from "react";
import type { LangCode } from "../types";

const KEY = "chipego.reviews.v1";

// Suggestions are stored per language: { lang: { itemId: suggestedText } }.
type Store = Partial<Record<LangCode, Record<string, string>>>;

function load(): Store {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as Store) : {};
  } catch {
    return {};
  }
}

// Local-only store for native-speaker translation suggestions. Nothing is sent
// anywhere; reviewers export their work and share it with maintainers manually.
// This keeps the review tool fully offline and private, like the rest of the app.
export function useReviews(lang: LangCode) {
  const [store, setStore] = useState<Store>(load);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(store));
    } catch {
      /* storage may be unavailable; suggestions simply won't persist */
    }
  }, [store]);

  const forLang = store[lang] ?? {};

  const setSuggestion = useCallback(
    (itemId: string, text: string) => {
      setStore((prev) => {
        const current = { ...(prev[lang] ?? {}) };
        const trimmed = text.trim();
        if (trimmed) current[itemId] = trimmed;
        else delete current[itemId];
        return { ...prev, [lang]: current };
      });
    },
    [lang]
  );

  const clear = useCallback(() => {
    setStore((prev) => ({ ...prev, [lang]: {} }));
  }, [lang]);

  const count = Object.keys(forLang).length;

  return { suggestions: forLang, setSuggestion, clear, count };
}

// Builds a human- and machine-readable export payload for maintainers.
export function buildExport(
  lang: LangCode,
  suggestions: Record<string, string>,
  sourceById: (id: string) => string | undefined
): string {
  const entries = Object.entries(suggestions);
  const payload = {
    project: "Chipego AI",
    type: "translation-suggestions",
    language: lang,
    submittedAt: new Date().toISOString(),
    count: entries.length,
    suggestions: entries.map(([id, translation]) => ({
      id,
      english: sourceById(id) ?? "",
      translation,
    })),
  };
  return JSON.stringify(payload, null, 2);
}
