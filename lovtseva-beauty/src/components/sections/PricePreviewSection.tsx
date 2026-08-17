import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { directions } from "@/lib/services";
import { ctaLabels } from "@/lib/site";

const highlights = [
  { direction: "hair", name: "Женская стрижка", price: "1 100–1 400 ₽" },
  { direction: "hair", name: "Японская биозавивка tocosme", price: "3 700 ₽" },
  { direction: "nails", name: "Маникюр", price: "1 100 ₽" },
  { direction: "nails", name: "Маникюр + гель-лак", price: "1 900 ₽" },
  { direction: "permanent", name: "Перманентный макияж", price: "8 000 ₽" },
  { direction: "laser", name: "Лазерная эпиляция", price: "от 600 ₽" },
] as const;

export function PricePreviewSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Прайс</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-3 max-w-lg text-pretty font-serif text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Сколько это стоит
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h, i) => {
            const d = directions.find((dir) => dir.slug === h.direction);
            return (
              <Reveal key={h.name} delay={i * 0.04} className="border-t border-border pt-4">
                <span className="text-[11px] uppercase tracking-[0.1em] text-muted">{d?.code}</span>
                <div className="mt-1.5 flex items-baseline justify-between gap-4">
                  <span className="text-base text-foreground">{h.name}</span>
                  <span className="shrink-0 text-xl font-semibold text-foreground">{h.price}</span>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap items-center gap-4">
          <Button href="/prices">{ctaLabels.prices}</Button>
          <p className="text-sm text-muted">Публичные ориентиры на дату проверки — точная стоимость у администратора.</p>
        </Reveal>
      </Container>
    </section>
  );
}
