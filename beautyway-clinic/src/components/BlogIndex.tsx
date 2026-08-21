"use client";

import { useDeferredValue, useMemo, useState } from "react";
import Link from "next/link";
import { IconSearch, IconArrow } from "./ui/Icons";

export type Post = { slug: string; title: string; lede: string; keywords: string };

export function BlogIndex({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");
  const [limit, setLimit] = useState(18);
  const q = useDeferredValue(query).trim().toLowerCase();

  const filtered = useMemo(() => {
    if (q.length < 2) return posts;
    const words = q.split(/\s+/).filter(Boolean);
    return posts.filter((p) => words.every((w) => p.keywords.includes(w)));
  }, [posts, q]);
  const visible = filtered.slice(0, limit);

  return (
    <div>
      <div className="relative max-w-[520px]">
        <label htmlFor="blog-search" className="mb-2 block text-[0.9375rem] font-medium text-graphite">
          Поиск по статьям
        </label>
        <IconSearch className="pointer-events-none absolute bottom-[15px] left-3.5 h-5 w-5 text-graphite-soft" />
        <input
          id="blog-search"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setLimit(18);
          }}
          placeholder="Например: филлеры, пилинг, акне"
          className="min-h-[52px] w-full rounded-[6px] border border-line bg-porcelain pl-11 pr-4 text-[1rem] text-graphite placeholder:text-graphite-soft/80 focus:border-plum focus:outline-none"
        />
      </div>

      <p aria-live="polite" className="mt-4 text-[0.875rem] text-graphite-soft">
        {filtered.length === 0 ? "Ничего не нашлось — попробуйте другое слово." : `Статей: ${filtered.length}`}
      </p>

      <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p) => (
          <li key={p.slug}>
            <Link
              href={`/blog/${p.slug}`}
              className="group flex h-full flex-col rounded-[10px] border border-line bg-porcelain p-5 transition-colors hover:border-plum/45 hover:bg-plum-tint"
            >
              <h2 className="font-display text-[1.125rem] leading-snug text-graphite group-hover:text-plum-deep">
                {p.title}
              </h2>
              <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-graphite-soft">{p.lede}</p>
              <span className="mt-4 inline-flex items-center gap-2 border-t border-line pt-3.5 text-[0.875rem] font-medium text-plum">
                Читать
                <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {filtered.length > visible.length && (
        <button
          type="button"
          onClick={() => setLimit((l) => l + 18)}
          className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center rounded-[4px] border border-plum/45 px-6 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint cursor-pointer sm:w-auto"
        >
          Показать ещё ({filtered.length - visible.length})
        </button>
      )}
    </div>
  );
}
