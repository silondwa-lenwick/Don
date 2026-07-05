import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { LangCode, Localized } from "../types";
import { DEFAULT_LANG } from "../i18n/languages";
import { uiString, type UIKey } from "../i18n/strings";

const STORAGE_KEY = "chipego.v1";

interface ProgressState {
  completedLessons: string[]; // "courseId/lessonId"
  lastLesson?: { courseId: string; lessonId: string };
  lastVisitDay?: string; // YYYY-MM-DD
  streak: number;
}

interface PersistedState {
  lang: LangCode;
  dataSaver: boolean;
  progress: ProgressState;
}

const initialState: PersistedState = {
  lang: DEFAULT_LANG,
  dataSaver: false,
  progress: { completedLessons: [], streak: 0 },
};

function load(): PersistedState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw) as Partial<PersistedState>;
    return {
      lang: parsed.lang ?? initialState.lang,
      dataSaver: parsed.dataSaver ?? initialState.dataSaver,
      progress: {
        completedLessons: parsed.progress?.completedLessons ?? [],
        lastLesson: parsed.progress?.lastLesson,
        lastVisitDay: parsed.progress?.lastVisitDay,
        streak: parsed.progress?.streak ?? 0,
      },
    };
  } catch {
    return initialState;
  }
}

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string): number {
  const da = new Date(a + "T00:00:00Z").getTime();
  const db = new Date(b + "T00:00:00Z").getTime();
  return Math.round((db - da) / 86400000);
}

interface AppContextValue {
  lang: LangCode;
  setLang: (l: LangCode) => void;
  dataSaver: boolean;
  setDataSaver: (v: boolean) => void;
  progress: ProgressState;
  t: (key: UIKey) => string;
  tr: (value: Localized | undefined) => string;
  completeLesson: (courseId: string, lessonId: string) => void;
  isLessonComplete: (courseId: string, lessonId: string) => boolean;
  setLastLesson: (courseId: string, lessonId: string) => void;
  resetProgress: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PersistedState>(load);

  // Update the day streak once, on first mount.
  useEffect(() => {
    setState((prev) => {
      const now = today();
      const last = prev.progress.lastVisitDay;
      let streak = prev.progress.streak;
      if (!last) {
        streak = 1;
      } else {
        const gap = daysBetween(last, now);
        if (gap === 0) {
          streak = Math.max(1, streak);
        } else if (gap === 1) {
          streak = streak + 1;
        } else if (gap > 1) {
          streak = 1;
        }
      }
      if (last === now && prev.progress.streak === streak) return prev;
      return {
        ...prev,
        progress: { ...prev.progress, lastVisitDay: now, streak },
      };
    });
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* storage may be unavailable in private mode; app still works */
    }
  }, [state]);

  useEffect(() => {
    document.documentElement.lang = state.lang;
    document.documentElement.dataset.saver = state.dataSaver ? "on" : "off";
  }, [state.lang, state.dataSaver]);

  const setLang = useCallback((l: LangCode) => {
    setState((p) => ({ ...p, lang: l }));
  }, []);

  const setDataSaver = useCallback((v: boolean) => {
    setState((p) => ({ ...p, dataSaver: v }));
  }, []);

  const completeLesson = useCallback((courseId: string, lessonId: string) => {
    const key = `${courseId}/${lessonId}`;
    setState((p) => {
      if (p.progress.completedLessons.includes(key)) return p;
      return {
        ...p,
        progress: {
          ...p.progress,
          completedLessons: [...p.progress.completedLessons, key],
        },
      };
    });
  }, []);

  const setLastLesson = useCallback((courseId: string, lessonId: string) => {
    setState((p) => ({
      ...p,
      progress: { ...p.progress, lastLesson: { courseId, lessonId } },
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setState((p) => ({
      ...p,
      progress: { completedLessons: [], streak: p.progress.streak, lastVisitDay: today() },
    }));
  }, []);

  const value = useMemo<AppContextValue>(() => {
    const t = (key: UIKey) => uiString(state.lang, key);
    const tr = (v: Localized | undefined) =>
      v ? v[state.lang] || v.en : "";
    return {
      lang: state.lang,
      setLang,
      dataSaver: state.dataSaver,
      setDataSaver,
      progress: state.progress,
      t,
      tr,
      completeLesson,
      isLessonComplete: (c, l) =>
        state.progress.completedLessons.includes(`${c}/${l}`),
      setLastLesson,
      resetProgress,
    };
  }, [state, setLang, setDataSaver, completeLesson, setLastLesson, resetProgress]);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useApp(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
