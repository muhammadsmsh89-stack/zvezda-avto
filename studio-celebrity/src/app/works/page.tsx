import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { WorksGrid } from "@/components/WorksGrid";

export const metadata: Metadata = {
  title: "Работы",
  description: "Трансформации Studio Celebrity — окрашивание, стрижки, макияж и образы в 4 руки.",
};

export default function WorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="Портфолио"
        title="Работы студии"
        description="Результат говорит лучше обещаний — реальные трансформации по направлениям."
      />
      <section className="bg-background py-14 lg:py-20">
        <Container>
          <WorksGrid />
        </Container>
      </section>
    </>
  );
}
