"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { JsonLd, faqLd } from "@/lib/seo";

const items = [
  {
    q: "Нужно ли знать название процедуры перед записью?",
    a: "Нет. Расскажите врачу на консультации, что вас беспокоит — протокол и технологию подберут по итогам осмотра.",
  },
  {
    q: "Есть ли у клиники медицинская лицензия?",
    a: "Да, «Этель» — центр медицинской косметологии, работает по медицинской лицензии. Номер лицензии указан в разделе «Сведения об организации».",
  },
  {
    q: "Можно ли записаться в любую из трёх клиник?",
    a: "Да, у клиник на Ромашина, на 50 лет Октября и на Дуки единые стандарты приёма — выбирайте по удобству расположения.",
  },
  {
    q: "Сколько стоит консультация?",
    a: "Стоимость зависит от направления и врача — уточните на странице «Цены» или у администратора при записи.",
  },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="bg-stone py-24 sm:py-32">
      <Container className="max-w-[48rem]">
        <FadeUp>
          <p className="eyebrow">Вопросы</p>
          <h2 className="font-display mt-4 text-[2.25rem] text-ink sm:text-[2.75rem]">Частые вопросы</h2>
        </FadeUp>

        <div className="mt-10 space-y-3">
          {items.map((item, i) => {
            const open = openIdx === i;
            return (
              <FadeUp key={item.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-ink/8 bg-paper">
                  <button
                    type="button"
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  >
                    <span className="text-[1.0625rem] font-semibold text-ink">{item.q}</span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink/6 text-ink-mute"
                    >
                      <Plus size={16} />
                    </motion.span>
                  </button>
                  <div
                    className="grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p className="max-w-[38rem] px-6 pb-5 text-[0.9375rem] leading-[1.65] text-ink-mute">{item.a}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </Container>
      <JsonLd data={faqLd(items.map((i) => ({ question: i.q, answer: i.a })))} />
    </section>
  );
}
