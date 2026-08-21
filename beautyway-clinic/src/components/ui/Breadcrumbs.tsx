import Link from "next/link";
import { IconChevron } from "./Icons";

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Хлебные крошки" className="no-scrollbar -mx-5 overflow-x-auto px-5 sm:mx-0 sm:px-0">
      <ol className="flex items-center gap-1.5 whitespace-nowrap text-[0.8125rem] text-graphite-soft">
        {items.map((it, i) => {
          const last = i === items.length - 1;
          return (
            <li key={it.path} className="flex items-center gap-1.5">
              {i > 0 && <IconChevron className="h-3.5 w-3.5 shrink-0 text-lilac" aria-hidden />}
              {last ? (
                <span aria-current="page" className="inline-flex min-h-[44px] items-center text-graphite">
                  {it.name}
                </span>
              ) : (
                <Link
                  href={it.path}
                  className="inline-flex min-h-[44px] items-center transition-colors hover:text-plum-deep"
                >
                  {it.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
