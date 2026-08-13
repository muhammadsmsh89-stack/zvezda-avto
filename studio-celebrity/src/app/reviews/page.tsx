import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { Star } from "@/components/ui/Icons";
import { testimonials } from "@/lib/reviews";
import { studio, ratingBreakdown } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Отзывы",
  description: `Отзывы о Studio Celebrity — рейтинг ${studio.rating}, ${studio.reviewsCount} отзывов на Яндекс Картах.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Отзывы"
        title="Клиенты о Studio Celebrity"
        description={`Рейтинг ${studio.rating} · ${studio.ratingsCount} оценки · ${studio.reviewsCount} отзыва на Яндекс Картах.`}
        action={<TextLink href={studio.yandexReviewsUrl}>Читать все отзывы на Яндекс Картах</TextLink>}
      />

      <section className="bg-background py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.author} delay={i * 0.06}>
                <div className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6">
                  <div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 text-foreground" />
                      ))}
                    </div>
                    <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-muted/70">{t.tag}</p>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/85">{t.text}</p>
                  </div>
                  <p className="mt-6 text-sm font-semibold text-foreground">{t.author}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/50 py-16 lg:py-20">
        <Container>
          <Reveal>
            <h2 className="text-2xl text-foreground sm:text-3xl">Категории отзывов</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-2 max-w-md text-sm text-muted">По данным Яндекс Карт — доля положительных отзывов по темам.</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {ratingBreakdown.map((r, i) => (
              <Reveal key={r.label} delay={0.1 + i * 0.05}>
                <p className="text-3xl font-extrabold text-foreground">{r.percent}%</p>
                <p className="mt-1 text-sm text-foreground/80">{r.label}</p>
                <p className="text-xs text-muted/70">{r.count} отзывов</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
