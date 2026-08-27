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
        ink ? "text-cream" : "text-foreground",
        className
      )}
    >
      <span className="font-semibold">Redken</span>
      <span className={clsx("font-semibold", ink ? "text-cream-muted" : "text-accent")}>Loft</span>
    </span>
  );
}

/** ink=true renders the light-on-dark mark (noir surfaces); default is dark-on-paper. */
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
        stroke={ink ? "rgba(243,237,224,0.35)" : "rgba(25,20,15,0.3)"}
      />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="Arial, sans-serif"
        fontSize="16"
        fontWeight={700}
        letterSpacing="-0.5"
        fill={ink ? "#F3EDE0" : "#19140F"}
      >
        RL
      </text>
    </svg>
  );
}
