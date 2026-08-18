import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { MastersGrid } from "@/components/MastersGrid";

export const metadata: Metadata = {
  title: "Мастера",
  description: "Команда Holy Nails в Туле: топ-мастера и мастера маникюра, педикюра и наращивания.",
};

export default function MastersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Мастера"
        title="Руки, которым доверяют"
        description="Каждый мастер работает по требованиям СанПиН, с выравниванием ногтевой пластины и гарантией на покрытие 2 недели."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <MastersGrid />
        </Container>
      </section>
    </>
  );
}
