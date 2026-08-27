import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PriceList } from "@/components/PriceList";
import { whatsappBookingLink } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";

export const metadata: Metadata = {
  title: "Цены",
  description: "Прайс Redken Loft: авторское окрашивание, стрижки, уход, ногти. Краснодар, ул. Кубанская Набережная, 37.",
};

export default function PricesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Цены"
        title="Прайс на основные услуги"
        description="Стоимость окрашивания зависит от длины и густоты волос — точную цену салон называет после консультации. Прайс актуален на момент публикации, уточняйте при записи."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-2xl">
          <PriceList />
          <div className="mt-14">
            <Button size="lg" href={whatsappBookingLink()}>
              {ctaLabels.consultation}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
