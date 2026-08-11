import type { Metadata } from "next";
import Link from "next/link";
import { clsx } from "clsx";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { doorCategories } from "@/lib/catalog";
import { categoryIcons, IconArrowRight } from "@/components/icons";

export const metadata: Metadata = {
  title: "Каталог дверей",
  description:
    "Межкомнатные, скрытые, входные, раздвижные двери и двери из массива в Махачкале — выберите направление, чтобы посмотреть подробности.",
};

// Та же асимметричная композиция и тоновая система, что на главной (CategoriesSection) — единый
// каталог не должен превращаться в отдельную страницу с типовыми одинаковыми карточками.
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

export default function CatalogPage() {
  return (
    <>
      <PageHeader
        breadcrumbs={[{ label: "Главная", href: "/" }, { label: "Каталог" }]}
        eyebrow="Каталог"
        title="Пять направлений — один принцип подбора"
        intro="Полный ассортимент — в шоуруме. Здесь — ориентир, с чего начать выбор."
      />

      <section className="py-16 sm:py-20">
        <div className="container-wide grid grid-cols-1 gap-4 lg:grid-cols-12 lg:auto-rows-[220px]">
          {doorCategories.map((category, i) => {
            const Icon = categoryIcons[category.slug];
            const isDark = category.slug === "vkhodnye" || category.slug === "iz-massiva";
            return (
              <Reveal key={category.slug} variant="rise" delay={(i % 3) * 0.06} className={layout[category.slug]}>
                <Link
                  href={`/catalog/${category.slug}`}
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
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] text-accent">
                      Смотреть раздел
                      <IconArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
    </>
  );
}
