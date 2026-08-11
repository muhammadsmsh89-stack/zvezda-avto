"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { clsx } from "clsx";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DoorTexturePanel } from "@/components/art/DoorTexturePanel";
import { doorCategories } from "@/lib/catalog";
import { whatsappQuiz } from "@/lib/whatsapp";
import { IconArrowRight, IconCheck, IconWhatsApp } from "@/components/icons";
import { track } from "@/lib/analytics";
import { EASE_EDITORIAL } from "@/lib/motion";

const STYLES = ["Минимализм", "Современная классика", "Классика", "Современный"];
const INTERIORS = ["Светлый", "Тёмный", "Дерево", "Нейтральный"];
const QUANTITIES = ["1 дверь", "2–3 двери", "4–6 дверей", "7 и более"];

type Step = 1 | 2 | 3 | 4;

export function QuizSection() {
  const [step, setStep] = useState<Step>(1);
  const [style, setStyle] = useState<string | null>(null);
  const [interior, setInterior] = useState<string | null>(null);
  const [doorType, setDoorType] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const totalSteps = 4;
  const isComplete = step === 4 && !!style && !!interior && !!doorType;

  function goTo(next: Step) {
    setStep(next);
    if (next === 2 && step === 1) track("quiz_started", {});
    track("quiz_step", { step: next });
  }

  function reset() {
    setStep(1);
    setStyle(null);
    setInterior(null);
    setDoorType(null);
    setQuantity(null);
  }

  const summaryHref =
    style && interior && doorType
      ? whatsappQuiz({ style, interior, doorType, quantity: quantity ?? undefined })
      : "#";

  return (
    <section id="podbor" className="scroll-mt-20 bg-surface-2 py-20 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Подбор"
          title="Не знаете, какая дверь подойдёт интерьеру?"
          lead="Три коротких шага — и мы подскажем варианты в WhatsApp, без похода в шоурум."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.85fr_1.15fr_0.85fr]">
          {/* Индикатор шагов */}
          <div className="flex lg:flex-col gap-3">
            {["Стиль", "Интерьер", "Тип двери", "Готово"].map((label, i) => {
              const n = (i + 1) as Step;
              const active = step === n;
              const done = step > n || (n === 4 && isComplete);
              return (
                <div
                  key={label}
                  className={clsx(
                    "flex items-center gap-3 border-l-2 pl-4 py-1 transition-colors",
                    active ? "border-accent" : done ? "border-foreground/40" : "border-border-strong"
                  )}
                >
                  <span
                    className={clsx(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px]",
                      active
                        ? "bg-accent text-accent-foreground"
                        : done
                          ? "bg-foreground text-background"
                          : "bg-transparent text-muted border border-border-strong"
                    )}
                  >
                    {done && n !== 4 ? <IconCheck className="h-3 w-3" /> : n}
                  </span>
                  <span className={clsx("text-[14px]", active ? "text-foreground" : "text-muted")}>{label}</span>
                </div>
              );
            })}
          </div>

          {/* Контент шага */}
          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="s1"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                >
                  <p className="text-[15px] text-muted mb-4">Шаг 1 из {totalSteps} — выберите стиль</p>
                  <div className="grid grid-cols-2 gap-3">
                    {STYLES.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setStyle(s);
                          goTo(2);
                        }}
                        className={clsx(
                          "rounded-[3px] border px-5 py-5 text-left text-[16px] transition-colors",
                          style === s
                            ? "border-accent bg-accent/10 text-foreground"
                            : "border-border-strong bg-surface hover:border-accent"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="s2"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                >
                  <p className="text-[15px] text-muted mb-4">Шаг 2 из {totalSteps} — атмосфера интерьера</p>
                  <div className="grid grid-cols-2 gap-3">
                    {INTERIORS.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => {
                          setInterior(s);
                          goTo(3);
                        }}
                        className={clsx(
                          "rounded-[3px] border px-5 py-5 text-left text-[16px] transition-colors",
                          interior === s
                            ? "border-accent bg-accent/10 text-foreground"
                            : "border-border-strong bg-surface hover:border-accent"
                        )}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={() => goTo(1)} className="mt-5 text-[14px] text-muted hover:text-accent">
                    ← Назад
                  </button>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="s3"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                >
                  <p className="text-[15px] text-muted mb-4">Шаг 3 из {totalSteps} — тип двери</p>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {doorCategories.map((c) => (
                      <button
                        key={c.slug}
                        type="button"
                        onClick={() => {
                          setDoorType(c.shortTitle);
                          goTo(4);
                        }}
                        className={clsx(
                          "rounded-[3px] border px-5 py-5 text-left text-[16px] transition-colors",
                          doorType === c.shortTitle
                            ? "border-accent bg-accent/10 text-foreground"
                            : "border-border-strong bg-surface hover:border-accent"
                        )}
                      >
                        {c.shortTitle}
                      </button>
                    ))}
                  </div>
                  <button type="button" onClick={() => goTo(2)} className="mt-5 text-[14px] text-muted hover:text-accent">
                    ← Назад
                  </button>
                </motion.div>
              )}

              {step === 4 && isComplete && (
                <motion.div
                  key="s4"
                  initial={reducedMotion ? { opacity: 1 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: EASE_EDITORIAL }}
                  className="rounded-[3px] border border-border-strong bg-surface p-6 sm:p-8"
                >
                  <p className="text-[15px] text-muted mb-5">Ваш подбор</p>
                  <dl className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div>
                      <dt className="text-[13px] text-muted">Стиль</dt>
                      <dd className="text-[17px]">{style}</dd>
                    </div>
                    <div>
                      <dt className="text-[13px] text-muted">Интерьер</dt>
                      <dd className="text-[17px]">{interior}</dd>
                    </div>
                    <div>
                      <dt className="text-[13px] text-muted">Тип</dt>
                      <dd className="text-[17px]">{doorType}</dd>
                    </div>
                  </dl>

                  <p className="mt-6 mb-3 text-[14px] text-muted">Сколько дверей нужно? (необязательно)</p>
                  <div className="flex flex-wrap gap-2.5">
                    {QUANTITIES.map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => setQuantity(quantity === q ? null : q)}
                        className={clsx(
                          "rounded-[3px] border px-4 py-2 text-[14px] transition-colors",
                          quantity === q ? "border-accent bg-accent/10" : "border-border-strong hover:border-accent"
                        )}
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  <p className="mt-5 text-[13px] text-muted">
                    Фото интерьера можно отправить прямо в WhatsApp вместе с сообщением — так менеджеру будет проще предложить точные варианты.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <a
                      href={summaryHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        track("quiz_completed", { style, interior, doorType, quantity: quantity ?? undefined });
                        track("whatsapp_click", { location: "quiz" });
                      }}
                      className="inline-flex items-center gap-2 rounded-[3px] bg-foreground px-6 py-3.5 text-[15px] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      <IconWhatsApp className="h-4 w-4" />
                      Получить подборку в WhatsApp
                    </a>
                    <button type="button" onClick={reset} className="inline-flex items-center gap-1.5 text-[14px] text-muted hover:text-accent">
                      Начать заново
                      <IconArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Текстурная панель — тот же showroom-визуал, что в hero, чтобы шаг подбора не ощущался
              как оторванная от бренда SaaS-форма */}
          <DoorTexturePanel tone="walnut" crop="door" variant="single" className="hidden min-h-[420px] lg:block">
            <p className="text-[15px] text-deep-foreground/80">Подбор с менеджером</p>
            <p className="mt-1 max-w-[26ch] text-[13px] leading-snug text-deep-foreground/60">
              Финальный выбор фактуры и цвета — всегда вживую, в шоуруме
            </p>
          </DoorTexturePanel>
        </div>
      </div>
    </section>
  );
}
