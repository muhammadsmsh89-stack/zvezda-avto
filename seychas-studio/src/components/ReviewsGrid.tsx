import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/reviews";

export function ReviewsGrid({ limit }: { limit?: number }) {
  const list = limit ? testimonials.slice(0, limit) : testimonials;

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {list.map((t, i) => (
        <Reveal key={`${t.author}-${t.date}`} delay={i * 0.05}>
          <a
            href={t.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">
                {t.tag}
                {t.master ? ` · ${t.master}` : ""}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">«{t.text}»</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <p className="text-sm font-semibold text-foreground">{t.author}</p>
              <p className="text-xs text-muted">
                {t.date} · {t.source}
              </p>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
