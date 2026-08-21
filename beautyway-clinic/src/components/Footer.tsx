import Link from "next/link";
import { Wordmark } from "./Wordmark";
import { branches, channels, site, DEMO_NOTICE, MEDICAL_DISCLAIMER, VERIFIED_ON_HUMAN } from "@/lib/site";
import { IconPhone, IconTelegram, IconPin, IconClock } from "./ui/Icons";

const COLS = [
  {
    title: "Клиника",
    links: [
      { href: "/about-us", label: "О клинике" },
      { href: "/vrachi", label: "Врачи" },
      { href: "/oborudovanie", label: "Оборудование" },
      { href: "/preparaty", label: "Препараты" },
      { href: "/liczenzii-i-sertifikatyi", label: "Лицензии и сертификаты" },
      { href: "/contacts", label: "Контакты" },
    ],
  },
  {
    title: "Пациентам",
    links: [
      { href: "/uslugi", label: "Каталог услуг" },
      { href: "/problem", label: "Проблемы и зоны" },
      { href: "/price", label: "Цены" },
      { href: "/promo", label: "Акции" },
      { href: "/abonementy", label: "Абонементы" },
      { href: "/pacientam", label: "Информация пациентам" },
    ],
  },
  {
    title: "Материалы",
    links: [
      { href: "/portfolio", label: "Работы до и после" },
      { href: "/reviews", label: "Отзывы" },
      { href: "/video", label: "Видео процедур" },
      { href: "/blog", label: "Блог" },
      { href: "/sposobyi-oplatyi", label: "Способы оплаты" },
      { href: "/vyishestoyashhie-organizaczii", label: "Вышестоящие организации" },
    ],
  },
];

export function Footer() {
  return (
    <footer id="site-footer" className="on-ink bg-ink text-lilac">
      <div className="safe-x mx-auto max-w-[1320px] px-5 pt-14 pb-8 sm:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,2fr)]">
          <div>
            <Wordmark tone="ink" />
            <p className="mt-4 max-w-[38ch] text-[0.9375rem] leading-relaxed text-lilac">
              {site.tagline} в центре Москвы. Две клиники, {site.hoursShort.toLowerCase()}.
            </p>

            <div className="mt-6 space-y-2.5">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-[44px] items-center gap-2.5 text-[1.125rem] font-medium text-milk transition-colors hover:text-orchid-soft"
              >
                <IconPhone className="h-[18px] w-[18px] text-orchid-soft" />
                {site.phone}
              </a>
              <div className="flex flex-col gap-2 text-[0.9375rem]">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex min-h-[44px] items-center gap-2.5 transition-colors hover:text-orchid-soft"
                >
                  <span className="w-[18px] text-center text-orchid-soft" aria-hidden>@</span>
                  {site.email}
                </a>
                <a
                  href={channels.bookingTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2.5 transition-colors hover:text-orchid-soft"
                >
                  <IconTelegram className="h-[18px] w-[18px] text-orchid-soft" />
                  Запись в Telegram — {channels.bookingTelegramHandle}
                </a>
                <a
                  href={channels.channelTelegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-2.5 transition-colors hover:text-orchid-soft"
                >
                  <IconTelegram className="h-[18px] w-[18px] text-orchid-soft" />
                  Канал клиники — {channels.channelTelegramHandle}
                </a>
              </div>
            </div>

            <div className="mt-6 space-y-4 border-t border-ink-line pt-5">
              {branches.map((b) => (
                <div key={b.slug}>
                  <Link
                    href={`/contacts/${b.slug}`}
                    className="inline-flex items-start gap-2.5 text-[0.9375rem] text-milk transition-colors hover:text-orchid-soft"
                  >
                    <IconPin className="mt-0.5 h-[18px] w-[18px] shrink-0 text-orchid-soft" />
                    <span>
                      {b.address}
                      <span className="mt-0.5 block text-[0.8125rem] text-lilac">
                        м. {b.metro.join(", ")}
                      </span>
                    </span>
                  </Link>
                </div>
              ))}
              <p className="flex items-center gap-2.5 text-[0.9375rem]">
                <IconClock className="h-[18px] w-[18px] shrink-0 text-orchid-soft" />
                {site.hours}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            {COLS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="eyebrow mb-3.5 text-orchid-soft">{col.title}</p>
                <ul className="space-y-0.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="flex min-h-[44px] items-center text-[0.9375rem] leading-snug text-lilac transition-colors hover:text-milk"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-ink-line pt-7">
          <div className="grid grid-cols-1 gap-6 text-[0.8125rem] leading-relaxed text-lilac/85 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <span className="block text-milk">{site.legalName}</span>
              ИНН {site.inn} · КПП {site.kpp}
            </div>
            <div>
              <span className="block text-milk">{site.licenseTitle}</span>
              <Link
                href="/liczenzii-i-sertifikatyi"
                className="inline-flex min-h-[44px] items-center underline underline-offset-2 hover:text-milk"
              >
                {site.license}
              </Link>
            </div>
            <nav aria-label="Правовые документы">
              <ul>
                <li>
                  <Link
                    href="/politika-konfidencialnosti"
                    className="flex min-h-[44px] items-center underline underline-offset-2 hover:text-milk"
                  >
                    Политика конфиденциальности
                  </Link>
                </li>
                <li>
                  <Link
                    href="/soglasie-na-obrabotku-personalnykh-dannykh"
                    className="flex min-h-[44px] items-center underline underline-offset-2 hover:text-milk"
                  >
                    Согласие на обработку персональных данных
                  </Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Надзор и оплата">
              <ul>
                <li>
                  <Link
                    href="/vyishestoyashhie-organizaczii"
                    className="flex min-h-[44px] items-center underline underline-offset-2 hover:text-milk"
                  >
                    Контакты органов в сфере охраны здоровья
                  </Link>
                </li>
                <li>
                  <Link
                    href="/sposobyi-oplatyi"
                    className="flex min-h-[44px] items-center underline underline-offset-2 hover:text-milk"
                  >
                    Способы оплаты
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <p className="mt-7 border-t border-ink-line pt-5 text-[0.8125rem] leading-relaxed text-lilac/80">
            {MEDICAL_DISCLAIMER} Информация на сайте не является публичной офертой и не заменяет очную
            консультацию врача. Цены и условия акций действительны на {VERIFIED_ON_HUMAN} и могут измениться.
          </p>
          <p className="mt-3 text-[0.8125rem] leading-relaxed text-orchid-soft/90">{DEMO_NOTICE}</p>
        </div>
      </div>
    </footer>
  );
}
