import { Reveal } from "@/components/ui/Reveal";
import { reviewThemes } from "@/lib/reviews";

export function ReviewsGrid() {
  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:gap-12">
      {reviewThemes.map((r, i) => (
        <Reveal key={r.title} delay={i * 0.06} className="flex h-full flex-col justify-between border-t border-border pt-6">
          <div>
            <span className="block font-display text-4xl leading-none text-foreground/20" aria-hidden>
              &laquo;
            </span>
            <p className="mt-1 text-sm leading-relaxed text-foreground/85">{r.quote}</p>
          </div>
          <div className="mt-6">
            <p className="text-sm font-semibold text-foreground">{r.title}</p>
            <p className="mt-0.5 text-xs uppercase tracking-[0.08em] text-muted">{r.tag}</p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
