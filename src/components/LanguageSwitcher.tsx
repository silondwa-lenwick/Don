import { useApp } from "../state/AppContext";
import { LANGUAGES } from "../i18n/languages";
import Icon from "./Icon";

export default function LanguageSwitcher() {
  const { lang, setLang, t } = useApp();
  return (
    <label className="lang-switch" title={t("settings.language")}>
      <Icon name="globe" size={18} />
      <span className="sr-only">{t("settings.language")}</span>
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value as typeof lang)}
        aria-label={t("settings.language")}
      >
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.name}
          </option>
        ))}
      </select>
    </label>
  );
}
