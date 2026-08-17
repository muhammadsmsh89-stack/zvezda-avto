import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { PriceList } from "@/components/PriceList";

export const metadata: Metadata = {
  title: "Прайс",
  description: "Актуальные цены Центра красоты Натальи Ловцевой в Рязани: волосы, ногти, косметология, лазерная эпиляция, перманентный макияж и другие направления.",
};

export default function PricesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Прайс"
        title="Цены на услуги центра"
        description="Публичные ориентиры на дату проверки. Точную стоимость с учётом длины волос, объёма и материалов уточняйте у администратора."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <PriceList />
        </Container>
      </section>
    </>
  );
}
