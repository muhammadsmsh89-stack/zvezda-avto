import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { testimonials } from "@/lib/reviews";
import { studio } from "@/lib/studio";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-surface-2/50 py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <Reveal>
              <h2 className="text-pretty text-3xl leading-[1.1] text-foreground sm:text-4xl">
                Клиенты о Studio Celebrity
              </h2>
            </Reveal>
            <Reveal delay={0.08} className="mt-4 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-foreground" />
                ))}
              </div>
              <span className="text-base font-bold text-foreground">{studio.rating}</span>
              <span className="text-sm text-muted">· {studio.reviewsCount} отзыва</span>
            </Reveal>
          </div>
          <Reveal delay={0.14}>
            <TextLink href={studio.yandexReviewsUrl}>Читать все отзывы на Яндекс Картах</TextLink>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="mt-12 border-y border-border py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">{testimonials[0].tag}</p>
          <p className="font-serif-accent mt-4 max-w-3xl text-pretty text-2xl italic leading-snug text-foreground sm:text-3xl">
            «{testimonials[0].text}»
          </p>
          <p className="mt-5 text-sm font-semibold text-foreground">{testimonials[0].author}</p>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(1).map((t, i) => (
            <Reveal key={t.author} delay={i * 0.06}>
              <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">{t.tag}</p>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/85">{t.text}</p>
                </div>
                <p className="mt-6 text-sm font-semibold text-foreground">{t.author}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
