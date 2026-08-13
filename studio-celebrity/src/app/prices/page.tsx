import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { FullPriceList } from "@/components/FullPriceList";

export const metadata: Metadata = {
  title: "Услуги и цены",
  description: "Полный прайс-лист Studio Celebrity: hair, makeup, brows & lashes, event beauty, beauty school.",
};

export default function PricesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Прайс-лист"
        title="Услуги и цены"
        description="Все направления студии — в одном месте. Там, где точная цена зависит от длины и густоты волос, мастер подскажет стоимость на записи."
      />
      <section className="bg-background py-14 lg:py-20">
        <Container>
          <FullPriceList />
        </Container>
      </section>
    </>
  );
}
