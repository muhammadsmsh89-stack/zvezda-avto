import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { MastersIndex } from "@/components/MastersIndex";

export const metadata: Metadata = {
  title: "Мастера",
  description: "Команда студии SEYCHAS в Туле — актуальный состав специалистов по маникюру, бровям и ресницам.",
};

export default function MastersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Команда"
        title="Мастера SEYCHAS"
        description="Выберите специалиста по направлению — и переходите к записи в удобное время."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <MastersIndex />
        </Container>
      </section>
    </>
  );
}
