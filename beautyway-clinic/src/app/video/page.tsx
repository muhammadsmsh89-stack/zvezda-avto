import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { Media } from "@/components/ui/Media";
import { VideoReviews, type VideoReview } from "@/components/VideoReviews";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { pluralize } from "@/lib/plural";
import videoReviewsRaw from "@/data/generated/video-reviews.json";
import videosRaw from "@/data/generated/videos.json";

const reviews = videoReviewsRaw as unknown as VideoReview[];
const procedures = videosRaw as unknown as { media: string; title: string }[];

export const metadata: Metadata = pageMeta({
  title: "Видео процедур и отзывы",
  description:
    "Видеоотзывы пациентов BeautyWay Clinic и кадры процедур по направлениям. Видео загружается только после нажатия.",
  path: "/video",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Видео", path: "/video" },
];

export default function VideoPage() {
  const embedded = reviews.filter((r) => r.video).length;
  return (
    <>
      <PageIntro
        eyebrow="Видео"
        title="Видеоотзывы и процедуры"
        intro={`${pluralize(reviews.length, "видеоотзыв", "видеоотзыва", "видеоотзывов")} пациентов. ${embedded} из них воспроизводятся прямо здесь: файл подгружается только после нажатия.`}
        crumbs={crumbs}
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <SectionHeading eyebrow="Пациенты" title="Видеоотзывы" />
          <VideoReviews items={reviews} />
        </Container>
      </section>

      {procedures.length > 0 && (
        <section className="border-t border-line bg-porcelain py-10 sm:py-14">
          <Container>
            <SectionHeading
              eyebrow="Направления"
              title="Кадры процедур"
              intro="Постеры видео по направлениям с сайта клиники."
            />
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-4 lg:grid-cols-7">
              {procedures.map((p) => (
                <li key={p.media} className="overflow-hidden rounded-[10px] border border-line bg-milk">
                  <Media
                    name={p.media}
                    widths={[300, 600]}
                    ratio="300 / 530"
                    alt={`Процедура «${p.title}» в клинике BeautyWay`}
                    sizes="(min-width: 1024px) 14vw, 50vw"
                  />
                  <p className="px-3 py-2.5 text-[0.75rem] leading-snug text-graphite-soft">{p.title}</p>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <MedicalNotice />
            </div>
          </Container>
        </section>
      )}

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
