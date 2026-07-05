import { Link, useParams } from "react-router-dom";
import { useApp } from "../state/AppContext";
import { getCourse } from "../data/courses";
import Icon from "../components/Icon";

export default function Course() {
  const { courseId } = useParams();
  const { t, tr, isLessonComplete } = useApp();
  const course = courseId ? getCourse(courseId) : undefined;

  if (!course) {
    return (
      <div className="page">
        <Link to="/learn" className="back-link">
          <Icon name="arrow" size={16} className="flip" /> {t("course.back")}
        </Link>
        <p className="muted">Course not found.</p>
      </div>
    );
  }

  const done = course.lessons.filter((l) =>
    isLessonComplete(course.id, l.id)
  ).length;
  const pct = Math.round((done / course.lessons.length) * 100);

  return (
    <div className="page">
      <Link to="/learn" className="back-link">
        <Icon name="arrow" size={16} className="flip" /> {t("course.back")}
      </Link>

      <header className="course-hero">
        <div className={`course-icon big lvl-${course.level}`}>
          <Icon name={course.icon} size={30} />
        </div>
        <div>
          <span className={`lvl-tag lvl-${course.level}`}>{course.level}</span>
          <h1>{tr(course.title)}</h1>
          <p className="muted">{tr(course.summary)}</p>
        </div>
      </header>

      <section className="outcomes">
        <h2 className="section-title sm">{t("learn.outcomes")}</h2>
        <ul className="check-list">
          {course.outcomes.map((o, i) => (
            <li key={i}>
              <Icon name="check" size={16} /> {tr(o)}
            </li>
          ))}
        </ul>
      </section>

      <section className="course-progress">
        <div className="progress-row">
          <span>{t("course.progress")}</span>
          <strong>
            {done} {t("common.of")} {course.lessons.length}
          </strong>
        </div>
        <div className="progress-bar" aria-hidden="true">
          <div className="progress-fill" style={{ width: `${pct}%` }} />
        </div>
      </section>

      <section>
        <h2 className="section-title sm">{t("course.lessonList")}</h2>
        <ol className="lesson-list">
          {course.lessons.map((l, i) => {
            const complete = isLessonComplete(course.id, l.id);
            return (
              <li key={l.id}>
                <Link
                  to={`/learn/${course.id}/${l.id}`}
                  className={`lesson-row ${complete ? "done" : ""}`}
                >
                  <span className={`lesson-num ${complete ? "done" : ""}`}>
                    {complete ? <Icon name="check" size={16} /> : i + 1}
                  </span>
                  <span className="lesson-row-body">
                    <strong>{tr(l.title)}</strong>
                    <span className="muted">
                      {l.minutes} {t("common.min")}
                      {l.quiz ? ` • ${t("lesson.quiz")}` : ""}
                    </span>
                  </span>
                  <Icon name="arrow" size={18} className="row-arrow" />
                </Link>
              </li>
            );
          })}
        </ol>
      </section>
    </div>
  );
}
