import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useApp } from "../state/AppContext";
import { getCourse } from "../data/courses";
import type { LessonBlock } from "../types";
import Icon from "../components/Icon";
import Quiz from "../components/Quiz";

function Block({ block }: { block: LessonBlock }) {
  const { tr, t } = useApp();
  switch (block.type) {
    case "heading":
      return <h2 className="lesson-heading">{tr(block.value)}</h2>;
    case "text":
      return <p className="lesson-text">{tr(block.value)}</p>;
    case "tip":
      return (
        <aside className="tip">
          <span className="tip-label">
            <Icon name="spark" size={16} /> {t("lesson.tip")}
          </span>
          <p>{tr(block.value)}</p>
        </aside>
      );
    case "list":
      return (
        <ul className="lesson-list-blocks">
          {block.value.map((v, i) => (
            <li key={i}>{tr(v)}</li>
          ))}
        </ul>
      );
    default:
      return null;
  }
}

export default function Lesson() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const { t, tr, completeLesson, isLessonComplete, setLastLesson } = useApp();

  const course = courseId ? getCourse(courseId) : undefined;
  const index = course?.lessons.findIndex((l) => l.id === lessonId) ?? -1;
  const lesson = index >= 0 ? course!.lessons[index] : undefined;

  useEffect(() => {
    if (course && lesson) setLastLesson(course.id, lesson.id);
    window.scrollTo(0, 0);
  }, [course, lesson, setLastLesson]);

  if (!course || !lesson) {
    return (
      <div className="page">
        <Link to="/learn" className="back-link">
          <Icon name="arrow" size={16} className="flip" /> {t("course.back")}
        </Link>
        <p className="muted">Lesson not found.</p>
      </div>
    );
  }

  const done = isLessonComplete(course.id, lesson.id);
  const next = course.lessons[index + 1];
  const isLast = index === course.lessons.length - 1;

  const handleComplete = () => {
    completeLesson(course.id, lesson.id);
    if (next) {
      navigate(`/learn/${course.id}/${next.id}`);
    } else {
      navigate(`/learn/${course.id}`);
    }
  };

  return (
    <div className="page lesson-page">
      <Link to={`/learn/${course.id}`} className="back-link">
        <Icon name="arrow" size={16} className="flip" /> {t("lesson.back")}
      </Link>

      <header className="lesson-header">
        <span className="eyebrow">
          {tr(course.title)} • {index + 1}/{course.lessons.length}
        </span>
        <h1>{tr(lesson.title)}</h1>
        <span className="muted">
          {lesson.minutes} {t("common.min")}
        </span>
      </header>

      <article className="lesson-body">
        {lesson.blocks.map((b, i) => (
          <Block key={i} block={b} />
        ))}

        {lesson.practice && (
          <section className="practice">
            <span className="practice-label">
              <Icon name="rise" size={16} /> {t("lesson.practice")}
            </span>
            <p>{tr(lesson.practice)}</p>
          </section>
        )}

        {lesson.quiz && lesson.quiz.length > 0 && (
          <Quiz questions={lesson.quiz} />
        )}
      </article>

      <div className="lesson-actions">
        {done ? (
          <span className="pill done big">
            <Icon name="check" size={16} /> {t("lesson.done")}
          </span>
        ) : null}
        <button type="button" className="btn primary block" onClick={handleComplete}>
          <Icon name="check" size={18} />{" "}
          {isLast ? t("lesson.finish") : t("lesson.next")}
        </button>
      </div>
    </div>
  );
}
