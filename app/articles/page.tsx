import type { Metadata } from "next";
import { ArticleList } from "@/components/ArticleList";
import { PageHeader } from "@/components/PageHeader";
import { getAllArticles } from "@/lib/content";

export const metadata: Metadata = {
  title: "Articles"
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <>
      <PageHeader
        eyebrow="Articles"
        title="Essays, notes, translations, and image studies."
        subtitle="All published PRISM articles are generated from MDX files in the content folder."
      />
      <section className="mx-auto mt-10 max-w-journal px-5 sm:px-8 lg:px-10">
        <ArticleList articles={articles} />
      </section>
    </>
  );
}
