import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Media } from "@/components/ui/Media";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { IconArrow } from "@/components/ui/Icons";
import { equipment, displayTitle, lede } from "@/lib/content";
import { pluralize } from "@/lib/plural";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Оборудование клиники",
  description:
    "Парк аппаратов BeautyWay Clinic: Alma Hybrid, Sylfirm X, Harmony XL Pro, Ultraformer MPT и 3, Smartxide DOT, Sensitec ESF-160, HELEO4, Motus AX MOVEO.",
  path: "/oborudovanie",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Оборудование", path: "/oborudovanie" },
];

export default function EquipmentPage() {
  return (
    <>
      <PageIntro
        eyebrow="Технологии"
        title="Оборудование клиники"
        intro={`${pluralize(equipment.length, "аппарат", "аппарата", "аппаратов")} от официальных производителей. У каждого указано, какую задачу он закрывает.`}
        crumbs={crumbs}
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {equipment.map((e) => (
              <li key={e.slug}>
                <Link
                  href={`/oborudovanie/${e.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-line bg-porcelain transition-colors hover:border-plum/45"
                >
                  <Media
                    name={`equipment/${e.slug}`}
                    widths={[420, 840]}
                    ratio="1 / 1"
                    alt={displayTitle(e)}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    fit="contain"
                    className="bg-milk"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h2 className="font-display text-[1.1875rem] leading-snug text-graphite group-hover:text-plum-deep">
                      {displayTitle(e)}
                    </h2>
                    <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-graphite-soft">
                      {lede(e, 150)}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-2 border-t border-line pt-3.5 text-[0.875rem] font-medium text-plum">
                      Подробнее
                      <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <MedicalNotice />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
