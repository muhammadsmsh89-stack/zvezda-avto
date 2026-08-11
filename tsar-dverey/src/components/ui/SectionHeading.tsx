import { clsx } from "clsx";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "light",
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            "mb-3 text-[13px] uppercase tracking-[0.14em]",
            tone === "dark" ? "text-deep-foreground/55" : "text-muted"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          "text-balance text-[30px] leading-[1.15] sm:text-[36px] lg:text-[44px]",
          tone === "dark" ? "text-deep-foreground" : "text-foreground"
        )}
      >
        {title}
      </h2>
      {lead && (
        <p
          className={clsx(
            "mt-4 text-[17px] leading-relaxed sm:text-[18px]",
            tone === "dark" ? "text-deep-foreground/70" : "text-muted"
          )}
        >
          {lead}
        </p>
      )}
    </div>
  );
}
