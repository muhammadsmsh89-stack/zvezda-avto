"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { directions } from "@/lib/services";

export function PriceList() {
  const [active, setActive] = useState(directions[0].slug);

  const scrollTo = (slug: string) => {
    setActive(slug);
    document.getElementById(slug)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr] lg:gap-16">
      <div className="lg:sticky lg:top-28 lg:h-fit">
        <div className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-0 lg:pb-0">
          {directions.map((d) => (
            <button
              key={d.slug}
              onClick={() => scrollTo(d.slug)}
              className={`shrink-0 rounded-full px-4 py-2.5 text-left text-sm font-medium transition-colors lg:rounded-lg ${
                active === d.slug
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground/75 hover:bg-surface-2/60 border border-border lg:border-0"
              }`}
            >
              {d.title}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-16">
        {directions.map((d) => (
          <div key={d.slug} id={d.slug} className="scroll-mt-28">
            <Reveal>
              <h2 className="font-serif text-2xl text-foreground sm:text-3xl">{d.title}</h2>
              <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{d.short}</p>
            </Reveal>
            <div className="mt-6 divide-y divide-border border-t border-border">
              {d.items.map((item) => (
                <div key={item.name} className="flex items-baseline justify-between gap-6 py-4">
                  <span>
                    <span className="text-base text-foreground">{item.name}</span>
                    {item.note && <span className="block text-xs text-muted">{item.note}</span>}
                  </span>
                  <span className="shrink-0 text-base font-semibold text-foreground">
                    {item.price ?? <span className="font-normal text-muted">уточняйте</span>}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
