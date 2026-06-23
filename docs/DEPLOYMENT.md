# Vercel Deployment Guide

This project is ready for Vercel.

## First Deployment

1. Push the repository to GitHub.
2. In Vercel, choose **Add New Project**.
3. Import the GitHub repository.
4. Keep the framework preset as **Next.js**.
5. Use these defaults:

```text
Install Command: npm install
Build Command: npm run build
Output Directory: .next
```

6. Deploy.

## Future Publishing

1. Add or edit files in `content/articles` or `content/issues`.
2. Commit to the production branch.
3. Vercel will build and deploy automatically.

## Pre-Launch Checklist

- Replace `public/issues/issue-01.pdf` with the designed electronic issue PDF.
- Confirm all article metadata is complete.
- Confirm the site title and description in `app/layout.tsx`.
- Run `npm run build` before launch.
- Add `lenswithprisms.org` and `www.lenswithprisms.org` in Vercel project domain settings.

## Official Reference

Vercel's current domain documentation says the dashboard displays the required registrar records after a custom domain is added, and that apex domains use an A record while subdomains use a CNAME record:

https://vercel.com/docs/domains/working-with-domains/add-a-domain
