import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { priceList } from "@/lib/content";

export function PricePreview() {
  const preview = priceList.slice(0, 3);
  return (
    <section id="price" className="border-b border-border bg-surface/40 py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Прайс-лист"
            title="Честные цены без скрытых доплат"
            description="Полный прайс с поиском и фильтрами по категориям — на отдельной странице."
          />
          <Link
            href="/price"
            className="hidden shrink-0 rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent md:block"
          >
            Открыть полный прайс
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {preview.map((cat, ci) => (
            <Reveal key={cat.title} delay={ci * 0.08}>
              <div className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-sans text-lg font-bold text-foreground">{cat.title}</h3>
                <ul className="mt-4 space-y-3">
                  {cat.rows.slice(0, 5).map((row) => (
                    <li key={row.name} className="flex items-baseline justify-between gap-4 text-sm">
                      <span className="text-muted">{row.name}</span>
                      <span className="whitespace-nowrap font-semibold text-foreground">{row.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/price"
            className="rounded-full border border-border-strong px-5 py-2.5 text-sm font-semibold text-foreground"
          >
            Открыть полный прайс
          </Link>
        </div>
      </div>
    </section>
  );
}
