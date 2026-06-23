import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Submit"
};

export default function SubmitPage() {
  return (
    <>
      <PageHeader
        eyebrow="Submit"
        title="Send work that begins from a real encounter with an image."
        subtitle="PRISM accepts criticism, short essays, image notes, scripts, translations, subtitles, and artist statements."
      />
      <div className="mx-auto mt-10 grid max-w-journal gap-10 px-5 sm:px-8 md:grid-cols-[14rem_1fr] lg:px-10">
        <aside className="font-sans text-sm leading-7 text-muted">
          <p>Current route: direct WeChat submission to the editor.</p>
          <p className="mt-4">Please include author name and title.</p>
        </aside>
        <div className="article-body max-w-reading">
          <h2>Two Editorial Principles</h2>
          <p>
            PRISM keeps a low threshold for first contact and a serious standard
            for publication. All authors may enter through a trial submission
            process and receive constructive feedback.
          </p>
          <p className="serif-cn" lang="zh">
            所有投稿均可先进入“试投”流程。短评与影像笔记对语言与引用要求相对宽松，但仍应有清晰的观察点与观点。
          </p>

          <h2>Review Criteria</h2>
          <p>
            Editors consider the clarity of the argument, the strength of textual
            or visual evidence, the structure and language of the piece, and the
            honesty of citation and originality.
          </p>

          <h2>Process</h2>
          <p>
            Send the manuscript by WeChat private message with author name and
            title. Editors may accept, request revision, or decline with feedback.
            Revision windows are usually 7-14 days.
          </p>

          <h2>Rights and Compensation</h2>
          <p>
            PRISM is volunteer-run at launch and cannot yet provide payment.
            Authors retain copyright and grant PRISM first electronic publication
            and archival rights. Future funding may support honoraria and print
            editions.
          </p>
        </div>
      </div>
    </>
  );
}
