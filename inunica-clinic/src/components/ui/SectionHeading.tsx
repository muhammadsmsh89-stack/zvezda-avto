import clsx from "clsx";

/**
 * Заголовок секции: номер + надзаголовок над тонкой линией, затем крупный
 * display-заголовок. Нумерация даёт ритм длинной странице и читается
 * как редакционный колонтитул, а не как декор.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  invert = false,
  className,
}: {
  index?: string;
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  invert?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <div
        className={clsx(
          "flex items-baseline gap-4 border-t pt-4",
          invert ? "border-white/15" : "border-line",
        )}
      >
        {index && (
          <span className={clsx("eyebrow tabular-nums", invert && "!text-shell/55")}>
            {index}
          </span>
        )}
        <span className={clsx("eyebrow", invert && "!text-shell/55")}>{eyebrow}</span>
      </div>

      <h2
        className={clsx(
          "font-display mt-7 text-[2.125rem] sm:text-[2.75rem] lg:text-[3.5rem]",
          invert ? "text-shell" : "text-ink",
        )}
      >
        {title}
      </h2>

      {lead && (
        <p
          className={clsx(
            "mt-6 max-w-[52ch] text-[1.125rem] leading-[1.65]",
            invert ? "text-shell/70" : "text-ink-soft",
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
