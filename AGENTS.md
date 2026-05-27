# Agent Guide

Personal portfolio and blog site for devksingh.com, built with Astro 6, Tailwind CSS v4, and MDX. Deployed to Cloudflare Pages via Github Actions. The homepage is a single-page "Classic Swiss" design (anchor-nav sections, light/dark toggle, ⌘K command palette); see the Design section below.

## Commands

```bash
yarn dev          # dev server on http://localhost:4321
yarn build        # production build → ./build/
yarn typecheck    # astro check (TypeScript + Astro types)
yarn format:check # prettier + eslint (read-only)
yarn format:fix   # prettier + eslint (auto-fix)
```

**After every change, run:**

```bash
yarn typecheck && yarn format:fix
```

CI runs `yarn typecheck` and `yarn format:check` on every push to master. Builds that fail either check won't deploy.

**Keep this file accurate:** if a change you make causes anything in `AGENTS.md` to become wrong or out of date (commands, structure, deployment, tech choices, etc.), update `AGENTS.md` in the same change.

## Project Structure

```
src/
  components/       # Single-page sections (Hero/intro, About, Experience, Work,
                    # Blog) + SiteHeader, SiteFooter, BusinessCard (contact card,
                    # lives in the intro), Label, PostList (shared blog-post row
                    # list), CommandPalette (vanilla <script> island)
  content/blog/     # MDX blog posts (frontmatter schema in src/content.config.ts)
  data/portfolio.ts # All homepage copy + the brand accent color: hero, bio,
                    # skills, projects, experience, education, now, links, accent
  data/siteNav.ts   # Shared navbar sections (id + label), used by every page
  layouts/          # Layout (base shell + theme), ArticleLayout (blog posts —
                    # renders SiteHeader + CommandPalette so articles get the navbar)
  scripts/          # smoothScroll.ts (anchor-scroll), reveal.ts (reveal-on-scroll)
  pages/            # File-based routing: index (single-page site), blog (post
                    # archive), blog/[slug], 404
  styles/global.css # Tailwind v4 @theme tokens, dark variant, prose styles
public/             # Static assets (PDFs, favicons)
build/              # Output directory (git-ignored in CI, checked in locally)
astro.config.mjs    # Astro config
tailwind.config.mjs # legacy v3 config, unused under v4 (theming lives in global.css)
```

## Adding a Blog Post

1. Create `src/content/blog/<slug>.mdx` with this frontmatter:

```mdx
---
title: 'Post Title'
excerpt: 'One-sentence summary shown in the blog listing.'
date: 'Month DD, YYYY'
tags: ['Tag1', 'Tag2']
byline: 'Author Name'
published: true
---
```

2. Set `published: false` to draft (returns 404 publicly).
3. Attach PDFs by placing them in `public/` and linking with a relative path.

Published posts (sorted newest-first, with an estimated read time) are rendered at `/blog/<slug>`, listed in full on the **blog archive** page (`/blog`), and the most recent few are surfaced in the homepage **Blog** section (`/#blog`). The homepage count is the `RECENT_COUNT` constant in `Blog.astro`; both lists share `PostList.astro`.

## Design

Single-page "Classic Swiss" layout at `/`: 1536px max-width grid, Helvetica stack, one warm-red accent (`portfolio.accent`, default `#c8553d`), generous whitespace, 1px hairline rules. Reading pages (blog articles and the `/blog` archive) use a narrower 900px container. Sections (`#about`, `#experience`, `#work`, `#blog`) each use a `160px` label column + fluid content column. The intro (`#about`) carries the contact card and an immediate Resume link — there's no separate contact section.

- **Theme tokens** live in `src/styles/global.css` as CSS custom properties (`--bg`, `--fg`, `--muted`, `--rule`, `--card`) that flip under `.dark`, mapped to Tailwind utilities via `@theme inline` (`bg-bg`, `text-fg`, `border-rule`, …). The accent (`--accent` → `bg-accent`/`text-accent`) is mode-independent and injected on `<html>` from `portfolio.accent` by `Layout.astro` — change the color there, not in CSS. Reusable recipes: `.label-caps`, `.pill`, `.ln`.
- **Dark mode** is class-based (`.dark` on `<html>`). An inline script in `Layout.astro` sets it before paint from `localStorage['dks:theme']` / `prefers-color-scheme`; `[data-theme-toggle]` buttons flip it.
- **Command palette** (⌘K / Ctrl-K): `CommandPalette.astro`, a vanilla `<script>` island — no UI framework. Indexes the whole site: section anchors, every project, experience entry, education entry, skill group, and published blog post, plus links and the theme toggle. Content rows `jump` to per-item anchor ids (`#work-<i>`, `#exp-<company>-<role>`, `#edu-<school>-<program>`, `#skills-<i>`) that the section components render from the same `portfolio.ts` array order (index-based, so they stay in sync — experience nests roles under a company and education nests programs under a school, so those anchors are two-level) — selecting one scrolls there and briefly rings it (`.cmdk-flash`). Each row carries `keywords` (space-separated, matched but not displayed — a project's stack, a skill group's tools, "CV" → Resume); results are ranked label-first (`label`-start > `label`-contains > keyword/group). The matched substring is tinted wherever it appears: in the title, and — when the hit is only on hidden keywords — in a snippet shown beneath the title. A long title that would clip the match off its edge is re-rendered as a window around the match so it stays visible. Rendered on every page (homepage, blog archive, and — via `ArticleLayout` — articles); from a sub-page, a `jump` whose target isn't on the current page navigates to `/#target` on the homepage instead of scrolling.
- **Reveal-on-scroll**: `[data-reveal]` elements fade/slide in via an IntersectionObserver. The observer is `initReveal()` in `scripts/reveal.ts`, called from each page that renders `[data-reveal]` (`index.astro`, `blog/index.astro`). The hide rule is gated on `html.js`, so content stays visible if JS never runs.
- **Navbar** (`SiteHeader.astro`) is **sticky** — `sticky top-0 z-40`, solid `bg-bg`, hairline bottom border (Swiss style). It renders the `siteNav` sections; its `base` prop is `''` on the homepage (in-page `#id` links, intercepted in `index.astro` to smooth-scroll) and `'/'` on sub-pages (blog archive + articles → `/#id`, native nav back to the homepage; the brand links home). An `active` prop highlights the current section in accent (blog pages pass `active="blog"`); on the homepage the scroll spy toggles the same highlight live. Anchor targets clear the sticky bar via `scroll-padding-top: 5rem` (`global.css`, native jumps) and a matching `NAV_OFFSET` (80px) in `scripts/smoothScroll.ts` (JS smooth-scroll) — keep the two in sync.
- **Scroll spy**: a scroll listener in `index.astro` reflects the section currently at the top of the viewport in the URL hash via `replaceState` (no history entries) and highlights that section's navbar link. URL writes happen on scroll only — never on load — so a fresh `/` or a deep link is left alone until you move; the highlight is synced once up front, and the whole thing pauses briefly after a nav click so it doesn't flicker through passed sections.

All homepage copy is data-driven from `src/data/portfolio.ts` — edit content there, not in the section components.

## Key Technologies

- **Astro 6** — static output (`output: 'static'`), content collections via `src/content.config.ts`
- **Tailwind CSS v4** via `@tailwindcss/vite` Vite plugin (not the PostCSS plugin); design tokens in `global.css` via `@theme`
- **MDX** via `@astrojs/mdx`
- **No icon library in use** — the design uses Unicode glyphs (`↗`, `·`) and a CSS accent dot (`astro-icon` is still installed but unused)

## Formatting Rules

Configured in `prettier.config.mjs`:

- Single quotes, 2-space indent, trailing commas (ES5), semicolons
- `prettier-plugin-astro` handles `.astro` files
- `prettier-plugin-tailwindcss` sorts Tailwind class names

ESLint config is in `eslint.config.mjs`. Husky runs `lint-staged` on pre-commit, so staged files are auto-fixed before commit.

## TypeScript

`tsconfig.json` extends Astro's strict config. Astro generates types in `.astro/` (do not edit). Run `yarn typecheck` (`astro check`) rather than plain `tsc` — it understands `.astro` files and content collection types.

## Deployment

Pushes to `master` trigger the GitHub Actions workflow (`.github/workflows/deploy.yml`):

1. `check` job: typecheck + format check
2. `deploy` job: runs `yarn run deploy` to build and publish to Cloudflare Pages (uses `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`)
