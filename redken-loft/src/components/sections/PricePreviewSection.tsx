import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { pricePreview } from "@/lib/prices";
import { ctaLabels } from "@/lib/site";

export function PricePreviewSection() {
  return (
    <section className="bg-paper py-20 text-ink lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent-2">Цены</p>
            <h2 className="mt-4 text-pretty font-display text-3xl leading-[1.1] text-ink sm:text-4xl lg:text-[2.75rem]">
              Ориентир по стоимости — точная цена после консультации
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button variant="ink" href="/prices">
              {ctaLabels.allPrices}
            </Button>
          </Reveal>
        </div>

        <div className="mt-10 divide-y divide-ink/12 border-y border-ink/12">
          {pricePreview.map((item, i) => (
            <Reveal
              key={item.name}
              delay={i * 0.05}
              className="flex items-center justify-between gap-6 py-5"
            >
              <span className="text-base text-ink/85 sm:text-lg">{item.name}</span>
              <span className="whitespace-nowrap font-display text-lg text-ink sm:text-xl">{item.price}</span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-6 text-sm text-ink-muted">
          Стоимость окрашивания зависит от длины и густоты волос — салон определяет её на консультации.
        </Reveal>
      </Container>
    </section>
  );
}
