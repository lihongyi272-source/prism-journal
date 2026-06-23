# PRISM Journal Website

Official website for PRISM, a student-run digital journal for cinema, visual culture, philosophy, memory, history, religion, and critical essays.

## Stack

- Next.js 15
- TypeScript
- TailwindCSS
- MDX content files
- Vercel deployment
- No database, CMS, login, comments, or ads

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content

Articles live in `content/articles/*.mdx`.

Issues live in `content/issues/*.mdx`.

The site automatically builds article pages, issue pages, latest lists, featured lists, archive entries, sitemap routes, reading time, and related articles from frontmatter.

## Documentation

- Editor workflow: `docs/EDITORIAL_WORKFLOW.md`
- Vercel deployment: `docs/DEPLOYMENT.md`
- GoDaddy domain setup: `docs/GODADDY_DOMAIN.md`
