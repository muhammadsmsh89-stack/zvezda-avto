"use client";

import { useState } from "react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ChevronDown } from "@/components/ui/Icons";

const faqs = [
  {
    q: "Сколько занимает полная оклейка?",
    a: "Зависит от объёма работ и материала — от одного дня для отдельных зон до нескольких дней для полной защиты или переоклейки кузова. Точный срок согласовываем на этапе осмотра автомобиля.",
  },
  {
    q: "Какая плёнка лучше?",
    a: "Зависит от задачи: для сохранения кузова с завода — полиуретановая защитная плёнка, для смены облика — виниловая. Подберём материал вместе с вами на консультации.",
  },
  {
    q: "Можно ли снять плёнку без повреждения ЛКП?",
    a: "При аккуратном демонтаже качественная плёнка снимается без повреждения заводского лакокрасочного покрытия. Сроки эксплуатации и способ снятия зависят от конкретного материала.",
  },
  {
    q: "Нужно ли разбирать автомобиль?",
    a: "Для аккуратного результата отдельные элементы (молдинги, зеркала, ручки) могут демонтироваться специалистом — это часть процесса оклейки, а не отдельная услуга.",
  },
  {
    q: "Что происходит с гарантией?",
    a: "Гарантия на выполненные работы предоставляется по условиям договора. Гарантия автопроизводителя на кузов при аккуратной оклейке, как правило, не затрагивается — уточняйте у своего дилера в спорных случаях.",
  },
  {
    q: "Как ухаживать за автомобилем после оклейки?",
    a: "Рекомендации по мойке и уходу зависят от типа плёнки — их даёт специалист студии при выдаче автомобиля.",
  },
  {
    q: "Можно ли защитить только зоны риска?",
    a: "Да, это один из самых частых запросов — капот, бампер, зеркала и пороги закрываются защитной плёнкой без оклейки всего кузова.",
  },
  {
    q: "Работаете ли с новыми китайскими автомобилями?",
    a: "Да, среди реализованных проектов студии — Zeekr, Li Auto, Xiaomi, Changan и другие современные модели.",
  },
  {
    q: "Можно ли оклеить автомобиль в другой цвет?",
    a: "Да, виниловая плёнка меняет цвет и фактуру кузова — доступно больше 1000 цветов и вариантов, включая матовые, глянцевые и текстурные покрытия.",
  },
  {
    q: "Работаете ли с юридическими лицами?",
    a: "Да, студия работает с брендированием коммерческого и грузового транспорта, такси и спецтехники для компаний.",
  },
] as const;

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-surface-2/50 py-20 lg:py-28">
      <Container className="max-w-3xl">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Вопросы</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 text-pretty text-display font-medium text-foreground">Частые вопросы</h2>
        </Reveal>

        <div className="mt-10 divide-y divide-border rounded-[1.5rem] border border-border bg-surface">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex min-h-14 w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                >
                  <span className="text-[15px] font-medium text-foreground">{item.q}</span>
                  <ChevronDown className={clsx("h-4.5 w-4.5 shrink-0 text-muted transition-transform duration-300", isOpen && "rotate-180 text-accent")} />
                </button>
                <div
                  className={clsx("grid transition-all duration-300 ease-out", isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0")}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted sm:px-7">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
