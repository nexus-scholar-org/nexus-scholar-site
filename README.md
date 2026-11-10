# Nexus Scholar site

The public landing page and documentation for [Nexus Scholar](https://github.com/nexus-scholar-org/nexus-scholar-harness), served by GitHub Pages at <https://nexus-scholar-org.github.io/nexus-scholar-site/>.

A static [Astro](https://astro.build/) site with [Starlight](https://starlight.astro.build/) for the docs. No CMS, no analytics, no third-party script; the three typefaces (Literata, Public Sans, IBM Plex Mono) are bundled from npm and served from this site.

## Build it

Needs Node.js 22 or newer.

```bash
npm ci
npm run build      # writes dist/
npm run preview    # serves dist/ at http://localhost:4321/nexus-scholar-site/
```

`npm run dev` serves the source with live reload.

## Update it

| To change | Edit |
| :-- | :-- |
| The landing page | `src/pages/index.astro` (content and the live triage fragment) and `src/styles/landing.css` |
| A docs page | The Markdown file under `src/content/docs/docs/`; the sidebar order is in `astro.config.mjs` |
| A release note | Add `src/content/docs/docs/releases/<version>.md` and its sidebar entry in `astro.config.mjs` |
| A screenshot | Replace the PNG under `src/assets/screens/` (1440×900 at 2×, light theme, English) and check the `alt` text where it is used |
| The docs theme | `src/styles/docs.css` (the brand tokens mapped onto Starlight's variables) |

The facts on the site come from the product repository's docs (`README.md`, `docs/getting-started.md`, `docs/nexus_scholar_user_guide.md`, `docs/data-flow.md`, `docs/beta/README.md`, `docs/releases/`, `docs/architecture/agent-system.md` and `agent_autonomy_ladder.md`). When those change, change the matching page here. The site claims only what the tagged release and the release notes say: a feature on `main` is marked as coming with the next beta until it is tagged.

## Deploy

A push to `main` runs `.github/workflows/pages.yml`, which builds the site and deploys `dist/` to GitHub Pages. The repository's Pages source must be set to "GitHub Actions" (Settings → Pages) once.

The site base path is `/nexus-scholar-site` (`base` in `astro.config.mjs`). To serve it from a custom domain or the organisation root, change `site` and `base` there.

## Design

The brand is the product's own: `docs/ux/brand/` in the product repository (`BRAND_BOOK.md`, `tokens.json`). The landing page's art direction was dealt with the `design-taste-frontend` skill; its direction sheet is kept in `.taste-skill/direction.json` and the working notes in `.taste-skill/notes.md`.

## Licence

MIT, like the product. The screenshots show the app on a 30-record test workspace; the records are real published works whose metadata came from OpenAlex and Crossref.
