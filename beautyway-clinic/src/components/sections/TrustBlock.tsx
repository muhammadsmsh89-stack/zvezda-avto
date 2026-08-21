import Link from "next/link";
import { Container } from "../ui/Container";
import { SectionHeading } from "../ui/SectionHeading";
import { Media } from "../ui/Media";
import { IconShield, IconDevice, IconDoc, IconCheck, IconArrow } from "../ui/Icons";
import { site, ratings, VERIFIED_ON_HUMAN } from "@/lib/site";
import licenses from "@/data/generated/licenses.json";

const PILLARS = [
  {
    icon: IconShield,
    title: "Медицинская лицензия",
    body: `Клиника работает по лицензии ${site.license}. Скан-копии лицензии и приложений открыты на сайте.`,
    href: "/liczenzii-i-sertifikatyi",
    linkLabel: "Смотреть документы",
  },
  {
    icon: IconDevice,
    title: "Оригинальное оборудование",
    body: "Аппараты закуплены у официальных представителей и имеют регистрацию Росздравнадзора. Реплики и дешёвые аналоги не используются.",
    href: "/oborudovanie",
    linkLabel: "Парк аппаратов",
  },
  {
    icon: IconDoc,
    title: "Сертифицированные препараты",
    body: "В работе — филлеры, ботулотоксины и коктейли зарегистрированных брендов. Состав и производитель указаны на странице каждого препарата.",
    href: "/preparaty",
    linkLabel: "Список препаратов",
  },
  {
    icon: IconCheck,
    title: "Протоколы безопасности",
    body: "Одноразовый инструмент, стерилизация, сбор анамнеза до процедуры и письменные рекомендации после неё.",
    href: "/pacientam",
    linkLabel: "Памятка пациенту",
  },
];

export function TrustBlock() {
  return (
    <section className="on-ink border-b border-ink-line bg-ink py-14 text-milk sm:py-20">
      <Container>
        <SectionHeading
          index="05"
          eyebrow="Почему нам можно доверять"
          title="Что стоит за словом «клиника»"
          tone="ink"
          intro="Клиника работает по медицинской лицензии, использует зарегистрированное оборудование и ведёт протоколы безопасности."
        />

        <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[12px] border border-ink-line bg-ink-line sm:grid-cols-2">
          {PILLARS.map(({ icon: Icon, title, body, href, linkLabel }) => (
            <li key={title} className="flex flex-col gap-3 bg-ink p-5 sm:p-6">
              <Icon className="h-6 w-6 text-orchid-soft" />
              <h3 className="font-display text-[1.25rem] leading-snug text-milk">{title}</h3>
              <p className="flex-1 text-[0.9375rem] leading-relaxed text-lilac">{body}</p>
              <Link
                href={href}
                className="group inline-flex min-h-[44px] items-center gap-2 text-[0.875rem] font-medium text-orchid-soft"
              >
                {linkLabel}
                <IconArrow className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <p className="eyebrow mb-4 text-orchid-soft">Документы клиники</p>
            <ul className="grid grid-cols-3 gap-2.5 sm:grid-cols-4">
              {licenses.slice(0, 4).map((l) => (
                <li key={l.media} className="overflow-hidden rounded-[8px] border border-ink-line bg-porcelain">
                  <Media
                    name={l.media}
                    widths={[300, 900]}
                    ratio="3 / 4"
                    alt={l.alt || "Документ клиники BeautyWay Clinic"}
                    sizes="120px"
                    fit="contain"
                    className="bg-porcelain"
                  />
                </li>
              ))}
            </ul>
            <Link
              href="/liczenzii-i-sertifikatyi"
              className="group mt-4 inline-flex min-h-[44px] items-center gap-2 text-[0.875rem] font-medium text-orchid-soft"
            >
              Все лицензии и сертификаты
              <IconArrow className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          <div>
            <p className="eyebrow mb-4 text-orchid-soft">Оценки на внешних площадках</p>
            <ul className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-ink-line bg-ink-line sm:grid-cols-2">
              {ratings.map((r) => (
                <li key={r.platform} className="bg-ink">
                  <a
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="flex min-h-[56px] items-center justify-between gap-3 px-4 py-3 transition-colors hover:bg-ink-raised"
                  >
                    <span className="text-[0.875rem] text-lilac">{r.platform}</span>
                    <span className="font-display text-[1.125rem] text-milk">{r.value}</span>
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-3 text-[0.8125rem] leading-relaxed text-lilac/80">
              Каждая оценка принадлежит своей площадке и открывается по прямой ссылке. Мы не сводим их
              в один общий балл. Значения сверены {VERIFIED_ON_HUMAN}.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
