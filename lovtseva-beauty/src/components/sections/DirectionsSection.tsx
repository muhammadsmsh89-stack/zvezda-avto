"use client";

import Link from "next/link";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Direction, getDirectionBySlug } from "@/lib/services";
import { directionIcons } from "@/components/ui/Icons";
import { ArrowIcon } from "@/components/ui/Button";

function toneOf(d: Direction): "ivory" | "charcoal" | "espresso" {
  if (d.tone === "light") return "ivory";
  if (d.tone === "clean") return "charcoal";
  return "espresso";
}

export function DirectionsSection() {
  const hair = getDirectionBySlug("hair")!;
  const cosmetology = getDirectionBySlug("cosmetology")!;
  const laser = getDirectionBySlug("laser")!;
  const secondary = [getDirectionBySlug("nails")!, getDirectionBySlug("permanent")!, getDirectionBySlug("brows-lashes")!];
  const compact = [getDirectionBySlug("massage")!, getDirectionBySlug("piercing")!, getDirectionBySlug("solarium")!];

  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Направления</p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-3 max-w-xl text-pretty font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl">
            Что вам нужно сейчас?
          </h2>
        </Reveal>

        <div className="mt-10 space-y-4 sm:space-y-5">
          <Reveal>
            <DirectionTile direction={hair} size="feature" />
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
            <Reveal delay={0.06}>
              <DirectionTile direction={cosmetology} size="medium" />
            </Reveal>
            <Reveal delay={0.1}>
              <DirectionTile direction={laser} size="medium" />
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
            {secondary.map((d, i) => (
              <Reveal key={d.slug} delay={0.12 + i * 0.04}>
                <DirectionTile direction={d} size="secondary" />
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.24} className="mt-6 flex flex-wrap gap-2.5">
          {compact.map((d) => {
            const Icon = directionIcons[d.slug as keyof typeof directionIcons];
            return (
              <Link
                key={d.slug}
                href={`/services/${d.slug}`}
                className="group flex items-center gap-2 rounded-full border border-border px-4 py-2.5 text-sm text-foreground transition-colors hover:border-border-strong hover:bg-surface"
              >
                <Icon className="h-4 w-4 text-muted transition-colors group-hover:text-accent" />
                {d.title}
              </Link>
            );
          })}
          <Link
            href="/services"
            className="flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-2"
          >
            Все услуги и цены
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}

function DirectionTile({ direction: d, size }: { direction: Direction; size: "feature" | "medium" | "secondary" }) {
  const Icon = directionIcons[d.slug as keyof typeof directionIcons];
  const aspect = size === "feature" ? "aspect-[16/9] sm:aspect-[21/9]" : size === "medium" ? "aspect-[4/3]" : "aspect-square";
  const titleClass =
    size === "feature"
      ? "font-serif text-3xl text-background sm:text-4xl"
      : size === "medium"
        ? "font-serif text-xl text-background sm:text-2xl"
        : "text-base font-semibold text-background";

  return (
    <Link href={`/services/${d.slug}`} className={clsx("group relative block overflow-hidden rounded-2xl border border-border", aspect)}>
      <PhotoPlaceholder
        shotNumber={d.code}
        label={d.title}
        description={`Фотография направления «${d.title}»`}
        tone={toneOf(d)}
        subject={size === "secondary" ? "detail" : "wide"}
        aspectClassName="h-full"
        hideCaption
        className="transition-transform duration-500 group-hover:scale-[1.04]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/10 to-transparent" />

      <div className={clsx("pointer-events-none absolute inset-0 flex flex-col justify-between", size === "secondary" ? "p-4 sm:p-5" : "p-6 sm:p-7")}>
        <div className="flex items-center justify-between">
          {size !== "secondary" && <Icon className={size === "feature" ? "h-8 w-8 text-background" : "h-6 w-6 text-background"} />}
          <span
            className={clsx(
              "ml-auto flex items-center justify-center rounded-full border border-background/35 text-background transition-all duration-300 group-hover:border-background group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
              size === "secondary" ? "h-7 w-7" : "h-9 w-9"
            )}
          >
            <ArrowIcon className={size === "secondary" ? "h-3 w-3 -rotate-45" : "h-3.5 w-3.5 -rotate-45"} />
          </span>
        </div>

        <div>
          <h3 className={titleClass}>{d.title}</h3>
          {size === "feature" && <p className="mt-2 max-w-sm text-sm text-background/85 sm:text-base">{d.short}</p>}
          {size === "medium" && <p className="mt-1.5 text-sm text-background/80">{d.short}</p>}
        </div>
      </div>
    </Link>
  );
}
