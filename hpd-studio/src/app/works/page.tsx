import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Работы",
  description: "Реальные кейсы работ HPD Studio, собранные по отзывам клиентов на Яндекс Картах.",
};

export default function WorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="Работы HPD"
        title="Что делает HPD с автомобилями"
        description="Кейсы собраны по реальным отзывам клиентов — без домыслов о том, чего мы не подтвердили."
      />
      <ProjectsSection full />
    </>
  );
}
