import { type ReactNode, useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useApp } from "../state/AppContext";
import Icon from "./Icon";
import LanguageSwitcher from "./LanguageSwitcher";

const NAV = [
  { to: "/", key: "nav.home", icon: "home", end: true },
  { to: "/learn", key: "nav.learn", icon: "learn", end: false },
  { to: "/coach", key: "nav.coach", icon: "chat", end: false },
  { to: "/connect", key: "nav.connect", icon: "connect", end: false },
  { to: "/progress", key: "nav.progress", icon: "progress", end: false },
] as const;

function useOnline(): boolean {
  const [online, setOnline] = useState(
    typeof navigator !== "undefined" ? navigator.onLine : true
  );
  useEffect(() => {
    const on = () => setOnline(true);
    const off = () => setOnline(false);
    window.addEventListener("online", on);
    window.addEventListener("offline", off);
    return () => {
      window.removeEventListener("online", on);
      window.removeEventListener("offline", off);
    };
  }, []);
  return online;
}

export default function Layout({ children }: { children: ReactNode }) {
  const { t, dataSaver, setDataSaver } = useApp();
  const online = useOnline();

  return (
    <div className="app-shell">
      <header className="topbar">
        <Link to="/" className="brand" aria-label={t("app.name")}>
          <img src="/favicon.svg" alt="" width={30} height={30} />
          <span className="brand-text">
            <strong>{t("app.name")}</strong>
            <em>{t("app.tagline")}</em>
          </span>
        </Link>
        <div className="topbar-actions">
          <button
            type="button"
            className={`chip toggle ${dataSaver ? "on" : ""}`}
            onClick={() => setDataSaver(!dataSaver)}
            aria-pressed={dataSaver}
            title={t("settings.dataSaverHint")}
          >
            <Icon name="wifi" size={16} />
            <span className="hide-sm">{t("settings.dataSaver")}</span>
          </button>
          <LanguageSwitcher />
        </div>
      </header>

      {!online && (
        <div className="offline-banner" role="status">
          <Icon name="offline" size={16} />
          <span>{t("home.offlineBadge")}</span>
        </div>
      )}

      <main className="content">{children}</main>

      <footer className="site-footer">
        <p>{t("footer.builtWith")}</p>
        <span className="footer-links">
          <Link to="/review" className="footer-link">
            {t("nav.review")}
          </Link>
          <Link to="/about" className="footer-link">
            {t("nav.about")}
          </Link>
        </span>
      </footer>

      <nav className="bottom-nav" aria-label="Primary">
        {NAV.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`}
          >
            <Icon name={item.icon} size={22} />
            <span>{t(item.key)}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
