import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FaqList } from "@/components/ui/FaqList";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { LinkCards } from "@/components/ui/LinkCards";
import { ContentSections } from "@/components/ContentSections";
import { PriceTable } from "@/components/PriceTable";
import { BookingButton } from "@/components/BookingButton";
import { WorksGallery, type Work } from "@/components/WorksGallery";
import { Media } from "@/components/ui/Media";
import {
  services,
  serviceBySlug,
  type Service,
  categoryBySlug,
  resolveServices,
  resolveDoctors,
  preparationBySlug,
  problemBySlug,
  displayTitle,
  shortTitle,
  firstParagraph,
  lede,
  priceFromLabel,
} from "@/lib/content";
import {
  JsonLd,
  breadcrumbLd,
  faqLd,
  procedureLd,
  pageMeta,
  trimTitle,
  clampDescription,
} from "@/lib/seo";
import worksRaw from "@/data/generated/works.json";

/**
 * На bwclinic.ru часть услуг доступна по двум адресам, и вторая копия
 * указывает canonical на основную. Переносим это решение как есть,
 * чтобы не плодить дубли в выдаче.
 */
function canonicalTarget(s: Service): string | undefined {
  const own = `/uslugi/${s.slug}`;
  const src = (s.canonical || "").replace("https://bwclinic.ru", "").replace(/\/$/, "");
  if (!src || src === own) return undefined;
  const slug = src.startsWith("/uslugi/") ? src.slice("/uslugi/".length) : "";
  return slug && serviceBySlug.has(slug) ? `/uslugi/${slug}` : undefined;
}

const allWorks = worksRaw as unknown as Work[];

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug.split("/") }));
}

type Props = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug.get(slug.join("/"));
  if (!s) return {};
  const title = trimTitle(s.title, displayTitle(s));
  return pageMeta({
    title,
    description: clampDescription(s.description, lede(s, 160)),
    path: `/uslugi/${s.slug}`,
    canonicalPath: canonicalTarget(s),
  });
}

/** Разделы, которые выводим отдельными блоками, а не общим потоком. */
const HANDLED = ["цены", "наши работы", "видео по направлению", "отзыв", "врачи"];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const path = slug.join("/");
  const s = serviceBySlug.get(path);
  if (!s) notFound();

  const title = displayTitle(s);
  const category = s.category ? categoryBySlug.get(s.category) : undefined;
  const works = allWorks.filter((w) => w.service === s.slug);
  const doctors = resolveDoctors(s.relatedDoctors);
  const related = resolveServices(s.relatedServices).filter((r) => r.slug !== s.slug).slice(0, 6);
  const preps = s.relatedPreparations
    .map((p) => preparationBySlug.get(p))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .slice(0, 8);
  const problems = s.relatedProblems
    .map((p) => problemBySlug.get(p))
    .filter((x): x is NonNullable<typeof x> => Boolean(x))
    .slice(0, 6);

  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "Услуги", path: "/uslugi" },
    ...(category && category.slug !== s.slug
      ? [{ name: category.title, path: `/uslugi/${category.slug}` }]
      : []),
    { name: title, path: `/uslugi/${s.slug}` },
  ];

  const price = priceFromLabel(s);

  return (
    <>
      <PageIntro
        eyebrow={category && category.slug !== s.slug ? category.title : "Услуга"}
        title={title}
        intro={firstParagraph(s) ?? lede(s, 240)}
        crumbs={crumbs}
        aside={
          <div className="rounded-[12px] border border-line bg-milk p-5">
            <p className="eyebrow text-plum">Стоимость</p>
            <p className="mt-2 font-display text-[1.625rem] leading-tight text-graphite">
              {price ?? "По консультации"}
            </p>
            <p className="mt-2 text-[0.8125rem] leading-snug text-graphite-soft">
              Точную стоимость врач называет после осмотра.
            </p>
            <BookingButton
              label="Записаться"
              service={title}
              className="mt-4 w-full"
            />
            <Link
              href="#price"
              className="mt-2 inline-flex min-h-[48px] w-full items-center justify-center rounded-[4px] border border-plum/45 px-4 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint"
            >
              Смотреть весь прайс
            </Link>
          </div>
        }
      />

      <section className="bg-milk py-12 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <ContentSections
                sections={s.sections}
                skipIntro
                skip={HANDLED}
              />

              <div className="mt-10">
                <MedicalNotice />
              </div>
            </div>

            <aside className="space-y-8 lg:sticky lg:top-24">
              {preps.length > 0 && (
                <div>
                  <h2 className="mb-3.5 font-display text-[1.25rem] text-graphite">Препараты в этой процедуре</h2>
                  <ul className="divide-y divide-line overflow-hidden rounded-[10px] border border-line bg-porcelain">
                    {preps.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/preparaty/${p.slug}`}
                          className="flex min-h-[48px] items-center px-4 py-3 text-[0.9375rem] leading-snug text-graphite transition-colors hover:bg-plum-tint hover:text-plum-deep"
                        >
                          {shortTitle(p)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {problems.length > 0 && (
                <div>
                  <h2 className="mb-3.5 font-display text-[1.25rem] text-graphite">С какими запросами приходят</h2>
                  <ul className="flex flex-wrap gap-2">
                    {problems.map((p) => (
                      <li key={p.slug}>
                        <Link
                          href={`/problem/${p.slug}`}
                          className="inline-flex min-h-[44px] items-center rounded-full border border-line bg-porcelain px-4 text-[0.875rem] leading-snug text-graphite transition-colors hover:border-plum/45 hover:bg-plum-tint hover:text-plum-deep"
                        >
                          {displayTitle(p)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </Container>
      </section>

      {s.prices.length > 0 && (
        <section id="price" className="scroll-mt-20 border-t border-line bg-porcelain py-12 sm:py-16">
          <Container>
            <SectionHeading eyebrow="Прайс" title={`Цены: ${title.toLowerCase()}`} />
            <PriceTable rows={s.prices} />
            <div className="mt-6">
              <BookingButton label="Уточнить стоимость и записаться" service={title} />
            </div>
          </Container>
        </section>
      )}

      {doctors.length > 0 && (
        <section className="border-t border-line bg-milk py-12 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Кто выполняет"
              title="Врачи по этому направлению"
              link={{ href: "/vrachi", label: "Все врачи" }}
            />
            <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
              {doctors.slice(0, 5).map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/vrachi/${d.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-[10px] border border-line bg-porcelain transition-colors hover:border-plum/45"
                  >
                    <Media
                      name={`doctors/${d.slug}`}
                      widths={[400, 800]}
                      ratio="3 / 4"
                      alt={`${d.name} — ${d.post}`}
                      sizes="(min-width: 1024px) 18vw, 50vw"
                      objectPosition="center 18%"
                    />
                    <div className="p-3.5">
                      <p className="text-[0.9375rem] font-semibold leading-snug text-graphite group-hover:text-plum-deep">
                        {d.name}
                      </p>
                      <p className="mt-1.5 text-[0.75rem] leading-snug text-graphite-soft">{d.post}</p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {works.length > 0 && (
        <section className="border-t border-line bg-porcelain py-12 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Результаты"
              title="Работы по этой процедуре"
              link={{ href: "/portfolio", label: "Всё портфолио" }}
            />
            <WorksGallery works={works} initialLimit={8} showFilters={false} />
          </Container>
        </section>
      )}

      {s.faq.length > 0 && (
        <section className="border-t border-line bg-milk py-12 sm:py-16">
          <Container className="max-w-[820px]">
            <SectionHeading eyebrow="Вопросы" title="Частые вопросы" />
            <FaqList items={s.faq} />
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-t border-line bg-porcelain py-12 sm:py-16">
          <Container>
            <SectionHeading eyebrow="Смотрите также" title="Другие процедуры" />
            <LinkCards
              columns={3}
              items={related.map((r) => ({
                href: `/uslugi/${r.slug}`,
                title: displayTitle(r),
                note: priceFromLabel(r),
              }))}
            />
          </Container>
        </section>
      )}

      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd data={procedureLd(title, clampDescription(s.description, lede(s, 160)), `/uslugi/${s.slug}`)} />
      <JsonLd data={faqLd(s.faq)} />
    </>
  );
}
