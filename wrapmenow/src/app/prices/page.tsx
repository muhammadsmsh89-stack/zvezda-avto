import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { priceGroups, pricesNote } from "@/lib/pricing";
import { whatsappLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Цены",
  description: "Ориентировочная стоимость оклейки автомобиля в WrapMeNow — по услугам и типу работ.",
};

export default function PricesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Цены"
        title="Ориентировочная стоимость"
        description="Точная стоимость зависит от класса автомобиля, материала и площади оклейки. Финальная цена фиксируется после согласования."
        action={
          <Button href="/#calculator" dataEvent="hero_calc_click">
            {ctaLabels.primary}
          </Button>
        }
      />

      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {priceGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.05} className="rounded-[1.5rem] border border-border bg-surface p-6 sm:p-7">
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

          <Reveal delay={0.2} className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">
            {pricesNote}
          </Reveal>

          <Reveal delay={0.26} className="mt-8">
            <Button variant="secondary" href={whatsappLink()} dataEvent="whatsapp_click">
              Уточнить точную стоимость в WhatsApp
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
