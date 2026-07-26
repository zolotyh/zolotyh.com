# Agent Notes

This project is managed with `mise`.

- Node.js and pnpm versions are defined in `.mise.toml`.
- Install/verify tools: `mise install`
- Install dependencies: `mise run install`
- Build the site: `mise run build`
- Serve with live reload: `mise run serve`

Use pnpm for package management. Do not use npm or add npm scripts to `package.json`.
Keep `package.json` clean: no `scripts` and no `dependencies` section.

Eleventy source is `index.md`; output is `_site/`.

## Project structure

- `.eleventy.js` — Eleventy configuration; passes `assets/` through unchanged and ignores `AGENTS.md`.
- `_includes/` — Nunjucks layouts (`base.njk`, `resume-v2.njk`, etc.).
- `index.md` — Home page.
- `resume/index.md` — Russian resume page.
- `resume/en.md` — English resume page.
- `assets/css/` — Stylesheets (`fonts.css`, `main.css`).
- `assets/fonts/` — Self-hosted WOFF2 files.

## Design conventions

- Fonts: Manrope (variable, body text/UI/headings) + Spectral (accent serif for leads/quotes). Fonts are self-hosted as WOFF2 with `font-display: swap`, split into cyrillic/latin subsets via `unicode-range`.
- Typography: HTML output is processed by Typograf (`.eleventy.js` transform, locale by `page.lang`) — quotes, dashes and non-breaking spaces are handled automatically. Do not add manual `&nbsp;` except where the template escapes Typograf rules (e.g. phone numbers in front matter).
- No faux italics: Manrope has no italic axis, so `em`/`h5`/quotes must use Spectral Italic instead.
- Theme: Solarized light/dark color palette via CSS custom properties, with a manual toggle and system-preference fallback.
- Verify changes by building with `mise run build` before committing.
- `.gitignore` excludes `node_modules/`, `_site/`, `merged.ttf`, and `.DS_Store`.
