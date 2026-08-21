import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { IconArrow } from "@/components/ui/Icons";
import { problems, displayTitle, serviceBySlug } from "@/lib/content";
import { pluralize } from "@/lib/plural";
import { concerns } from "@/data/concerns";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Проблемы и зоны — что беспокоит",
  description:
    "Морщины, овал лица, губы, акне, пигментация, качество кожи, волосы. Выберите проблему — покажем процедуры BeautyWay Clinic, которые с ней работают.",
  path: "/problem",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Проблемы и зоны", path: "/problem" },
];

export default function ProblemsPage() {
  const grouped = new Set<string>();
  concerns.forEach((c) => c.problems.forEach((p) => grouped.add(p)));
  const rest = problems.filter((p) => !grouped.has(p.slug));

  return (
    <>
      <PageIntro
        eyebrow="Подбор процедуры"
        title="Что вас беспокоит?"
        intro={`${pluralize(problems.length, "разбор", "разбора", "разборов")} проблем и зон. От каждого есть путь к процедурам и врачам, которые с этим работают.`}
        crumbs={crumbs}
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          {concerns.map((c) => {
            const svc = serviceBySlug.get(c.service);
            const items = c.problems
              .map((p) => problems.find((x) => x.slug === p))
              .filter((x): x is NonNullable<typeof x> => Boolean(x));
            if (!items.length) return null;
            return (
              <div key={c.slug} className="mb-11 last:mb-0">
                <SectionHeading
                  eyebrow={c.hint}
                  title={c.label}
                  link={svc ? { href: `/uslugi/${c.service}`, label: displayTitle(svc) } : undefined}
                  className="mb-5"
                />
                <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((p) => (
                    <li key={p.slug}>
                      <Link
                        href={`/problem/${p.slug}`}
                        className="group flex h-full items-start justify-between gap-3 rounded-[10px] border border-line bg-porcelain p-4 transition-colors hover:border-plum/45 hover:bg-plum-tint"
                      >
                        <span className="text-[0.9375rem] font-medium leading-snug text-graphite group-hover:text-plum-deep">
                          {displayTitle(p)}
                        </span>
                        <IconArrow className="mt-0.5 h-4 w-4 shrink-0 text-plum transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {rest.length > 0 && (
            <div className="mt-12 border-t border-line pt-10">
              <SectionHeading eyebrow="Полный список" title="Другие проблемы и зоны" className="mb-5" />
              <ul className="grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/problem/${p.slug}`}
                      className="flex min-h-[46px] items-center border-b border-line text-[0.9375rem] leading-snug text-graphite transition-colors hover:text-plum-deep"
                    >
                      {displayTitle(p)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10">
            <MedicalNotice />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
