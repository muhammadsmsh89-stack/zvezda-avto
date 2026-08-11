import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/ui/Reveal";
import { DoorTexturePanel } from "@/components/art/DoorTexturePanel";
import { products, getProductBySlug } from "@/lib/products";
import { getCategoryBySlug } from "@/lib/catalog";
import { ProductActions } from "@/components/product/ProductActions";
import { IconChevron } from "@/components/icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: [product.material, product.color, product.production].filter(Boolean).join(", "),
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = getCategoryBySlug(product.category);

  const specs = [
    { label: "Категория", value: category?.title },
    { label: "Материал", value: product.material },
    { label: "Цвет", value: product.color },
    { label: "Производство", value: product.production },
  ].filter((s) => s.value);

  const breadcrumbs = [
    { label: "Главная", href: "/" },
    { label: "Каталог", href: "/catalog" },
    ...(category ? [{ label: category.shortTitle, href: `/catalog/${category.slug}` }] : []),
    { label: product.name },
  ];

  return (
    <section className="py-8 sm:py-10">
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

        <div className="mt-8 grid gap-12 lg:grid-cols-2">
          <Reveal variant="mask" className="h-[440px] sm:h-[560px]">
            <DoorTexturePanel
              tone={product.visualTone}
              crop="door"
              variant="single"
              scrim={false}
              className="h-full bg-surface-2"
              slotId={`REAL_PRODUCT_IMAGE_REQUIRED:${product.slug}`}
            />
          </Reveal>

          <Reveal variant="rise" delay={0.1} className="flex flex-col justify-center">
            <p className="text-[13px] uppercase tracking-[0.14em] text-muted">{category?.title}</p>
            <h1 className="mt-2 text-[36px] leading-[1.1] sm:text-[46px]">{product.name}</h1>

            <dl className="mt-8 space-y-4 border-t border-border pt-6">
              {specs.map((spec) => (
                <div key={spec.label} className="flex justify-between gap-4 text-[16px]">
                  <dt className="text-muted">{spec.label}</dt>
                  <dd className="text-right">{spec.value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-[24px]">{product.priceLabel}</p>

            <ProductActions productName={product.name} categorySlug={product.category} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
