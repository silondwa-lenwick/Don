import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../state/AppContext";
import { COURSES } from "../data/courses";
import type { Level, Localized } from "../types";
import Icon from "../components/Icon";

const LEVELS: { id: Level; label: Localized }[] = [
  { id: "foundation", label: { en: "Foundation" } },
  { id: "core", label: { en: "Core" } },
  { id: "applied", label: { en: "Applied" } },
];

export default function Learn() {
  const { t, tr, progress } = useApp();
  const [level, setLevel] = useState<Level | "all">("all");

  const courses = useMemo(
    () => (level === "all" ? COURSES : COURSES.filter((c) => c.level === level)),
    [level]
  );

  return (
    <div className="page">
      <header className="page-head">
        <h1>{t("learn.title")}</h1>
        <p className="muted">{t("learn.subtitle")}</p>
      </header>

      <div className="filters" role="tablist" aria-label="Levels">
        <button
          className={`chip ${level === "all" ? "on" : ""}`}
          onClick={() => setLevel("all")}
        >
          {t("learn.allLevels")}
        </button>
        {LEVELS.map((l) => (
          <button
            key={l.id}
            className={`chip ${level === l.id ? "on" : ""}`}
            onClick={() => setLevel(l.id)}
          >
            {tr(l.label)}
          </button>
        ))}
      </div>

      <div className="course-list">
        {courses.map((c) => {
          const done = c.lessons.filter((l) =>
            progress.completedLessons.includes(`${c.id}/${l.id}`)
          ).length;
          const total = c.lessons.length;
          const pct = Math.round((done / total) * 100);
          const started = done > 0;
          const complete = done === total;
          return (
            <Link key={c.id} to={`/learn/${c.id}`} className="course-row">
              <div className={`course-icon lvl-${c.level}`}>
                <Icon name={c.icon} size={26} />
              </div>
              <div className="course-row-body">
                <div className="course-row-top">
                  <strong>{tr(c.title)}</strong>
                  {complete && (
                    <span className="pill done">
                      <Icon name="check" size={13} /> {t("learn.completed")}
                    </span>
                  )}
                </div>
                <p className="muted">{tr(c.summary)}</p>
                <div className="course-row-meta">
                  <span>
                    {total} {t("learn.lessons")}
                  </span>
                  <span className="dot">•</span>
                  <span className={`lvl-tag lvl-${c.level}`}>{c.level}</span>
                </div>
                {started && (
                  <div className="progress-bar" aria-hidden="true">
                    <div className="progress-fill" style={{ width: `${pct}%` }} />
                  </div>
                )}
              </div>
              <Icon name="arrow" size={20} className="row-arrow" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
