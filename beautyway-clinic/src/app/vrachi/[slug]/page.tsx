import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { MedicalNotice } from "@/components/ui/MedicalNotice";
import { LinkCards } from "@/components/ui/LinkCards";
import { ContentSections } from "@/components/ContentSections";
import { BookingButton } from "@/components/BookingButton";
import { VideoReviews, type VideoReview } from "@/components/VideoReviews";
import { doctors, doctorBySlug, resolveServices, displayTitle, priceFromLabel } from "@/lib/content";
import { JsonLd, breadcrumbLd, physicianLd, pageMeta, trimTitle, clampDescription } from "@/lib/seo";
import { branches, site } from "@/lib/site";
import videoReviewsRaw from "@/data/generated/video-reviews.json";

const allVideos = videoReviewsRaw as unknown as VideoReview[];

export function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = doctorBySlug.get(slug);
  if (!d) return {};
  return pageMeta({
    title: trimTitle(d.title, `${d.name} — ${d.post}`),
    // Исходный сайт даёт одинаковое описание врачам одной специальности,
    // поэтому собираем уникальное из полей конкретной карточки.
    description: clampDescription(
      null,
      [
        `${d.name} — ${d.post ?? "врач BeautyWay Clinic"}.`,
        d.experienceText ? `${d.experienceText}.` : "",
        "Приём в клинике BeautyWay на Страстном бульваре и Мясницкой, ежедневно 10:00–22:00.",
      ]
        .filter(Boolean)
        .join(" "),
    ),
    path: `/vrachi/${d.slug}`,
  });
}

export default async function DoctorPage({ params }: Props) {
  const { slug } = await params;
  const d = doctorBySlug.get(slug);
  if (!d) notFound();

  const name = d.name ?? d.slug;
  const services = resolveServices(d.relatedServices).slice(0, 9);
  const videos = allVideos.filter((v) => v.doctor === d.slug);
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "Врачи", path: "/vrachi" },
    { name: name, path: `/vrachi/${d.slug}` },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Врач клиники"
        title={name}
        crumbs={crumbs}
        aside={
          <Media
            name={`doctors/${d.slug}`}
            widths={[400, 800]}
            ratio="3 / 4"
            alt={`${name} — ${d.post}`}
            sizes="(min-width: 1024px) 320px, 100vw"
            priority
            className="rounded-[12px]"
            objectPosition="center 18%"
          />
        }
      >
        <p className="mt-3 text-[1.0625rem] leading-relaxed text-graphite-soft">{d.post}</p>

        <dl className="mt-6 grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-3">
          {d.experienceText && (
            <div className="bg-porcelain px-4 py-3.5">
              <dt className="eyebrow text-graphite-soft">Стаж работы</dt>
              <dd className="mt-1 text-[0.9375rem] font-medium text-graphite">
                {d.experienceText.replace("Стаж работы: ", "")}
              </dd>
            </div>
          )}
          {d.ratingValue && d.ratingCount && (
            <div className="bg-porcelain px-4 py-3.5">
              <dt className="eyebrow text-graphite-soft">Оценка пациентов</dt>
              <dd className="mt-1 text-[0.9375rem] font-medium text-graphite">
                {d.ratingValue.toLocaleString("ru-RU")} · {d.ratingCount} оценок
              </dd>
            </div>
          )}
          <div className="bg-porcelain px-4 py-3.5">
            <dt className="eyebrow text-graphite-soft">Приём</dt>
            <dd className="mt-1 text-[0.9375rem] font-medium text-graphite">{site.hoursShort}</dd>
          </div>
        </dl>

        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <BookingButton label={`Записаться к врачу`} doctor={name} />
          <Link
            href="/contacts"
            className="inline-flex min-h-[52px] items-center justify-center rounded-[4px] border border-plum/45 px-6 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint"
          >
            Адреса клиник
          </Link>
        </div>
        <p className="mt-3 text-[0.8125rem] leading-snug text-graphite-soft">
          Приём в филиалах: {branches.map((b) => b.addressShort).join(" · ")}. Уточните удобный адрес при записи.
        </p>
      </PageIntro>

      <section className="bg-milk py-12 sm:py-16">
        <Container className="max-w-[840px]">
          <ContentSections sections={d.sections} />
          <div className="mt-10">
            <MedicalNotice extra="Сведения об образовании, квалификации и стаже перенесены с карточки врача на официальном сайте клиники без изменений." />
          </div>
        </Container>
      </section>

      {services.length > 0 && (
        <section className="border-t border-line bg-porcelain py-12 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Направления"
              title="Процедуры, которые выполняет врач"
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

      {videos.length > 0 && (
        <section className="border-t border-line bg-milk py-12 sm:py-16">
          <Container>
            <SectionHeading
              eyebrow="Пациенты о враче"
              title="Видеоотзывы"
              intro="Видео загружается только после нажатия."
            />
            <VideoReviews items={videos} />
          </Container>
        </section>
      )}

      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd data={physicianLd({ name, post: d.post, path: `/vrachi/${d.slug}` })} />
    </>
  );
}
