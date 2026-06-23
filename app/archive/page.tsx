import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { formatDate, getAllArticles, getIssueBySlug } from "@/lib/content";

export const metadata: Metadata = {
  title: "Archive"
};

export default function ArchivePage() {
  const articles = getAllArticles();

  return (
    <>
      <PageHeader
        eyebrow="Archive"
        title="A record of writing, translation, and visual research."
        subtitle="The archive keeps PRISM's essays findable beyond the rhythm of publication."
      />
      <section className="mx-auto mt-10 max-w-journal px-5 sm:px-8 lg:px-10">
        <div className="divide-y journal-rule border-y journal-rule">
          {articles.map((article) => {
            const issue = getIssueBySlug(article.issue);
            return (
              <article key={article.slug} className="grid gap-4 py-5 md:grid-cols-[10rem_1fr_12rem]">
                <p className="font-sans text-sm text-muted">{formatDate(article.date)}</p>
                <div>
                  <h2 className="text-xl font-semibold">
                    <Link href={`/articles/${article.slug}`} className="hover:text-prism">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="font-sans text-sm leading-6 text-muted">{article.author}</p>
                </div>
                <p className="font-sans text-sm text-muted md:text-right">
                  {issue ? issue.number : article.issue}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
