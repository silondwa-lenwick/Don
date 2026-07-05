import { useMemo, useState } from "react";
import { useApp } from "../state/AppContext";
import { LANGUAGES } from "../i18n/languages";
import { collectReviewItems, coverage, type ReviewItem } from "../lib/reviewContent";
import { buildExport, useReviews } from "../state/useReviews";
import type { LangCode } from "../types";
import Icon from "../components/Icon";

type Filter = "missing" | "all" | "mine";

// Native-speaker translation review hub. Reviewers pick a language, see what is
// missing or is only a community draft, propose better wording, and export their
// suggestions for maintainers — all offline and stored on-device.
export default function Review() {
  const { t } = useApp();
  // Default the review target to a non-English language so there is work to do.
  const [target, setTarget] = useState<LangCode>("bem");
  const [filter, setFilter] = useState<Filter>("missing");
  const [search, setSearch] = useState("");
  const [showExport, setShowExport] = useState(false);
  const [copied, setCopied] = useState(false);

  const { suggestions, setSuggestion, clear, count } = useReviews(target);

  const items = useMemo(() => collectReviewItems(target), [target]);
  const stats = useMemo(() => coverage(items), [items]);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return items.filter((it) => {
      if (filter === "missing" && it.translation) return false;
      if (filter === "mine" && !suggestions[it.id]) return false;
      if (q && !it.en.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [items, filter, search, suggestions]);

  const grouped = useMemo(() => groupItems(filtered), [filtered]);

  const isEnglish = target === "en";

  const exportText = useMemo(
    () =>
      buildExport(target, suggestions, (id) =>
        items.find((i) => i.id === id)?.en
      ),
    [target, suggestions, items]
  );

  const copyExport = async () => {
    try {
      await navigator.clipboard.writeText(exportText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="page">
      <header className="page-head">
        <h1>
          <Icon name="globe" size={24} /> {t("review.title")}
        </h1>
        <p className="muted">{t("review.subtitle")}</p>
      </header>

      <section className="review-intro">
        <p>{t("review.intro")}</p>
      </section>

      <label className="review-lang">
        <span className="review-lang-label">{t("review.pickLang")}</span>
        <div className="filters">
          {LANGUAGES.filter((l) => l.code !== "en").map((l) => (
            <button
              key={l.code}
              className={`chip ${target === l.code ? "on" : ""}`}
              onClick={() => {
                setTarget(l.code);
                setShowExport(false);
              }}
            >
              {l.name} <span className="muted">({l.english})</span>
            </button>
          ))}
        </div>
      </label>

      {isEnglish ? (
        <p className="empty-note">{t("review.enOnly")}</p>
      ) : (
        <>
          <section className="coverage-card">
            <div className="coverage-top">
              <span>{t("review.coverage")}</span>
              <strong>
                {stats.pct}% {t("review.translated")}
              </strong>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${stats.pct}%` }} />
            </div>
            <div className="coverage-stats">
              <span>
                {stats.translated}/{stats.total} {t("review.translated")}
              </span>
              <span className="dot">•</span>
              <span>
                {stats.missing} {t("review.missing").toLowerCase()}
              </span>
              {count > 0 && (
                <>
                  <span className="dot">•</span>
                  <span className="mine-count">
                    {count} {t("review.filterMine").toLowerCase()}
                  </span>
                </>
              )}
            </div>
          </section>

          <div className="filters review-filters">
            <button
              className={`chip ${filter === "missing" ? "on" : ""}`}
              onClick={() => setFilter("missing")}
            >
              {t("review.filterMissing")} ({stats.missing})
            </button>
            <button
              className={`chip ${filter === "all" ? "on" : ""}`}
              onClick={() => setFilter("all")}
            >
              {t("review.filterAll")} ({stats.total})
            </button>
            <button
              className={`chip ${filter === "mine" ? "on" : ""}`}
              onClick={() => setFilter("mine")}
            >
              {t("review.filterMine")} ({count})
            </button>
          </div>

          <input
            className="review-search"
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={t("review.search")}
            aria-label={t("review.search")}
          />

          {filtered.length === 0 ? (
            <p className="empty-note">{t("review.noResults")}</p>
          ) : (
            grouped.map(([group, groupItems]) => (
              <section key={group} className="review-group">
                <h2 className="review-group-title">{group}</h2>
                {groupItems.map((it) => (
                  <ReviewRow
                    key={`${target}/${it.id}`}
                    item={it}
                    suggestion={suggestions[it.id]}
                    onChange={(text) => setSuggestion(it.id, text)}
                  />
                ))}
              </section>
            ))
          )}

          <section className="review-export">
            <button
              type="button"
              className="btn primary block"
              onClick={() => setShowExport((s) => !s)}
              disabled={count === 0}
            >
              <Icon name="rise" size={18} /> {t("review.export")} ({count})
            </button>
            {showExport && (
              <div className="export-box">
                <p className="muted small">{t("review.exportHint")}</p>
                <textarea readOnly value={exportText} rows={10} />
                <div className="export-actions">
                  <button type="button" className="btn ghost sm" onClick={copyExport}>
                    <Icon name="check" size={16} />{" "}
                    {copied ? t("review.copied") : t("review.copy")}
                  </button>
                  <button
                    type="button"
                    className="btn ghost sm danger"
                    onClick={() => {
                      if (window.confirm(t("review.clearConfirm"))) {
                        clear();
                        setShowExport(false);
                      }
                    }}
                  >
                    {t("review.clear")}
                  </button>
                </div>
              </div>
            )}
            <p className="muted small review-thanks">{t("review.thanks")}</p>
          </section>
        </>
      )}
    </div>
  );
}

function ReviewRow({
  item,
  suggestion,
  onChange,
}: {
  item: ReviewItem;
  suggestion?: string;
  onChange: (text: string) => void;
}) {
  const { t } = useApp();
  const [value, setValue] = useState(suggestion ?? "");
  const saved = suggestion !== undefined && suggestion === value.trim() && value.trim() !== "";

  return (
    <div className="review-row">
      <div className="review-en">
        <span className="review-tag">{t("review.source")}</span>
        <p>{item.en}</p>
      </div>
      <div className="review-current">
        {item.translation ? (
          <>
            <span className="review-tag draft">{t("review.reviewed")}</span>
            <p>{item.translation}</p>
          </>
        ) : (
          <span className="review-tag missing">{t("review.notTranslated")}</span>
        )}
      </div>
      <label className="review-suggest">
        <span className="review-tag suggest">{t("review.yourSuggestion")}</span>
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => onChange(value)}
          placeholder={t("review.suggestionPlaceholder")}
          rows={2}
        />
      </label>
      {saved && (
        <span className="review-saved">
          <Icon name="check" size={13} /> {t("review.saved")}
        </span>
      )}
    </div>
  );
}

function groupItems(items: ReviewItem[]): [string, ReviewItem[]][] {
  const map = new Map<string, ReviewItem[]>();
  for (const it of items) {
    const arr = map.get(it.group) ?? [];
    arr.push(it);
    map.set(it.group, arr);
  }
  return Array.from(map.entries());
}
