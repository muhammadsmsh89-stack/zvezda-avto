import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { reviewCategories, reviewThemes } from "@/lib/reviews";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-background py-20 lg:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <Reveal className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Отзывы</p>
            <h2 className="mt-4 text-pretty font-display text-3xl leading-[1.1] text-foreground sm:text-4xl lg:text-[2.75rem]">
              {rating.yandex.reviewsCount} отзывов на Яндексе — что отмечают чаще всего
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Button variant="secondary" href={contacts.yandexUrl}>
              {ctaLabels.allReviews}
            </Button>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-4">
          {reviewCategories.map((cat, i) => (
            <Reveal key={cat.label} delay={i * 0.06} className="glass-card rounded-2xl p-6 transition-colors">
              <p className="font-display text-4xl text-foreground">{cat.value}%</p>
              <p className="mt-2 text-sm text-muted">{cat.label}</p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {reviewThemes.map((r, i) => (
            <Reveal key={r.title} delay={0.1 + i * 0.06} className="glass-card rounded-2xl p-7 transition-colors">
              <span className="rounded-full border border-border-strong px-3 py-1 text-xs font-semibold uppercase tracking-[0.06em] text-accent">
                {r.tag}
              </span>
              <p className="mt-4 text-pretty text-base leading-relaxed text-foreground/85">&laquo;{r.quote}&raquo;</p>
              <p className="mt-4 text-sm font-semibold text-foreground">{r.title}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
