"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faq } from "@/lib/content";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-background py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading eyebrow="Вопросы" title="Отвечаем на частые вопросы" align="center" />

        <div className="mt-12 space-y-3">
          {faq.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border bg-surface">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-foreground">{item.question}</span>
                    <span
                      className={`shrink-0 text-accent transition-transform ${isOpen ? "rotate-45" : ""}`}
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.answer}</p>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
