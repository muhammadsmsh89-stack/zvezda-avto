import clsx from "clsx";

/**
 * Заглушка вместо реальной фотографии HPD. Реальных фото в открытом доступе
 * с чистыми правами использования нет — вместо стоковых машин используем
 * авторскую абстрактную композицию в одном визуальном языке (студийный свет
 * + силуэт кузова + фактура), пока владелец не пришлёт свои материалы.
 * `label` описывает, какое именно фото должно занять это место в проде.
 */

type Variant =
  | "hero"
  | "wash"
  | "polish"
  | "protect"
  | "interior"
  | "tint"
  | "sound"
  | "project-a"
  | "project-b"
  | "project-c"
  | "before"
  | "after"
  | "contact";

const themes: Record<Variant, { from: string; via: string; to: string; sweep: string }> = {
  hero: { from: "#1c1712", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.22)" },
  wash: { from: "#151a1c", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.16)" },
  polish: { from: "#1c1712", via: "#0d0b08", to: "#050403", sweep: "rgba(198,150,62,0.26)" },
  protect: { from: "#171512", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.2)" },
  interior: { from: "#161310", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.14)" },
  tint: { from: "#121417", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.18)" },
  sound: { from: "#151210", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.12)" },
  "project-a": { from: "#1a1611", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.24)" },
  "project-b": { from: "#171310", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.2)" },
  "project-c": { from: "#191510", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.22)" },
  before: { from: "#141414", via: "#0c0c0c", to: "#050403", sweep: "rgba(148,141,128,0.16)" },
  after: { from: "#1c1712", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.3)" },
  contact: { from: "#161310", via: "#0a0908", to: "#050403", sweep: "rgba(198,150,62,0.16)" },
};

export function PhotoPanel({
  variant,
  label,
  className,
  sweepFrom = "left",
  showMark = true,
}: {
  variant: Variant;
  label: string;
  className?: string;
  sweepFrom?: "left" | "right";
  showMark?: boolean;
}) {
  const t = themes[variant];
  return (
    <div
      role="img"
      aria-label={label}
      className={clsx("relative isolate overflow-hidden bg-deep", className)}
      style={{
        backgroundImage: `radial-gradient(120% 90% at ${sweepFrom === "left" ? "15%" : "85%"} 15%, ${t.from}, ${t.via} 55%, ${t.to} 100%)`,
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-90"
        style={{
          background: `linear-gradient(${sweepFrom === "left" ? "115deg" : "245deg"}, transparent 30%, ${t.sweep} 48%, transparent 66%)`,
        }}
      />
      {showMark && (
        <svg
          aria-hidden
          viewBox="0 0 640 240"
          className="pointer-events-none absolute -bottom-6 left-1/2 h-[58%] w-auto -translate-x-1/2 opacity-[0.14]"
          fill="none"
          stroke="var(--accent)"
          strokeWidth={2.5}
        >
          <path d="M50,182 C50,168 58,158 72,156 L118,154 C132,118 178,90 226,88 C266,86 300,100 322,124 L344,152 L470,152 C500,152 522,140 540,140 C558,140 572,150 574,166 L576,178 C576,188 568,196 558,196 L520,196 C520,172 500,152 476,152 C452,152 432,172 432,196 L228,196 C228,172 208,152 184,152 C160,152 140,172 140,196 L90,196 C68,196 50,190 50,182 Z" />
          <circle cx="184" cy="196" r="28" />
          <circle cx="184" cy="196" r="12" />
          <circle cx="476" cy="196" r="28" />
          <circle cx="476" cy="196" r="12" />
        </svg>
      )}
      <div aria-hidden className="absolute inset-0 bg-noise mix-blend-overlay" />
      <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-white/[0.04]" />
    </div>
  );
}

export function CarMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 640 240" className={className} fill="none" stroke="currentColor" strokeWidth={6}>
      <path d="M50,182 C50,168 58,158 72,156 L118,154 C132,118 178,90 226,88 C266,86 300,100 322,124 L344,152 L470,152 C500,152 522,140 540,140 C558,140 572,150 574,166 L576,178 C576,188 568,196 558,196 L520,196 C520,172 500,152 476,152 C452,152 432,172 432,196 L228,196 C228,172 208,152 184,152 C160,152 140,172 140,196 L90,196 C68,196 50,190 50,182 Z" />
      <circle cx="184" cy="196" r="28" />
      <circle cx="184" cy="196" r="12" />
      <circle cx="476" cy="196" r="28" />
      <circle cx="476" cy="196" r="12" />
    </svg>
  );
}
