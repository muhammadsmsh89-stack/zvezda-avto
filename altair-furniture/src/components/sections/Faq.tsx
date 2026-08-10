"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconChevron } from "@/components/icons";

const DEFAULT_VISIBLE = 6;

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? faqItems : faqItems.slice(0, DEFAULT_VISIBLE);
  const hiddenCount = faqItems.length - DEFAULT_VISIBLE;

  return (
    <section id="faq" className="bg-stone py-20 sm:py-24">
      <Container size="content">
        <Reveal>
          <SectionHeading index="§08" eyebrow="Вопросы" title="Частые вопросы" className="mb-14" />
        </Reveal>

        <dl className="border-y border-border">
          {visibleItems.map((item, i) => {
            const isOpen = openIndex === i;
            const panelId = `faq-panel-${i}`;
            const buttonId = `faq-button-${i}`;
            return (
              <div key={item.question} className="border-b border-border last:border-b-0">
                <dt>
                  <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 py-4 text-left"
                  >
                    <span className="font-display text-lg font-medium text-ink sm:text-xl">{item.question}</span>
                    <IconChevron
                      className={clsx(
                        "h-4 w-4 shrink-0 text-muted transition-transform duration-300",
                        isOpen && "rotate-180",
                      )}
                    />
                  </button>
                </dt>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.dd
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-pretty max-w-2xl pb-5 text-[15px] leading-relaxed text-muted">
                        {item.answer}
                      </p>
                    </motion.dd>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </dl>

        {!showAll && hiddenCount > 0 && (
          <Reveal className="mt-8">
            <button type="button" onClick={() => setShowAll(true)} className="group flex items-center gap-3">
              <span className="font-mono-tag text-sm text-accent">+{hiddenCount}</span>
              <span className="text-sm text-ink underline decoration-border underline-offset-4 group-hover:decoration-accent">
                Показать остальные вопросы
              </span>
              <IconChevron className="h-3.5 w-3.5 text-muted transition-transform group-hover:translate-y-0.5" />
            </button>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
