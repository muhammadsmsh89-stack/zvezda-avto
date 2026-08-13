"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal, EASE } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { directions } from "@/lib/services";

const priceDirections = directions.filter((d) => d.slug !== "education");

export function PricesSection() {
  const [openSlug, setOpenSlug] = useState<string>(priceDirections[0].slug);

  return (
    <section id="prices" className="bg-surface-2/50 py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <Reveal>
            <h2 className="text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
              Услуги и цены
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <TextLink href="/prices">Полный прайс-лист</TextLink>
          </Reveal>
        </div>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {priceDirections.map((d) => {
            const isOpen = openSlug === d.slug;
            return (
              <div key={d.slug}>
                <button
                  onClick={() => setOpenSlug(isOpen ? "" : d.slug)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-lg font-semibold text-foreground">{d.title}</span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border-strong text-foreground transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={1.6}>
                      <path d="M8 2v12M2 8h12" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <ul className="grid grid-cols-1 gap-x-8 gap-y-3 pb-6 sm:grid-cols-2">
                        {d.items.map((item) => (
                          <li key={item.name} className="flex items-baseline justify-between gap-4 text-sm">
                            <span className="text-foreground/85">{item.name}</span>
                            <span className="shrink-0 font-medium text-foreground">
                              {item.price ?? "Уточнить стоимость"}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Точную стоимость процедуры подтвердит мастер на записи.
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
