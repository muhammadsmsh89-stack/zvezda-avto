import { ReactNode } from "react";
import clsx from "clsx";

export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  className,
  id,
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <header className={clsx("max-w-[46ch]", className)}>
      {(index || eyebrow) && (
        <p className="u-eyebrow mb-4 flex items-center gap-3">
          {index && <span className="text-fg-faint tabular-nums">{index}</span>}
          {eyebrow && <span>{eyebrow}</span>}
        </p>
      )}
      <h2
        id={id}
        className="text-[30px] font-bold leading-[1.06] sm:text-[40px] lg:text-[52px]"
      >
        {title}
      </h2>
      {lead && (
        <p className="mt-4 text-[15px] leading-[1.6] text-fg-dim sm:text-base">{lead}</p>
      )}
    </header>
  );
}
