"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Check } from "@/components/ui/Icons";
import { whatsappLink } from "@/lib/contacts";
import clsx from "clsx";

const options = [
  {
    id: "risk",
    label: "Зоны риска",
    includes: ["Капот", "Передний бампер", "Зеркала", "Пороги"],
    price: "от 45 000 ₽*",
    material: "Crystal Pro, глянец или мат",
    note: "Базовый вариант защиты для города — закрывает места, куда чаще всего летят камни и песок.",
  },
  {
    id: "front",
    label: "Передняя часть",
    includes: ["Капот", "Передний бампер", "Крылья", "Фары", "Зеркала"],
    price: "от 85 000 ₽*",
    material: "Crystal Pro / Gliss Pro Premium",
    note: "Полностью закрывает переднюю часть — там, где скорость встречного потока выше всего.",
  },
  {
    id: "full",
    label: "Полный кузов",
    includes: ["Кузов целиком", "Зеркала", "Пороги", "Ручки дверей"],
    price: "от 147 700 ₽*",
    material: "Crystal Pro / Gliss Pro Premium",
    note: "Максимальная защита ЛКП по всему кузову — рекомендуем для новых и премиальных автомобилей.",
  },
  {
    id: "custom",
    label: "Индивидуально",
    includes: ["Только те элементы, что важны именно вам"],
    price: "по расчёту",
    material: "Подберём вместе с вами",
    note: "Опишите автомобиль и задачу — предложим состав работ и материал под бюджет.",
  },
] as const;

export function ProtectionConfigurator() {
  const [active, setActive] = useState<(typeof options)[number]["id"]>("risk");
  const current = options.find((o) => o.id === active)!;

  return (
    <section className="bg-surface-2/50 py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Подберите защиту</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl text-pretty text-display font-medium text-foreground">
            Какая защита нужна вашему автомобилю?
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-10">
          <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Варианты защиты кузова">
            {options.map((o) => (
              <button
                key={o.id}
                role="tab"
                aria-selected={active === o.id}
                onClick={() => setActive(o.id)}
                className={clsx(
                  "min-h-11 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors",
                  active === o.id
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border-strong text-foreground/80 hover:border-foreground"
                )}
              >
                {o.label}
              </button>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.16} className="mt-8 grid grid-cols-1 gap-8 rounded-[1.75rem] border border-border bg-surface p-7 lg:grid-cols-[1.2fr_1fr] lg:gap-12 lg:p-10">
          <div>
            <p className="text-sm leading-relaxed text-muted">{current.note}</p>
            <ul className="mt-6 space-y-3">
              {current.includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground/90">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-between gap-6 border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <div className="space-y-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Ориентировочная стоимость</p>
                <p className="mt-1.5 text-2xl font-semibold text-accent">{current.price}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Рекомендуемый материал</p>
                <p className="mt-1.5 text-sm text-foreground/90">{current.material}</p>
              </div>
            </div>
            <Button
              href={whatsappLink(`Здравствуйте! Интересует защита «${current.label}». Подскажите точную стоимость для моего автомобиля.`)}
              dataEvent="configurator_cta_click"
              className="justify-center"
            >
              Получить точный расчёт
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
