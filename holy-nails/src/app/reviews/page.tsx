import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { FeaturedQuote, ReviewsGrid } from "@/components/ReviewsGrid";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { reviewCategories } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Отзывы о Holy Nails в Туле с Яндекс Карт: рейтинг 5.0, 186 отзывов, «Хорошее место 2026».",
};

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Отзывы"
        title="Нас выбирают снова"
        description={`${rating.value} · ${rating.reviewsCount} отзывов на ${rating.source}, награда «${rating.award}».`}
        action={<TextLink href={contacts.yandexReviewsUrl}>Читать все отзывы на Яндекс Картах</TextLink>}
      />

      <section className="bg-background py-16 lg:py-20">
        <Container>
          <Reveal className="grid grid-cols-2 gap-x-8 gap-y-6 border-y border-border py-8 sm:grid-cols-3 lg:grid-cols-6">
            {reviewCategories.map((c) => (
              <div key={c.label}>
                <p className="flex items-center gap-1 text-2xl font-semibold text-foreground">
                  {c.positive}%
                  <Star className="h-3 w-3 text-accent" />
                </p>
                <p className="mt-1 text-xs text-muted">{c.label} · {c.count} отзывов</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </section>

      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-3xl">
          <FeaturedQuote />
          <div className="mt-14">
            <ReviewsGrid excludeFeatured />
          </div>
        </Container>
      </section>
    </>
  );
}
