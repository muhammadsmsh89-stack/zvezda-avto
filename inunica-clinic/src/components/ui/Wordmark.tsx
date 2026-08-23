import clsx from "clsx";

/**
 * Логотип набором, а не картинкой: он остаётся резким на любом экране,
 * ничего не грузит и переживает смену размера. Фирменная фуксия здесь —
 * ровно одно слово, как подпись под знаком клиники.
 */
export function Wordmark({
  className,
  invert = false,
}: {
  className?: string;
  invert?: boolean;
}) {
  return (
    <span
      className={clsx(
        "inline-flex items-baseline gap-[0.5em] leading-none",
        invert ? "text-shell" : "text-ink",
        className,
      )}
    >
      <span className="text-[1.35em] font-medium tracking-[0.13em]">INUNICA</span>
      <span
        className={clsx(
          "text-[0.62em] uppercase tracking-[0.3em]",
          invert ? "text-accent-lift" : "text-accent",
        )}
      >
        clinic
      </span>
    </span>
  );
}
