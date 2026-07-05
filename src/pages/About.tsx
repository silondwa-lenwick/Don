import { useApp } from "../state/AppContext";
import Icon from "../components/Icon";

// The About page states the mission plainly so the values are visible in-product,
// not only in the repository docs.
const VALUES = [
  {
    icon: "globe",
    title: "Designed in local languages",
    body: "English, Bemba, Nyanja and Tonga — so language is never a barrier to AI literacy.",
  },
  {
    icon: "offline",
    title: "Affordable & offline-first",
    body: "Free, tiny, and fully usable without data after the first load. Built for low-cost phones and weak connections.",
  },
  {
    icon: "brain",
    title: "Empowerment, not dependence",
    body: "AI is taught as a tool that builds practical skills while protecting each learner's own creativity and independent thinking.",
  },
  {
    icon: "people",
    title: "For and shaped by youth",
    body: "Aimed at marginalized, under-resourced and excluded young people, so no one is pushed further into poverty or invisibility.",
  },
  {
    icon: "shield",
    title: "Private by design",
    body: "The AI Coach runs entirely on your phone. Your questions and progress never leave your device.",
  },
  {
    icon: "rise",
    title: "Digital equity",
    body: "Beyond access: young people learn to question and help shape the AI systems and rules that affect their communities.",
  },
] as const;

export default function About() {
  const { t } = useApp();
  return (
    <div className="page about">
      <header className="page-head">
        <h1>{t("about.title")}</h1>
      </header>

      <section className="mission about-mission">
        <div className="course-icon big lvl-foundation">
          <img src="/favicon.svg" alt="" width={34} height={34} />
        </div>
        <h2>{t("app.name")}</h2>
        <p>{t("home.mission.body")}</p>
      </section>

      <div className="value-grid">
        {VALUES.map((v) => (
          <div className="value-card" key={v.title}>
            <div className="value-icon">
              <Icon name={v.icon} size={22} />
            </div>
            <strong>{v.title}</strong>
            <p>{v.body}</p>
          </div>
        ))}
      </div>

      <section className="about-track">
        <span className="eyebrow">AI for Good • Zambia</span>
        <h2 className="section-title">Track 1 — Access to AI tools, infrastructure & skills</h2>
        <p className="muted">
          Chipego AI focuses on expanding access to AI tools, infrastructure and
          skills for underserved young people — through affordability, offline
          access, AI literacy, practical skills, local-language design,
          inclusion, education and digital equity.
        </p>
        <p className="muted small">
          Translations for Bemba, Nyanja and Tonga are community-reviewable and
          improving. If you speak these languages, your contributions are
          welcome — see the project README.
        </p>
      </section>
    </div>
  );
}
