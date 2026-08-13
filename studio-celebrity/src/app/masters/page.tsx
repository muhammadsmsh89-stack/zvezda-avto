import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { MastersIndex } from "@/components/MastersIndex";

export const metadata: Metadata = {
  title: "Мастера",
  description: "Мастера Studio Celebrity — стилисты, визажист и brow-мастер. Ярославль, ул. Кедрова, 3/8.",
};

export default function MastersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Команда"
        title="Мастера Studio Celebrity"
        description="Выберите мастера по специализации и работам."
      />
      <section className="bg-background py-14 lg:py-20">
        <Container>
          <MastersIndex />
        </Container>
      </section>
    </>
  );
}
