"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { doorCategories } from "@/lib/catalog";
import { categoryIcons, IconArrowRight } from "@/components/icons";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { track } from "@/lib/analytics";

// Асимметричная композиция вместо сетки из одинаковых карточек: у межкомнатных дверей — самая
// широкая часть ассортимента (PHASE 1 research), поэтому им отдана доминирующая плитка.
const layout: Record<string, string> = {
  mezhkomnatnye: "lg:col-span-7 lg:row-span-2",
  skrytye: "lg:col-span-5 lg:row-span-1",
  vkhodnye: "lg:col-span-5 lg:row-span-1",
  razdvizhnye: "lg:col-span-6 lg:row-span-1",
  "iz-massiva": "lg:col-span-6 lg:row-span-1",
};

const tone: Record<string, string> = {
  mezhkomnatnye: "bg-[#efe6d4]",
  skrytye: "bg-[#e4d9c4]",
  vkhodnye: "bg-[#20201f] text-deep-foreground",
  razdvizhnye: "bg-[#eee6d6]",
  "iz-massiva": "bg-[#3a2e22] text-deep-foreground",
};

export function CategoriesSection() {
  return (
    <section className="py-20 sm:py-28" id="catalog">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Каталог"
          title="Пять направлений — один принцип подбора"
          lead="Каждая категория собрана под конкретную задачу интерьера, а не просто по типу конструкции."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-12 lg:auto-rows-[220px]">
          {doorCategories.map((category, i) => {
            const Icon = categoryIcons[category.slug];
            const isDark = category.slug === "vkhodnye" || category.slug === "iz-massiva";
            return (
              <Reveal key={category.slug} variant="rise" delay={(i % 3) * 0.06} className={layout[category.slug]}>
                <Link
                  href={`/catalog/${category.slug}`}
                  onClick={() => track("category_open", { category: category.slug })}
                  data-photo-slot={`REAL_CATEGORY_IMAGE_REQUIRED:${category.slug}`}
                  className={clsx(
                    "group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden p-7 transition-colors",
                    tone[category.slug]
                  )}
                >
                  <Icon
                    className={clsx(
                      "h-9 w-9 transition-transform duration-500 group-hover:scale-110",
                      isDark ? "text-deep-foreground/80" : "text-foreground/70"
                    )}
                  />
                  <div>
                    <p className={clsx("text-[22px] sm:text-[26px]", isDark ? "text-deep-foreground" : "text-foreground")}>
                      {category.title}
                    </p>
                    <p
                      className={clsx(
                        "mt-1.5 max-w-[34ch] text-[14px] leading-snug",
                        isDark ? "text-deep-foreground/65" : "text-muted"
                      )}
                    >
                      {category.description}
                    </p>
                    <span
                      className={clsx(
                        "mt-4 inline-flex items-center gap-1.5 text-[13px] transition-colors",
                        isDark ? "text-accent" : "text-accent"
                      )}
                    >
                      Смотреть раздел
                      <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
