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
        description="Сравнение состояния автомобиля до и после работы HPD."
      />
      <BeforeAfterSection />
    </>
  );
}
