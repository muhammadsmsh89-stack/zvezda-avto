import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { Hero } from "@/components/sections/Hero";
import { Concerns } from "@/components/sections/Concerns";
import { PopularServices } from "@/components/sections/PopularServices";
import { ConsultationBand } from "@/components/sections/ConsultationBand";
import { DoctorsRow } from "@/components/sections/DoctorsRow";
import { TrustBlock } from "@/components/sections/TrustBlock";
import { EquipmentRow } from "@/components/sections/EquipmentRow";
import { Promos } from "@/components/sections/Promos";
import { BranchesSection } from "@/components/sections/BranchesSection";
import { FinalCta } from "@/components/sections/FinalCta";
import { WorksGallery, type Work } from "@/components/WorksGallery";
import { VideoReviews, type VideoReview } from "@/components/VideoReviews";
import { JsonLd, faqLd, pageMeta } from "@/lib/seo";
import { homeFaq } from "@/data/homeFaq";
import worksRaw from "@/data/generated/works.json";
import videoReviewsRaw from "@/data/generated/video-reviews.json";

const works = worksRaw as unknown as Work[];
const videoReviews = videoReviewsRaw as unknown as VideoReview[];

export const metadata: Metadata = pageMeta({
  title: "BeautyWay Clinic — эстетическая медицина в центре Москвы",
  description:
    "Клиника эстетической медицины BeautyWay: бесплатная очная консультация, врачи со средним стажем более 10 лет, оригинальное оборудование. Страстной бульвар и Мясницкая, ежедневно 10:00–22:00.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Concerns />
      <PopularServices />
      <ConsultationBand />

      <section className="border-b border-line bg-milk py-14 sm:py-20">
        <Container>
          <SectionHeading
            index="03"
            eyebrow="Результаты"
            title="Работы наших врачей"
            intro="Фотографии из практики клиники, сгруппированные по процедурам."
            link={{ href: "/portfolio", label: "Всё портфолио" }}
          />
          <WorksGallery works={works} initialLimit={8} />
        </Container>
      </section>

      <DoctorsRow />
      <TrustBlock />
      <EquipmentRow />

      {videoReviews.length > 0 && (
        <section className="border-b border-line bg-porcelain py-14 sm:py-20">
          <Container>
            <SectionHeading
              index="07"
              eyebrow="Что говорят пациенты"
              title="Видеоотзывы"
              intro="Видео загружается только после нажатия, поэтому страница не тратит ваш трафик заранее."
              link={{ href: "/reviews", label: "Все отзывы" }}
            />
            <VideoReviews items={videoReviews} limit={8} />
          </Container>
        </section>
      )}

      <Promos />
      <BranchesSection />

      <section className="border-b border-line bg-porcelain py-14 sm:py-20">
        <Container className="max-w-[820px]">
          <SectionHeading index="10" eyebrow="Коротко" title="Частые вопросы" />
          <FaqList items={homeFaq} />
        </Container>
      </section>

      <FinalCta />
      <JsonLd data={faqLd(homeFaq)} />
    </>
  );
}
