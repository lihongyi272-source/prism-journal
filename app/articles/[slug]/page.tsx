import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/ArticleList";
import { MdxArticle } from "@/components/MdxArticle";
import {
  formatDate,
  getAllArticles,
  getArticleBySlug,
  getIssueBySlug,
  getRelatedArticles
} from "@/lib/content";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return {};
  }

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      type: "article",
      publishedTime: article.date
    }
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const issue = getIssueBySlug(article.issue);
  const relatedArticles = getRelatedArticles(article);

  return (
    <article className="mx-auto max-w-journal px-5 pt-8 sm:px-8 lg:px-10">
      <header className="max-w-reading">
        <div className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
          {issue ? (
            <Link href={`/issues/${issue.slug}`} className="hover:text-prism">
              {issue.number}
            </Link>
          ) : (
            <span>{article.issue}</span>
          )}
        </div>
        <h1 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
          {article.title}
        </h1>
        {article.subtitle ? (
          <p className="mt-5 text-2xl leading-9 text-muted">{article.subtitle}</p>
        ) : null}
        <div className="mt-8 border-y journal-rule py-4 font-sans text-sm leading-7 text-muted">
          <p>
            By <span className="text-ink">{article.author}</span> · {formatDate(article.date)}
          </p>
          <p>
            {article.language === "zh" ? "Chinese" : "English"} · {article.readingTime}
          </p>
          <p>{article.tags.join(" / ")}</p>
        </div>
      </header>

      <div
        className="article-body mt-10 max-w-reading"
        lang={article.language === "zh" ? "zh" : "en"}
      >
        <MdxArticle source={article.body} />
      </div>

      <footer className="mt-12 max-w-reading border-t journal-rule pt-6">
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-muted">Author Bio</p>
        <p className="mt-3 text-base leading-7 text-muted">{article.bio}</p>
      </footer>

      {relatedArticles.length > 0 ? (
        <section className="mt-14 max-w-3xl">
          <h2 className="mb-5 text-2xl font-semibold">Related Articles</h2>
          <ArticleList articles={relatedArticles} compact />
        </section>
      ) : null}
    </article>
  );
}
