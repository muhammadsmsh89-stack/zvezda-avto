import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { ReviewsGrid } from "@/components/ReviewsGrid";
import { ReviewCategoryBars } from "@/components/ReviewCategoryBars";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы клиентов о Центре красоты Натальи Ловцевой в Рязани: рейтинг 5.0, 297 отзывов на Яндекс Картах.",
};

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Отзывы"
        title="Нас выбирают снова"
        description={`${rating.value} · ${rating.reviewsCount} отзывов на ${rating.source}, награда «${rating.award}».`}
        action={
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-accent" />
              ))}
            </div>
            <TextLink href={contacts.yandexReviewsUrl}>Читать все отзывы на Яндекс Картах</TextLink>
          </div>
        }
      />

      <section className="border-b border-border bg-surface py-16 lg:py-20">
        <Container>
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Что отмечают клиенты</h2>
          </Reveal>
          <p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">
            Доля положительных упоминаний по категориям — агрегированная статистика Яндекс Карт.
          </p>
          <div className="mt-8">
            <ReviewCategoryBars />
          </div>
        </Container>
      </section>

      <section className="bg-background py-16 lg:py-20">
        <Container>
          <ReviewsGrid />
        </Container>
      </section>
    </>
  );
}
