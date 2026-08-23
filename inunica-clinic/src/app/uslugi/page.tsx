import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { directions } from "@/data/directions";
import { minPrice, countItems } from "@/lib/prices";
import { formatFrom } from "@/lib/format";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Процедуры",
  description:
    "Все направления INUNICA clinic в Белгороде: лазерная эпиляция, аппаратная косметология лица и тела, эстетическая косметология, инъекции и капельницы, массаж и SPA.",
  alternates: { canonical: "/uslugi/" },
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Процедуры"
        title="Шесть направлений"
        lead={`Всего ${countItems()} позиций в прайсе. Чтобы не листать его целиком, начните с направления — внутри каждого есть и описание методики, и цены.`}
      />

      <section className="pb-24 sm:pb-32">
        <Container wide>
          <ul className="space-y-16 sm:space-y-24">
            {directions.map((d, i) => {
              const from = minPrice(d.priceSlug);
              return (
                <Reveal as="li" key={d.slug}>
                  <Link
                    href={`/uslugi/${d.slug}/`}
                    className="group grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center lg:gap-16"
                  >
                    {/*
                      Чётные кадры уходят вправо: длинный список одинаковых
                      блоков иначе читается как таблица, а не как разворот.
                    */}
                    <div
                      className={`img-zoom relative aspect-[4/3] overflow-hidden bg-veil ${
                        i % 2 ? "lg:order-2" : ""
                      }`}
                    >
                      <Image
                        src={withBase(d.image)}
                        alt={d.imageAlt}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <div className="rule flex items-baseline justify-between gap-6 pt-4">
                        <span className="eyebrow tabular-nums">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {from && (
                          <span className="text-[0.9375rem] tabular-nums text-ink-mute">
                            {formatFrom(from)}
                          </span>
                        )}
                      </div>

                      <h2 className="font-display mt-6 text-[2rem] text-ink transition-colors duration-200 group-hover:text-accent sm:text-[2.5rem]">
                        {d.title}
                      </h2>

                      <p className="mt-5 max-w-[52ch] text-[1.125rem] leading-[1.65] text-ink-soft">
                        {d.lead}
                      </p>

                      <span className="mt-7 inline-block text-[1rem] text-ink underline decoration-ink/25 underline-offset-[7px] transition-colors duration-200 group-hover:decoration-ink">
                        Подробнее о направлении
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </ul>

          <p className="rule mt-20 max-w-[70ch] pt-8 text-[1rem] leading-[1.7] text-ink-mute">
            {site.legalNotice}
          </p>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Процедуры", path: "/uslugi/" },
        ])}
      />
    </>
  );
}
