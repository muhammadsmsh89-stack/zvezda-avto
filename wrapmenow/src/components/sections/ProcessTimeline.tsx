"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, EASE } from "@/components/ui/Reveal";

const steps = [
  { number: "01", title: "Консультация", text: "Обсуждаем задачу, автомобиль и бюджет — по телефону или в мессенджере." },
  { number: "02", title: "Осмотр автомобиля", text: "Оцениваем состояние кузова и уточняем объём работ вживую." },
  { number: "03", title: "Фиксируем работы и стоимость", text: "Согласовываем состав работ, материал и итоговую цену." },
  { number: "04", title: "Приём автомобиля по акту", text: "Состояние автомобиля фиксируется документально при приёмке." },
  { number: "05", title: "Демонтаж элементов", text: "Специалист аккуратно демонтирует отдельные элементы кузова при необходимости." },
  { number: "06", title: "Подготовка поверхности", text: "Кузов моется, обезжиривается и готовится к оклейке." },
  { number: "07", title: "Оклейка", text: "Наносим плёнку по согласованной схеме." },
  { number: "08", title: "Контроль качества", text: "Проверяем результат — стыки, отсутствие пузырей, ровность прилегания." },
  { number: "09", title: "Выдача автомобиля", text: "Показываем результат, оформляем акт приёма-передачи." },
  { number: "10", title: "Гарантийное сопровождение", text: "Гарантия на работы по договору — обращайтесь, если возникнут вопросы." },
] as const;

export function ProcessTimeline() {
  return (
    <section className="bg-surface-2/50 py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Процесс</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl text-pretty text-display font-medium text-foreground">
            Автомобиль не исчезает за воротами сервиса
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div aria-hidden className="absolute left-[15px] top-2 bottom-2 hidden w-px bg-border sm:block" />
          <ol className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.65, delay: (i % 5) * 0.05, ease: EASE }}
                className="relative pl-9 sm:pl-10"
              >
                <span className="absolute left-0 top-0.5 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-surface font-[var(--font-display)] text-xs font-semibold text-accent">
                  {step.number}
                </span>
                <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{step.text}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
