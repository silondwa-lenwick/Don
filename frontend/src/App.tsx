import { useState } from "react";

type TriageResponse = {
  category: string;
  confidence: number;
  priority: number;
  scores: Record<string, number>;
};

const CATEGORY_META: Record<string, { color: string; icon: string }> = {
  Rescue: { color: "#dc2626", icon: "🚨" },
  Medical: { color: "#ea580c", icon: "🩺" },
  "Food & Water": { color: "#ca8a04", icon: "🥫" },
  Shelter: { color: "#2563eb", icon: "🏠" },
  Other: { color: "#6b7280", icon: "ℹ️" },
};

const PRIORITY_LABEL = ["", "Low", "Guarded", "Elevated", "High", "Critical"];

const EXAMPLES = [
  "My father is having chest pains and cannot breathe.",
  "We are trapped on the roof and the water is rising fast.",
  "There is no clean drinking water left for the children.",
  "Our house was destroyed, we need tents and blankets tonight.",
  "How can I volunteer to help with the relief effort?",
];

export default function App() {
  const [message, setMessage] = useState("");
  const [result, setResult] = useState<TriageResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function triage(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const res = await fetch("/api/triage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });
      if (!res.ok) throw new Error(`Request failed (${res.status})`);
      setResult((await res.json()) as TriageResponse);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }

  const meta = result ? CATEGORY_META[result.category] : null;
  const sortedScores = result
    ? Object.entries(result.scores).sort((a, b) => b[1] - a[1])
    : [];

  return (
    <div className="page">
      <header className="hero">
        <h1>🌍 AI for Good — Crisis Message Triage</h1>
        <p>
          Paste an incoming help-request message. The model classifies the type
          of need and assigns a priority so responders can act on the most
          urgent cases first.
        </p>
      </header>

      <main className="card">
        <label className="field-label" htmlFor="message">
          Incoming message
        </label>
        <textarea
          id="message"
          value={message}
          placeholder="e.g. We are trapped on the roof and the water is rising…"
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />

        <div className="examples">
          <span className="examples-label">Try an example:</span>
          {EXAMPLES.map((ex) => (
            <button
              key={ex}
              type="button"
              className="chip"
              onClick={() => {
                setMessage(ex);
                triage(ex);
              }}
            >
              {ex.length > 34 ? `${ex.slice(0, 34)}…` : ex}
            </button>
          ))}
        </div>

        <button
          className="primary"
          onClick={() => triage(message)}
          disabled={loading || !message.trim()}
        >
          {loading ? "Triaging…" : "Triage message"}
        </button>

        {error && <div className="error">⚠️ {error}</div>}

        {result && meta && (
          <div className="result" style={{ borderColor: meta.color }}>
            <div className="result-header" style={{ background: meta.color }}>
              <span className="result-icon">{meta.icon}</span>
              <div>
                <div className="result-category">{result.category}</div>
                <div className="result-priority">
                  Priority {result.priority} · {PRIORITY_LABEL[result.priority]}
                </div>
              </div>
              <div className="result-confidence">
                {(result.confidence * 100).toFixed(0)}%
              </div>
            </div>
            <div className="scores">
              {sortedScores.map(([cat, score]) => (
                <div className="score-row" key={cat}>
                  <span className="score-label">{cat}</span>
                  <div className="score-bar-track">
                    <div
                      className="score-bar-fill"
                      style={{
                        width: `${score * 100}%`,
                        background: CATEGORY_META[cat]?.color ?? "#6b7280",
                      }}
                    />
                  </div>
                  <span className="score-value">
                    {(score * 100).toFixed(0)}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="footer">
        Built for social good · runs fully locally · no personal data stored
      </footer>
    </div>
  );
}
