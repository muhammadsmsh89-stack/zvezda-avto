import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { ReviewsGrid } from "@/components/ReviewsGrid";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-deep py-20 text-background lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-background/55">Нас выбирают снова</p>
            </Reveal>
            <Reveal delay={0.08} className="mt-3 flex items-baseline gap-4">
              <span className="font-serif text-6xl leading-none text-background sm:text-7xl">{rating.value}</span>
              <span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 text-accent" />
                  ))}
                </span>
                <span className="mt-1 block text-sm text-background/60">{rating.reviewsCount} отзывов на {rating.source}</span>
              </span>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <TextLink href={contacts.yandexReviewsUrl} tone="dark">Читать все отзывы на Яндекс Картах</TextLink>
          </Reveal>
        </div>

        <div className="mt-14">
          <ReviewsGrid limit={3} tone="dark" />
        </div>
      </Container>
    </section>
  );
}
