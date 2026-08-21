import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { LinkCards } from "@/components/ui/LinkCards";
import { ContentSections } from "@/components/ContentSections";
import { BookingButton } from "@/components/BookingButton";
import { problems, problemBySlug, resolveServices, displayTitle, firstParagraph, lede, priceFromLabel } from "@/lib/content";
import { JsonLd, breadcrumbLd, faqLd, pageMeta, trimTitle, clampDescription } from "@/lib/seo";

export function generateStaticParams() {
  return problems.map((p) => ({ slug: p.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const p = problemBySlug.get(slug);
  if (!p) return {};
  return pageMeta({
    title: trimTitle(p.title, displayTitle(p)),
    description: clampDescription(p.description, lede(p, 160)),
    path: `/problem/${p.slug}`,
  });
}

export default async function ProblemPage({ params }: Props) {
  const { slug } = await params;
  const p = problemBySlug.get(slug);
  if (!p) notFound();

  const title = displayTitle(p);
  const services = resolveServices(p.relatedServices).slice(0, 9);
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "Проблемы и зоны", path: "/problem" },
    { name: title, path: `/problem/${p.slug}` },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Проблема"
        title={title}
        intro={firstParagraph(p) ?? lede(p, 240)}
        crumbs={crumbs}
        aside={
          <div className="rounded-[12px] border border-line bg-milk p-5">
            <p className="text-[0.9375rem] leading-relaxed text-graphite">
              Подходящий метод зависит от причины и состояния кожи. Врач определит это на бесплатной
              очной консультации.
            </p>
            <BookingButton label="Записаться на консультацию" service={title} className="mt-4 w-full" />
          </div>
        }
      />

      <section className="bg-milk py-12 sm:py-16">
        <Container className="max-w-[840px]">
          <ContentSections
            sections={p.sections}
            skipIntro
            skip={["цены", "отзыв", "наши работы"]}
          />
          <div className="mt-10">
            <MedicalNotice />
          </div>
        </Container>
      </section>

      {services.length > 0 && (
        <section className="border-t border-line bg-porcelain py-12 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Что помогает"
              title="Процедуры при этой проблеме"
              link={{ href: "/uslugi", label: "Весь каталог" }}
            />
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

      {p.faq.length > 0 && (
        <section className="border-t border-line bg-milk py-12 sm:py-16">
          <Container className="max-w-[820px]">
            <SectionHeading eyebrow="Вопросы" title="Частые вопросы" />
            <FaqList items={p.faq} />
          </Container>
        </section>
      )}

      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd data={faqLd(p.faq)} />
    </>
  );
}
