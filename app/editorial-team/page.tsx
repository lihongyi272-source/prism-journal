import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Editorial Team"
};

const roles = [
  {
    title: "Founding Editors",
    text: "Guide issue themes, editorial standards, author feedback, and publication schedule."
  },
  {
    title: "Section Editors",
    text: "Develop criticism, image notes, translation, film practice, and education columns."
  },
  {
    title: "Contributors",
    text: "Publish essays, translations, production diaries, scripts, and visual research notes."
  }
];

export default function EditorialTeamPage() {
  return (
    <>
      <PageHeader
        eyebrow="Editorial Team"
        title="A student-run editorial collective."
        subtitle="PRISM is built by young editors, writers, translators, designers, and filmmakers working across languages."
      />
      <section className="mx-auto mt-10 max-w-journal px-5 sm:px-8 lg:px-10">
        <div className="divide-y journal-rule border-y journal-rule">
          {roles.map((role) => (
            <div key={role.title} className="grid gap-4 py-7 md:grid-cols-[14rem_1fr]">
              <h2 className="text-2xl font-semibold">{role.title}</h2>
              <p className="max-w-2xl font-sans text-base leading-7 text-muted">{role.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
