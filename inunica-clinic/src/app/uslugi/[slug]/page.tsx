import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { directions, findDirection } from "@/data/directions";
import { directionPrices, minPrice } from "@/lib/prices";
import { formatPrice } from "@/lib/format";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { DirectionCta } from "@/components/DirectionCta";
import { JsonLd, breadcrumbLd, serviceLd } from "@/lib/seo";

export function generateStaticParams() {
  return directions.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = findDirection(slug);
  if (!d) return {};
  return {
    title: d.title,
    description: `${d.title} в INUNICA clinic, Белгород. ${d.short}`,
    alternates: { canonical: `/uslugi/${d.slug}/` },
  };
}

export default async function DirectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = findDirection(slug);
  if (!d) notFound();

  const prices = directionPrices(d.priceSlug);
  const from = minPrice(d.priceSlug);

  return (
    <>
      <PageIntro
        eyebrow={d.title}
        title={d.title}
        lead={d.lead}
        parent={{ label: "Процедуры", href: "/uslugi/" }}
      >
        <DirectionCta title={d.title} from={from} />
      </PageIntro>

      <Container wide>
        <Reveal className="img-zoom relative aspect-[16/9] overflow-hidden bg-veil">
          <Image
            src={withBase(d.image)}
            alt={d.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </Reveal>
      </Container>

      <section className="py-20 sm:py-28">
        <Container wide>
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-20">
            <div className="space-y-12">
              {d.blocks.map((b) => (
                <Reveal key={b.title} className="rule pt-6">
                  <h2 className="font-display text-[1.75rem] text-ink sm:text-[2.125rem]">
                    {b.title}
                  </h2>
                  {b.body && (
                    <p className="mt-5 max-w-[62ch] text-[1.125rem] leading-[1.7] text-ink-soft">
                      {b.body}
                    </p>
                  )}
                  {b.list && (
                    <ol className="mt-6 max-w-[62ch] space-y-3">
                      {b.list.map((item, i) => (
                        <li key={item} className="flex gap-4 text-[1.0625rem] leading-[1.6] text-ink-soft">
                          <span className="shrink-0 pt-[0.15em] text-[0.875rem] tabular-nums text-ink-mute">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                </Reveal>
              ))}
            </div>

            {/* Боковая колонка: аппараты, показания и противопоказания. */}
            <aside className="space-y-10 lg:sticky lg:top-28 lg:self-start">
              {d.tools && (
                <div className="rule pt-4">
                  <h2 className="eyebrow">Оборудование и препараты</h2>
                  <ul className="mt-4 space-y-2">
                    {d.tools.map((t) => (
                      <li key={t} className="text-[1rem] leading-[1.5] text-ink-soft">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {d.indications && (
                <div className="rule pt-4">
                  <h2 className="eyebrow">Показания</h2>
                  <ul className="mt-4 space-y-2">
                    {d.indications.map((t) => (
                      <li key={t} className="text-[1rem] leading-[1.5] text-ink-soft">
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {d.contraindications && (
                <div className="border-l-2 border-accent bg-paper py-5 pr-5 pl-5">
                  <h2 className="eyebrow">Противопоказания</h2>
                  <ul className="mt-4 space-y-2">
                    {d.contraindications.map((t) => (
                      <li key={t} className="text-[1rem] leading-[1.5] text-ink-soft">
                        {t}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-5 text-[0.9375rem] leading-[1.6] text-ink-mute">
                    Список не исчерпывающий. {site.legalNotice}
                  </p>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>

      {/* Цены направления — на своей же странице, без перехода в общий прайс. */}
      {prices && (
        <section className="bg-veil py-20 sm:py-28">
          <Container wide>
            <div className="flex flex-wrap items-baseline justify-between gap-6">
              <h2 className="font-display text-[2rem] text-ink sm:text-[2.75rem]">
                Стоимость
              </h2>
              <Link
                href="/price/"
                className="text-[1rem] text-ink underline decoration-ink/25 underline-offset-[7px] hover:decoration-ink"
              >
                Полный прайс клиники
              </Link>
            </div>

            <div className="mt-12 space-y-10">
              {prices.sections.map((s) => (
                <div key={s.id}>
                  <div className="flex items-baseline justify-between gap-6 border-t border-line pt-4">
                    <h3 className="text-[1.125rem] font-medium text-ink">{s.title}</h3>
                    <span className="shrink-0 text-[0.875rem] text-ink-mute">{s.unit}</span>
                  </div>
                  <ul>
                    {s.items.map((item, i) => (
                      <li
                        key={`${s.id}-${i}`}
                        className="flex items-baseline gap-5 border-b border-line/60 py-4"
                      >
                        <span className="min-w-0 flex-1 text-[1.0625rem] leading-[1.5] text-ink">
                          {item.name}
                        </span>
                        <span className="shrink-0 text-[1.0625rem] tabular-nums text-ink">
                          {item.priceNote ? `${item.priceNote} ₽` : formatPrice(item.price)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="mt-10 max-w-[70ch] text-[1rem] leading-[1.7] text-ink-mute">
              {site.offerNotice}
            </p>
          </Container>
        </section>
      )}

      <JsonLd data={serviceLd(d.title, d.lead, `/uslugi/${d.slug}/`)} />
      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Процедуры", path: "/uslugi/" },
          { name: d.title, path: `/uslugi/${d.slug}/` },
        ])}
      />
    </>
  );
}
