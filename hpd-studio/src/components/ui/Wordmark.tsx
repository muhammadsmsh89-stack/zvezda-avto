import clsx from "clsx";

/** Текстовый wordmark HPD — оригинальный логотип-файл не предоставлен владельцем. */
export function Wordmark({
  className,
  ariaHidden,
}: {
  className?: string;
  ariaHidden?: boolean;
}) {
  return (
    <span
      aria-hidden={ariaHidden}
      className={clsx(
        "font-[var(--font-display)] font-semibold uppercase tracking-[0.04em] text-foreground",
        className
      )}
    >
      HPD
    </span>
  );
}
