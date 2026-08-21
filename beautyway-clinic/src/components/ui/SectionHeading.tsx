import clsx from "clsx";
import Link from "next/link";
import { IconArrow } from "./Icons";

/**
 * Редакционный заголовок секции: номер-указатель, крупный display-заголовок,
 * при необходимости — ссылка «смотреть все» справа.
 */
export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  link,
  tone = "light",
  className,
}: {
  index?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  link?: { href: string; label: string };
  tone?: "light" | "ink";
  className?: string;
}) {
  const ink = tone === "ink";
  const linkCls = clsx(
    "group min-h-[44px] items-center gap-2 text-[0.9375rem] font-medium transition-colors",
    ink ? "text-lilac hover:text-orchid-soft" : "text-plum hover:text-plum-deep",
  );
  return (
    <div className={clsx("mb-7 sm:mb-9", className)}>
      {(index || eyebrow) && (
        <div
          className={clsx(
            "eyebrow mb-3 flex items-center gap-3",
            ink ? "text-orchid-soft" : "text-plum",
          )}
        >
          {index && <span className="tabular-nums">{index}</span>}
          {index && eyebrow && (
            <span className={clsx("h-px w-6", ink ? "bg-orchid-soft/50" : "bg-plum/35")} aria-hidden />
          )}
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-3">
        <h2
          className={clsx(
            "font-display text-[1.75rem] leading-[1.15] sm:text-[2.25rem] lg:text-[2.6rem]",
            ink ? "text-milk" : "text-graphite",
          )}
        >
          {title}
        </h2>
        {link && (
          <Link href={link.href} className={clsx(linkCls, "hidden sm:inline-flex")}>
            {link.label}
            <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        )}
      </div>
      {intro && (
        <p
          className={clsx(
            "mt-4 max-w-[62ch] text-[1.0625rem] leading-relaxed",
            ink ? "text-lilac" : "text-graphite-soft",
          )}
        >
          {intro}
        </p>
      )}
      {link && (
        <Link href={link.href} className={clsx(linkCls, "mt-4 inline-flex sm:hidden")}>
          {link.label}
          <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  );
}
