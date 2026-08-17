import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { BookingFlow } from "@/components/BookingFlow";

export const metadata: Metadata = {
  title: "Запись",
  description: "Запись в Центр красоты Натальи Ловцевой: выберите направление, услугу и мастера, отправьте сообщение в WhatsApp.",
};

export default function BookingPage() {
  return (
    <>
      <PageIntro
        eyebrow="Запись"
        title="Направление → услуга → мастер → запись"
        description="Соберите заявку в три шага — сообщение для WhatsApp сформируется автоматически."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-2xl">
          <BookingFlow />
        </Container>
      </section>
    </>
  );
}
