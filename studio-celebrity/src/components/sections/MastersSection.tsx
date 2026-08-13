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
          {masters.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.07}>
              <Link href={`/masters/${m.slug}`} className="group block">
                <div className="overflow-hidden rounded-2xl">
                  <PhotoPlaceholder
                    shotNumber={String(i + 1).padStart(2, "0")}
                    label={`${m.name} — портрет`}
                    description={m.role}
                    tone="ivory"
                    subject="portrait"
                    aspectClassName="aspect-[3/4]"
                    className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-3.5 text-base font-semibold text-foreground">{m.name}</h3>
                <p className="text-xs text-muted">{m.role}</p>
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

          <Reveal delay={masters.length * 0.07} className="col-span-2 lg:col-span-1">
            <div className="flex h-full flex-col justify-between gap-6 rounded-2xl bg-deep p-6 text-background">
              <div className="flex items-center justify-between">
                <p className="text-sm leading-snug">
                  Не знаете, какую услугу выбрать?
                </p>
                <Monogram className="h-8 w-8" dark />
              </div>
              <p className="text-xs leading-relaxed text-background/60">
                Поможем подобрать лучшее решение под ваш образ.
              </p>
              <Button onClick={() => openBooking()} variant="nude" size="md" className="justify-center">
                {ctaLabels.consultation}
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
