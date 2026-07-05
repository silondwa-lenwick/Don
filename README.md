# Chipego AI

**AI skills for every young Zambian.**

*Chipego* means "a gift / a talent" in several Zambian languages. Chipego AI is an
offline-first, multilingual Progressive Web App (PWA) that expands access to AI
tools, infrastructure and skills for **marginalized, under-resourced and excluded
young people in Zambia aged 18–24** — so that AI becomes a tool for *empowerment
and poverty reduction*, not exclusion.

This project is an **AI for Good** submission for **Track 1 — Expanding access to
AI tools, infrastructure and skills for underserved young people.** The primary
audience is youth **aged 18–24**.

---

## The problem

Too many young Zambians are being pushed further into systemic poverty and
*invisibility* because they are locked out of the digital economy by three
barriers:

- **Cost** — data and devices are expensive.
- **Connectivity** — networks are unreliable, especially in rural and peri-urban areas.
- **Language** — most digital learning is English-only.

If AI arrives on top of these gaps without deliberate inclusion, it widens them.

## The response — designed *for and shaped by* young people

Chipego AI is built around the barriers above, not around ideal conditions:

| Goal | How Chipego AI delivers it |
| --- | --- |
| **Affordability** | Free, tiny bundle (~80 KB gzipped JS). No accounts, no fees. |
| **Infrastructure & connectivity** | **Offline-first PWA** — after the first load, every lesson, the AI Coach and the resource directory work with **zero data**. |
| **AI literacy & practical skills** | A structured curriculum from "what is AI" to using AI tools and finding opportunity. |
| **Local-language design** | UI and key content in **English, Bemba, Nyanja and Tonga**. |
| **Inclusion & education** | A **Data-saver mode**, big touch targets, low-cost-phone-first UI, and a **Connect** directory of free / low-cost places to get online. |
| **Integration & digital equity** | Youth learn not only to *use* AI, but to *question and help shape* the AI systems and policies affecting their communities. |
| **Empowerment over dependence** | Every lesson protects the learner's **creativity and independent thinking** — AI is taught as a study partner, never a replacement for one's own mind. |

## Features

- **Learn** — four courses, each broken into short, plain-language lessons with
  tips, hands-on practice tasks and quick quizzes:
  1. *Understanding AI in everyday life* (foundation)
  2. *Practical digital skills* (core)
  3. *Using AI tools well* (applied)
  4. *AI for opportunity* (applied)
- **AI Coach** — a private helper that runs **entirely on the phone**. It matches
  questions to a curated, offline knowledge base using keywords (English + local
  terms). No internet, no data, and **questions never leave the device**.
- **Connect** — a community-maintained directory of free / low-cost ways to get
  online in Zambia (public libraries, ZICTA-supported telecentres, school ICT
  labs, youth/NGO hubs, public Wi-Fi) plus practical **data-saving tips**.
- **Progress** — lessons, courses, day-streaks and badges, all stored locally on
  the device. Nothing is uploaded.
- **Language switcher** and **Data-saver mode** available everywhere.

## Responsible-AI principles baked in

- **On-device & private** — the Coach needs no server and collects no data.
- **Honest about limits** — lessons and the Coach repeatedly teach that AI can be
  "confidently wrong" (hallucinations) and must be checked with trusted human
  sources for anything important (health, money, legal, safety).
- **No dark patterns** — no ads, no tracking, no engagement traps.

---

## Tech stack

- **React 18 + TypeScript**
- **Vite 5** build tooling
- **vite-plugin-pwa** (Workbox) for offline caching and installability
- **react-router-dom** (HashRouter, so deep links work from a cached/static host)
- No backend, no external API calls, no analytics — everything ships in the app.

## Getting started

```bash
npm install
npm run dev        # start the dev server
```

Then open the printed local URL.

### Other scripts

```bash
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
npm run lint       # ESLint
```

### Regenerating app icons

The PWA icons are generated from the same motif as `public/favicon.svg`:

```bash
python3 scripts/generate_icons.py   # requires Pillow
```

## Installing as an app (offline use)

1. Open the site in a mobile browser (Chrome/Edge/Safari).
2. Choose **Add to Home screen / Install app**.
3. Open it once while online to cache everything.
4. From then on it works fully offline — ideal when data runs out.

## Deployment

The app builds to a static `dist/` folder, so it can be hosted on any static
host (GitHub Pages, Netlify, Vercel, Cloudflare Pages, etc.). Routing uses
`HashRouter`, so deep links work with no server-side rewrite rules.

### GitHub Pages (automated — included)

A workflow at `.github/workflows/deploy.yml` builds and publishes to GitHub Pages
on every push to `main`. It sets the correct base path automatically from the
repository name, so the app is served correctly under the project subpath
(`https://<user>.github.io/<repo>/`).

**One-time setup (in the GitHub UI):**

1. Go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Push to `main` (or run the workflow manually via **Actions → Deploy Chipego AI
   to GitHub Pages → Run workflow**).
4. The live URL appears in the workflow's `deploy` job and under Settings → Pages.

### Vercel (config included)

A `vercel.json` is included and preconfigured for this Vite app (build command,
`dist` output, SPA fallback and asset caching). Vercel serves at the domain root,
so the default base path (`/`) is correct — no extra environment variables needed.

**Deploy via the dashboard:**

1. Go to [vercel.com/new](https://vercel.com/new) and **Import** this Git repository.
2. Vercel auto-detects the Vite framework and reads `vercel.json`. Keep the
   defaults (Build Command `npm run build`, Output Directory `dist`).
3. Click **Deploy**. Every push to the repo then triggers a new deployment, with
   preview URLs for pull requests.

**Or deploy from the CLI:**

```bash
npm i -g vercel
vercel          # first run links/creates the project and deploys a preview
vercel --prod   # promote to production
```

### Deploying to other static hosts

The base path is configurable through the `BASE_PATH` environment variable
(defaults to `/`):

```bash
# Root of a domain (Netlify, Cloudflare Pages, custom domain):
npm run build

# Under a subpath, e.g. https://example.com/chipego/ :
BASE_PATH=/chipego/ npm run build
```

Then serve the generated `dist/` directory.

## Project structure

```
public/            favicon, generated PWA icons, robots.txt
scripts/           icon generator (Pillow)
src/
  components/       Layout, nav, Icon set, LanguageSwitcher, Quiz
  data/             courses, offline Coach knowledge base, Connect hubs, badges
  i18n/             language metadata + UI string dictionaries (en/bem/nya/toi)
  lib/              offline Coach keyword matcher
  pages/            Home, Learn, Course, Lesson, Coach, Connect, Progress, About
  state/            AppContext (language, data-saver, progress persistence)
  types.ts          shared domain types
```

## Contributing translations & native-speaker review

Because the whole point is a platform *shaped by* Zambian youth, **native-speaker
review of the translations is the single most valuable contribution.** English is
the source of truth; Bemba (`bem`), Nyanja (`nya`) and Tonga (`toi`) start as
community drafts and any missing string falls back to English automatically.

### In-app review tool (no coding needed)

There is a built-in **"Help translate"** hub (footer → *Help translate*, or the
`/review` route, also linked from the About page). It lets any native speaker:

- pick a language and see a live **coverage bar** (how much is translated);
- filter to strings that are **missing** or are only **community drafts needing review**;
- read the English source and current translation side-by-side and **propose a better wording**;
- have suggestions **saved on their own device** (offline, private — nothing is uploaded);
- **export all suggestions as JSON** to paste into a GitHub issue or send to maintainers.

The list is generated automatically from the app's content, so new lessons and
strings show up for review with no extra setup.

### Applying reviewed translations in code

Maintainers fold exported suggestions back into the source:

- UI strings live in `src/i18n/strings.ts`.
- Learning content lives in `src/data/*.ts` as `Localized` objects
  (`{ en: "…", bem: "…", nya: "…", toi: "…" }`).

Each exported suggestion includes the string `id` (e.g. `course/ai-basics/title`
or `ui/home.hero.title`) and the English source to make it easy to locate and
update the right value.

> **Note on the Connect directory:** entries describe **real categories** of
> affordable access that exist in Zambia and are intended as templates. Specific
> details (hours, fees, contacts) should always be verified locally with partner
> organisations before relying on them.

## License

MIT — see `LICENSE`.
