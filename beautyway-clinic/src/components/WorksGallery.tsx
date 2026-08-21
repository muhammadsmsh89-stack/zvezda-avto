"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { Media } from "./ui/Media";

export type Work = {
  media: string;
  service: string;
  serviceTitle: string;
  category: string | null;
  alt: string;
};

/**
 * Реальные работы клиники. Фильтр — обычные кнопки, а не карусель:
 * весь набор доступен без горизонтальной прокрутки и с клавиатуры.
 */
export function WorksGallery({
  works,
  initialLimit = 8,
  showFilters = true,
}: {
  works: Work[];
  initialLimit?: number;
  showFilters?: boolean;
}) {
  const groups = useMemo(() => {
    const map = new Map<string, string>();
    works.forEach((w) => map.set(w.service, w.serviceTitle));
    return [...map.entries()]
      .map(([slug, title]) => ({ slug, title }))
      .sort((a, b) => a.title.localeCompare(b.title, "ru"));
  }, [works]);

  const [active, setActive] = useState<string>("all");
  const [limit, setLimit] = useState(initialLimit);

  const filtered = useMemo(
    () => (active === "all" ? works : works.filter((w) => w.service === active)),
    [works, active],
  );
  const visible = filtered.slice(0, limit);

  return (
    <div>
      {showFilters && groups.length > 1 && (
        <div className="no-scrollbar -mx-5 mb-6 overflow-x-auto px-5 sm:mx-0 sm:px-0">
          <div className="flex gap-2 pb-1" role="group" aria-label="Фильтр работ по процедуре">
            <FilterChip active={active === "all"} onClick={() => { setActive("all"); setLimit(initialLimit); }}>
              Все работы
            </FilterChip>
            {groups.map((g) => (
              <FilterChip
                key={g.slug}
                active={active === g.slug}
                onClick={() => { setActive(g.slug); setLimit(initialLimit); }}
              >
                {g.title}
              </FilterChip>
            ))}
          </div>
        </div>
      )}

      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {visible.map((w) => (
          <li key={w.media} className="overflow-hidden rounded-[10px] border border-line bg-porcelain">
            <Media
              name={w.media}
              widths={[320, 640]}
              ratio="1 / 1"
              alt={w.alt}
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
            <p className="px-3 py-2.5 text-[0.75rem] leading-snug text-graphite-soft">{w.serviceTitle}</p>
          </li>
        ))}
      </ul>

      {visible.length === 0 && (
        <p className="rounded-[10px] border border-line bg-porcelain p-6 text-[0.9375rem] text-graphite-soft">
          По этой процедуре мы пока не показываем работы на сайте.
        </p>
      )}

      {filtered.length > visible.length && (
        <button
          type="button"
          onClick={() => setLimit((l) => l + 12)}
          className="mt-6 inline-flex min-h-[48px] w-full items-center justify-center rounded-[4px] border border-plum/45 px-6 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint cursor-pointer sm:w-auto"
        >
          Показать ещё ({filtered.length - visible.length})
        </button>
      )}

      <p className="mt-5 text-[0.8125rem] leading-relaxed text-graphite-soft">
        Фотографии предоставлены клиникой и относятся к конкретным процедурам. Результат индивидуален
        и зависит от исходного состояния кожи, возраста и выполнения рекомендаций врача.
      </p>
    </div>
  );
}

function FilterChip({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        "inline-flex min-h-[44px] shrink-0 items-center whitespace-nowrap rounded-full border px-4 text-[0.875rem] transition-colors cursor-pointer",
        active
          ? "border-plum bg-plum text-white"
          : "border-line bg-porcelain text-graphite hover:border-plum/45 hover:bg-plum-tint",
      )}
    >
      {children}
    </button>
  );
}
