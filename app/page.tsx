import Link from "next/link";
import { ArticleList } from "@/components/ArticleList";
import {
  getArticlesByIssue,
  getCurrentIssue,
  getFeaturedArticles,
  getLatestArticles
} from "@/lib/content";

export default function HomePage() {
  const currentIssue = getCurrentIssue();
  const featuredArticles = getFeaturedArticles();
  const latestArticles = getLatestArticles(5);
  const currentIssueArticles = currentIssue ? getArticlesByIssue(currentIssue.slug) : [];

  return (
    <div className="mx-auto max-w-journal px-5 sm:px-8 lg:px-10">
      <section className="grid gap-10 pt-10 md:grid-cols-[1.2fr_0.8fr] md:pt-14">
        <div>
          <p className="font-sans text-xs uppercase tracking-[0.24em] text-prism">
            The Prism Review
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] md:text-7xl">
            A digital journal for reflective image studies.
          </h1>
        </div>
        <div className="border-l journal-rule pl-6 text-lg leading-8 text-muted">
          <p>
            PRISM is an independent student-run journal focused on cinema, visual
            culture, philosophy, memory, history, religion, and critical essays.
          </p>
          <p className="serif-cn mt-5">
            PRISM（Platform for Reflective Image Studies & Mediation）是一个由青年发起的非营利性电影社区，致力于让电影回到思考之中，重建影像的复杂性与锋利。
          </p>
        </div>
      </section>

      {currentIssue ? (
        <section className="mt-16 border-y journal-rule py-9">
          <div className="grid gap-8 md:grid-cols-[15rem_1fr]">
            <div>
              <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted">
                Current Issue
              </p>
              <p className="mt-3 text-2xl font-semibold">{currentIssue.number}</p>
            </div>
            <div>
              <h2 className="text-4xl font-semibold leading-tight">{currentIssue.title}</h2>
              <p className="mt-2 text-xl text-muted">{currentIssue.subtitle}</p>
              <p className="mt-5 max-w-3xl font-sans text-base leading-7 text-muted">
                {currentIssue.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-4 font-sans text-sm">
                <Link href={`/issues/${currentIssue.slug}`} className="text-prism underline underline-offset-4">
                  Read the issue
                </Link>
                <a href={currentIssue.pdf} className="text-prism underline underline-offset-4">
                  Download PDF
                </a>
              </div>
            </div>
          </div>
          {currentIssueArticles.length > 0 ? (
            <div className="mt-8">
              <ArticleList articles={currentIssueArticles} compact />
            </div>
          ) : null}
        </section>
      ) : null}

      <section className="mt-16">
        <div className="mb-6 flex items-end justify-between gap-4">
          <h2 className="text-3xl font-semibold">Featured Articles</h2>
          <Link href="/articles" className="font-sans text-sm text-prism underline underline-offset-4">
            All articles
          </Link>
        </div>
        <ArticleList articles={featuredArticles} />
      </section>

      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold">Latest</h2>
        <ArticleList articles={latestArticles} compact />
      </section>
    </div>
  );
}
