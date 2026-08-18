import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ProjectsSection } from "@/components/sections/ProjectsSection";

export const metadata: Metadata = {
  title: "Работы",
  description: "Реальные результаты работы HPD Studio — по отзывам клиентов на Яндекс Картах.",
};

export default function WorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="Результаты клиентов"
        title="Что отмечают клиенты HPD"
        description="Реальные истории и результаты — по отзывам клиентов на Яндекс Картах."
      />
      <ProjectsSection full />
    </>
  );
}
