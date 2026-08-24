import clsx from "clsx";

/**
 * Типографический вордмарк вместо растрового логотипа клиники (185×69px —
 * слишком мало для крупных начертаний). Строится на дисплейной гарнитуре
 * сайта, чтобы логотип и заголовки читались как одна система.
 */
export function Wordmark({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span
      className={clsx(
        "font-display inline-flex items-baseline gap-[0.1em] text-[1.75rem] leading-none tracking-[-0.02em]",
        dark ? "text-shell" : "text-ink",
        className,
      )}
    >
      Этель
      <span className="route-node" aria-hidden />
    </span>
  );
}
