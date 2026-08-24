"use client";

import { useState } from "react";
import { clsx } from "clsx";

export function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line border-t border-b border-line">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
            >
              <span className="font-display text-[1.1875rem] text-ink sm:text-[1.3125rem]">
                {item.q}
              </span>
              <span
                className={clsx(
                  "relative h-4 w-4 shrink-0 text-accent transition-transform duration-300",
                  isOpen && "rotate-45",
                )}
                aria-hidden="true"
              >
                <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
                <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
              </span>
            </button>
            <div
              className={clsx(
                "grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="max-w-[62ch] pb-6 text-[1.0625rem] leading-[1.65] text-ink-soft">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
