import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { FaqList } from "@/components/ui/FaqList";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { LinkCards } from "@/components/ui/LinkCards";
import { ContentSections } from "@/components/ContentSections";
import { PriceTable } from "@/components/PriceTable";
import { BookingButton } from "@/components/BookingButton";
import { equipment, equipmentBySlug, resolveServices, displayTitle, firstParagraph, lede, priceFromLabel } from "@/lib/content";
import { JsonLd, breadcrumbLd, faqLd, pageMeta, trimTitle, clampDescription } from "@/lib/seo";

export function generateStaticParams() {
  return equipment.map((e) => ({ slug: e.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const e = equipmentBySlug.get(slug);
  if (!e) return {};
  return pageMeta({
    title: trimTitle(e.title, displayTitle(e)),
    description: clampDescription(e.description, lede(e, 160)),
    path: `/oborudovanie/${e.slug}`,
  });
}

export default async function EquipmentDetail({ params }: Props) {
  const { slug } = await params;
  const e = equipmentBySlug.get(slug);
  if (!e) notFound();

  const title = displayTitle(e);
  const services = resolveServices(e.relatedServices).slice(0, 9);
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "Оборудование", path: "/oborudovanie" },
    { name: title, path: `/oborudovanie/${e.slug}` },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Аппарат"
        title={title}
        intro={firstParagraph(e) ?? lede(e, 240)}
        crumbs={crumbs}
        aside={
          <div className="rounded-[12px] border border-line bg-milk p-4">
            <Media
              name={`equipment/${e.slug}`}
              widths={[420, 840]}
              ratio="1 / 1"
              alt={title}
              sizes="(min-width: 1024px) 320px, 100vw"
              fit="contain"
              priority
            />
            <BookingButton label="Записаться на процедуру" service={title} className="mt-4 w-full" />
          </div>
        }
      />

      <section className="bg-milk py-12 sm:py-16">
        <Container className="max-w-[840px]">
          <ContentSections
            sections={e.sections}
            skipIntro
            skip={["цены", "отзыв", "наши работы"]}
          />
          <div className="mt-10">
            <MedicalNotice />
          </div>
        </Container>
      </section>

      {e.prices.length > 0 && (
        <section className="border-t border-line bg-porcelain py-12 sm:py-16">
          <Container>
            <SectionHeading eyebrow="Прайс" title="Цены на процедуры" />
            <PriceTable rows={e.prices} />
          </Container>
        </section>
      )}

      {services.length > 0 && (
        <section className="border-t border-line bg-milk py-12 sm:py-16">
          <Container>
            <SectionHeading eyebrow="Применение" title="Процедуры на этом аппарате" />
            <LinkCards
              columns={3}
              items={services.map((s) => ({
                href: `/uslugi/${s.slug}`,
                title: displayTitle(s),
                note: priceFromLabel(s),
              }))}
            />
          </Container>
        </section>
      )}

      {e.faq.length > 0 && (
        <section className="border-t border-line bg-porcelain py-12 sm:py-16">
          <Container className="max-w-[820px]">
            <SectionHeading eyebrow="Вопросы" title="Частые вопросы" />
            <FaqList items={e.faq} />
          </Container>
        </section>
      )}

      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd data={faqLd(e.faq)} />
    </>
  );
}
