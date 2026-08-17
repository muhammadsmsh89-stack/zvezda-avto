import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { rating } from "@/lib/site";

export const metadata: Metadata = {
  title: "Отзывы",
  description: `Отзывы клиентов HPD Studio — рейтинг ${rating.value} на Яндекс Картах, ${rating.reviewsCount} отзывов.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Отзывы"
        title="Что говорят клиенты HPD"
        description={`Рейтинг ${rating.value} на Яндекс Картах, ${rating.ratingsCount} оценок, ${rating.reviewsCount} отзывов.`}
      />
      <ReviewsSection full />
    </>
  );
}
