import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPreview } from "@/components/MapPreview";
import { BookingButton } from "@/components/BookingButton";
import { DoctorsRow } from "@/components/sections/DoctorsRow";
import { IconPhone, IconTelegram, IconClock, IconPin } from "@/components/ui/Icons";
import { branches, site, channels } from "@/lib/site";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export function generateStaticParams() {
  return branches.map((b) => ({ slug: b.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const b = branches.find((x) => x.slug === slug);
  if (!b) return {};
  return pageMeta({
    title: `Клиника ${b.name} — ${b.addressShort}`,
    description: `BeautyWay Clinic по адресу ${b.address}. Метро ${b.metro.join(", ")}. Ежедневно 10:00–22:00, запись по телефону ${site.phone}.`,
    path: `/contacts/${b.slug}`,
  });
}

export default async function BranchPage({ params }: Props) {
  const { slug } = await params;
  const b = branches.find((x) => x.slug === slug);
  if (!b) notFound();

  const other = branches.find((x) => x.slug !== b.slug);
  const crumbs = [
    { name: "Главная", path: "/" },
    { name: "Контакты", path: "/contacts" },
    { name: b.name, path: `/contacts/${b.slug}` },
  ];

  return (
    <>
      <PageIntro
        eyebrow="Филиал"
        title={`BeautyWay ${b.name}`}
        intro={`${b.address}. Метро ${b.metro.join(", ")} — в пешей доступности.`}
        crumbs={crumbs}
        aside={
          <div className="rounded-[12px] border border-line bg-milk p-5">
            <p className="flex items-start gap-2.5 text-[0.9375rem] leading-snug text-graphite">
              <IconPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-plum" />
              {b.address}
            </p>
            <p className="mt-2.5 flex items-center gap-2.5 text-[0.9375rem] text-graphite">
              <IconClock className="h-[18px] w-[18px] text-plum" />
              {b.hours}
            </p>
            <a
              href={site.phoneHref}
              className="mt-2.5 flex min-h-[48px] items-center gap-2.5 text-[1.0625rem] font-medium text-graphite transition-colors hover:text-plum-deep"
            >
              <IconPhone className="h-[18px] w-[18px] text-plum" />
              {site.phone}
            </a>
            <a
              href={channels.bookingTelegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-[48px] items-center gap-2.5 text-[0.9375rem] text-graphite transition-colors hover:text-plum-deep"
            >
              <IconTelegram className="h-[18px] w-[18px] text-plum" />
              Запись в Telegram
            </a>
            <BookingButton label={`Записаться на ${b.addressShort}`} branch={b.slug} className="mt-4 w-full" />
          </div>
        }
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <SectionHeading eyebrow="Маршрут" title="Как добраться" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
            <MapPreview branch={b} />
            <div className="rounded-[12px] border border-line bg-porcelain p-5">
              <h3 className="font-display text-[1.25rem] text-graphite">Ближайшее метро</h3>
              <ul className="mt-3 space-y-2">
                {b.metro.map((m) => (
                  <li key={m} className="flex items-center gap-2.5 text-[0.9375rem] text-graphite">
                    <IconPin className="h-[18px] w-[18px] shrink-0 text-plum" />м. {m}
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-line pt-4 text-[0.9375rem] leading-relaxed text-graphite-soft">
                Приём в филиале ведут врачи клиники по всем направлениям. Если удобнее второй адрес,
                выберите его при записи.
              </p>
              {other && (
                <Link
                  href={`/contacts/${other.slug}`}
                  className="mt-4 inline-flex min-h-[48px] items-center justify-center rounded-[4px] border border-plum/45 px-5 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint"
                >
                  Второй филиал: {other.addressShort}
                </Link>
              )}
            </div>
          </div>
        </Container>
      </section>

      <DoctorsRow limit={6} />

      <JsonLd data={breadcrumbLd(crumbs)} />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: `${site.name} — ${b.name}`,
          address: {
            "@type": "PostalAddress",
            streetAddress: b.address,
            addressLocality: "Москва",
            addressCountry: "RU",
          },
          geo: { "@type": "GeoCoordinates", latitude: b.geo.lat, longitude: b.geo.lng },
          telephone: site.phone,
          openingHours: "Mo-Su 10:00-22:00",
          url: `${b.slug}`,
        }}
      />
    </>
  );
}
