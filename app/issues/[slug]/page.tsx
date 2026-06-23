import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleList } from "@/components/ArticleList";
import { MdxArticle } from "@/components/MdxArticle";
import {
  formatDate,
  getAllIssues,
  getArticlesByIssue,
  getIssueBySlug
} from "@/lib/content";

type IssuePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllIssues().map((issue) => ({ slug: issue.slug }));
}

export async function generateMetadata({ params }: IssuePageProps): Promise<Metadata> {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);
  if (!issue) {
    return {};
  }

  return {
    title: `${issue.number}: ${issue.title}`,
    description: issue.description
  };
}

export default async function IssuePage({ params }: IssuePageProps) {
  const { slug } = await params;
  const issue = getIssueBySlug(slug);

  if (!issue) {
    notFound();
  }

  const articles = getArticlesByIssue(issue.slug);

  return (
    <div className="mx-auto max-w-journal px-5 pt-8 sm:px-8 lg:px-10">
      <header className="grid gap-8 border-b journal-rule pb-10 md:grid-cols-[14rem_1fr]">
        <div className="font-sans text-sm leading-7 text-muted">
          <p className="uppercase tracking-[0.2em]">{issue.number}</p>
          <p className="mt-4">{formatDate(issue.date)}</p>
        </div>
        <div>
          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">{issue.title}</h1>
          <p className="mt-4 text-2xl leading-9 text-muted">{issue.subtitle}</p>
          <p className="mt-6 max-w-3xl font-sans text-base leading-7 text-muted">
            {issue.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-4 font-sans text-sm">
            <a
              href={issue.pdf}
              className="border border-prism px-4 py-2 text-prism transition hover:bg-prism hover:text-paper"
            >
              Download PDF
            </a>
            <a href={issue.permanentUrl} className="py-2 text-muted underline underline-offset-4">
              Permanent URL
            </a>
          </div>
        </div>
      </header>

      <section className="grid gap-10 py-10 md:grid-cols-[14rem_1fr]">
        <h2 className="font-sans text-xs uppercase tracking-[0.22em] text-muted">
          Editorial Note
        </h2>
        <div className="article-body max-w-reading">
          <MdxArticle source={issue.body} />
        </div>
      </section>

      <section className="border-t journal-rule pt-10">
        <h2 className="mb-6 text-3xl font-semibold">Table of Contents</h2>
        <ArticleList articles={articles} />
      </section>
    </div>
  );
}
