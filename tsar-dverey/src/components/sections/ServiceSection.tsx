import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  { n: "01", title: "Подбор", note: "Определяем стиль и тип двери — на сайте или в шоуруме" },
  { n: "02", title: "Консультация", note: "Сравниваем модели, фактуры и цвета вживую" },
  { n: "03", title: "Замер", note: "Выезд на объект для точных размеров проёма" },
  { n: "04", title: "Заказ", note: "Фиксируем модель, комплектацию и сроки" },
  { n: "05", title: "Доставка", note: "Готовые двери привозят на объект" },
  { n: "06", title: "Монтаж", note: "Установка силами мастеров компании" },
];

export function ServiceSection() {
  return (
    <section className="bg-deep py-20 text-deep-foreground sm:py-28">
      <div className="container-wide">
        <SectionHeading eyebrow="Как это устроено" title="Путь от подбора до готовой двери" tone="dark" />

        <div className="mt-12 divide-y divide-deep-border border-y border-deep-border">
          {steps.map((step, i) => (
            <Reveal key={step.n} variant="fade" delay={i * 0.04}>
              <div className="flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:gap-8 sm:py-7">
                <span className="font-display text-[15px] text-accent">{step.n}</span>
                <span className="text-[22px] sm:w-56 sm:shrink-0">{step.title}</span>
                <span className="text-[15px] text-deep-foreground/60">{step.note}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
