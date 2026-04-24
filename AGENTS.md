# Agent Guide

Personal portfolio and blog site for devksingh.com, built with Astro 6, Tailwind CSS v4, and MDX. Deployed to GitHub Pages via Github Actions.

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

## Project Structure

```
src/
  content/blog/    # MDX blog posts (frontmatter schema in src/content.config.ts)
  data/portfolio.ts # Portfolio/projects data
  layouts/         # Astro layout components (Layout, PageLayout, ArticleLayout)
  pages/           # File-based routing: index, blog/index, blog/[slug], background
  styles/global.css
public/            # Static assets (PDFs, favicons)
build/             # Output directory (git-ignored in CI, checked in locally)
astro.config.mjs   # Astro config
tailwind.config.mjs
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

## Key Technologies

- **Astro 6** — static output (`output: 'static'`), content collections via `src/content.config.ts`
- **Tailwind CSS v4** via `@tailwindcss/vite` Vite plugin (not the PostCSS plugin)
- **MDX** via `@astrojs/mdx`
- **Icons** via `astro-icon` (Lucide iconify packs)

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
2. `build` job: `astro build`
3. `deploy` job: uploads `./build` to GitHub Pages (runs only if both pass)
