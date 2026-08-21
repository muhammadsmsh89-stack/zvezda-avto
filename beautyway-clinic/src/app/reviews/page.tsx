import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { VideoReviews, type VideoReview } from "@/components/VideoReviews";
import { IconArrow } from "@/components/ui/Icons";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { ratings, claims, VERIFIED_ON_HUMAN } from "@/lib/site";
import videoReviewsRaw from "@/data/generated/video-reviews.json";

const reviews = videoReviewsRaw as unknown as VideoReview[];

export const metadata: Metadata = pageMeta({
  title: "Отзывы пациентов",
  description:
    "Видеоотзывы пациентов BeautyWay Clinic и оценки клиники на Яндекс Картах, Google, 2ГИС, Zoon, Flamp и Yell — каждая со ссылкой на источник.",
  path: "/reviews",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Отзывы", path: "/reviews" },
];

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Обратная связь"
        title="Отзывы пациентов"
        intro={`Клиника заявляет ${claims.reviewsTotal.toLocaleString("ru-RU")} отзывов на внешних площадках. Мы показываем оценку каждой площадки отдельно, со ссылкой на источник.`}
        crumbs={crumbs}
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Внешние площадки"
            title="Оценки со ссылкой на источник"
            intro={`Мы не сводим оценки разных площадок в один общий балл — каждая цифра принадлежит своему сервису. Значения сверены ${VERIFIED_ON_HUMAN}.`}
          />
          <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {ratings.map((r) => (
              <li key={r.platform}>
                <a
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group flex min-h-[84px] items-center justify-between gap-4 rounded-[10px] border border-line bg-porcelain p-5 transition-colors hover:border-plum/45 hover:bg-plum-tint"
                >
                  <span>
                    <span className="block text-[0.9375rem] font-medium text-graphite group-hover:text-plum-deep">
                      {r.platform}
                    </span>
                    <span className="mt-1 block text-[0.8125rem] text-graphite-soft">Открыть отзывы</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="font-display text-[1.625rem] leading-none text-plum-deep">{r.value}</span>
                    <IconArrow className="h-4 w-4 shrink-0 text-plum transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-porcelain py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Пациенты"
            title="Видеоотзывы"
            intro="Видео загружается только после нажатия."
          />
          <VideoReviews items={reviews} />
          <div className="mt-10">
            <MedicalNotice extra="Отзывы отражают личный опыт конкретных пациентов и не гарантируют такой же результат в вашем случае." />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
