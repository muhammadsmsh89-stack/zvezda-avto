import clsx from "clsx";

/** Двухстрочный typographic wordmark — оригинальный логотип-файл не предоставлен. */
export function Wordmark({
  className,
  ink,
  compact,
}: {
  className?: string;
  ink?: boolean;
  compact?: boolean;
}) {
  return (
    <span
      className={clsx(
        "flex flex-col font-display uppercase leading-[1.1] tracking-[0.16em]",
        compact ? "text-[0.62rem]" : "text-[0.7rem]",
        ink ? "text-ink" : "text-foreground",
        className
      )}
    >
      <span className="font-semibold">Redken</span>
      <span className={clsx("font-semibold", ink ? "text-ink-muted" : "text-accent")}>Loft</span>
    </span>
  );
}

export function Monogram({ className, ink }: { className?: string; ink?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="4"
        fill="none"
        stroke={ink ? "rgba(23,19,13,0.35)" : "rgba(243,236,224,0.35)"}
      />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight={700}
        letterSpacing="-0.5"
        fill={ink ? "#17130D" : "#F3ECE0"}
      >
        RL
      </text>
    </svg>
  );
}
