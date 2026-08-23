import type { Metadata } from "next";
import { PriceExplorer } from "@/components/PriceExplorer";
import { PageIntro } from "@/components/ui/PageIntro";
import { countItems } from "@/lib/prices";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Прайс-лист",
  description:
    "Полный прайс INUNICA clinic в Белгороде: лазерная эпиляция, аппаратная и инъекционная косметология, уходы, массаж. Поиск по названию процедуры.",
  alternates: { canonical: "/price/" },
};

export default function PricePage() {
  return (
    <>
      <PageIntro
        eyebrow="Прайс-лист"
        title="Цены"
        lead={`${countItems()} позиций с кодами номенклатуры медицинских услуг. Введите название процедуры или зоны — список отфильтруется на ходу.`}
      />
      <PriceExplorer />
      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Прайс-лист", path: "/price/" },
        ])}
      />
    </>
  );
}
