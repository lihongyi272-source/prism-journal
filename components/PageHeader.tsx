type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="mx-auto max-w-journal px-5 pt-8 sm:px-8 lg:px-10">
      {eyebrow ? (
        <p className="font-sans text-xs uppercase tracking-[0.22em] text-muted">{eyebrow}</p>
      ) : null}
      <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight md:text-6xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-5 max-w-3xl text-xl leading-8 text-muted md:text-2xl">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
