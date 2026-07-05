import { useApp } from "../state/AppContext";
import { COURSES } from "../data/courses";
import { BADGES } from "../data/badges";
import Icon from "../components/Icon";

export default function Progress() {
  const { t, tr, progress, resetProgress } = useApp();

  const lessonsDone = progress.completedLessons.length;
  const coursesDone = COURSES.filter((c) =>
    c.lessons.every((l) => progress.completedLessons.includes(`${c.id}/${l.id}`))
  ).length;

  const badgeCtx = {
    completedLessons: progress.completedLessons,
    streak: progress.streak,
  };
  const earned = BADGES.filter((b) => b.earned(badgeCtx));

  return (
    <div className="page">
      <header className="page-head">
        <h1>
          <Icon name="progress" size={24} /> {t("progress.title")}
        </h1>
        <p className="muted">{t("progress.subtitle")}</p>
      </header>

      <div className="stat-grid">
        <div className="stat">
          <span className="stat-num">{lessonsDone}</span>
          <span className="stat-label">{t("progress.lessonsDone")}</span>
        </div>
        <div className="stat">
          <span className="stat-num">{coursesDone}</span>
          <span className="stat-label">{t("progress.coursesDone")}</span>
        </div>
        <div className="stat">
          <span className="stat-num">
            {progress.streak} <Icon name="flame" size={20} />
          </span>
          <span className="stat-label">{t("progress.streak")}</span>
        </div>
      </div>

      <section>
        <h2 className="section-title sm">{t("progress.badges")}</h2>
        {earned.length === 0 ? (
          <p className="muted empty-note">{t("progress.noBadges")}</p>
        ) : (
          <div className="badge-grid">
            {BADGES.map((b) => {
              const has = b.earned(badgeCtx);
              return (
                <div key={b.id} className={`badge-card ${has ? "earned" : "locked"}`}>
                  <div className="badge-icon">
                    <Icon name={b.icon} size={26} />
                  </div>
                  <strong>{tr(b.title)}</strong>
                  <p>{tr(b.description)}</p>
                </div>
              );
            })}
          </div>
        )}
      </section>

      <section className="course-progress-list">
        <h2 className="section-title sm">{t("nav.learn")}</h2>
        {COURSES.map((c) => {
          const done = c.lessons.filter((l) =>
            progress.completedLessons.includes(`${c.id}/${l.id}`)
          ).length;
          const pct = Math.round((done / c.lessons.length) * 100);
          return (
            <div key={c.id} className="mini-progress">
              <div className="mini-progress-top">
                <span>{tr(c.title)}</span>
                <span className="muted">
                  {done}/{c.lessons.length}
                </span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </section>

      <button
        type="button"
        className="btn ghost danger"
        onClick={() => {
          if (window.confirm(t("progress.resetConfirm"))) resetProgress();
        }}
      >
        {t("progress.reset")}
      </button>
    </div>
  );
}
