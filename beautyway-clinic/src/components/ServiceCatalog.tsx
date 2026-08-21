"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { IconSearch, IconArrow, IconClose } from "./ui/Icons";

export type CatalogItem = {
  slug: string;
  title: string;
  category: string | null;
  categoryTitle: string | null;
  price: string | null;
  keywords: string;
};

export type CatalogCategory = { slug: string; title: string; count: number };

const QUICK = ["губы", "морщины", "лазер", "чистка", "лифтинг", "эпиляция", "акне", "пигмент"];

/**
 * Каталог как мобильный инструмент: поиск по названию, проблеме и зоне,
 * фильтр по направлению. Без трёхуровневого меню и без каруселей.
 */
export function ServiceCatalog({
  items,
  categories,
}: {
  items: CatalogItem[];
  categories: CatalogCategory[];
}) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [limit, setLimit] = useState(24);
  const q = useDeferredValue(query).trim().toLowerCase();

  const filtered = useMemo(() => {
    let list = items;
    if (cat !== "all") list = list.filter((i) => i.category === cat);
    if (q.length >= 2) {
      const words = q.split(/\s+/).filter(Boolean);
      list = list.filter((i) => words.every((w) => i.keywords.includes(w)));
    }
    return list;
  }, [items, cat, q]);

  const visible = filtered.slice(0, limit);
  const reset = () => {
    setQuery("");
    setCat("all");
    setLimit(24);
  };

  return (
    <div>
      <div className="rounded-[12px] border border-line bg-porcelain p-4 sm:p-5">
        <label htmlFor="catalog-search" className="mb-2 block text-[0.9375rem] font-medium text-graphite">
          Поиск по услуге, проблеме или зоне
        </label>
        <div className="relative">
          <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-graphite-soft" />
          <input
            id="catalog-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(24);
            }}
            placeholder="Например: губы, морщины, лазер"
            className="min-h-[52px] w-full rounded-[6px] border border-line bg-milk pl-11 pr-11 text-[1rem] text-graphite placeholder:text-graphite-soft/80 focus:border-plum focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Очистить поиск"
              className="absolute right-2 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-[4px] text-graphite-soft hover:text-plum-deep cursor-pointer"
            >
              <IconClose className="h-[18px] w-[18px]" />
            </button>
          )}
        </div>

        <div className="mt-3.5 flex flex-wrap items-center gap-2">
          <span className="text-[0.8125rem] text-graphite-soft">Частые запросы:</span>
          {QUICK.map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => {
                setQuery(k);
                setCat("all");
                setLimit(24);
              }}
              className="inline-flex min-h-[44px] items-center rounded-full border border-line px-3 text-[0.8125rem] text-plum transition-colors hover:border-plum/45 hover:bg-plum-tint cursor-pointer"
            >
              {k}
            </button>
          ))}
        </div>
      </div>

      <div className="no-scrollbar -mx-5 mt-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div className="flex gap-2 pb-1" role="group" aria-label="Фильтр по направлению">
          <Chip active={cat === "all"} onClick={() => { setCat("all"); setLimit(24); }}>
            Все направления ({items.length})
          </Chip>
          {categories.map((c) => (
            <Chip key={c.slug} active={cat === c.slug} onClick={() => { setCat(c.slug); setLimit(24); }}>
              {c.title} ({c.count})
            </Chip>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-5 text-[0.875rem] text-graphite-soft">
        {filtered.length === 0
          ? "Ничего не нашлось — попробуйте другое слово или сбросьте фильтр."
          : `Найдено услуг: ${filtered.length}`}
      </p>

      {filtered.length === 0 && (
        <button
          type="button"
          onClick={reset}
          className="mt-3 inline-flex min-h-[48px] items-center justify-center rounded-[4px] border border-plum/45 px-5 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint cursor-pointer"
        >
          Сбросить фильтры
        </button>
      )}

      <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((i) => (
          <li key={i.slug}>
            <Link
              href={`/uslugi/${i.slug}`}
              className="group flex h-full flex-col justify-between gap-3 rounded-[10px] border border-line bg-porcelain p-4 transition-colors hover:border-plum/45 hover:bg-plum-tint"
            >
              <span>
                {i.categoryTitle && (
                  <span className="eyebrow block text-plum/85">{i.categoryTitle}</span>
                )}
                <span className="mt-1.5 block text-[1rem] font-medium leading-snug text-graphite group-hover:text-plum-deep">
                  {i.title}
                </span>
              </span>
              <span className="flex items-center justify-between gap-3 border-t border-line pt-3 text-[0.875rem]">
                <span className="font-semibold text-plum-deep">{i.price ?? "По консультации"}</span>
                <IconArrow className="h-4 w-4 shrink-0 text-plum transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length > visible.length && (
        <button
          type="button"
          onClick={() => setLimit((l) => l + 24)}
          className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center rounded-[4px] border border-plum/45 px-6 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint cursor-pointer sm:w-auto"
        >
          Показать ещё ({filtered.length - visible.length})
        </button>
      )}
    </div>
  );
}

function Chip({ children, active, onClick }: { children: React.ReactNode; active: boolean; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        "inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap rounded-full border px-4 text-[0.875rem] transition-colors cursor-pointer",
        active
          ? "border-plum bg-plum text-white"
          : "border-line bg-porcelain text-graphite hover:border-plum/45 hover:bg-plum-tint",
      )}
    >
      {children}
    </button>
  );
}
