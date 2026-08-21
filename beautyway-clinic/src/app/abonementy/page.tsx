import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { IconCheck } from "@/components/ui/Icons";
import { BookingButton } from "@/components/BookingButton";
import { abonements, abonementTerms } from "@/data/abonements";
import { pluralize } from "@/lib/plural";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { VERIFIED_ON_HUMAN } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "Абонементы на курсовые процедуры",
  description:
    "Абонементы BeautyWay Clinic на курсы мезотерапии, плазмолифтинга и лазерной эпиляции. Цены, количество сеансов и условия действия.",
  path: "/abonementy",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Абонементы", path: "/abonementy" },
];

export default function AbonementyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Курсовые программы"
        title="Абонементы"
        intro={`Курсовые процедуры выгоднее при оплате всего курса сразу. Цены сверены ${VERIFIED_ON_HUMAN}.`}
        crumbs={crumbs}
        aside={
          <div className="rounded-[12px] border border-line bg-milk p-5">
            <p className="eyebrow text-plum">Условия</p>
            <ul className="mt-3 space-y-2.5">
              {abonementTerms.map((t) => (
                <li key={t} className="flex items-start gap-2.5 text-[0.875rem] leading-snug text-graphite">
                  <IconCheck className="mt-0.5 h-[17px] w-[17px] shrink-0 text-plum" />
                  {t}
                </li>
              ))}
            </ul>
            <BookingButton label="Спросить про абонемент" service="Абонемент" className="mt-5 w-full" />
          </div>
        }
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <SectionHeading eyebrow="Прайс" title="Цены на абонементы" />
          <div className="overflow-hidden rounded-[12px] border border-line">
            {abonements.map((g) => (
              <div key={g.group}>
                <h3 className="border-b border-line bg-plum-tint px-4 py-3 text-[0.875rem] font-semibold leading-snug text-plum-deep">
                  {g.group}
                </h3>
                <ul className="divide-y divide-line bg-porcelain">
                  {g.rows.map((r) => (
                    <li key={r.name} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3.5">
                      <span className="min-w-0 flex-1 basis-[55%] text-[0.9375rem] leading-snug text-graphite">
                        {r.name}
                        <span className="mt-0.5 block text-[0.75rem] text-graphite-soft">
                          {pluralize(r.sessions, "процедура", "процедуры", "процедур")} в курсе
                        </span>
                      </span>
                      <span className="shrink-0 whitespace-nowrap text-[0.9375rem] font-semibold text-plum-deep">
                        {r.price}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <MedicalNotice extra="Количество процедур в курсе врач подтверждает после осмотра — часть программ может потребовать корректировки." />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
