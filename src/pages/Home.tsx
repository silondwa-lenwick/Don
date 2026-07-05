import { Link } from "react-router-dom";
import { useApp } from "../state/AppContext";
import { COURSES, getCourse } from "../data/courses";
import Icon from "../components/Icon";

const PILLARS = [
  {
    icon: "globe",
    title: { en: "Your language" },
    detail: { en: "Learn in English, Bemba, Nyanja or Tonga." },
  },
  {
    icon: "offline",
    title: { en: "Works offline" },
    detail: { en: "No data after the first load. Learn anywhere." },
  },
  {
    icon: "phone",
    title: { en: "Built for small phones" },
    detail: { en: "Light, fast and free — designed for low-cost devices." },
  },
  {
    icon: "brain",
    title: { en: "Keeps you thinking" },
    detail: { en: "AI as a tool that grows your skills, never replaces them." },
  },
] as const;

export default function Home() {
  const { t, tr, progress } = useApp();
  const last = progress.lastLesson;
  const lastCourse = last ? getCourse(last.courseId) : undefined;
  const lastLesson = lastCourse?.lessons.find((l) => l.id === last?.lessonId);

  return (
    <div className="page home">
      <section className="hero">
        <span className="pill badge-offline">
          <Icon name="offline" size={14} /> {t("home.offlineBadge")}
        </span>
        <h1>{t("home.hero.title")}</h1>
        <p className="hero-sub">{t("home.hero.subtitle")}</p>
        <div className="hero-cta">
          <Link to="/learn" className="btn primary">
            <Icon name="learn" size={18} /> {t("home.hero.cta")}
          </Link>
          <Link to="/coach" className="btn ghost">
            <Icon name="chat" size={18} /> {t("home.hero.coach")}
          </Link>
        </div>
      </section>

      {last && lastCourse && lastLesson && (
        <section className="continue-card">
          <div>
            <span className="eyebrow">{t("home.continue")}</span>
            <strong>{tr(lastLesson.title)}</strong>
            <span className="muted">{tr(lastCourse.title)}</span>
          </div>
          <Link
            to={`/learn/${lastCourse.id}/${lastLesson.id}`}
            className="btn primary sm"
          >
            <Icon name="arrow" size={18} />
          </Link>
        </section>
      )}

      <section className="mission">
        <h2>{t("home.mission.title")}</h2>
        <p>{t("home.mission.body")}</p>
      </section>

      <section>
        <h2 className="section-title">{t("home.pillars.title")}</h2>
        <div className="pillars">
          {PILLARS.map((p) => (
            <div className="pillar" key={p.icon}>
              <div className="pillar-icon">
                <Icon name={p.icon} size={22} />
              </div>
              <div>
                <strong>{tr(p.title)}</strong>
                <p>{tr(p.detail)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="section-head">
          <h2 className="section-title">{t("nav.learn")}</h2>
          <Link to="/learn" className="text-link">
            {t("learn.title")} <Icon name="arrow" size={16} />
          </Link>
        </div>
        <div className="course-grid">
          {COURSES.map((c) => (
            <Link key={c.id} to={`/learn/${c.id}`} className="course-card">
              <div className={`course-icon lvl-${c.level}`}>
                <Icon name={c.icon} size={24} />
              </div>
              <strong>{tr(c.title)}</strong>
              <p>{tr(c.summary)}</p>
              <span className="course-meta">
                {c.lessons.length} {t("learn.lessons")}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
