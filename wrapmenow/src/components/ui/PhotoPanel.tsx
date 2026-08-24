import clsx from "clsx";

/**
 * Заглушка вместо реальной фотографии WrapMeNow — только для направлений,
 * где подтверждённого фото не нашлось (антихром, тонировка, честная
 * заглушка «до/после»; см. scripts/photo-sources.md). Авторская абстрактная
 * композиция в одном визуальном языке студии (холодный ice-blue + силуэт
 * кузова), не выдаётся за реальное фото. `label` описывает, какое фото
 * должно занять это место после получения материалов от владельца.
 */

type Variant = "blackout" | "tint" | "before" | "after" | "contact" | "studio";

const themes: Record<Variant, { from: string; via: string; to: string; sweep: string }> = {
  blackout: { from: "#151515", via: "#0e0e0e", to: "#050505", sweep: "rgba(143,180,204,0.2)" },
  tint: { from: "#121417", via: "#0d0e0f", to: "#050505", sweep: "rgba(143,180,204,0.22)" },
  before: { from: "#141414", via: "#0c0c0c", to: "#050505", sweep: "rgba(165,165,165,0.14)" },
  after: { from: "#171b1d", via: "#0e1012", to: "#050505", sweep: "rgba(143,180,204,0.28)" },
  contact: { from: "#141618", via: "#0d0e0f", to: "#050505", sweep: "rgba(143,180,204,0.16)" },
  studio: { from: "#141618", via: "#0d0e0f", to: "#050505", sweep: "rgba(143,180,204,0.18)" },
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
