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
import { articles, articleBySlug, resolveServices, displayTitle, lede, priceFromLabel } from "@/lib/content";
import { JsonLd, articleLd, breadcrumbLd, faqLd, pageMeta, trimTitle, clampDescription } from "@/lib/seo";
import { VERIFIED_ON_HUMAN } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const a = articleBySlug.get(slug);
  if (!a) return {};
  return pageMeta({
    title: trimTitle(a.title, displayTitle(a)),
    description: clampDescription(a.description, lede(a, 160)),
    path: `/blog/${a.slug}`,
  });
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const a = articleBySlug.get(slug);
  if (!a) notFound();

  const title = displayTitle(a);
  const services = resolveServices(a.relatedServices).slice(0, 6);
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "Блог", path: "/blog" },
    { name: title, path: `/blog/${a.slug}` },
  ];

  return (
    <>
      <PageIntro eyebrow="Статья" title={title} crumbs={crumbs}>
        <p className="mt-4 text-[0.8125rem] text-graphite-soft">
          Материал клиники BeautyWay. Сверено {VERIFIED_ON_HUMAN}.
        </p>
      </PageIntro>

      <section className="bg-milk py-12 sm:py-16">
        <Container className="max-w-[760px]">
          <ContentSections sections={a.sections} skip={["цены", "отзыв", "наши работы"]} />
          <div className="mt-10">
            <MedicalNotice extra="Статья носит справочный характер, не является медицинской рекомендацией и не заменяет очную консультацию врача." />
          </div>
          <div className="mt-8 rounded-[12px] border border-line bg-porcelain p-6">
            <h2 className="font-display text-[1.375rem] leading-snug text-graphite">
              Остались вопросы по вашей ситуации?
            </h2>
            <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-graphite-soft">
              Разобрать конкретно ваш случай можно только на осмотре. Очная консультация врача-косметолога
              в BeautyWay бесплатная.
            </p>
            <BookingButton label="Записаться на консультацию" className="mt-4" />
          </div>
        </Container>
      </section>

      {services.length > 0 && (
        <section className="border-t border-line bg-porcelain py-12 sm:py-16">
          <Container>
            <SectionHeading eyebrow="По теме" title="Процедуры из статьи" />
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

      {a.faq.length > 0 && (
        <section className="border-t border-line bg-milk py-12 sm:py-16">
          <Container className="max-w-[820px]">
            <SectionHeading eyebrow="Вопросы" title="Частые вопросы" />
            <FaqList items={a.faq} />
          </Container>
        </section>
      )}

      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd data={articleLd({ name: title, description: clampDescription(a.description, lede(a, 160)), path: `/blog/${a.slug}` })} />
      <JsonLd data={faqLd(a.faq)} />
    </>
  );
}
