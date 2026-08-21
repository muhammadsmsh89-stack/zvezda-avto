import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { WorksGallery, type Work } from "@/components/WorksGallery";
import { BookingButton } from "@/components/BookingButton";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { pluralize } from "@/lib/plural";
import worksRaw from "@/data/generated/works.json";

const works = worksRaw as unknown as Work[];

export const metadata: Metadata = pageMeta({
  title: "Работы до и после",
  description:
    "Портфолио BeautyWay Clinic: реальные результаты процедур контурной пластики, увеличения губ, аппаратных и лазерных методик. Фильтр по процедуре.",
  path: "/portfolio",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Работы", path: "/portfolio" },
];

export default function PortfolioPage() {
  const count = new Set(works.map((w) => w.service)).size;
  return (
    <>
      <PageIntro
        eyebrow="Результаты"
        title="Работы наших врачей"
        intro={`${pluralize(works.length, "фотография", "фотографии", "фотографий")} по ${pluralize(count, "процедуре", "процедурам", "процедурам")}. Каждая работа привязана к своей процедуре, как на сайте клиники.`}
        crumbs={crumbs}
        aside={
          <div className="rounded-[12px] border border-line bg-milk p-5">
            <p className="text-[0.9375rem] leading-relaxed text-graphite">
              Похожий запрос? Врач скажет, какого результата реально ожидать именно в вашем случае.
            </p>
            <BookingButton label="Записаться на консультацию" className="mt-4 w-full" />
          </div>
        }
      />
      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <WorksGallery works={works} initialLimit={24} />
          <div className="mt-10">
            <MedicalNotice extra="Результат индивидуален: он зависит от исходного состояния кожи, возраста, образа жизни и соблюдения рекомендаций врача. Фотографии не являются обещанием такого же результата." />
          </div>
        </Container>
      </section>
      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
