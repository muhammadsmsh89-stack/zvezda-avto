import { Reveal } from "@/components/ui/Reveal";
import { directions } from "@/lib/services";
import { priceGroups, formatPrice } from "@/lib/prices";

export function PriceTable({ limit }: { limit?: number }) {
  const groups = limit ? priceGroups.slice(0, limit) : priceGroups;

  return (
    <div className="flex flex-col gap-14">
      {groups.map((group) => {
        const direction = directions.find((d) => d.slug === group.directionSlug);
        if (!direction) return null;
        return (
          <div key={group.directionSlug} id={group.directionSlug}>
            <Reveal className="flex items-baseline gap-3 border-b border-border-strong pb-3">
              <span className="font-display text-xl text-muted">{direction.index}</span>
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{direction.title}</h3>
            </Reveal>
            <ul className="mt-2 divide-y divide-border">
              {group.items.map((item) => (
                <li key={item.title} className="flex items-baseline justify-between gap-4 py-3.5">
                  <span className="text-sm text-foreground/85 sm:text-base">
                    {item.title}
                    {item.note && <span className="ml-2 text-xs text-muted">({item.note})</span>}
                  </span>
                  <span className="shrink-0 whitespace-nowrap text-right text-sm font-semibold text-foreground sm:text-base">
                    {item.price !== undefined && formatPrice(item.price)}
                    {item.master !== undefined && item.topMaster !== undefined && (
                      <>
                        {formatPrice(item.master)}
                        <span className="mx-1 font-normal text-muted">/</span>
                        {formatPrice(item.topMaster)}
                      </>
                    )}
                    {item.master === undefined && item.topMaster !== undefined && formatPrice(item.topMaster)}
                  </span>
                </li>
              ))}
            </ul>
            {group.items.some((i) => i.master !== undefined) && (
              <p className="mt-3 text-xs text-muted">Мастер / топ-мастер — цена зависит от категории специалиста.</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
