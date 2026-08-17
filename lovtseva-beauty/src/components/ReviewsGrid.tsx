import clsx from "clsx";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/reviews";

export function ReviewsGrid({ limit, tone = "light" }: { limit?: number; tone?: "light" | "dark" }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;
  const isDark = tone === "dark";

  return (
    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
      {list.map((t, i) => (
        <Reveal key={`${t.author}-${t.date}`} delay={i * 0.05}>
          <a
            href={t.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={clsx(
              "group flex h-full flex-col justify-between border-t pt-6 transition-colors",
              isDark ? "border-background/20 hover:border-background/45" : "border-border hover:border-border-strong"
            )}
          >
            <div>
              <span className={clsx("block font-serif text-4xl leading-none", isDark ? "text-background/30" : "text-foreground/20")} aria-hidden>
                «
              </span>
              <p className={clsx("mt-1 text-sm leading-relaxed", isDark ? "text-background/85" : "text-foreground/85")}>{t.text}</p>
            </div>
            <div className="mt-6">
              <p className={clsx("text-sm font-semibold", isDark ? "text-background" : "text-foreground")}>{t.author}</p>
              <p className={clsx("mt-0.5 text-xs uppercase tracking-[0.08em]", isDark ? "text-background/50" : "text-muted")}>
                {t.tag}
                {t.master ? ` · ${t.master}` : ""}
              </p>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
