import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { PriceExplorer } from "./PriceExplorer";

export const metadata: Metadata = {
  title: "Прайс-лист",
  description:
    "Полный прайс-лист автотехцентра «Звезда» в Махачкале: двигатель, трансмиссия, подвеска, тормоза, электрооборудование, кондиционер.",
};

export default function PricePage() {
  return (
    <>
      <PageHero
        eyebrow="Прайс-лист"
        breadcrumb="Прайс-лист"
        title="Цены на ремонт и обслуживание"
        description="Базовые цены на популярные работы. Итоговая стоимость может отличаться в зависимости от марки, модели и состояния автомобиля — актуальную цену мастер назовёт после осмотра."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <PriceExplorer />

          <div className="mt-16 flex flex-col items-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center">
            <h3 className="font-sans text-xl font-bold text-foreground">Не нашли нужную позицию?</h3>
            <p className="max-w-md text-sm text-muted">
              Позвоните нам или оставьте заявку — уточним стоимость под вашу марку и модель автомобиля.
            </p>
            <Link
              href="/#booking"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110"
            >
              Уточнить цену
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
