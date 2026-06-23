import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="PRISM is a journal for slow looking."
        subtitle="Platform for Reflective Image Studies & Mediation is a youth-led, non-profit cinema community and digital journal."
      />
      <div className="mx-auto mt-10 grid max-w-journal gap-10 px-5 sm:px-8 md:grid-cols-[14rem_1fr] lg:px-10">
        <aside className="font-sans text-sm leading-7 text-muted">
          <p>Founded by young writers, editors, translators, and image-makers.</p>
          <p className="mt-4">Independent. Non-profit. Issue-based.</p>
        </aside>
        <div className="article-body max-w-reading">
          <h2>What is PRISM?</h2>
          <p>
            PRISM is not a blog, a news site, or a content platform. It is a
            digital journal for essays that need time: film criticism, visual
            culture, philosophy, memory, history, religion, translation, and
            moving-image practice.
          </p>
          <p className="serif-cn" lang="zh">
            PRISM 是一个由青年发起的非营利性电影社区。这里是一个结合影评、教育、社论与创作的开放空间。我们致力于让电影回到思考之中，重建影像的复杂性与锋利。
          </p>

          <h2>Editorial Philosophy</h2>
          <p>
            We publish writing that treats cinema as a form of thought. We value
            careful observation, clear argument, honest citation, and the risky
            precision of a first-person encounter with an image.
          </p>
          <p>
            PRISM also protects the learning process. New writers may enter
            through a trial submission process and receive constructive editorial
            feedback before revision and publication.
          </p>

          <h2>Publication Focus</h2>
          <p>
            The journal welcomes criticism, short essays, image notes, production
            diaries, script fragments, translations, subtitle studies, interviews,
            and artist statements around visual work.
          </p>

          <h2>Submission Policy</h2>
          <p>
            Authors retain copyright and grant PRISM first electronic publication
            and archival rights. PRISM may request revisions, reject work with
            feedback, or accept work for publication. Longer academic essays may
            later enter single-blind, double-blind, or invited mentor review.
          </p>
        </div>
      </div>
    </>
  );
}
