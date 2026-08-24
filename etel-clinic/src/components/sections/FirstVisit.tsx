"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeUp } from "@/components/ui/Motion";
import { Button } from "@/components/ui/Button";

const steps = [
  { n: "01", title: "Расскажите, что хотите изменить", body: "Опишите задачу своими словами — не нужно знать название процедуры или аппарата." },
  { n: "02", title: "Выберите направление или врача", body: "Из навигатора «Что вас беспокоит» или сразу из команды специалистов клиники." },
  { n: "03", title: "Консультация врача", body: "Осмотр, разговор о задаче и ограничениях, честный разбор возможных вариантов." },
  { n: "04", title: "Индивидуальный план", body: "Протокол под вашу задачу — с обоснованием, почему выбрана именно эта технология." },
];

function StackCard({ step, index }: { step: (typeof steps)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.95", "start 0.55"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.55, 1]);

  return (
    <div
      ref={ref}
      className="sticky"
      style={{ top: `${6 + index * 1.1}rem`, zIndex: index + 1 }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="flex gap-6 rounded-[1.5rem] border border-ink/8 bg-paper p-7 shadow-[0_24px_60px_-30px_rgba(34,26,23,0.35)] sm:gap-8 sm:p-9"
      >
        <span className="font-display shrink-0 text-[2.25rem] leading-none text-accent/30 tabular-nums sm:text-[2.75rem]">{step.n}</span>
        <div>
          <h3 className="text-[1.1875rem] font-semibold text-ink">{step.title}</h3>
          <p className="mt-2 max-w-[26rem] text-[0.9375rem] leading-[1.6] text-ink-mute">{step.body}</p>
        </div>
      </motion.div>
    </div>
  );
}

export function FirstVisit() {
  return (
    <section className="bg-stone py-24 sm:py-32">
      <Container wide>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <FadeUp>
              <p className="eyebrow">Первый визит</p>
              <h2 className="font-display mt-4 text-[2.5rem] leading-[1.02] text-ink text-balance sm:text-[3rem]">
                Не знаете, какая процедура нужна?
              </h2>
            </FadeUp>
            <FadeUp delay={0.08}>
              <p className="mt-5 max-w-[24rem] text-[1.0625rem] leading-[1.6] font-medium text-ink-soft">
                Это нормально — большинство пациентов приходят с задачей, а не
                с готовым списком процедур.
              </p>
            </FadeUp>
            <FadeUp delay={0.14}>
              <div className="mt-8">
                <Button href="/doctors/">Подобрать специалиста</Button>
              </div>
            </FadeUp>
          </div>

          <div className="space-y-6">
            {steps.map((s, i) => (
              <StackCard key={s.n} step={s} index={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
