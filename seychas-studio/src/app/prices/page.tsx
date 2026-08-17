import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { directions } from "@/lib/services";
import { contacts } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Цены",
  description: "Услуги студии SEYCHAS в Туле. Актуальную стоимость и свободное время смотрите в DIKIDI.",
};

export default function PricesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Цены"
        title="Услуги SEYCHAS"
        description="Стоимость на разных площадках расходится и обновляется не сразу — чтобы не вводить в заблуждение, точную цену и время студия показывает напрямую в DIKIDI на этапе выбора услуги."
        action={
          <Button href={contacts.dikidiUrl} size="lg">
            {ctaLabels.prices}
          </Button>
        }
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <div className="space-y-14">
            {directions.map((d, i) => (
              <Reveal key={d.slug} delay={i * 0.05}>
                <div className="flex items-baseline justify-between gap-4 border-b border-border pb-4">
                  <h2 className="text-2xl font-bold text-foreground">{d.title}</h2>
                  <span className="text-xs uppercase tracking-[0.14em] text-muted">{d.code}</span>
                </div>
                <ul className="mt-5 divide-y divide-border">
                  {d.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between gap-4 py-4">
                      <span className="text-base text-foreground">{item.name}</span>
                      <span className="shrink-0 text-right text-sm text-muted">
                        {item.note ?? "уточнить в DIKIDI"}
                      </span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-14 rounded-2xl border border-border bg-surface p-8 text-center">
            <p className="text-lg text-foreground">Точную стоимость и свободное время удобнее смотреть в DIKIDI — там же можно сразу записаться.</p>
            <Button href={contacts.dikidiUrl} size="lg" className="mt-6">
              {ctaLabels.prices}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
