import type { Metadata } from "next";
import Link from "next/link";
import { directions } from "@/data/directions";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Цены",
  description: "Стоимость процедур в центре «Этель» зависит от индивидуального плана и уточняется на консультации у врача.",
  alternates: { canonical: "/prices/" },
};

export default function PricesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Цены"
        title="Стоимость плана определяется на консультации"
        lead="Прайс клиники сейчас переносится в новую структуру сайта и будет опубликован по направлениям. Ниже — сами направления: перейдите в интересующее, чтобы увидеть, какие задачи оно закрывает."
      />

      <section className="pb-24">
        <Container wide>
          <Reveal className="rule max-w-[64ch] pt-8">
            <p className="text-[1.0625rem] leading-[1.7] text-ink-soft">
              Итоговая стоимость зависит от количества процедур в плане,
              площади обработки и выбранной технологии — эти параметры врач
              определяет на очном осмотре. {site.offerNotice}
            </p>
          </Reveal>

          <ul className="mt-12 grid gap-x-8 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
            {directions.map((d) => (
              <li key={d.slug} className="border-b border-line/70 py-5">
                <Link href={`/services/${d.slug}/`} className="group flex items-start justify-between gap-4">
                  <span className="font-display text-[1.1875rem] text-ink group-hover:text-accent">
                    {d.title}
                  </span>
                  <span className="mt-1 shrink-0 text-ink-mute group-hover:text-accent">→</span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Цены", path: "/prices/" },
        ])}
      />
    </>
  );
}
