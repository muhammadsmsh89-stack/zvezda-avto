"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { PageIntro } from "@/components/ui/PageIntro";
import { getDirectionBySlug } from "@/lib/services";
import { masters } from "@/lib/masters";
import { portfolio } from "@/lib/portfolio";
import { ctaLabels } from "@/lib/studio";
import { useBooking } from "@/lib/booking";
import { notFound } from "next/navigation";

const categoryMatch: Record<string, string> = {
  hair: "Hair",
  makeup: "Makeup",
  "brows-lashes": "Brows",
  "event-beauty": "Event",
};

export function DirectionPage({ slug }: { slug: string }) {
  const direction = getDirectionBySlug(slug);
  const { openBooking } = useBooking();
  if (!direction) notFound();

  const relatedMasters = masters.filter((m) => m.categorySlug === slug);
  const relatedWorks = portfolio.filter((p) =>
    p.category.startsWith(categoryMatch[slug] ?? "")
  );

  return (
    <>
      <PageIntro
        eyebrow={direction.code}
        title={direction.title}
        description={direction.description}
        action={<Button onClick={() => openBooking()}>{ctaLabels.primaryOnline}</Button>}
      />

      <section className="bg-background py-14 lg:py-20">
        <Container>
          <FrameReveal>
            <PhotoPlaceholder
              shotNumber={direction.code}
              label={`${direction.title} — работа студии`}
              description="Реальная работа мастеров студии в этом направлении"
              tone="ivory"
              aspectClassName="aspect-[21/9]"
            />
          </FrameReveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/50 py-16 lg:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl text-foreground sm:text-3xl">Услуги и цены</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {direction.items.map((item) => (
                <li key={item.name} className="flex items-center justify-between gap-4 py-4 text-sm">
                  <span className="text-foreground/85">
                    {item.name}
                    {item.note && item.note !== "VERIFY_BEFORE_PRODUCTION" && (
                      <span className="ml-2 text-xs text-muted/60">{item.note}</span>
                    )}
                  </span>
                  <span className="shrink-0 font-medium text-foreground">
                    {item.price ?? "Уточнить стоимость"}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      {relatedMasters.length > 0 && (
        <section className="bg-background py-16 lg:py-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl text-foreground sm:text-3xl">Мастера направления</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4">
              {relatedMasters.map((m, i) => (
                <Reveal key={m.slug} delay={i * 0.07}>
                  <Link href={`/masters/${m.slug}`} className="group block">
                    <PhotoPlaceholder
                      shotNumber={m.slug}
                      label={`${m.name} — портрет`}
                      description={m.role}
                      tone="ivory"
                      subject="portrait"
                      aspectClassName="aspect-[3/4]"
                      className="overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <h3 className="mt-3 text-sm font-semibold text-foreground">{m.name}</h3>
                    <p className="text-xs text-muted">{m.role}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {relatedWorks.length > 0 && (
        <section className="border-t border-border bg-surface-2/50 py-16 lg:py-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl text-foreground sm:text-3xl">Работы</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {relatedWorks.map((w, i) => (
                <Reveal key={w.slug} delay={i * 0.08}>
                  <PhotoPlaceholder
                    shotNumber={w.category}
                    label={w.task}
                    description={w.result}
                    tone="ivory"
                    aspectClassName="aspect-[4/3]"
                    className="overflow-hidden rounded-2xl"
                  />
                  <h3 className="mt-3 text-base font-semibold text-foreground">{w.task}</h3>
                  <p className="mt-1 text-sm text-muted">{w.result}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-deep py-16 text-background lg:py-20">
        <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="max-w-md text-pretty text-2xl leading-snug text-background sm:text-3xl">
            Готовы записаться на {direction.title.toLowerCase()}?
          </p>
          <Button variant="nude" size="lg" onClick={() => openBooking()}>
            {ctaLabels.primaryOnline}
          </Button>
        </Container>
      </section>
    </>
  );
}
