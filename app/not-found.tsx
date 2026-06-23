import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-journal px-5 py-20 sm:px-8 lg:px-10">
      <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted">404</p>
      <h1 className="mt-4 text-5xl font-semibold">This page is not in the archive.</h1>
      <p className="mt-5 max-w-xl font-sans text-base leading-7 text-muted">
        The article or issue may have moved, or it may not have been published yet.
      </p>
      <Link href="/" className="mt-8 inline-block font-sans text-sm text-prism underline underline-offset-4">
        Return home
      </Link>
    </div>
  );
}
