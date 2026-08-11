import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { reviews } from "@/data/reviews";

export function ReviewsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Отзывы"
          title="Что говорят те, кто уже выбрал двери здесь"
          lead="Реальные отзывы с Яндекс Карт и 2ГИС — подобраны по темам, которые чаще всего волнуют перед покупкой."
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, i) => (
            <Reveal key={review.id} variant="fade" delay={(i % 3) * 0.05} className="bg-surface p-7">
              <p className="text-[12px] uppercase tracking-[0.1em] text-accent">{review.objection}</p>
              <p className="mt-3 text-[16px] leading-relaxed text-foreground">«{review.quote}»</p>
              <p className="mt-5 text-[13px] text-muted">
                {review.author} · {review.source} · {review.date}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
