"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button, TextLink } from "@/components/ui/Button";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Monogram } from "@/components/ui/Monogram";
import { masters } from "@/lib/masters";
import { ctaLabels } from "@/lib/studio";
import { useBooking } from "@/lib/booking";

export function MastersSection() {
  const { openBooking } = useBooking();
  const [featured, ...rest] = masters;

  return (
    <section id="masters" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <h2 className="text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
              Мастера Studio Celebrity
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <TextLink href="/masters">Смотреть всех мастеров</TextLink>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-5 lg:grid-cols-5">
          <Reveal className="col-span-2 lg:col-span-2">
            <Link href={`/masters/${featured.slug}`} className="group block">
              <div className="overflow-hidden rounded-2xl">
                <PhotoPlaceholder
                  shotNumber="01"
                  label={featured.role}
                  description={featured.role}
                  tone="ivory"
                  subject="portrait"
                  aspectClassName="aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5]"
                  className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-foreground">{featured.name}</h3>
              <p className="text-xs text-muted">{featured.role}</p>
              <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-foreground/70">{featured.specialty}</p>
              <span
                onClick={(e) => {
                  e.preventDefault();
                  openBooking(featured.slug);
                }}
                className="mt-4 inline-flex rounded-full bg-nude px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-nude-strong"
              >
                {ctaLabels.primary}
              </span>
            </Link>
          </Reveal>

          {rest.map((m, i) => (
            <Reveal key={m.slug} delay={(i + 1) * 0.07}>
              <Link href={`/masters/${m.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <PhotoPlaceholder
                    shotNumber={String(i + 2).padStart(2, "0")}
                    label={m.role}
                    description={m.role}
                    tone="ivory"
                    subject="portrait"
                    aspectClassName="aspect-[3/4]"
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-3.5 text-base font-semibold text-foreground">{m.name}</h3>
                <p className="text-xs text-muted">{m.role}</p>
                <p className="mt-1 text-xs leading-relaxed text-foreground/60">{m.specialty}</p>
                <span
                  onClick={(e) => {
                    e.preventDefault();
                    openBooking(m.slug);
                  }}
                  className="mt-3 inline-flex rounded-full bg-nude px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-nude-strong"
                >
                  {ctaLabels.primary}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-5">
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl bg-deep px-6 py-7 text-background sm:flex-row sm:items-center sm:px-8">
            <div className="flex items-center gap-4">
              <Monogram className="h-9 w-9 shrink-0" dark />
              <div>
                <p className="text-base leading-snug">Не знаете, какую услугу выбрать?</p>
                <p className="mt-0.5 text-sm text-background/60">Поможем подобрать мастера под ваш образ.</p>
              </div>
            </div>
            <Button onClick={() => openBooking()} variant="nude" size="md" className="w-full justify-center sm:w-auto">
              {ctaLabels.consultation}
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
