import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumb: string;
}) {
  return (
    <section className="border-b border-border bg-surface/40 bg-noise pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <div className="flex items-center gap-2 text-xs text-muted">
            <Link href="/" className="hover:text-accent transition-colors">Главная</Link>
            <span>/</span>
            <span className="text-foreground/70">{breadcrumb}</span>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <span className="mt-6 block text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h1 className="mt-3 max-w-3xl text-balance font-sans text-4xl font-extrabold leading-tight text-foreground sm:text-5xl">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-2xl text-balance text-base leading-relaxed text-muted">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
