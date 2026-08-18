import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { PriceTable } from "@/components/PriceTable";
import { ctaLabels } from "@/lib/site";

export function PricesPreviewSection() {
  return (
    <section id="prices" className="bg-surface pt-14 pb-14 lg:pt-20 lg:pb-20">
      <Container className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <Reveal className="lg:col-span-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Цены</p>
          <h2 className="mt-3 text-pretty text-3xl leading-tight text-foreground sm:text-4xl">
            Стоимость — без квеста
          </h2>
          <p className="mt-5 max-w-sm text-pretty leading-relaxed text-muted">
            Классический маникюр с покрытием — {"990–2200 ₽"}. Цена мастера и топ-мастера различается —
            выбираете при записи.
          </p>
          <div className="mt-7">
            <TextLink href="/prices">{ctaLabels.allServices}</TextLink>
          </div>
        </Reveal>

        <div className="lg:col-span-7 lg:col-start-6">
          <PriceTable limit={2} />
        </div>
      </Container>
    </section>
  );
}
