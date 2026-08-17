import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";

export const metadata: Metadata = {
  title: "До / После",
  description: "Сравнение результатов работы HPD Studio до и после.",
};

export default function BeforeAfterPage() {
  return (
    <>
      <PageIntro
        eyebrow="До / После"
        title="Наглядный результат"
        description="Интерактивное сравнение станет полным, как только HPD передаст парные фотографии одних и тех же зон автомобиля."
      />
      <BeforeAfterSection />
    </>
  );
}
