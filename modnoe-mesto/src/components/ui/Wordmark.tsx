import clsx from "clsx";

/**
 * Типографический знак — ровно так, как бренд подписан на стенах студии:
 * два слова в разрядку. Логотип-эмблема используется как favicon.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={clsx(
        "font-bold leading-none tracking-[0.14em] text-fg",
        className,
      )}
    >
      MODNOE&nbsp;MESTO
    </span>
  );
}
