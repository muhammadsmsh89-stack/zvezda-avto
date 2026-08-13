"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { portfolio, portfolioCategories } from "@/lib/portfolio";
import { getMasterBySlug } from "@/lib/masters";

export function WorksGrid() {
  const [active, setActive] = useState<string>("Все");
  const items = active === "Все" ? portfolio : portfolio.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {portfolioCategories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-xs font-medium transition-colors ${
              active === c
                ? "border-accent bg-accent text-accent-foreground"
                : "border-border text-foreground hover:border-border-strong"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => {
          const master = item.masterSlug ? getMasterBySlug(item.masterSlug) : undefined;
          return (
            <Reveal key={item.slug} delay={i * 0.06}>
              <div className="grid grid-cols-2 gap-0.5 overflow-hidden rounded-2xl">
                <PhotoPlaceholder shotNumber="До" label={`${item.task} · до`} description="Фото «до»" tone="ivory" aspectClassName="aspect-[3/4]" />
                <PhotoPlaceholder shotNumber="После" label={`${item.task} · после`} description="Фото «после»" tone="espresso" aspectClassName="aspect-[3/4]" />
              </div>
              <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-muted">{item.category}</p>
              <h3 className="mt-1.5 text-lg font-semibold text-foreground">{item.task}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.result}</p>
              {master && <p className="mt-2 text-xs text-muted/70">Мастер — {master.name}</p>}
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
