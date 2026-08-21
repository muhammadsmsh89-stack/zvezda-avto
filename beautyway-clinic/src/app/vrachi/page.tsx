import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Media } from "@/components/ui/Media";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { BookingButton } from "@/components/BookingButton";
import { doctors } from "@/lib/content";
import { pluralize } from "@/lib/plural";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Врачи клиники",
  description:
    "Врачи-косметологи, дерматовенерологи, трихологи и хирург BeautyWay Clinic. Должность, специализация, подтверждённый стаж и запись к конкретному специалисту.",
  path: "/vrachi",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Врачи", path: "/vrachi" },
];

export default function DoctorsPage() {
  const list = [...doctors].sort((a, b) => (b.experienceYears ?? 0) - (a.experienceYears ?? 0));
  const avg = Math.round(
    (list.reduce((n, d) => n + (d.experienceYears ?? 0), 0) / list.filter((d) => d.experienceYears).length) * 10,
  ) / 10;

  return (
    <>
      <PageIntro
        eyebrow="Команда"
        title="Врачи BeautyWay Clinic"
        intro={`${pluralize(list.length, "специалист", "специалиста", "специалистов")} с профильным медицинским образованием. Средний стаж по данным клиники — ${avg.toLocaleString("ru-RU")} года. Должность, стаж и направления перенесены с карточек врачей на официальном сайте.`}
        crumbs={crumbs}
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((d) => (
              <li
                key={d.slug}
                className="flex flex-col overflow-hidden rounded-[12px] border border-line bg-porcelain"
              >
                <Link href={`/vrachi/${d.slug}`} className="group block">
                  <Media
                    name={`doctors/${d.slug}`}
                    widths={[400, 800]}
                    ratio="3 / 4"
                    alt={`${d.name} — ${d.post}`}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    objectPosition="center 18%"
                  />
                </Link>
                <div className="flex flex-1 flex-col p-5">
                  <Link href={`/vrachi/${d.slug}`} className="group">
                    <h2 className="font-display text-[1.25rem] leading-snug text-graphite group-hover:text-plum-deep">
                      {d.name}
                    </h2>
                  </Link>
                  <p className="mt-2 text-[0.875rem] leading-snug text-graphite-soft">{d.post}</p>
                  <dl className="mt-4 flex flex-wrap gap-x-5 gap-y-1.5 border-t border-line pt-3.5 text-[0.8125rem]">
                    {d.experienceText && (
                      <div>
                        <dt className="inline text-graphite-soft">Стаж: </dt>
                        <dd className="inline font-medium text-graphite">
                          {d.experienceText.replace("Стаж работы: ", "")}
                        </dd>
                      </div>
                    )}
                    {d.ratingValue && d.ratingCount && (
                      <div>
                        <dt className="inline text-graphite-soft">Оценка пациентов: </dt>
                        <dd className="inline font-medium text-graphite">
                          {d.ratingValue.toLocaleString("ru-RU")} ({d.ratingCount})
                        </dd>
                      </div>
                    )}
                  </dl>
                  <div className="mt-auto flex flex-col gap-2 pt-4 sm:flex-row">
                    <BookingButton label="Записаться" doctor={d.name ?? undefined} className="flex-1" />
                    <Link
                      href={`/vrachi/${d.slug}`}
                      className="inline-flex min-h-[52px] flex-1 items-center justify-center rounded-[4px] border border-plum/45 px-4 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint"
                    >
                      О враче
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <MedicalNotice extra="Оценки пациентов перенесены с карточек врачей на официальном сайте клиники и относятся к внутренней системе оценок bwclinic.ru." />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
