import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { MastersIndex } from "@/components/MastersIndex";

export const metadata: Metadata = {
  title: "Мастера",
  description: "Стилисты Redken Loft в Краснодаре: Дмитрий Баздырев, Никита Шамай, Вера Форостян, Ольга.",
};

export default function MastersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Команда"
        title="Стилисты, которых клиенты называют по именам"
        description="Имена подтверждены отзывами клиентов на Яндекс Картах и в 2ГИС. Специализация Ольги и Екатерины уточняется у салона."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <MastersIndex />
        </Container>
      </section>
    </>
  );
}
