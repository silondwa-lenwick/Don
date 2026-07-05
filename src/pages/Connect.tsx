import { useMemo, useState } from "react";
import { useApp } from "../state/AppContext";
import { DATA_SAVER_TIPS, RESOURCE_HUBS } from "../data/connect";
import type { ResourceHub } from "../types";
import Icon from "../components/Icon";

const KIND_ICON: Record<ResourceHub["kind"], string> = {
  library: "book",
  telecentre: "wifi",
  school: "learn",
  ngo: "people",
  wifi: "wifi",
  helpline: "shield",
};

const KIND_LABEL: Record<ResourceHub["kind"], string> = {
  library: "Library",
  telecentre: "Telecentre",
  school: "School / college",
  ngo: "NGO hub",
  wifi: "Wi‑Fi point",
  helpline: "Info & help",
};

export default function Connect() {
  const { t, tr } = useApp();
  const [filter, setFilter] = useState<ResourceHub["kind"] | "all">("all");

  const kinds = useMemo(
    () => Array.from(new Set(RESOURCE_HUBS.map((r) => r.kind))),
    []
  );
  const hubs = useMemo(
    () =>
      filter === "all"
        ? RESOURCE_HUBS
        : RESOURCE_HUBS.filter((r) => r.kind === filter),
    [filter]
  );

  return (
    <div className="page">
      <header className="page-head">
        <h1>
          <Icon name="connect" size={24} /> {t("connect.title")}
        </h1>
        <p className="muted">{t("connect.subtitle")}</p>
      </header>

      <section className="datasaver">
        <h2 className="section-title sm">
          <Icon name="wifi" size={18} /> {t("connect.datasaver")}
        </h2>
        <div className="tip-grid">
          {DATA_SAVER_TIPS.map((tip) => (
            <div className="tip-card" key={tip.id}>
              <strong>{tr(tip.title)}</strong>
              <p>{tr(tip.body)}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-title sm">{t("connect.hubs")}</h2>
        <div className="filters">
          <button
            className={`chip ${filter === "all" ? "on" : ""}`}
            onClick={() => setFilter("all")}
          >
            {t("connect.filterAll")}
          </button>
          {kinds.map((k) => (
            <button
              key={k}
              className={`chip ${filter === k ? "on" : ""}`}
              onClick={() => setFilter(k)}
            >
              {KIND_LABEL[k]}
            </button>
          ))}
        </div>

        <div className="hub-list">
          {hubs.map((h) => (
            <article className="hub-card" key={h.id}>
              <div className="hub-icon">
                <Icon name={KIND_ICON[h.kind]} size={22} />
              </div>
              <div className="hub-body">
                <div className="hub-top">
                  <strong>{h.name}</strong>
                  <span className={`pill cost ${h.cost}`}>
                    {h.cost === "free" ? t("connect.free") : t("connect.lowcost")}
                  </span>
                </div>
                <span className="muted hub-loc">
                  {KIND_LABEL[h.kind]} • {h.town}, {h.province}
                </span>
                <p>{tr(h.description)}</p>
                {h.contact && <span className="hub-contact">{h.contact}</span>}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
