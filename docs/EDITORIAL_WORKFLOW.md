# PRISM Editor Workflow

Editors should only need to create or edit MDX files.

## Add an Article

1. Create a file in `content/articles`.
2. Use a lowercase slug for the filename, for example `city-images-and-memory.mdx`.
3. Add frontmatter.
4. Write the article body in Markdown or MDX.
5. Commit and deploy.

```mdx
---
title: "Article Title"
subtitle: "Optional subtitle"
author: "Author Name"
date: "2026-07-01"
issue: "issue-01"
language: "en"
tags:
  - memory
  - film form
summary: "One sentence used in lists and metadata."
bio: "One short author biography."
featured: false
---

Article body begins here.
```

Use `language: zh` for Chinese articles and `language: en` for English articles.

## Required Article Fields

- `title`
- `author`
- `date`
- `issue`
- `language`
- `tags`
- `summary`
- `bio`

## Optional Article Fields

- `subtitle`
- `featured`
- `translationOf`
- `translations`

For future translations, add `translationOf: original-slug` on the translated article and add `translations: [translated-slug]` on the original article.

## Add an Issue

Create a file in `content/issues`, for example `issue-02.mdx`.

```mdx
---
number: "Issue 02"
title: "Issue Title"
subtitle: "Issue subtitle"
date: "2026-10-01"
description: "Short issue description."
pdf: "/issues/issue-02.pdf"
permanentUrl: "https://lenswithprisms.org/issues/issue-02"
---

## Editorial Note

Issue note begins here.
```

Place the PDF in `public/issues`.

## Editorial Standards

PRISM accepts criticism, short essays, image notes, production diaries, script fragments, translation, subtitle studies, interviews, and artist statements. Editors should look for clear observation, argument, evidence, structure, originality, and honest citation.
