import Link from "next/link";
import { footerNav, site } from "@/lib/site";
import { Container } from "./ui/Container";
import { Wordmark } from "./ui/Wordmark";

/**
 * Подвал несёт то, что обязано быть на сайте медицинской организации:
 * лицензия, реквизиты юрлица и оговорка о противопоказаниях. На старом сайте
 * всё это было, но тонули в общем потоке — здесь у них отдельный ярус.
 */
export function Footer() {
  return (
    <footer className="bg-plum text-shell">
      <Container wide className="py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,2fr)]">
          <div>
            <Wordmark invert className="text-[1.0625rem]" />

            <p className="mt-6 max-w-[34ch] text-[1rem] leading-[1.7] text-shell/70">
              {site.tagline} в {site.city}. Ранее — «{site.formerName}».
            </p>

            <div className="mt-8 space-y-1 text-[1rem]">
              <a
                href={site.phone.href}
                className="block text-shell underline decoration-shell/30 underline-offset-4 transition-colors duration-200 hover:decoration-shell"
              >
                {site.phone.display}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block text-shell/75 transition-colors duration-200 hover:text-shell"
              >
                {site.email}
              </a>
              <p className="pt-3 text-shell/70">{site.address.full}</p>
              <p className="text-shell/70">{site.hours.short}</p>
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[1rem]">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-shell/70 underline decoration-shell/25 underline-offset-4 transition-colors duration-200 hover:text-shell"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Навигация в подвале" className="grid gap-10 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className="eyebrow !text-shell/50">{group.title}</p>
                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[1rem] text-shell/75 transition-colors duration-200 hover:text-shell"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="rule-dark mt-14 pt-8">
          <p className="max-w-[80ch] text-[0.9375rem] leading-[1.7] text-shell/60">
            {site.legalNotice}
          </p>
          <p className="mt-3 max-w-[80ch] text-[0.9375rem] leading-[1.7] text-shell/60">
            {site.offerNotice}
          </p>

          <dl className="mt-8 grid gap-x-10 gap-y-2 text-[0.9375rem] text-shell/60 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="inline text-shell/45">Юрлицо: </dt>
              <dd className="inline">{site.legalName}</dd>
            </div>
            <div>
              <dt className="inline text-shell/45">ИНН: </dt>
              <dd className="inline tabular-nums">{site.requisites.inn}</dd>
            </div>
            <div>
              <dt className="inline text-shell/45">ОГРН: </dt>
              <dd className="inline tabular-nums">{site.requisites.ogrn}</dd>
            </div>
            <div>
              <dt className="inline text-shell/45">Лицензия: </dt>
              <dd className="inline">
                {site.license.number} от {site.license.date}
              </dd>
            </div>
          </dl>

          <p className="mt-8 text-[0.9375rem] text-shell/45">
            © {new Date().getFullYear()} {site.legalName}. Все права защищены.
          </p>
        </div>
      </Container>
    </footer>
  );
}
