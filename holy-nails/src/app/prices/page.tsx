import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { PriceTable } from "@/components/PriceTable";

export const metadata: Metadata = {
  title: "Цены",
  description: "Актуальные цены Holy Nails в Туле: маникюр, педикюр, наращивание, дизайн, брови и ресницы.",
};

export default function PricesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Цены"
        title="Стоимость — без квеста"
        description="Цена мастера и топ-мастера указана через дробь там, где она различается. Точную стоимость подтверждает администратор при записи."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <PriceTable />
        </Container>
      </section>
    </>
  );
}
