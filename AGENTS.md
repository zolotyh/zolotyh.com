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

- Fonts: Tilda Sans VF for headings, Tinos for body text. Fonts are self-hosted as WOFF2 with `font-display: swap`.
- Theme: Solarized light/dark color palette via CSS custom properties, with a manual toggle and system-preference fallback.
- Verify changes by building with `mise run build` before committing.
- `.gitignore` excludes `node_modules/`, `_site/`, `merged.ttf`, and `.DS_Store`.
