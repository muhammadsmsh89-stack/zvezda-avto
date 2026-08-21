import type { PriceRow } from "@/lib/content";
import { VERIFIED_ON_HUMAN } from "@/lib/site";

/**
 * Прайс перенесён из таблиц клиники без изменений сумм.
 * На мобильном это список «название — цена», а не горизонтально
 * скроллящаяся таблица.
 */
export function PriceTable({ rows, note }: { rows: PriceRow[]; note?: string }) {
  if (!rows.length) return null;

  const groups: { category: string | null; items: PriceRow[] }[] = [];
  for (const r of rows) {
    const last = groups[groups.length - 1];
    if (last && last.category === (r.category ?? null)) last.items.push(r);
    else groups.push({ category: r.category ?? null, items: [r] });
  }

  return (
    <div>
      <div className="overflow-hidden rounded-[12px] border border-line">
        {groups.map((g, gi) => (
          <div key={`${gi}-${g.category ?? ""}`}>
            {g.category && (
              <h3 className="border-b border-line bg-plum-tint px-4 py-3 text-[0.875rem] font-semibold leading-snug text-plum-deep">
                {g.category}
              </h3>
            )}
            <ul className="divide-y divide-line bg-porcelain">
              {g.items.map((r, i) => (
                <li key={`${i}-${r.name}`} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3.5">
                  <span className="min-w-0 flex-1 basis-[60%] text-[0.9375rem] leading-snug text-graphite">
                    {r.name}
                    {r.promo && (
                      <span className="ml-2 inline-block rounded-[3px] bg-plum px-1.5 py-0.5 align-middle text-[0.6875rem] font-medium uppercase tracking-wide text-white">
                        Акция
                      </span>
                    )}
                  </span>
                  <span className="shrink-0 whitespace-nowrap text-[0.9375rem] font-semibold text-plum-deep">
                    {r.oldPriceText && (
                      <span className="mr-2 font-normal text-graphite-soft line-through">{r.oldPriceText}</span>
                    )}
                    {typeof r.price === "number"
                      ? `${r.price.toLocaleString("ru-RU")} ${r.currency ?? "₽"}`
                      : "по запросу"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[0.8125rem] leading-relaxed text-graphite-soft">
        {note ?? `Цены перенесены из прайса клиники и сверены ${VERIFIED_ON_HUMAN}. Итоговая стоимость зависит от объёма препарата и плана процедур — её называет врач на консультации.`}
      </p>
    </div>
  );
}
