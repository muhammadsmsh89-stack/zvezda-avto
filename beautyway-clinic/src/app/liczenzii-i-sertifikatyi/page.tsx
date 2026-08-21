import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Media } from "@/components/ui/Media";
import { ContentSections } from "@/components/ContentSections";
import { staticPages } from "@/lib/content";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";
import { site, VERIFIED_ON_HUMAN } from "@/lib/site";
import { withBase } from "@/lib/basePath";
import licensesRaw from "@/data/generated/licenses.json";

const licenses = licensesRaw as unknown as { media: string; alt: string }[];

export const metadata: Metadata = pageMeta({
  title: "Лицензии и сертификаты",
  description: `Медицинская лицензия ${site.license} и приложения, санитарно-эпидемиологическое заключение и сертификаты BeautyWay Clinic.`,
  path: "/liczenzii-i-sertifikatyi",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Лицензии и сертификаты", path: "/liczenzii-i-sertifikatyi" },
];

export default function LicensesPage() {
  const page = staticPages["/liczenzii-i-sertifikatyi"];
  return (
    <>
      <PageIntro
        eyebrow="Документы"
        title="Лицензии и сертификаты"
        intro={`BeautyWay Clinic — медицинская организация ${site.legalName}. Лицензия на осуществление медицинской деятельности ${site.license}.`}
        crumbs={crumbs}
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <SectionHeading
            eyebrow="Скан-копии"
            title="Документы клиники"
            intro="Изображения перенесены с официального сайта клиники. Нажмите, чтобы открыть в полном размере."
          />
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {licenses.map((l, i) => (
              <li key={l.media} className="overflow-hidden rounded-[10px] border border-line bg-porcelain">
                <a
                  href={withBase(`/media/${l.media}-900.webp`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-opacity hover:opacity-90"
                >
                  <Media
                    name={l.media}
                    widths={[300, 900]}
                    ratio="3 / 4"
                    alt={l.alt || `Документ клиники BeautyWay Clinic №${i + 1}`}
                    sizes="(min-width: 1024px) 18vw, 50vw"
                    fit="contain"
                    className="bg-white"
                  />
                </a>
              </li>
            ))}
          </ul>

          {page && page.sections.length > 0 && (
            <div className="mt-10 max-w-[820px]">
              <ContentSections sections={page.sections} />
            </div>
          )}

          <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 rounded-[12px] border border-line bg-porcelain p-6 text-[0.9375rem] sm:grid-cols-2">
            <div>
              <dt className="text-graphite-soft">Организация</dt>
              <dd className="font-medium text-graphite">{site.legalName}</dd>
            </div>
            <div>
              <dt className="text-graphite-soft">ИНН / КПП</dt>
              <dd className="font-medium text-graphite">
                {site.inn} / {site.kpp}
              </dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-graphite-soft">{site.licenseTitle}</dt>
              <dd className="font-medium text-graphite">{site.license}</dd>
            </div>
          </dl>

          <p className="mt-5 text-[0.8125rem] text-graphite-soft">Данные сверены {VERIFIED_ON_HUMAN}.</p>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
