import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Star } from "@/components/ui/Icons";
import { TextLink } from "@/components/ui/Button";
import { reviews } from "@/lib/reviews";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";

export function ReviewsSection({ full = false }: { full?: boolean }) {
  const list = full ? reviews : reviews.slice(0, 4);

  return (
    <section className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Отзывы</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="mt-4 max-w-xl text-pretty text-display font-medium text-foreground">
                {rating.reviewsCount} отзывов — лучший отдел продаж
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} className="flex items-center gap-2 text-foreground">
            <Star className="h-5 w-5 text-accent" />
            <span className="text-2xl font-semibold">{rating.value}</span>
            <span className="text-sm text-muted">· {rating.reviewsCount} отзывов</span>
          </Reveal>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {list.map((review, i) => (
            <Reveal key={review.theme} delay={(i % 2) * 0.08}>
              <article className="flex h-full flex-col rounded-[1.5rem] border border-border bg-surface p-6 sm:p-7">
                <div className="flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">«{review.text}»</p>
                <div className="mt-5 flex items-center justify-between text-sm">
                  <span className="font-semibold text-foreground">{review.theme}</span>
                  <span className="text-muted">{review.source}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <TextLink href={contacts.yandexReviewsUrl}>Читать отзывы на Яндекс Картах</TextLink>
        </Reveal>
      </Container>
    </section>
  );
}
