import clsx from "clsx";
import { NumberTag } from "./NumberTag";

type SectionHeadingProps = {
  index?: string;
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
};

// tone="dark" — секция на тёмном фоне (текст paper); tone="light" — секция на светлом
// editorial-фоне paper-2 (текст ink). Названия унаследованы от конвенции репозитория,
// но здесь означают обратное соседним проектам — здесь "dark" это основной, тёмный ритм сайта.
export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      <div className={clsx("mb-4 flex items-center gap-3", align === "center" && "justify-center")}>
        {index ? <NumberTag value={index} /> : null}
        {eyebrow ? (
          <span
            className={clsx(
              "font-mono-tag text-xs uppercase tracking-[0.14em]",
              tone === "dark" ? "text-paper/50" : "text-ink-muted",
            )}
          >
            {eyebrow}
          </span>
        ) : null}
      </div>
      <h2
        className={clsx(
          "text-balance text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-[1.08]",
          tone === "dark" ? "text-paper" : "text-ink",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={clsx(
            "text-pretty mt-5 text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed",
            tone === "dark" ? "text-paper/65" : "text-ink-muted",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
