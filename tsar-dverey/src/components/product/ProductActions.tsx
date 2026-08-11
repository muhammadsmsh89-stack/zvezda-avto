"use client";

import Link from "next/link";
import { whatsappProduct } from "@/lib/whatsapp";
import { IconWhatsApp } from "@/components/icons";
import { track } from "@/lib/analytics";
import type { DoorCategorySlug } from "@/lib/catalog";

export function ProductActions({
  productName,
  categorySlug,
}: {
  productName: string;
  categorySlug: DoorCategorySlug;
}) {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <a
        href={whatsappProduct(productName)}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          track("product_open", { product: productName });
          track("whatsapp_click", { location: "product_page" });
        }}
        className="inline-flex items-center gap-2 rounded-[3px] bg-foreground px-6 py-3.5 text-[15px] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
      >
        <IconWhatsApp className="h-4 w-4" />
        Узнать стоимость
      </a>
      <Link
        href={`/catalog/${categorySlug}`}
        className="inline-flex items-center gap-2 rounded-[3px] border border-border-strong px-6 py-3.5 text-[15px] text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        Подобрать похожие
      </Link>
    </div>
  );
}
