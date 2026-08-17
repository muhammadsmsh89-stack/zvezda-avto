import clsx from "clsx";

/** Текстовый wordmark SEYCHAS — оригинальный логотип-файл не предоставлен. */
export function Wordmark({
  className,
  dark,
  ariaHidden,
}: {
  className?: string;
  dark?: boolean;
  ariaHidden?: boolean;
}) {
  return (
    <span
      aria-hidden={ariaHidden}
      className={clsx(
        "font-extrabold uppercase tracking-[0.02em]",
        dark ? "text-background" : "text-foreground",
        className
      )}
    >
      SEYCHAS
    </span>
  );
}
