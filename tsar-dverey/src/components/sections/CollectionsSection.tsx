import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/products";
import { IconArrowRight } from "@/components/icons";

export function CollectionsSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Из ассортимента"
            title="Модель, которую можно посмотреть уже сейчас"
            lead="Полный ассортимент — в шоуруме на ул. Ирчи Казака, 86: можно сравнить фактуры и цвета вживую."
            className="max-w-xl"
          />
          <Link
            href="/catalog"
            className="hidden sm:inline-flex items-center gap-1.5 text-[15px] text-foreground hover:text-accent transition-colors"
          >
            Смотреть каталог
            <IconArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="mt-10 max-w-md">
          {products.map((product) => (
            <Reveal key={product.slug} variant="rise">
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
