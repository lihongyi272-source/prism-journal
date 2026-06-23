import type { MetadataRoute } from "next";
import { getAllArticles, getAllIssues } from "@/lib/content";

const baseUrl = "https://lenswithprisms.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/issues",
    "/articles",
    "/editorial-team",
    "/submit",
    "/archive"
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date()
  }));

  const issueRoutes = getAllIssues().map((issue) => ({
    url: `${baseUrl}/issues/${issue.slug}`,
    lastModified: new Date(`${issue.date}T00:00:00`)
  }));

  const articleRoutes = getAllArticles().map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(`${article.date}T00:00:00`)
  }));

  return [...staticRoutes, ...issueRoutes, ...articleRoutes];
}
