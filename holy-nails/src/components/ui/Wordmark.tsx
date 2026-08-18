import clsx from "clsx";

/** Оригинальный типографический wordmark — фирменный лого-файл не предоставлен. */
export function Wordmark({
  className,
  dark,
  compact,
}: {
  className?: string;
  dark?: boolean;
  compact?: boolean;
}) {
  return (
    <span
      className={clsx(
        "flex items-center gap-2 font-display uppercase leading-none tracking-[0.02em]",
        compact ? "text-base" : "text-lg",
        dark ? "text-background" : "text-foreground",
        className
      )}
    >
      Holy
      <span className={clsx("font-light italic", dark ? "text-background/75" : "text-muted")}>Nails</span>
    </span>
  );
}

/** Абстрактный знак — дуга ногтя/полумесяца, а не буква-инициал. */
export function Monogram({ className, dark }: { className?: string; dark?: boolean }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="9"
        fill="none"
        stroke={dark ? "rgba(245,242,234,0.5)" : "rgba(23,20,14,0.32)"}
      />
      <path
        d="M15 12c4.5 3.4 4.5 12.6 0 16 7-1 11-7 11-16s-4-15-11-16c1.6 1.9 2.6 4 3 6.2"
        fill="none"
        stroke={dark ? "#F5F2EA" : "#17140E"}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
