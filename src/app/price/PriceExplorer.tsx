"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { priceList } from "@/lib/content";

export function PriceExplorer() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | "all">("all");

  const normalizedQuery = query.trim().toLowerCase();

  const filtered = useMemo(() => {
    return priceList
      .filter((cat) => activeCategory === "all" || cat.title === activeCategory)
      .map((cat) => ({
        ...cat,
        rows: cat.rows.filter((row) =>
          normalizedQuery ? row.name.toLowerCase().includes(normalizedQuery) : true
        ),
      }))
      .filter((cat) => cat.rows.length > 0);
  }, [normalizedQuery, activeCategory]);

  const totalResults = filtered.reduce((acc, cat) => acc + cat.rows.length, 0);

  return (
    <div>
      <div className="sticky top-[73px] z-30 -mx-5 border-b border-border bg-background/95 px-5 py-4 backdrop-blur md:top-[81px] md:mx-0 md:rounded-2xl md:border md:px-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center">
          <div className="relative flex-1">
            <SearchIcon />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Найти услугу, например «тормозные колодки»"
              className="w-full rounded-xl border border-border-strong bg-surface-2 py-3 pl-11 pr-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent"
            />
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
          <CategoryPill
            active={activeCategory === "all"}
            onClick={() => setActiveCategory("all")}
            label="Все категории"
          />
          {priceList.map((cat) => (
            <CategoryPill
              key={cat.title}
              active={activeCategory === cat.title}
              onClick={() => setActiveCategory(cat.title)}
              label={cat.title}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 text-sm text-muted">
        Найдено позиций: <span className="font-semibold text-foreground">{totalResults}</span>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        {filtered.map((cat) => (
          <motion.div
            key={cat.title}
            layout
            className="h-fit rounded-2xl border border-border bg-surface p-6"
          >
            <h3 className="font-sans text-lg font-bold text-foreground">{cat.title}</h3>
            <ul className="mt-4 divide-y divide-border">
              {cat.rows.map((row) => (
                <li key={row.name} className="flex items-baseline justify-between gap-4 py-3">
                  <span className="text-sm text-foreground/85">{row.name}</span>
                  <span className="whitespace-nowrap text-sm font-semibold text-accent">{row.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-full rounded-2xl border border-dashed border-border p-12 text-center text-sm text-muted">
            Ничего не найдено. Попробуйте другой запрос или свяжитесь с нами — мы уточним цену.
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryPill({
  active,
  onClick,
  label,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${
        active
          ? "border-accent bg-accent text-accent-foreground"
          : "border-border-strong text-foreground/70 hover:border-accent hover:text-accent"
      }`}
    >
      {label}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
    >
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M21 21L16.5 16.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
