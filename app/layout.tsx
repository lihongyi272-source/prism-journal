import type { Metadata } from "next";
import type { ReactNode } from "react";
import Link from "next/link";
import "./globals.css";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/issues", label: "Issues" },
  { href: "/articles", label: "Articles" },
  { href: "/editorial-team", label: "Editorial Team" },
  { href: "/submit", label: "Submit" },
  { href: "/archive", label: "Archive" }
];

export const metadata: Metadata = {
  metadataBase: new URL("https://lenswithprisms.org"),
  title: {
    default: "PRISM",
    template: "%s | PRISM"
  },
  description:
    "PRISM is an independent student-run journal for cinema, visual culture, philosophy, memory, history, religion, and critical essays.",
  openGraph: {
    title: "PRISM",
    description:
      "An independent student-run journal for reflective image studies and mediation.",
    url: "https://lenswithprisms.org",
    siteName: "PRISM",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="mx-auto flex max-w-journal flex-col gap-5 px-5 py-6 sm:px-8 lg:px-10">
          <div className="flex flex-col gap-4 border-b journal-rule pb-5 md:flex-row md:items-end md:justify-between">
            <Link href="/" className="group block w-fit">
              <p className="font-sans text-[0.68rem] uppercase tracking-[0.22em] text-muted">
                Platform for Reflective Image Studies & Mediation
              </p>
              <p className="mt-1 text-4xl font-semibold leading-none text-ink md:text-5xl">
                PRISM
              </p>
            </Link>
            <nav aria-label="Primary navigation" className="flex flex-wrap gap-x-5 gap-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-sans text-sm text-muted transition hover:text-prism"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="mx-auto mt-20 max-w-journal border-t journal-rule px-5 py-8 font-sans text-sm text-muted sm:px-8 lg:px-10">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} PRISM. Independent, student-run, non-profit.</p>
            <p>lenswithprisms.org</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
