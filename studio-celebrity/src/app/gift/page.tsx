import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { GiftCta } from "@/components/GiftCta";

export const metadata: Metadata = {
  title: "Подарочный сертификат",
  description: "Подарочный сертификат на услуги Studio Celebrity — hair, makeup, brows и lashes.",
};

export default function GiftPage() {
  return (
    <>
      <PageIntro
        eyebrow="Подарок"
        title="Подарить Celebrity"
        description="Подарочный сертификат на услуги Studio Celebrity. Получатель сам выбирает направление — от стрижки и окрашивания до макияжа и архитектуры бровей."
      />
      <section className="bg-background py-14 lg:py-20">
        <Container>
          <GiftCta />
        </Container>
      </section>
    </>
  );
}
