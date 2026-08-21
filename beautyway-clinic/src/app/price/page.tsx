import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { PriceExplorer } from "@/components/PriceExplorer";
import { BookingButton } from "@/components/BookingButton";
import { staticPages, type PriceRow } from "@/lib/content";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { VERIFIED_ON_HUMAN } from "@/lib/site";
import { pluralize } from "@/lib/plural";

export const metadata: Metadata = pageMeta({
  title: "Цены на процедуры",
  description:
    "Полный прайс BeautyWay Clinic: инъекционная и аппаратная косметология, лазерные методики, эпиляция, удаление новообразований. Поиск и фильтр по разделам.",
  path: "/price",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Цены", path: "/price" },
];

export default function PricePage() {
  const rows = (staticPages["/price"]?.prices ?? []) as PriceRow[];

  return (
    <>
      <PageIntro
        eyebrow="Прайс"
        title="Цены клиники"
        intro={`${pluralize(rows.length, "позиция", "позиции", "позиций")} прайса, сверенные ${VERIFIED_ON_HUMAN}. Очная консультация врача-косметолога бесплатная.`}
        crumbs={crumbs}
        aside={
          <div className="rounded-[12px] border border-line bg-milk p-5">
            <p className="text-[0.9375rem] leading-relaxed text-graphite">
              Не уверены, какая позиция вам нужна? Врач разберёт задачу и назовёт точную стоимость на
              бесплатной консультации.
            </p>
            <BookingButton label="Записаться на консультацию" className="mt-4 w-full" />
          </div>
        }
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <PriceExplorer rows={rows} />
          <div className="mt-10">
            <MedicalNotice />
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
