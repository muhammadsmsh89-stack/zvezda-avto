import Link from "next/link";
import { IconArrow } from "./Icons";

export function LinkCards({
  items,
  columns = 2,
}: {
  items: { href: string; title: string; note?: string | null }[];
  columns?: 2 | 3;
}) {
  if (!items.length) return null;
  return (
    <ul className={columns === 3 ? "grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3" : "grid gap-2.5 sm:grid-cols-2"}>
      {items.map((it) => (
        <li key={it.href}>
          <Link
            href={it.href}
            className="group flex h-full items-start justify-between gap-3 rounded-[10px] border border-line bg-porcelain p-4 transition-colors hover:border-plum/45 hover:bg-plum-tint"
          >
            <span className="min-w-0">
              <span className="block text-[0.9375rem] font-medium leading-snug text-graphite group-hover:text-plum-deep">
                {it.title}
              </span>
              {it.note && (
                <span className="mt-1 block text-[0.8125rem] leading-snug text-graphite-soft">{it.note}</span>
              )}
            </span>
            <IconArrow className="mt-0.5 h-4 w-4 shrink-0 text-plum transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </li>
      ))}
    </ul>
  );
}
