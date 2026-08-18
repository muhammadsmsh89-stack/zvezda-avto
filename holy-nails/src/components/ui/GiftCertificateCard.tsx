import { Wordmark, Monogram } from "@/components/ui/Wordmark";

/**
 * Графический мокап подарочного сертификата, собранный из HTML/CSS —
 * не фотография и не выдаётся за неё. Номинал и срок действия не указаны:
 * не подтверждены источниками.
 */
export function GiftCertificateCard({ className }: { className?: string }) {
  return (
    <div className={`relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-deep p-7 text-background sm:p-9 ${className ?? ""}`}>
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 90% at 100% 0%, rgba(245,242,234,0.07) 0%, transparent 55%), radial-gradient(90% 70% at 0% 100%, rgba(156,86,54,0.14) 0%, transparent 60%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 bg-noise" />

      <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden preserveAspectRatio="none">
        <g stroke="rgba(245,242,234,0.28)" strokeWidth={0.6} vectorEffect="non-scaling-stroke">
          <path d="M0 8 H4 M8 0 V4" />
          <path d="M100 8 H96 M92 0 V4" />
          <path d="M100 92 H96 M92 100 V96" />
          <path d="M0 92 H4 M8 100 V96" />
        </g>
      </svg>

      <div className="relative flex h-full flex-col justify-between">
        <div className="flex items-start justify-between">
          <Wordmark dark />
          <Monogram dark className="h-7 w-7 opacity-70" />
        </div>

        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-background/50">Gift Certificate</p>
          <p className="mt-2 font-display text-2xl leading-tight text-background sm:text-3xl lg:text-4xl">
            Подарочный
            <br />
            сертификат
          </p>
        </div>

        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-background/55">Тула · Holy Nails</p>
      </div>
    </div>
  );
}
