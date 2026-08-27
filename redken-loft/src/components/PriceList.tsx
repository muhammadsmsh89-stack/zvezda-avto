import { Reveal } from "@/components/ui/Reveal";
import { priceGroups } from "@/lib/prices";

export function PriceList() {
  return (
    <div className="space-y-14">
      {priceGroups.map((group, gi) => (
        <div key={group.title}>
          <Reveal delay={gi * 0.05}>
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">{group.title}</h2>
            {"note" in group && group.note && (
              <p className="mt-2 max-w-lg text-sm text-muted">{group.note}</p>
            )}
          </Reveal>
          <div className="mt-6 divide-y divide-border border-y border-border">
            {group.items.map((item, i) => (
              <Reveal
                key={item.name}
                delay={gi * 0.05 + i * 0.03}
                className="flex items-center justify-between gap-6 py-4"
              >
                <span className="text-sm text-foreground/85 sm:text-base">{item.name}</span>
                <span className="whitespace-nowrap font-display text-base text-foreground sm:text-lg">{item.price}</span>
              </Reveal>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
