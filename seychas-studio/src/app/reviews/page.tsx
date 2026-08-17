import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { ReviewsGrid } from "@/components/ReviewsGrid";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы о студии SEYCHAS в Туле с Яндекс Карт и DIKIDI.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Отзывы"
        title="Клиенты о SEYCHAS"
        description={`Рейтинг ${rating.value} по данным ${rating.source}, ${rating.reviewsCount} отзывов.`}
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <Reveal className="mb-10 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-accent" />
              ))}
            </div>
            <span className="text-base font-bold text-foreground">{rating.value}</span>
            <TextLink href={contacts.yandexReviewsUrl}>Все 112 отзывов на Яндекс Картах</TextLink>
            <TextLink href={contacts.dikidiUrl}>Отзывы на DIKIDI</TextLink>
          </Reveal>
          <ReviewsGrid />
        </Container>
      </section>
    </>
  );
}
