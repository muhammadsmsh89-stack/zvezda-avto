import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Media } from "@/components/ui/Media";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { ContentSections } from "@/components/ContentSections";
import { TrustBlock } from "@/components/sections/TrustBlock";
import { DoctorsRow } from "@/components/sections/DoctorsRow";
import { BranchesSection } from "@/components/sections/BranchesSection";
import { BookingButton } from "@/components/BookingButton";
import { staticPages, doctors, services, equipment, preparations } from "@/lib/content";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { site, claims } from "@/lib/site";

export const metadata: Metadata = pageMeta({
  title: "О клинике",
  description:
    "BeautyWay Clinic — клиника эстетической медицины и косметологии в центре Москвы. Медицинская лицензия, врачи со средним стажем более 10 лет, оригинальное оборудование.",
  path: "/about-us",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "О клинике", path: "/about-us" },
];

export default function AboutPage() {
  const page = staticPages["/about-us"];
  const facts = [
    { value: String(doctors.length), label: "врачей в команде" },
    { value: `${services.length}`, label: "процедур в каталоге" },
    { value: String(equipment.length), label: "аппаратов в клинике" },
    { value: String(preparations.length), label: "препаратов в работе" },
  ];

  return (
    <>
      <PageIntro
        eyebrow="О нас"
        title="Клиника эстетической медицины BeautyWay"
        intro={`${site.legalName} работает по медицинской лицензии ${site.license}. Две клиники в центре Москвы, приём ежедневно с 10:00 до 22:00.`}
        crumbs={crumbs}
        aside={
          <Media
            name="interior/clinic-poster"
            widths={[720, 1440]}
            ratio="4 / 3"
            alt="Интерьер клиники BeautyWay Clinic"
            sizes="(min-width: 1024px) 380px, 100vw"
            priority
            className="rounded-[12px]"
          />
        }
      />

      <section className="bg-milk py-12 sm:py-16">
        <Container>
          <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-line bg-line sm:grid-cols-4">
            {facts.map((f) => (
              <li key={f.label} className="bg-porcelain px-5 py-6">
                <p className="font-display text-[2rem] leading-none text-plum-deep">{f.value}</p>
                <p className="mt-2 text-[0.875rem] leading-snug text-graphite-soft">{f.label}</p>
              </li>
            ))}
          </ul>

          {page && page.sections.length > 0 && (
            <div className="mt-12 max-w-[820px]">
              <ContentSections sections={page.sections} />
            </div>
          )}

          <div className="mt-10 max-w-[820px]">
            <p className="text-[0.9375rem] leading-relaxed text-graphite-soft">
              Клиника заявляет доверие {claims.clientsClaimed} пациентов и {claims.reviewsTotal.toLocaleString("ru-RU")}{" "}
              отзывов на внешних площадках. Оценки по каждой площадке отдельно — на{" "}
              <Link href="/reviews" className="text-plum underline underline-offset-2">
                странице отзывов
              </Link>
              .
            </p>
          </div>

          <div className="mt-8">
            <MedicalNotice />
          </div>

          <div className="mt-8">
            <BookingButton label="Записаться на бесплатную консультацию" />
          </div>
        </Container>
      </section>

      <TrustBlock />
      <DoctorsRow limit={6} />
      <BranchesSection />

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
