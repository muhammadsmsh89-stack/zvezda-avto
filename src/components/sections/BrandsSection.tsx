import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { brands, brandModelHighlights } from "@/lib/content";

export function BrandsSection() {
  return (
    <section className="border-b border-border bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Марки автомобилей"
          title="Обслуживаем более 20 марок"
          description="От массовых японских и корейских моделей до премиальных немецких и суперкаров."
        />

        <Stagger className="mt-12 grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {brands.map((brand) => (
            <StaggerItem key={brand.name}>
              <div className="group flex aspect-square flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-surface p-4 transition-all hover:-translate-y-1 hover:border-accent/40">
                <div className="relative h-12 w-full overflow-hidden rounded-lg bg-white">
                  <Image
                    src={`/images/brands/${brand.file}`}
                    alt={brand.name}
                    fill
                    className="object-contain p-1.5 grayscale transition-all duration-300 group-hover:grayscale-0"
                    sizes="120px"
                  />
                </div>
                <span className="text-center text-xs font-medium text-muted transition-colors group-hover:text-foreground">
                  {brand.name}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {brandModelHighlights.map((item) => (
            <div key={item.brand} className="rounded-xl border border-border bg-surface/60 p-5">
              <p className="text-sm font-bold text-accent">{item.brand}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.models}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
