import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { ReviewsGrid } from "@/components/ReviewsGrid";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <h2 className="text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">Клиенты о SEYCHAS</h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-accent" />
                ))}
              </div>
              <span className="text-base font-bold text-foreground">{rating.value}</span>
              <span className="text-sm text-muted">· {rating.reviewsCount} отзывов на {rating.source}</span>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <TextLink href={contacts.yandexReviewsUrl}>Читать все отзывы на Яндекс Картах</TextLink>
          </Reveal>
        </div>

        <div className="mt-10">
          <ReviewsGrid />
        </div>
      </Container>
    </section>
  );
}
