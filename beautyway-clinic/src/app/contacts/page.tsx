import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPreview } from "@/components/MapPreview";
import { BookingButton } from "@/components/BookingButton";
import { IconPhone, IconTelegram, IconClock, IconPin, IconArrow } from "@/components/ui/Icons";
import { branches, site, channels } from "@/lib/site";
import { JsonLd, breadcrumbLd, pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Контакты и адреса клиник",
  description:
    "BeautyWay Clinic: Страстной бульвар, 4 и ул. Мясницкая, 24/7 с3. Ежедневно 10:00–22:00, телефон +7 (499) 393-36-16, запись в Telegram.",
  path: "/contacts",
});

const crumbs = [
  { name: "Главная", path: "/" },
  { name: "Контакты", path: "/contacts" },
];

export default function ContactsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Как нас найти"
        title="Контакты"
        intro="Две клиники в центре Москвы, обе — в пешей доступности от метро. Приём ежедневно с 10:00 до 22:00."
        crumbs={crumbs}
        aside={
          <div className="rounded-[12px] border border-line bg-milk p-5">
            <a
              href={site.phoneHref}
              className="inline-flex min-h-[48px] items-center gap-2.5 font-display text-[1.375rem] text-graphite transition-colors hover:text-plum-deep"
            >
              <IconPhone className="h-5 w-5 text-plum" />
              {site.phone}
            </a>
            <p className="mt-1.5 flex items-center gap-2.5 text-[0.9375rem] text-graphite-soft">
              <IconClock className="h-[18px] w-[18px] text-plum" />
              {site.hours}
            </p>
            <div className="mt-4 space-y-2">
              <a
                href={channels.bookingTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center gap-2.5 text-[0.9375rem] text-graphite transition-colors hover:text-plum-deep"
              >
                <IconTelegram className="h-[18px] w-[18px] text-plum" />
                Запись в Telegram — {channels.bookingTelegramHandle}
              </a>
              <a
                href={channels.channelTelegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[48px] items-center gap-2.5 text-[0.9375rem] text-graphite transition-colors hover:text-plum-deep"
              >
                <IconTelegram className="h-[18px] w-[18px] text-plum" />
                Канал клиники — {channels.channelTelegramHandle}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex min-h-[48px] items-center gap-2.5 text-[0.9375rem] text-graphite transition-colors hover:text-plum-deep"
              >
                <span className="w-[18px] text-center text-plum" aria-hidden>@</span>
                {site.email}
              </a>
            </div>
            <BookingButton label="Записаться" className="mt-4 w-full" />
          </div>
        }
      />

      <section className="bg-milk py-10 sm:py-14">
        <Container>
          <SectionHeading eyebrow="Филиалы" title="Два адреса в центре Москвы" />
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {branches.map((b) => (
              <div key={b.slug}>
                <h3 className="font-display text-[1.375rem] leading-snug text-graphite">{b.name}</h3>
                <p className="mt-2 flex items-start gap-2.5 text-[0.9375rem] leading-snug text-graphite">
                  <IconPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-plum" />
                  {b.address}
                </p>
                <p className="mt-1.5 pl-[28px] text-[0.875rem] text-graphite-soft">м. {b.metro.join(", ")}</p>
                <div className="mt-4">
                  <MapPreview branch={b} />
                </div>
                <div className="mt-3 flex flex-col gap-2 sm:flex-row">
                  <BookingButton label="Записаться в этот филиал" branch={b.slug} className="flex-1" />
                  <Link
                    href={`/contacts/${b.slug}`}
                    className="group inline-flex min-h-[52px] flex-1 items-center justify-center gap-2 rounded-[4px] border border-plum/45 px-4 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:bg-plum-tint"
                  >
                    Как добраться
                    <IconArrow className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-[12px] border border-line bg-porcelain p-6">
            <h2 className="font-display text-[1.375rem] text-graphite">Юридическая информация</h2>
            <dl className="mt-4 grid grid-cols-1 gap-x-8 gap-y-3 text-[0.9375rem] sm:grid-cols-2">
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
                <dd className="font-medium text-graphite">
                  <Link href="/liczenzii-i-sertifikatyi" className="underline underline-offset-2 hover:text-plum-deep">
                    {site.license}
                  </Link>
                </dd>
              </div>
            </dl>
            <p className="mt-4 text-[0.875rem] text-graphite-soft">
              <Link href="/vyishestoyashhie-organizaczii" className="underline underline-offset-2 hover:text-plum-deep">
                Контакты органов исполнительной власти в сфере охраны здоровья граждан
              </Link>
            </p>
          </div>
        </Container>
      </section>

      <JsonLd data={breadcrumbLd(crumbs)} />
    </>
  );
}
