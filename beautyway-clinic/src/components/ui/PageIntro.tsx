import clsx from "clsx";
import { Container } from "./Container";
import { Breadcrumbs } from "./Breadcrumbs";

export function PageIntro({
  eyebrow,
  title,
  intro,
  crumbs,
  aside,
  children,
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  crumbs: { name: string; path: string }[];
  aside?: React.ReactNode;
  children?: React.ReactNode;
  tone?: "light" | "ink";
}) {
  const ink = tone === "ink";
  return (
    <section
      className={clsx(
        "border-b py-8 sm:py-12",
        ink ? "on-ink border-ink-line bg-ink text-milk" : "border-line bg-porcelain",
      )}
    >
      <Container>
        <Breadcrumbs items={crumbs} />
        <div className={clsx("mt-5", aside && "grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] lg:items-start")}>
          <div>
            {eyebrow && (
              <p className={clsx("eyebrow mb-3", ink ? "text-orchid-soft" : "text-plum")}>{eyebrow}</p>
            )}
            <h1
              className={clsx(
                "font-display text-[1.875rem] leading-[1.12] sm:text-[2.5rem] lg:text-[2.9rem]",
                ink ? "text-milk" : "text-graphite",
              )}
            >
              {title}
            </h1>
            {intro && (
              <p
                className={clsx(
                  "mt-4 max-w-[68ch] text-[1.0625rem] leading-relaxed",
                  ink ? "text-lilac" : "text-graphite-soft",
                )}
              >
                {intro}
              </p>
            )}
            {children}
          </div>
          {aside}
        </div>
      </Container>
    </section>
  );
}
