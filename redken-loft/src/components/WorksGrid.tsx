"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { Button } from "@/components/ui/Button";
import { workCategories, works } from "@/lib/works";
import { whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

const tones = ["copper", "espresso", "charcoal"] as const;

export function WorksGrid({ hideCta }: { hideCta?: boolean } = {}) {
  const [filter, setFilter] = useState<(typeof workCategories)[number]>("Все работы");
  const visible = filter === "Все работы" ? works : works.filter((w) => w.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {workCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`min-h-11 rounded-full border px-5 text-sm font-semibold tracking-[0.02em] transition-colors ${
              filter === c
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-foreground hover:border-border-strong"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {visible.map((work, i) => (
          <Reveal key={work.id} delay={i * 0.05}>
            <div className="group relative overflow-hidden rounded-2xl border border-border">
              <PhotoPlaceholder
                shotNumber={work.id}
                label={work.category}
                description={`${work.title} — ${work.master}`}
                tone={tones[i % tones.length]}
                subject={i % 3 === 1 ? "detail" : "portrait"}
                aspectClassName="aspect-[4/5]"
                className="transition-transform duration-500 group-hover:scale-[1.04]"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-background/90 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="text-sm font-semibold text-foreground">{work.title}</p>
                <p className="text-xs text-muted">{work.master}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-sm text-muted">В этой категории работы скоро появятся.</p>
      )}

      {!hideCta && (
        <div className="mt-10">
          <Button href={whatsappBookingLink()}>{ctaLabels.primary}</Button>
        </div>
      )}
    </div>
  );
}
