import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ui/ProductCard";
import { doorCategories, getCategoryBySlug } from "@/lib/catalog";
import { getProductsByCategory } from "@/lib/products";
import { categoryIcons } from "@/components/icons";
import { CategoryWhatsAppCta } from "@/components/catalog/CategoryWhatsAppCta";

export function generateStaticParams() {
  return doorCategories.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) return {};
  return {
    title: category.title,
    description: category.intro,
  };
}

const tone: Record<string, string> = {
  mezhkomnatnye: "bg-[#efe6d4]",
  skrytye: "bg-[#e4d9c4]",
  vkhodnye: "bg-[#20201f] text-deep-foreground",
  razdvizhnye: "bg-[#eee6d6]",
  "iz-massiva": "bg-[#3a2e22] text-deep-foreground",
};

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category) notFound();

  const Icon = categoryIcons[category.slug];
  const isDark = category.slug === "vkhodnye" || category.slug === "iz-massiva";
  const products = getProductsByCategory(category.slug);

  return (
    <>
      <PageHeader
        breadcrumbs={[
          { label: "Главная", href: "/" },
          { label: "Каталог", href: "/catalog" },
          { label: category.shortTitle },
        ]}
        eyebrow="Каталог"
        title={category.title}
        intro={category.intro}
      />

      <section className="py-16 sm:py-20">
        <div className="container-wide grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal variant="rise" className={`flex min-h-[320px] flex-col justify-between p-8 ${tone[category.slug]}`}>
            <Icon className={isDark ? "h-12 w-12 text-deep-foreground/70" : "h-12 w-12 text-foreground/60"} />
            <div>
              <p className={`text-[13px] uppercase tracking-[0.12em] ${isDark ? "text-deep-foreground/50" : "text-muted"}`}>
                Подтверждено
              </p>
              <ul className="mt-3 space-y-1.5 text-[16px]">
                {category.confirmedTraits.map((trait) => (
                  <li key={trait}>{trait}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="rise" delay={0.08}>
            {products.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {products.map((p) => (
                  <ProductCard key={p.slug} product={p} />
                ))}
              </div>
            ) : (
              <div className="flex h-full flex-col justify-center gap-5 border border-border-strong bg-surface p-8">
                <p className="text-[18px] leading-relaxed">
                  Актуальный ассортимент этой категории — в шоуруме на ул. Ирчи Казака, 86: модели меняются, и мы не
                  показываем здесь то, что не можем подтвердить.
                </p>
                <CategoryWhatsAppCta context={category.whatsappContext} />
              </div>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}
