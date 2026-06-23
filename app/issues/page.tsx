import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getAllIssues, getArticlesByIssue } from "@/lib/content";

export const metadata: Metadata = {
  title: "Issues"
};

export default function IssuesPage() {
  const issues = getAllIssues();

  return (
    <>
      <PageHeader
        eyebrow="Issues"
        title="Issue-based publishing for durable reading."
        subtitle="Each issue gathers essays around a shared question, form, or pressure point."
      />
      <section className="mx-auto mt-10 max-w-journal px-5 sm:px-8 lg:px-10">
        <div className="divide-y journal-rule border-y journal-rule">
          {issues.map((issue) => {
            const count = getArticlesByIssue(issue.slug).length;
            return (
              <article key={issue.slug} className="grid gap-6 py-8 md:grid-cols-[12rem_1fr]">
                <div className="font-sans text-sm uppercase tracking-[0.18em] text-muted">
                  {issue.number}
                </div>
                <div>
                  <h2 className="text-3xl font-semibold">
                    <Link href={`/issues/${issue.slug}`} className="hover:text-prism">
                      {issue.title}
                    </Link>
                  </h2>
                  <p className="mt-1 text-xl text-muted">{issue.subtitle}</p>
                  <p className="mt-4 max-w-3xl font-sans text-sm leading-7 text-muted">
                    {issue.description}
                  </p>
                  <p className="mt-4 font-sans text-sm text-muted">{count} articles</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
