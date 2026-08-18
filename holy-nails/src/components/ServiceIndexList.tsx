import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowIcon } from "@/components/ui/Button";
import { directions } from "@/lib/services";
import { formatPrice } from "@/lib/prices";

export function ServiceIndexList({ linkTo = "anchor" }: { linkTo?: "anchor" | "prices" }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {directions.map((d, i) => (
        <Reveal key={d.slug} delay={i * 0.05}>
          <Link
            href={linkTo === "anchor" ? `/services#${d.slug}` : `/prices#${d.slug}`}
            className="group grid grid-cols-[3.5rem_1fr] items-center gap-4 py-6 sm:grid-cols-[4.5rem_1fr_auto_auto] sm:gap-6 sm:py-8"
          >
            <span className="font-display text-2xl text-muted sm:text-3xl">{d.index}</span>

            <div className="col-span-1">
              <h3 className="text-xl font-semibold text-foreground sm:text-2xl">{d.title}</h3>
              <p className="mt-1 max-w-md text-sm leading-relaxed text-muted">{d.short}</p>
            </div>

            <span className="col-start-2 mt-2 text-sm text-foreground/70 sm:col-start-3 sm:mt-0 sm:text-right sm:text-base">
              от {formatPrice(d.priceFrom)}
            </span>

            <span className="col-start-2 mt-2 inline-flex items-center gap-2 text-sm font-semibold text-foreground sm:col-start-4 sm:mt-0 sm:justify-self-end">
              Смотреть
              <ArrowIcon className="h-3 w-3 -rotate-45 transition-transform duration-300 ease-out group-hover:rotate-0" />
            </span>
          </Link>
        </Reveal>
      ))}
    </div>
  );
}
