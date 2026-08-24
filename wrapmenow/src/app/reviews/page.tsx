import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { rating } from "@/lib/site";

export const metadata: Metadata = {
  title: "Отзывы",
  description: `Отзывы клиентов WrapMeNow — рейтинг ${rating.value} на Яндекс Картах, ${rating.reviewsCount} отзывов.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Отзывы"
        title={`${rating.reviewsCount} отзывов — лучший отдел продаж`}
        description={`Рейтинг ${rating.value} на Яндекс Картах, ${rating.ratingsCount} оценок, ${rating.reviewsCount} отзывов, ${rating.photosCount} фото.`}
      />
      <ReviewsSection full />
    </>
  );
}
