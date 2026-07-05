import { useState } from "react";
import { useApp } from "../state/AppContext";
import type { QuizQuestion } from "../types";
import Icon from "./Icon";

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  return (
    <div className="quiz">
      <h3 className="quiz-heading">
        <Icon name="brain" size={18} /> {useApp().t("lesson.quiz")}
      </h3>
      {questions.map((q) => (
        <QuizItem key={q.id} question={q} />
      ))}
    </div>
  );
}

function QuizItem({ question }: { question: QuizQuestion }) {
  const { t, tr } = useApp();
  const [selected, setSelected] = useState<string | null>(null);
  const [checked, setChecked] = useState(false);

  const isCorrect = checked && selected === question.correctOptionId;
  const isWrong = checked && selected !== question.correctOptionId;

  return (
    <div className="quiz-item">
      <p className="quiz-prompt">{tr(question.prompt)}</p>
      <div className="quiz-options" role="radiogroup">
        {question.options.map((opt) => {
          const active = selected === opt.id;
          const showCorrect = checked && opt.id === question.correctOptionId;
          const showWrong = checked && active && !showCorrect;
          return (
            <button
              key={opt.id}
              type="button"
              role="radio"
              aria-checked={active}
              disabled={checked && isCorrect}
              className={`quiz-option ${active ? "active" : ""} ${
                showCorrect ? "correct" : ""
              } ${showWrong ? "wrong" : ""}`}
              onClick={() => {
                setSelected(opt.id);
                if (!isCorrect) setChecked(false);
              }}
            >
              <span className="opt-mark">
                {showCorrect ? (
                  <Icon name="check" size={14} />
                ) : (
                  <span className="radio-dot" />
                )}
              </span>
              {tr(opt.text)}
            </button>
          );
        })}
      </div>

      {!isCorrect && (
        <button
          type="button"
          className="btn primary sm quiz-check"
          disabled={!selected}
          onClick={() => setChecked(true)}
        >
          {t("lesson.check")}
        </button>
      )}

      {isCorrect && (
        <p className="quiz-feedback correct">
          <Icon name="check" size={16} /> {t("lesson.correct")}{" "}
          {tr(question.explanation)}
        </p>
      )}
      {isWrong && (
        <p className="quiz-feedback wrong">{t("lesson.tryAgain")}</p>
      )}
    </div>
  );
}
