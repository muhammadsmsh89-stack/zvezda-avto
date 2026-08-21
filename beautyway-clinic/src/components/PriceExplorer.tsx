"use client";

import { useDeferredValue, useMemo, useState } from "react";
import clsx from "clsx";
import { IconSearch } from "./ui/Icons";
import type { PriceRow } from "@/lib/content";
import { VERIFIED_ON_HUMAN } from "@/lib/site";

/** Полный прайс клиники: поиск + фильтр по разделу, без горизонтальной таблицы. */
export function PriceExplorer({ rows }: { rows: PriceRow[] }) {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("all");
  const [limit, setLimit] = useState(60);
  const q = useDeferredValue(query).trim().toLowerCase();

  const categories = useMemo(() => {
    const m = new Map<string, number>();
    rows.forEach((r) => {
      const c = r.category ?? "Прочее";
      m.set(c, (m.get(c) ?? 0) + 1);
    });
    return [...m.entries()].sort((a, b) => b[1] - a[1]).slice(0, 24);
  }, [rows]);

  const filtered = useMemo(() => {
    let list = rows;
    if (cat !== "all") list = list.filter((r) => (r.category ?? "Прочее") === cat);
    if (q.length >= 2) {
      const words = q.split(/\s+/).filter(Boolean);
      list = list.filter((r) => {
        const hay = `${r.name} ${r.category ?? ""}`.toLowerCase();
        return words.every((w) => hay.includes(w));
      });
    }
    return list;
  }, [rows, cat, q]);

  const visible = filtered.slice(0, limit);

  return (
    <div>
      <div className="rounded-[12px] border border-line bg-porcelain p-4 sm:p-5">
        <label htmlFor="price-search" className="mb-2 block text-[0.9375rem] font-medium text-graphite">
          Поиск по прайсу
        </label>
        <div className="relative">
          <IconSearch className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-graphite-soft" />
          <input
            id="price-search"
            type="search"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setLimit(60);
            }}
            placeholder="Например: ботокс, филлер, эпиляция"
            className="min-h-[52px] w-full rounded-[6px] border border-line bg-milk pl-11 pr-4 text-[1rem] text-graphite placeholder:text-graphite-soft/80 focus:border-plum focus:outline-none"
          />
        </div>
      </div>

      <div className="no-scrollbar -mx-5 mt-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        <div className="flex gap-2 pb-1" role="group" aria-label="Фильтр по разделу прайса">
          <Chip active={cat === "all"} onClick={() => { setCat("all"); setLimit(60); }}>
            Все разделы ({rows.length})
          </Chip>
          {categories.map(([c, n]) => (
            <Chip key={c} active={cat === c} onClick={() => { setCat(c); setLimit(60); }}>
              {c} ({n})
            </Chip>
          ))}
        </div>
      </div>

      <p aria-live="polite" className="mt-5 text-[0.875rem] text-graphite-soft">
        {filtered.length === 0 ? "Ничего не нашлось — попробуйте другое слово." : `Позиций: ${filtered.length}`}
      </p>

      <ul className="mt-4 divide-y divide-line overflow-hidden rounded-[12px] border border-line bg-porcelain">
        {visible.map((r, i) => (
          <li key={`${i}-${r.name}`} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3.5">
            <span className="min-w-0 flex-1 basis-[58%]">
              <span className="block text-[0.9375rem] leading-snug text-graphite">
                {r.name}
                {r.promo && (
                  <span className="ml-2 inline-block rounded-[3px] bg-plum px-1.5 py-0.5 align-middle text-[0.6875rem] font-medium uppercase tracking-wide text-white">
                    Акция
                  </span>
                )}
              </span>
              {r.category && (
                <span className="mt-0.5 block text-[0.75rem] leading-snug text-graphite-soft">{r.category}</span>
              )}
            </span>
            <span className="shrink-0 whitespace-nowrap text-[0.9375rem] font-semibold text-plum-deep">
              {r.oldPriceText && (
                <span className="mr-2 font-normal text-graphite-soft line-through">{r.oldPriceText}</span>
              )}
              {typeof r.price === "number" ? `${r.price.toLocaleString("ru-RU")} ${r.currency ?? "₽"}` : "по запросу"}
            </span>
          </li>
        ))}
      </ul>

      {filtered.length > visible.length && (
        <button
          type="button"
          onClick={() => setLimit((l) => l + 60)}
          className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center rounded-[4px] border border-plum/45 px-6 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint cursor-pointer sm:w-auto"
        >
          Показать ещё ({filtered.length - visible.length})
        </button>
      )}

      <p className="mt-5 text-[0.8125rem] leading-relaxed text-graphite-soft">
        Прайс перенесён со страницы цен клиники и сверен {VERIFIED_ON_HUMAN}. Итоговая стоимость зависит
        от объёма препарата, количества зон и плана процедур — её называет врач на консультации.
      </p>
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
        active ? "border-plum bg-plum text-white" : "border-line bg-porcelain text-graphite hover:border-plum/45 hover:bg-plum-tint",
      )}
    >
      {children}
    </button>
  );
}
