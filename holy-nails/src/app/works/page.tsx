import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { RealWorksGallery } from "@/components/RealWorksGallery";

export const metadata: Metadata = {
  title: "Работы",
  description: "Работы студии Holy Nails в Туле: маникюр, педикюр, наращивание и дизайн ногтей.",
};

export default function WorksPage() {
  return (
    <>
      <PageIntro
        eyebrow="Избранные работы"
        title="Маникюр, который хочется рассматривать"
        description="Полную ленту работ Holy Nails смотрите в Instagram и VK студии."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <RealWorksGallery />
        </Container>
      </section>
    </>
  );
}
