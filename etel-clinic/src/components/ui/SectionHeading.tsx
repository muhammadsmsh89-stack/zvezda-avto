import clsx from "clsx";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={clsx("max-w-[42rem]", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
      )}
      <Reveal delay={60}>
        <h2 className="font-display mt-3 text-[2rem] text-ink text-balance sm:text-[2.5rem] lg:text-[3rem]">
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={120}>
          <p className="mt-5 text-[1.0625rem] leading-[1.7] text-ink-soft text-pretty">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}
