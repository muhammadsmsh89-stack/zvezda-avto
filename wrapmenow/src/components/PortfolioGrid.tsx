"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { ProjectCard } from "@/components/ProjectCard";
import { projects, projectBrands, categoryLabels, type ProjectCategory } from "@/lib/projects";

const categoryFilters: Array<{ id: ProjectCategory | "all"; label: string }> = [
  { id: "all", label: "Все" },
  { id: "ppf", label: categoryLabels.ppf },
  { id: "color", label: categoryLabels.color },
  { id: "styling", label: categoryLabels.styling },
  { id: "branding", label: categoryLabels.branding },
  { id: "moto", label: categoryLabels.moto },
];

export function PortfolioGrid() {
  const [category, setCategory] = useState<(typeof categoryFilters)[number]["id"]>("all");
  const [brand, setBrand] = useState<string>("all");

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const categoryMatch = category === "all" || p.category === category;
      const brandMatch = brand === "all" || p.brand === brand;
      return categoryMatch && brandMatch;
    });
  }, [category, brand]);

  return (
    <div>
      <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Фильтр по типу работ">
        {categoryFilters.map((c) => (
          <button
            key={c.id}
            role="tab"
            aria-selected={category === c.id}
            onClick={() => setCategory(c.id)}
            className={clsx(
              "min-h-11 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors",
              category === c.id ? "border-accent bg-accent text-accent-foreground" : "border-border-strong text-foreground/80 hover:border-foreground"
            )}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <label className="text-xs font-semibold uppercase tracking-[0.08em] text-muted" htmlFor="brand-filter">
          Марка
        </label>
        <select
          id="brand-filter"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="ml-3 min-h-11 rounded-full border border-border-strong bg-surface px-4 py-2 text-sm text-foreground outline-none focus-visible:border-accent"
        >
          <option value="all">Все марки</option>
          {projectBrands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      {filtered.length > 0 ? (
        <div className="mt-10 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-muted">По этому фильтру пока нет проектов. Попробуйте другой вариант.</p>
      )}
    </div>
  );
}
