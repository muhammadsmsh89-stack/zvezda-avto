import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  index,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  index?: string;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {(eyebrow || index) && (
        <Reveal className={`flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-accent ${align === "center" ? "justify-center" : ""}`}>
          {index && <span className="font-editorial text-sm not-italic text-muted">{index}</span>}
          {eyebrow && <span>{eyebrow}</span>}
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="text-balance mt-4 text-3xl leading-[1.1] text-ink sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.12}>
          <p className="text-balance mt-5 text-base leading-relaxed text-muted md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
