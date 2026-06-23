import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");
const articleDirectory = path.join(contentDirectory, "articles");
const issueDirectory = path.join(contentDirectory, "issues");

export type Language = "en" | "zh";

export type Article = {
  slug: string;
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  issue: string;
  language: Language;
  tags: string[];
  order?: number;
  bio: string;
  summary: string;
  featured: boolean;
  body: string;
  readingTime: string;
  translationOf?: string;
  translations?: string[];
};

export type Issue = {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  pdf: string;
  permanentUrl: string;
  body: string;
};

type FrontmatterValue = string | string[] | boolean | number | undefined;

function readMdxFiles(directory: string) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(directory, file), "utf8");
      const parsed = matter(source);
      return {
        slug,
        data: parsed.data as Record<string, FrontmatterValue>,
        body: parsed.content.trim()
      };
    });
}

function requireString(
  data: Record<string, FrontmatterValue>,
  key: string,
  file: string
) {
  const value = data[key];
  if (typeof value !== "string" || value.length === 0) {
    throw new Error(`Missing required frontmatter "${key}" in ${file}`);
  }
  return value;
}

function optionalString(data: Record<string, FrontmatterValue>, key: string) {
  const value = data[key];
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

function optionalNumber(data: Record<string, FrontmatterValue>, key: string) {
  const value = data[key];
  if (typeof value === "number") {
    return value;
  }
  if (typeof value === "string" && value.trim().length > 0) {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : undefined;
  }
  return undefined;
}

function normalizeTags(value: FrontmatterValue) {
  if (Array.isArray(value)) {
    return value.map(String);
  }
  if (typeof value === "string") {
    return value
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean);
  }
  return [];
}

function readingTime(body: string, language: Language) {
  const plain = body
    .replace(/```[\s\S]*?```/g, "")
    .replace(/<[^>]*>/g, "")
    .replace(/[#[\]*_>`~()-]/g, " ");

  const units =
    language === "zh"
      ? plain.replace(/\s/g, "").length / 500
      : plain.trim().split(/\s+/).filter(Boolean).length / 230;
  const minutes = Math.max(1, Math.ceil(units));
  return `${minutes} min read`;
}

export function getAllArticles(): Article[] {
  return readMdxFiles(articleDirectory)
    .map(({ slug, data, body }) => {
      const language = requireString(data, "language", slug) as Language;
      if (language !== "en" && language !== "zh") {
        throw new Error(`Invalid language "${language}" in article ${slug}`);
      }

      return {
        slug,
        title: requireString(data, "title", slug),
        subtitle: optionalString(data, "subtitle"),
        author: requireString(data, "author", slug),
        date: requireString(data, "date", slug),
        issue: requireString(data, "issue", slug),
        language,
        tags: normalizeTags(data.tags),
        order: optionalNumber(data, "order"),
        bio: requireString(data, "bio", slug),
        summary: requireString(data, "summary", slug),
        featured: data.featured === true,
        body,
        readingTime: readingTime(body, language),
        translationOf: optionalString(data, "translationOf"),
        translations: normalizeTags(data.translations)
      };
    })
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getArticleBySlug(slug: string) {
  return getAllArticles().find((article) => article.slug === slug);
}

export function getFeaturedArticles() {
  return getAllArticles().filter((article) => article.featured);
}

export function getLatestArticles(count?: number) {
  const articles = getAllArticles();
  return typeof count === "number" ? articles.slice(0, count) : articles;
}

export function getRelatedArticles(article: Article, count = 3) {
  return getAllArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      article: candidate,
      score:
        (candidate.issue === article.issue ? 3 : 0) +
        candidate.tags.filter((tag) => article.tags.includes(tag)).length
    }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, count)
    .map((entry) => entry.article);
}

export function getAllIssues(): Issue[] {
  return readMdxFiles(issueDirectory)
    .map(({ slug, data, body }) => ({
      slug,
      number: requireString(data, "number", slug),
      title: requireString(data, "title", slug),
      subtitle: requireString(data, "subtitle", slug),
      date: requireString(data, "date", slug),
      description: requireString(data, "description", slug),
      pdf: requireString(data, "pdf", slug),
      permanentUrl: requireString(data, "permanentUrl", slug),
      body
    }))
    .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
}

export function getIssueBySlug(slug: string) {
  return getAllIssues().find((issue) => issue.slug === slug);
}

export function getCurrentIssue() {
  return getAllIssues()[0];
}

export function getArticlesByIssue(issueSlug: string) {
  return getAllArticles()
    .filter((article) => article.issue === issueSlug)
    .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(`${date}T00:00:00`));
}
