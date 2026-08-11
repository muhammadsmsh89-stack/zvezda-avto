import Link from "next/link";
import { IconChevron } from "@/components/icons";

export function PageHeader({
  breadcrumbs,
  eyebrow,
  title,
  intro,
}: {
  breadcrumbs: { label: string; href?: string }[];
  eyebrow?: string;
  title?: string;
  intro?: string;
}) {
  return (
    <div className="border-b border-border bg-surface py-14 sm:py-20">
      <div className="container-wide">
        <nav aria-label="Хлебные крошки" className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
          {breadcrumbs.map((b, i) => (
            <span key={b.label} className="flex items-center gap-1.5">
              {i > 0 && <IconChevron className="h-3 w-3 -rotate-90" />}
              {b.href ? (
                <Link href={b.href} className="hover:text-accent transition-colors">
                  {b.label}
                </Link>
              ) : (
                <span className="text-foreground">{b.label}</span>
              )}
            </span>
          ))}
        </nav>

        {eyebrow && <p className="mt-6 text-[13px] uppercase tracking-[0.14em] text-muted">{eyebrow}</p>}
        {title && <h1 className="text-balance mt-3 max-w-2xl text-[32px] leading-[1.15] sm:text-[42px]">{title}</h1>}
        {intro && <p className="mt-4 max-w-xl text-[17px] leading-relaxed text-muted">{intro}</p>}
      </div>
    </div>
  );
}
