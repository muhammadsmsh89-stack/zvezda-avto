import { ratings, selfReported } from "@/data/company";
import { reviews } from "@/data/reviews";
import { Reveal } from "@/components/ui/Reveal";

// 2–3 реальных коротких доказательства из data/reviews.ts (не сгенерировано) — усиливают голые
// цифры рейтинга конкретными причинами доверия: подбор без навязывания, доступность в WhatsApp,
// повторные покупки.
const proofIds = ["podbor", "whatsapp", "povtor"] as const;
const proofQuotes = proofIds
  .map((id) => reviews.find((r) => r.id === id))
  .filter((r): r is (typeof reviews)[number] => Boolean(r));

export function SocialProofSection() {
  return (
    <section className="border-y border-border bg-surface-2 py-14">
      <div className="container-wide">
        <div className="flex flex-wrap items-start justify-between gap-10">
          <div className="flex flex-wrap gap-10 sm:gap-16">
            {ratings.map((r) => (
              <Reveal key={r.id} variant="fade">
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="group block">
                  <p className="text-[40px] leading-none text-foreground sm:text-[48px]">{r.score}</p>
                  <p className="mt-2 text-[14px] text-muted group-hover:text-accent transition-colors">
                    {r.label} · {r.scoreCount} оценок · {r.reviewCount} отзыва
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal variant="fade" className="max-w-xs text-[13px] leading-relaxed text-muted">
            <p>
              На рынке {selfReported.yearsOnMarket}, {selfReported.clientsServed}+ клиентов
              <sup className="ml-0.5">*</sup>
            </p>
            <p className="mt-1 text-[11px] text-muted/70">*по данным {selfReported.source}</p>
          </Reveal>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden border border-border bg-border sm:grid-cols-3">
          {proofQuotes.map((r) => (
            <Reveal key={r.id} variant="fade" className="bg-surface p-6">
              <p className="text-[15px] leading-relaxed text-foreground">«{r.quote}»</p>
              <p className="mt-3 text-[12px] text-muted">
                {r.author} · {r.source}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
