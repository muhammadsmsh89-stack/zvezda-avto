import clsx from "clsx";

/** Текстовый wordmark WrapMeNow — оригинальный векторный логотип не предоставлен владельцем. */
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
      className={clsx("font-[var(--font-display)] font-medium tracking-[-0.01em] text-foreground", className)}
    >
      Wrap<span className="text-accent">Me</span>Now
    </span>
  );
}
