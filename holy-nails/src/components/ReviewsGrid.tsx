import clsx from "clsx";
import { Reveal } from "@/components/ui/Reveal";
import { reviews } from "@/lib/reviews";

const crescentPath = "M15 6c6 4.6 6 17 0 22 9-1.4 15-9.6 15-22S24 6.4 15 6Z";

export function FeaturedQuote({ tone = "light" }: { tone?: "light" | "dark" }) {
  const quote = reviews.find((r) => r.featured) ?? reviews[0];
  const isDark = tone === "dark";

  return (
    <Reveal className="max-w-2xl">
      <svg viewBox="0 0 30 28" className={clsx("h-7 w-7", isDark ? "text-accent" : "text-accent")} aria-hidden fill="currentColor">
        <path d={crescentPath} />
      </svg>
      <p
        className={clsx(
          "mt-5 text-pretty font-display text-2xl leading-snug sm:text-3xl lg:text-[2.25rem]",
          isDark ? "text-background" : "text-foreground"
        )}
      >
        «{quote.text}»
      </p>
      <p className={clsx("mt-5 text-sm", isDark ? "text-background/60" : "text-muted")}>
        <span className={clsx("font-semibold", isDark ? "text-background/85" : "text-foreground")}>{quote.author}</span>
        {" · "}
        {quote.date}
      </p>
    </Reveal>
  );
}

export function ReviewsGrid({ limit, tone = "light", excludeFeatured }: { limit?: number; tone?: "light" | "dark"; excludeFeatured?: boolean }) {
  let visible = excludeFeatured ? reviews.filter((r) => !r.featured) : reviews;
  visible = limit ? visible.slice(0, limit) : visible;
  const isDark = tone === "dark";

  return (
    <div className={clsx("divide-y", isDark ? "divide-background/15" : "divide-border")}>
      {visible.map((r, i) => (
        <Reveal
          key={r.author + r.date}
          delay={i * 0.05}
          className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8"
        >
          <p className={clsx("text-pretty text-sm leading-relaxed sm:text-base", isDark ? "text-background/85" : "text-foreground/85")}>
            «{r.text}»
          </p>
          <div className={clsx("flex shrink-0 items-baseline gap-2 text-xs sm:flex-col sm:items-end sm:gap-0.5", isDark ? "text-background/55" : "text-muted")}>
            <span className={clsx("font-semibold", isDark ? "text-background/80" : "text-foreground")}>{r.author}</span>
            <span>{r.date}</span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
