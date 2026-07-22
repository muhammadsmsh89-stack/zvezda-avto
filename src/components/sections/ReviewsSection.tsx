import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { reviews, reviewsSummary, company } from "@/lib/content";

export function ReviewsSection() {
  return (
    <section className="border-b border-border bg-surface/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Отзывы клиентов"
            title="Что говорят о «Звезде»"
            description="Реальные отзывы с Яндекс.Карт — площадки, где клиенты оставляют оценки без модерации со стороны техцентра."
          />

          <a
            href={company.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex shrink-0 items-center gap-4 rounded-2xl border border-border bg-surface px-6 py-4"
          >
            <div className="text-4xl font-extrabold text-accent">{reviewsSummary.rating}</div>
            <div className="text-sm leading-tight text-muted">
              <div className="flex gap-0.5 text-accent">
                {"★★★★★".slice(0, 5)}
              </div>
              {reviewsSummary.reviewsCount} отзывов на Яндекс.Картах
            </div>
          </a>
        </div>

        <Stagger className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <StaggerItem key={review.author + review.date}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
                <div className="flex gap-0.5 text-accent">{"★★★★★"}</div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  «{review.text}»
                </p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
                  <span className="font-semibold text-foreground/80">{review.author}</span>
                  <span>{review.date}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-5">
          {reviewsSummary.categories.map((cat) => (
            <div key={cat.label} className="rounded-xl border border-border bg-surface px-4 py-3 text-center">
              <div className="text-lg font-bold text-foreground">{cat.positive}%</div>
              <div className="text-[11px] text-muted">{cat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
