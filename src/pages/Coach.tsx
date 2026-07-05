import { useRef, useState } from "react";
import { useApp } from "../state/AppContext";
import { COACH_ENTRIES } from "../data/coach";
import { matchCoach } from "../lib/coach";
import Icon from "../components/Icon";

interface Message {
  role: "user" | "coach";
  text: string;
}

// Suggested starter questions drawn from the knowledge base.
const SUGGESTED_IDS = ["what-is-ai", "trust-ai", "save-data", "scam-safety", "find-work", "get-online"];

export default function Coach() {
  const { t, tr, lang } = useApp();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const send = (raw: string) => {
    const text = raw.trim();
    if (!text) return;
    const match = matchCoach(text);
    const answer = match ? tr(match.answer) : t("coach.noMatch");
    setMessages((m) => [
      ...m,
      { role: "user", text },
      { role: "coach", text: answer },
    ]);
    setInput("");
    requestAnimationFrame(() => {
      listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
    });
  };

  const suggestions = COACH_ENTRIES.filter((e) => SUGGESTED_IDS.includes(e.id));

  return (
    <div className="page coach-page">
      <header className="page-head">
        <h1>
          <Icon name="chat" size={24} /> {t("coach.title")}
        </h1>
        <p className="muted">{t("coach.subtitle")}</p>
        <span className="pill badge-offline">
          <Icon name="shield" size={13} /> {t("coach.offlineNote")}
        </span>
      </header>

      <div className="coach-window" ref={listRef}>
        {messages.length === 0 ? (
          <div className="coach-empty">
            <Icon name="chat" size={40} />
            <p>{t("coach.empty")}</p>
          </div>
        ) : (
          messages.map((m, i) => (
            <div key={i} className={`bubble ${m.role}`}>
              {m.text}
            </div>
          ))
        )}
      </div>

      <div className="suggestions">
        <span className="suggestions-label">{t("coach.suggested")}</span>
        <div className="suggestion-chips">
          {suggestions.map((s) => (
            <button
              key={s.id}
              type="button"
              className="chip suggestion"
              onClick={() => send(s.question[lang] || s.question.en)}
            >
              {tr(s.question)}
            </button>
          ))}
        </div>
      </div>

      <form
        className="coach-input"
        onSubmit={(e) => {
          e.preventDefault();
          send(input);
        }}
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={t("coach.placeholder")}
          aria-label={t("coach.placeholder")}
        />
        <button type="submit" className="btn primary" disabled={!input.trim()}>
          <Icon name="arrow" size={18} />
          <span className="hide-sm">{t("coach.ask")}</span>
        </button>
      </form>
    </div>
  );
}
