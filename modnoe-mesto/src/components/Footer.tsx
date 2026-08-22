import { Container } from "./ui/Container";
import { Wordmark } from "./ui/Wordmark";
import { contacts } from "@/lib/contacts";

const legalLinks = [
  { href: "https://modnoe-mesto.com/politika-konfidentsialnosti/", label: "Политика конфиденциальности" },
  { href: contacts.sourceSite, label: "Официальный сайт компании" },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-deep pb-[max(40px,env(safe-area-inset-bottom))] pt-12 lg:pb-12">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">
          <div>
            <Wordmark className="text-[14px]" />
            <p className="mt-3 max-w-[34ch] text-small text-fg-faint">
              Детейлинг-центр в Москве: защита, детейлинг и дооснащение
              автомобилей.
            </p>
          </div>

          <nav aria-label="Правовая информация">
            <ul className="space-y-1">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-[44px] items-center text-small text-fg-dim transition-colors hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-micro text-fg-faint">
          <p>
            {contacts.legal.name} · ИНН {contacts.legal.inn} · ОГРН{" "}
            {contacts.legal.ogrn}
          </p>
          <p className="mt-1.5">
            Сайт не является публичной офертой. Указанные цены — минимальные и
            зависят от класса автомобиля и объёма работ.
          </p>
          <p className="mt-3 text-fg-faint/80">
            Концепт-редизайн сайта. Фотографии и данные компании взяты с
            официального сайта{" "}
            <a
              href={contacts.sourceSite}
              target="_blank"
              rel="noreferrer noopener"
              className="underline underline-offset-4 hover:text-fg-dim"
            >
              modnoe-mesto.com
            </a>
            .
          </p>
        </div>
      </Container>
    </footer>
  );
}
