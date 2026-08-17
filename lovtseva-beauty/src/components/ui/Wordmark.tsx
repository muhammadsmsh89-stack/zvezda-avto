import clsx from "clsx";

/** Двухстрочный typographic wordmark — оригинальный логотип-файл не предоставлен. */
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
        "flex flex-col font-sans uppercase leading-[1.15] tracking-[0.14em]",
        compact ? "text-[0.62rem]" : "text-[0.68rem]",
        dark ? "text-background" : "text-foreground",
        className
      )}
    >
      <span className="font-semibold">Центр красоты</span>
      <span className={clsx("font-semibold", dark ? "text-background/70" : "text-muted")}>Натальи Ловцевой</span>
    </span>
  );
}

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
        stroke={dark ? "rgba(246,239,227,0.5)" : "rgba(31,24,17,0.35)"}
      />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="18"
        fontWeight={600}
        fill={dark ? "#F6EFE3" : "#1F1811"}
      >
        Л
      </text>
    </svg>
  );
}
