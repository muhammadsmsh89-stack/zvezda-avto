import type { Metadata } from "next";
import Image from "next/image";
import { withBase } from "@/lib/basePath";
import { site } from "@/lib/site";
import { spaces } from "@/data/clinic";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Контакты",
  description: `INUNICA clinic — ${site.address.full}. ${site.hours.short}. Телефон ${site.phone.display}, WhatsApp, Telegram.`,
  alternates: { canonical: "/kontakty/" },
};

export default function ContactsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Контакты"
        title="Как нас найти"
        lead={`${site.address.postal}. Бесплатная парковка у клиники, вход со стороны улицы.`}
      />

      <section className="pb-20 sm:pb-28">
        <Container wide>
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
            <dl className="space-y-10 text-[1.0625rem]">
              <div className="rule pt-4">
                <dt className="eyebrow">Адрес</dt>
                <dd className="mt-3 text-[1.125rem] text-ink">{site.address.full}</dd>
                <dd className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[1rem]">
                  <a
                    href={site.address.routeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                  >
                    Построить маршрут
                  </a>
                  <a
                    href={site.address.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-ink"
                  >
                    Открыть на карте
                  </a>
                </dd>
              </div>

              <div className="rule pt-4">
                <dt className="eyebrow">Время работы</dt>
                <dd className="mt-3 text-[1.125rem] text-ink">{site.hours.long}</dd>
                <dd className="mt-1 text-[1rem] text-ink-mute">{site.hours.note}</dd>
              </div>

              <div className="rule pt-4">
                <dt className="eyebrow">Связь</dt>
                <dd className="mt-3">
                  <a
                    href={site.phone.href}
                    className="text-[1.375rem] text-ink underline decoration-ink/20 underline-offset-[6px] hover:decoration-ink"
                  >
                    {site.phone.display}
                  </a>
                </dd>
                <dd className="mt-3 text-[1rem]">
                  <a
                    href={`mailto:${site.email}`}
                    className="text-ink-soft underline decoration-ink/20 underline-offset-4 hover:text-ink"
                  >
                    {site.email}
                  </a>
                </dd>
                <dd className="mt-5 flex flex-wrap gap-3">
                  {site.socials.map((s) => (
                    <a
                      key={s.href}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-[44px] items-center rounded-[2px] border border-line px-5 text-[1rem] text-ink-soft transition-colors duration-200 hover:border-ink hover:text-ink"
                    >
                      {s.label}
                    </a>
                  ))}
                </dd>
              </div>

              <div className="rule pt-4">
                <dt className="eyebrow">Отзывы</dt>
                <dd className="mt-3 text-[1rem] leading-[1.6] text-ink-soft">
                  Больше сотни отзывов пациентов и награда «Хорошее место» от Яндекс Карт.
                  Отзывы считает площадка, а не клиника — поэтому ссылки ведут туда.
                </dd>
                <dd className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[1rem]">
                  <a
                    href={site.reviews.yandex}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                  >
                    Яндекс Карты
                  </a>
                  <a
                    href={site.reviews.prodoctorov}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                  >
                    ПроДокторов
                  </a>
                </dd>
              </div>
            </dl>

            <Reveal>
              <div className="grid gap-4 sm:grid-cols-2">
                {spaces.slice(0, 4).map((s) => (
                  <div
                    key={s.image}
                    className="img-zoom relative aspect-[4/3] overflow-hidden bg-veil"
                  >
                    <Image
                      src={withBase(s.image)}
                      alt={s.alt}
                      fill
                      sizes="(min-width: 640px) 30vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Контакты", path: "/kontakty/" },
        ])}
      />
    </>
  );
}
