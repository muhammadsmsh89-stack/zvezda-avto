import { Reveal } from "@/components/ui/Reveal";
import { reviewCategories } from "@/lib/reviews";

export function ReviewCategoryBars() {
  return (
    <div className="grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2">
      {reviewCategories.map((c, i) => (
        <Reveal key={c.label} delay={i * 0.03}>
          <div className="flex items-baseline justify-between text-sm">
            <span className="text-foreground">{c.label}</span>
            <span className="text-muted">
              {c.percent}% · {c.count} {pluralReview(c.count)}
            </span>
          </div>
          <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-border">
            <div className="h-full rounded-full bg-accent" style={{ width: `${c.percent}%` }} />
          </div>
        </Reveal>
      ))}
    </div>
  );
}

function pluralReview(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "отзыв";
  if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return "отзыва";
  return "отзывов";
}
