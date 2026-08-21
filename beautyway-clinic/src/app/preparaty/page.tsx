import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { IconArrow } from "@/components/ui/Icons";
import { preparations, displayTitle, shortTitle, lede } from "@/lib/content";
import { pluralize } from "@/lib/plural";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Препараты клиники",
  description:
    "Филлеры, биоревитализанты, коллагеновые и пептидные препараты, которые используют врачи BeautyWay Clinic. Производитель, состав и процедуры по каждому препарату.",
  path: "/preparaty",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Препараты", path: "/preparaty" },
];

export default function PreparationsPage() {
  const list = [...preparations].sort((a, b) => displayTitle(a).localeCompare(displayTitle(b), "ru"));
  return (
    <>
      <PageIntro
        eyebrow="Что используем"
        title="Препараты клиники"
        intro={`${pluralize(list.length, "препарат", "препарата", "препаратов")}, которые применяют врачи клиники. По каждому есть назначение и список процедур.`}
        crumbs={crumbs}
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/preparaty/${p.slug}`}
                  className="group flex h-full flex-col justify-between gap-3 rounded-[10px] border border-line bg-porcelain p-4 transition-colors hover:border-plum/45 hover:bg-plum-tint"
                >
                  <span>
                    <span className="block text-[1rem] font-medium leading-snug text-graphite group-hover:text-plum-deep">
                      {shortTitle(p)}
                    </span>
                    <span className="mt-1.5 block text-[0.8125rem] leading-relaxed text-graphite-soft">
                      {lede(p, 110)}
                    </span>
                  </span>
                  <IconArrow className="h-4 w-4 shrink-0 text-plum transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <MedicalNotice extra="Препарат подбирает врач с учётом задачи, состояния тканей и противопоказаний. Самостоятельный выбор препарата по описанию невозможен." />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
