"use client";

import { useState } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { faqItems } from "@/data/faq";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconChevron } from "@/components/icons";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="border-t border-line-dark bg-void py-24 sm:py-32">
      <Container size="wide">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
        </Reveal>

        <div className="mt-12 max-w-3xl border-t border-line-dark">
          {faqItems.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.question} className="border-b border-line-dark">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-base font-medium text-paper sm:text-lg">
                    {item.question}
                  </span>
                  <IconChevron
                    className={clsx(
                      "h-5 w-5 shrink-0 text-paper/50 transition-transform duration-300",
                      open && "rotate-180",
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {open ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-pretty max-w-xl pb-6 text-[15px] leading-relaxed text-paper/60">
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
