import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { WorksGrid } from "@/components/WorksGrid";
import { Direction } from "@/lib/services";
import { masters } from "@/lib/masters";
import { contacts } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";
import { directionImages } from "@/lib/media";

export function DirectionPage({ direction }: { direction: Direction }) {
  const directionMasters = masters.filter((m) => m.categorySlug === direction.slug);
  const image = directionImages[direction.slug];

  return (
    <>
      <section className="border-b border-border bg-background pb-14 pt-28 lg:pb-20 lg:pt-36">
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{direction.code}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-pretty text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                {direction.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{direction.description}</p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8 flex flex-wrap gap-3">
              <Button href={contacts.dikidiUrl}>{ctaLabels.primary}</Button>
              <TextLink href="/prices">{ctaLabels.prices}</TextLink>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 45vw, 92vw" className="object-cover" />
          </Reveal>
        </Container>
      </section>

      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <Container>
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Услуги</h2>
          </Reveal>
          <div className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {direction.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.04} className="flex items-center justify-between gap-4 bg-surface px-6 py-5">
                <span className="text-base text-foreground">{item.name}</span>
                {item.note && <span className="text-right text-xs text-muted">{item.note}</span>}
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {directionMasters.length > 0 && (
        <section className="border-b border-border bg-background py-16 lg:py-20">
          <Container>
            <Reveal>
              <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Мастера направления</h2>
            </Reveal>
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {directionMasters.map((m, i) => (
                <Reveal key={m.slug} delay={i * 0.06}>
                  <a href={`/masters/${m.slug}`} className="group block rounded-2xl border border-border p-6 transition-colors hover:border-border-strong">
                    <h3 className="text-lg font-bold text-foreground">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted">{m.role}</p>
                  </a>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <section className="bg-surface py-16 lg:py-20">
        <Container>
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <Reveal>
              <h2 className="text-pretty text-2xl leading-[1.1] text-foreground sm:text-3xl">Работы «{direction.title}»</h2>
            </Reveal>
            <Reveal delay={0.08}>
              <TextLink href="/works">Все работы</TextLink>
            </Reveal>
          </div>
          <div className="mt-8">
            <WorksGrid initialFilter={direction.slug} hideFilters />
          </div>
        </Container>
      </section>
    </>
  );
}
