import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { PortfolioGrid } from "@/components/PortfolioGrid";

export const metadata: Metadata = {
  title: "Работы",
  description: "Реальные проекты WrapMeNow: защитная и цветная оклейка, антихром, брендирование и мотоциклы.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Реальные проекты"
        title="Машины говорят за нас"
        description="Каждый проект — реальная работа студии, с фото и материалом, который использовался."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <PortfolioGrid />
        </Container>
      </section>
    </>
  );
}
