# Gonzalo López Crespo — Portfolio

Personal portfolio website. Astro + MDX + Tailwind CSS, deployed on Vercel.

- **Stack:** Astro 5, MDX, Tailwind CSS v3 (+ `@tailwindcss/typography`), React (only where needed), `astro-icon` (Lucide), KaTeX, Mermaid (client-side), Shiki via `rehype-pretty-code`.
- **Theming:** dual light/dark theme, persisted in `localStorage`, `class`-based dark mode.
- **Content:** project case studies live as `.mdx` files in `src/content/projects/`, validated by an Astro content collection schema.

## Local development

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in ./dist
npm run preview  # serve the production build locally
```

Node 22.12+ required.

## Project structure

```
src/
├── components/   Reusable UI primitives (Navbar, Hero, ProjectCard, Mermaid, ...)
├── layouts/
│   ├── BaseLayout.astro     HTML shell, meta tags, theme-init script, navbar/footer
│   └── ProjectLayout.astro  Case-study layout with TOC, prev/next, breadcrumbs
├── content/
│   ├── config.ts            Zod schema for the `projects` collection
│   └── projects/*.mdx       One MDX file per case study (frontmatter + content)
├── pages/
│   ├── index.astro          Home: hero, about, skills, featured projects, CTA
│   ├── projects/index.astro All projects listing
│   ├── projects/[...slug].astro  Dynamic route — renders each MDX project
│   ├── education.astro      Education timeline + certifications
│   ├── contact.astro        Contact card
│   └── 404.astro
└── styles/global.css        Tailwind directives, fonts, KaTeX, custom classes
```

## Adding a new project

Drop a new `.mdx` file in `src/content/projects/`. The filename becomes the URL slug (`my-project.mdx` → `/projects/my-project`).

Frontmatter schema (see `src/content/config.ts`):

```yaml
---
title: "Project title"
subtitle: "Optional subtitle"            # optional
summary: "One-paragraph card summary."   # required, used in cards
date: 2026-01-15                          # required
featured: true                            # show on home page
order: 7                                  # sort order (lower = earlier)
tags: ["Python", "PyTorch"]               # tech stack chips
githubUrl: "https://github.com/..."       # optional — renders GitHub button
liveDemoUrl: "https://..."                # optional — renders Live Demo button
coverImage: "/images/projects/foo.png"    # optional
status: "completed"                       # 'completed' | 'in-progress'
---
```

Then write the MDX content. Available helpers:

- **Mermaid diagrams** — import the component and pass the diagram source as a `code` prop:
  ```mdx
  import Mermaid from '../../components/Mermaid.astro';
  <Mermaid code={`flowchart LR; A --> B`} />
  ```
- **LaTeX math** — `$inline$` and `$$display$$` work out of the box (`remark-math` + `rehype-katex`).
- **Code blocks** — fenced ``` with a language tag get dual-theme syntax highlighting via Shiki.

That's it — Astro picks the new file up automatically, the content collection schema validates the frontmatter, and the project shows up on `/projects` and (if `featured: true`) on the home page.

## Theme

- Light: white background, near-black navy text (`#1a1a2e`), teal accent (`#0f766e`).
- Dark: GitHub-dark background (`#0d1117`), light gray text (`#c9d1d9`), electric blue accent (`#58a6ff`).
- Toggle in the navbar; choice persists across reloads via `localStorage('theme')`.
- A blocking inline script runs in `<head>` before paint to avoid FOUC.

## Deployment to Vercel

The repo is Vercel-ready (`vercel.json` already declares `framework: astro`).

1. **Create a GitHub repo and push:**
   ```sh
   gh repo create portfolio-astro --public --source=. --remote=origin
   git push -u origin main
   ```
   Or via the web UI: create the repo on github.com, then `git remote add origin <url>` and `git push -u origin main`.

2. **Connect to Vercel:**
   - Go to https://vercel.com/new and import the GitHub repo.
   - Framework preset is auto-detected as **Astro**.
   - Build command: `npm run build` (default).
   - Output directory: `dist` (default).
   - Click **Deploy**. Subsequent pushes to `main` redeploy automatically.

3. **Custom domain (later):**
   - Vercel dashboard → project → **Settings → Domains** → add your domain.
   - Point your registrar's DNS to Vercel (CNAME `cname.vercel-dns.com` for subdomains, or A records for apex).
   - Vercel issues a Let's Encrypt certificate automatically.

## Placeholders to fill in later

These are stubs that should be replaced before going public:

- `public/cv.pdf` — replace the placeholder with your actual CV.
- `public/og.png` — 1200×630 social-share image (referenced in `BaseLayout.astro`).
- `public/images/projects/` — add cover images and reference them via the `coverImage` frontmatter field.
- `azure-pipeline.mdx` — replace the dashed iframe placeholder with the Power BI Publish-to-Web embed.
- **Live demo URLs** — Streamlit (`portfolio-gnn-demo.streamlit.app`) and HuggingFace (`huggingface.co/spaces/gonzalonao/portfolio-rag`) are placeholders. Confirm or update once the demos are live.
- **Steam toolkit repo visibility** — the flagship project links to `https://github.com/gonzalonao/steam-market-toolkit`. If that repo is still private, either make it public or remove the `githubUrl` field from `steam-market-portfolio.mdx` until it goes public.
- `astro.config.mjs` + `public/robots.txt` — `site` and the sitemap URL point at the Vercel production URL. If a custom domain is connected later, update both together (they drive canonical links, hreflang, og:url, and the sitemap).

## License

Personal project — all rights reserved.
