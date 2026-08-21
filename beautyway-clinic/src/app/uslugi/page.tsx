import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { ServiceCatalog, type CatalogItem, type CatalogCategory } from "@/components/ServiceCatalog";
import { services, taxonomy, categoryBySlug, displayTitle, priceFromLabel, problems } from "@/lib/content";
import { pluralize } from "@/lib/plural";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Услуги клиники — каталог процедур",
  description:
    "Полный каталог процедур BeautyWay Clinic: инъекционная и аппаратная косметология, лазерные методики, нитевой лифтинг, удаление новообразований. Поиск по услуге, проблеме и зоне.",
  path: "/uslugi",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Услуги", path: "/uslugi" },
];

export default function ServicesPage() {
  /** Ключевые слова для поиска: название + направление + связанные проблемы. */
  const problemTitle = new Map(problems.map((p) => [p.slug, displayTitle(p)]));

  const items: CatalogItem[] = services.map((s) => {
    const cat = s.category ? categoryBySlug.get(s.category) : undefined;
    const title = displayTitle(s);
    const probs = s.relatedProblems.map((p) => problemTitle.get(p) ?? "").join(" ");
    return {
      slug: s.slug,
      title,
      category: s.category,
      categoryTitle: cat && cat.slug !== s.slug ? cat.title : null,
      price: priceFromLabel(s),
      keywords: `${title} ${cat?.title ?? ""} ${probs} ${s.description ?? ""}`.toLowerCase(),
    };
  });

  const categories: CatalogCategory[] = taxonomy
    .map((c) => ({
      slug: c.slug,
      title: c.title,
      count: items.filter((i) => i.category === c.slug).length,
    }))
    .filter((c) => c.count > 0);

  return (
    <>
      <PageIntro
        eyebrow="Каталог"
        title="Услуги клиники"
        intro={`${pluralize(services.length, "процедура", "процедуры", "процедур")} в ${pluralize(categories.length, "направлении", "направлениях", "направлениях")}. Ищите по названию, проблеме или зоне: на карточке сразу видна цена «от».`}
        crumbs={crumbs}
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <ServiceCatalog items={items} categories={categories} />
          <div className="mt-10">
            <MedicalNotice />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
