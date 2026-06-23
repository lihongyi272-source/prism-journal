import Link from "next/link";
import type { Article } from "@/lib/content";
import { formatDate } from "@/lib/content";

type ArticleListProps = {
  articles: Article[];
  compact?: boolean;
};

export function ArticleList({ articles, compact = false }: ArticleListProps) {
  return (
    <div className="divide-y journal-rule border-y journal-rule">
      {articles.map((article) => (
        <article
          key={article.slug}
          className={compact ? "py-5" : "grid gap-4 py-7 md:grid-cols-[1fr_12rem]"}
        >
          <div>
            <div className="flex flex-wrap gap-2 font-sans text-xs uppercase tracking-[0.16em] text-muted">
              <span>{article.language === "zh" ? "Chinese" : "English"}</span>
              <span aria-hidden="true">/</span>
              <span>{article.readingTime}</span>
            </div>
            <h3 className="mt-2 text-2xl font-semibold leading-tight">
              <Link href={`/articles/${article.slug}`} className="hover:text-prism">
                {article.title}
              </Link>
            </h3>
            {article.subtitle ? (
              <p className="mt-1 text-base leading-relaxed text-muted">{article.subtitle}</p>
            ) : null}
            {!compact ? (
              <p className="mt-3 max-w-2xl font-sans text-sm leading-7 text-muted">
                {article.summary}
              </p>
            ) : null}
          </div>
          <div className="font-sans text-sm leading-6 text-muted md:text-right">
            <p>{article.author}</p>
            <p>{formatDate(article.date)}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
