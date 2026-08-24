import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { MaterialsSection } from "@/components/sections/MaterialsSection";

export const metadata: Metadata = {
  title: "Материалы",
  description: "Плёнки, которые использует WrapMeNow: Crystal Pro, Gliss Pro Premium, Avery, Oracal, SunTek, Llumar.",
};

export default function MaterialsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Материалы"
        title="Материал подбираем под задачу, а не под максимальный чек"
        description="Полиуретановая защитная плёнка сохраняет кузов с завода. Виниловая — меняет облик автомобиля."
      />
      <MaterialsSection />
    </>
  );
}
