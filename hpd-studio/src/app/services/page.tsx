import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Container } from "@/components/ui/Container";
import { priceGroups, pricesNote } from "@/lib/prices";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Полировка, защита кузова, химчистка салона, тонировка и шумоизоляция в HPD Studio, Воронеж.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Услуги"
        title="Чем занимается HPD"
        description="Уход за автомобилем: от мойки и полировки до защиты кузова и шумоизоляции."
      />
      <ServicesSection full />

      <section className="border-t border-border bg-surface-2/50 py-20 lg:py-28">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Цены</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-4 max-w-xl text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
              Ориентировочная стоимость
            </h2>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {priceGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06} className="rounded-[1.5rem] border border-border bg-surface p-6 sm:p-7">
                <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
                <ul className="mt-4 space-y-3">
                  {group.rows.map((row) => (
                    <li key={row.label} className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="text-muted">{row.label}</span>
                      <span className="whitespace-nowrap font-semibold text-foreground">{row.from}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-8 max-w-2xl text-sm leading-relaxed text-muted">
            {pricesNote}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
