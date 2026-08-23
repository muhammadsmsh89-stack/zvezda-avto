"use client";

import { useDeferredValue, useId, useMemo, useState } from "react";
import clsx from "clsx";
import { priceDirections } from "@/lib/prices";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";
import { Container } from "./ui/Container";
import { useBooking } from "./BookingSheet";

const ALL = "Все разделы";

/**
 * Прайс на 373 позиции. Без поиска такой список бесполезен: на старом сайте
 * это была одна страница на 49 таблиц, по которой можно было только скроллить.
 *
 * Рядом с каждой позицией — код номенклатуры медуслуг Минздрава. Он есть
 * в исходном прайсе клиники и здесь остаётся: это то, что отличает
 * медицинскую услугу от «процедуры красоты».
 */
export function PriceExplorer() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(ALL);
  const deferred = useDeferredValue(query);
  const searchId = useId();
  const { open } = useBooking();

  const visible = useMemo(() => {
    const q = deferred.trim().toLowerCase();
    return priceDirections
      .filter((d) => active === ALL || d.title === active)
      .map((d) => ({
        ...d,
        sections: d.sections
          .map((s) => ({
            ...s,
            items: q
              ? s.items.filter(
                  (i) =>
                    i.name.toLowerCase().includes(q) ||
                    s.title.toLowerCase().includes(q),
                )
              : s.items,
          }))
          .filter((s) => s.items.length > 0),
      }))
      .filter((d) => d.sections.length > 0);
  }, [deferred, active]);

  const total = visible.reduce(
    (n, d) => n + d.sections.reduce((m, s) => m + s.items.length, 0),
    0,
  );

  return (
    <section className="pb-24 sm:pb-32">
      <Container wide>
        {/* Поиск и фильтр липнут к шапке — прайс длинный, управление не должно уезжать. */}
        <div className="sticky top-[60px] z-30 -mx-5 border-b border-line bg-shell/95 px-5 py-4 backdrop-blur-md sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <label htmlFor={searchId} className="eyebrow mb-3 block">
            Поиск по прайсу
          </label>
          <input
            id={searchId}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Например: бикини, Sylfirm, пилинг, массаж спины"
            className="w-full border-b border-line bg-transparent pb-3 text-[1.125rem] text-ink outline-none transition-colors duration-200 placeholder:text-ink-mute/60 focus:border-ink"
          />

          <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[ALL, ...priceDirections.map((d) => d.title)].map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setActive(label)}
                aria-pressed={active === label}
                className={clsx(
                  "min-h-[38px] shrink-0 cursor-pointer rounded-[2px] border px-4 text-[0.9375rem] transition-colors duration-200",
                  active === label
                    ? "border-ink bg-ink text-shell"
                    : "border-line text-ink-soft hover:border-ink/40 hover:text-ink",
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <p aria-live="polite" className="mt-8 text-[1rem] text-ink-mute">
          {total > 0
            ? `Показано позиций: ${total}`
            : "По этому запросу ничего не нашлось — попробуйте другое слово или откройте «Все разделы»."}
        </p>

        <div className="mt-12 space-y-16">
          {visible.map((d) => (
            <div key={d.slug}>
              <h2 className="font-display border-t border-ink/30 pt-6 text-[2rem] text-ink sm:text-[2.5rem]">
                {d.title}
              </h2>

              <div className="mt-8 space-y-10">
                {d.sections.map((s) => (
                  <div key={s.id}>
                    <div className="rule flex items-baseline justify-between gap-6 pt-4">
                      <h3 className="text-[1.125rem] font-medium text-ink">{s.title}</h3>
                      <span className="shrink-0 text-[0.875rem] text-ink-mute">{s.unit}</span>
                    </div>

                    <ul>
                      {s.items.map((item, i) => (
                        <li
                          key={`${s.id}-${i}`}
                          className="flex items-baseline gap-5 border-b border-line/60 py-4"
                        >
                          <span className="min-w-0 flex-1">
                            <span className="block text-[1.0625rem] leading-[1.5] text-ink">
                              {item.name}
                            </span>
                            {item.code && (
                              <span className="mt-1 block text-[0.875rem] leading-[1.4] text-ink-mute/80">
                                {item.code}
                                {item.codeName ? ` · ${item.codeName}` : ""}
                              </span>
                            )}
                          </span>
                          <span className="shrink-0 text-[1.0625rem] tabular-nums text-ink">
                            {item.priceNote
                              ? `${item.priceNote} ₽`
                              : formatPrice(item.price)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="rule mt-16 pt-8">
          <p className="max-w-[70ch] text-[1rem] leading-[1.7] text-ink-mute">
            {site.offerNotice} Окончательная стоимость курса определяется после осмотра
            врача. {site.legalNotice}
          </p>

          <button
            type="button"
            onClick={() => open("Вопрос по прайсу")}
            className="mt-8 inline-flex min-h-[52px] cursor-pointer items-center justify-center rounded-[2px] bg-accent px-8 text-[1rem] font-medium text-paper transition-colors duration-200 hover:bg-accent-deep active:scale-[0.98]"
          >
            Уточнить стоимость
          </button>
        </div>
      </Container>
    </section>
  );
}
