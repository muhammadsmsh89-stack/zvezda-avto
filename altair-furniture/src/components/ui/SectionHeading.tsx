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
    <div
      className={clsx(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div className="mb-4 flex items-center gap-3">
        {index ? <NumberTag value={index} /> : null}
        {eyebrow ? (
          <span
            className={clsx(
              "font-mono-tag text-xs uppercase tracking-[0.14em]",
              tone === "dark" ? "text-muted" : "text-paper/60",
            )}
          >
            {eyebrow}
          </span>
        ) : null}
      </div>
      <h2
        className={clsx(
          "text-balance text-[clamp(1.75rem,4vw,3.25rem)] font-medium leading-[1.08]",
          tone === "dark" ? "text-ink" : "text-paper",
        )}
      >
        {title}
      </h2>
      {lead ? (
        <p
          className={clsx(
            "text-pretty mt-5 text-[clamp(1rem,1.4vw,1.15rem)] leading-relaxed",
            tone === "dark" ? "text-muted" : "text-paper/70",
          )}
        >
          {lead}
        </p>
      ) : null}
    </div>
  );
}
