import clsx from "clsx";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { WorksGrid } from "@/components/WorksGrid";
import { Direction } from "@/lib/services";
import { getMastersByDirection } from "@/lib/masters";
import { getWorksByDirection } from "@/lib/works";
import { whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";
import { directionIcons } from "@/components/ui/Icons";

const toneMap = {
  light: { placeholder: "ivory" as const, hero: "bg-background" },
  clean: { placeholder: "charcoal" as const, hero: "bg-surface" },
  deep: { placeholder: "espresso" as const, hero: "bg-background" },
};

export function DirectionPage({ direction }: { direction: Direction }) {
  const directionMasters = getMastersByDirection(direction.slug);
  const directionWorks = getWorksByDirection(direction.slug);
  const tone = toneMap[direction.tone];
  const Icon = directionIcons[direction.slug as keyof typeof directionIcons];

  return (
    <>
      <section className={clsx("border-b border-border pb-14 pt-28 lg:pb-20 lg:pt-36", tone.hero)}>
        <Container className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <Reveal className="flex items-center gap-3">
              <Icon className="h-6 w-6 text-accent" />
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">{direction.code}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-4 text-pretty font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl lg:text-6xl">
                {direction.title}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{direction.description}</p>
            </Reveal>
            <Reveal delay={0.24} className="mt-8 flex flex-wrap items-center gap-4">
              <Button href={whatsappBookingLink(direction.title)}>{ctaLabels.primary}</Button>
              <TextLink href="/prices">{ctaLabels.prices}</TextLink>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
            <PhotoPlaceholder
              shotNumber={direction.code}
              label={direction.title}
              description={`Фотография направления «${direction.title}»`}
              tone={tone.placeholder}
              subject="wide"
              aspectClassName="h-full"
            />
          </Reveal>
        </Container>
      </section>

      {direction.highlight && (
        <section className="border-b border-border bg-deep py-16 text-background lg:py-20">
          <Container className="max-w-2xl">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-background/55">Знаковая услуга</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 font-serif text-2xl leading-[1.2] text-background sm:text-3xl">{direction.highlight.title}</h2>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="mt-4 text-base leading-relaxed text-background/70">{direction.highlight.text}</p>
            </Reveal>
          </Container>
        </section>
      )}

      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <Container>
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Услуги и цены</h2>
          </Reveal>
          <div className="mt-6 divide-y divide-border border-t border-border">
            {direction.items.map((item, i) => (
              <Reveal key={item.name} delay={i * 0.03} className="flex items-baseline justify-between gap-6 py-4">
                <span>
                  <span className="text-base text-foreground">{item.name}</span>
                  {item.note && <span className="block text-xs text-muted">{item.note}</span>}
                </span>
                <span className="shrink-0 text-base font-semibold text-foreground">
                  {item.price ?? <span className="font-normal text-muted">уточняйте</span>}
                </span>
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
                  <Link href={`/masters/${m.slug}`} className="group block rounded-2xl border border-border p-6 transition-colors hover:border-border-strong">
                    <h3 className="font-serif text-lg text-foreground">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted">{m.role}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {directionWorks.length > 0 && (
        <section className="bg-surface py-16 lg:py-20">
          <Container>
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <Reveal>
                <h2 className="text-pretty font-serif text-2xl leading-[1.1] text-foreground sm:text-3xl">Работы «{direction.title}»</h2>
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
      )}
    </>
  );
}
