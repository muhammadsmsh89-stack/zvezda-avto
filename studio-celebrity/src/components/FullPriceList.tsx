"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/components/ui/Reveal";
import { directions } from "@/lib/services";

export function FullPriceList() {
  const [openSlug, setOpenSlug] = useState<string>(directions[0].slug);

  return (
    <div className="divide-y divide-border border-y border-border">
      {directions.map((d) => {
        const isOpen = openSlug === d.slug;
        return (
          <div key={d.slug}>
            <button
              onClick={() => setOpenSlug(isOpen ? "" : d.slug)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left"
            >
              <span>
                <span className="text-lg font-semibold text-foreground">{d.title}</span>
                <span className="ml-3 text-xs uppercase tracking-[0.1em] text-muted">{d.code}</span>
              </span>
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
                  <p className="pb-4 text-sm text-muted">{d.description}</p>
                  <ul className="grid grid-cols-1 gap-x-8 gap-y-3 pb-7 sm:grid-cols-2">
                    {d.items.map((item) => (
                      <li key={item.name} className="flex items-baseline justify-between gap-4 text-sm">
                        <span className="text-foreground/85">
                          {item.name}
                          {item.note && item.note !== "VERIFY_BEFORE_PRODUCTION" && (
                            <span className="ml-2 text-xs text-muted">{item.note}</span>
                          )}
                        </span>
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
  );
}
