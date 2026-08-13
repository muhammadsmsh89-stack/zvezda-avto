"use client";

import { Container } from "@/components/ui/Container";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { getDirectionBySlug } from "@/lib/services";
import { portfolio } from "@/lib/portfolio";
import { testimonials } from "@/lib/reviews";
import { ctaLabels } from "@/lib/studio";
import { useBooking } from "@/lib/booking";
import type { Master } from "@/lib/masters";

export function MasterDetail({ master }: { master: Master }) {
  const { openBooking } = useBooking();
  const direction = getDirectionBySlug(master.categorySlug);
  const works = portfolio.filter((p) => p.masterSlug === master.slug);
  const mentions = testimonials.filter((t) => t.text.includes(master.name));

  return (
    <>
      <section className="border-b border-border bg-background pt-28 lg:pt-36">
        <Container className="grid grid-cols-1 items-center gap-10 pb-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:pb-20">
          <Reveal>
            <FrameReveal>
              <PhotoPlaceholder
                shotNumber={master.slug}
                label={`${master.name} — портрет`}
                description={master.role}
                tone="ivory"
                subject="portrait"
                aspectClassName="aspect-[4/5]"
                className="overflow-hidden rounded-2xl"
              />
            </FrameReveal>
          </Reveal>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{master.role}</p>
            <h1 className="mt-4 text-pretty text-4xl leading-[1.05] text-foreground sm:text-5xl">
              {master.name}
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted">{master.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {master.focusAreas.map((f) => (
                <span key={f} className="rounded-full border border-border px-3.5 py-1.5 text-xs text-foreground/80">
                  {f}
                </span>
              ))}
            </div>
            <div className="mt-8">
              <Button size="lg" onClick={() => openBooking(master.slug)}>
                {ctaLabels.primaryOnline} к {master.name}
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {direction && (
        <section className="bg-surface-2/50 py-16 lg:py-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl text-foreground sm:text-3xl">Услуги</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {direction.items.map((item) => (
                  <li key={item.name} className="flex items-center justify-between gap-4 py-4 text-sm">
                    <span className="text-foreground/85">{item.name}</span>
                    <span className="font-medium text-foreground">{item.price ?? "Уточнить стоимость"}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </Container>
        </section>
      )}

      {works.length > 0 && (
        <section className="bg-background py-16 lg:py-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl text-foreground sm:text-3xl">Работы</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
              {works.map((w, i) => (
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

      {mentions.length > 0 && (
        <section className="border-t border-border bg-surface-2/50 py-16 lg:py-20">
          <Container>
            <Reveal>
              <h2 className="text-2xl text-foreground sm:text-3xl">Отзывы о {master.name}</h2>
            </Reveal>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {mentions.map((t) => (
                <Reveal key={t.author}>
                  <div className="rounded-2xl border border-border bg-surface p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted/70">{t.tag}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85">{t.text}</p>
                    <p className="mt-5 text-sm font-semibold text-foreground">{t.author}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
