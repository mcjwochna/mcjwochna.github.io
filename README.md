# maciejwochna.pl

Personal portfolio — Astro 7 + Tailwind 4, static build deployed to GitHub Pages (`.github/workflows/deploy.yml`, push to `main`). Requires Node ≥ 22.12 (`.nvmrc`).

| Command | Action |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at `localhost:4321` |
| `npm run build` | Type-check (`astro check`) + production build to `./dist/` |
| `npm run preview` | Preview the build |

## Where things live

- `src/data/site.ts` — contact details, social links, CV path, schema.org data
- `src/data/about.ts` — bio and principles
- `src/content/work/*.md` — case studies (frontmatter = structured sections, body = "Deep Dive"); schema in `src/content.config.ts`
- `src/assets/` — source images; Astro generates responsive AVIF/WebP and the 1200×630 OG image at build time
- `public/` — files served as-is: CV PDF, favicon, `CNAME`, `robots.txt`
- `astro.config.mjs` — Content Security Policy (hash-based, generated per page). Adding an external script, style, iframe or API? Add its origin to `security.csp.directives`
- `.env` — `PUBLIC_CONTACT_API` (contact form endpoint, see `.env.example`)
