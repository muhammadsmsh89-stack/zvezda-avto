import Link from "next/link";
import type { Product } from "@/lib/products";
import { DoorTexturePanel } from "@/components/art/DoorTexturePanel";
import { IconArrowRight } from "@/components/icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.slug}`}
      className="group flex flex-col overflow-hidden border border-border bg-surface transition-colors hover:border-accent"
    >
      <DoorTexturePanel
        tone={product.visualTone}
        crop="door"
        variant="single"
        scrim={false}
        className="h-72 bg-surface-2"
        slotId={`REAL_PRODUCT_IMAGE_REQUIRED:${product.slug}`}
      />
      <div className="p-6">
        <p className="text-[20px]">{product.name}</p>
        {(product.material || product.color) && (
          <p className="mt-1 text-[14px] text-muted">
            {[product.material, product.color].filter(Boolean).join(" · ")}
          </p>
        )}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-[15px] text-foreground">{product.priceLabel}</span>
          <span className="inline-flex items-center gap-1.5 text-[13px] text-accent">
            Подробнее
            <IconArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  );
}
