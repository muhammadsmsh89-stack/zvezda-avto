import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { FeaturedQuote, ReviewsGrid } from "@/components/ReviewsGrid";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export function ReviewsSection() {
  return (
    <section id="reviews" className="pt-20 pb-14 lg:pt-28 lg:pb-20">
      <Container className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-4">
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Нас выбирают снова</p>
          </Reveal>
          <Reveal delay={0.08} className="mt-4 flex items-baseline gap-4">
            <span className="font-display text-6xl leading-none text-foreground sm:text-7xl">{rating.value}</span>
            <span>
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 text-accent" />
                ))}
              </span>
              <span className="mt-1 block text-sm text-muted">{rating.reviewsCount} отзывов на {rating.source}</span>
            </span>
          </Reveal>
          <Reveal delay={0.14} className="mt-6">
            <TextLink href={contacts.yandexReviewsUrl}>Читать все отзывы на Яндекс Картах</TextLink>
          </Reveal>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <FeaturedQuote />
          <div className="mt-10">
            <ReviewsGrid limit={3} excludeFeatured />
          </div>
        </div>
      </Container>
    </section>
  );
}
