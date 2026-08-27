"use client";

import { useMemo, useState } from "react";
import { works, workCategories, type WorkCategory } from "@/lib/content";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ColorField } from "@/components/ui/ColorField";
import { Reveal } from "@/components/ui/Reveal";

const spanClass: Record<string, string> = {
  tall: "sm:row-span-2 aspect-[3/4] sm:aspect-auto",
  wide: "sm:col-span-2 aspect-[16/10]",
  square: "aspect-square",
};

export function Works() {
  const [active, setActive] = useState<(typeof workCategories)[number]>("Все");

  const visible = useMemo(
    () => (active === "Все" ? works : works.filter((w) => w.category === (active as WorkCategory))),
    [active]
  );

  return (
    <section id="works" className="border-t border-border bg-background py-20 scroll-mt-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            index="03"
            eyebrow="Портфолио"
            title="Работы, которые говорят за мастеров"
          />
          <Reveal delay={0.15} className="flex flex-wrap gap-2 lg:justify-end">
            {workCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`border px-4 py-2 text-xs font-medium uppercase tracking-wide transition-colors ${
                  active === cat
                    ? "border-ink bg-ink text-background"
                    : "border-border-strong text-foreground/70 hover:border-ink hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:auto-rows-[200px] sm:grid-cols-4 sm:gap-4">
          {visible.map((work, i) => (
            <Reveal key={work.id} delay={0.04 * (i % 4)} className={`group relative overflow-hidden ${spanClass[work.span]}`}>
              <ColorField swatch={work.swatch} className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/0 to-ink/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-xs font-medium uppercase tracking-wide text-background">
                  {work.caption}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-xs leading-relaxed text-muted">
          В демо-версии показаны цветовые карты вместо фотографий — на сайте владельца этот блок
          заменяется реальными кадрами работ Redken Loft по каждой категории.
        </p>
      </div>
    </section>
  );
}
