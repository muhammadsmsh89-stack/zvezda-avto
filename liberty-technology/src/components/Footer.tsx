import { company } from "@/data/company";
import { withBase } from "@/lib/basePath";
import { IconInstagram, IconPin } from "@/components/icons";

export function Footer() {
  return (
    <footer className="border-t border-line-dark bg-carbon pb-24 pt-14 text-paper/70 md:pb-14">
      <div className="container-wide flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-xl font-bold tracking-[0.02em] text-paper">LIBERTY TECHNOLOGY</p>
          <p className="font-mono-tag mt-1 text-[11px] uppercase tracking-[0.14em] text-paper/45">
            {company.tagline}
          </p>
          <p className="mt-4 flex max-w-xs items-start gap-2 text-sm leading-relaxed">
            <IconPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {company.address.line}, {company.address.city}
          </p>
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <a href={company.phone.href} className="transition-colors hover:text-paper">
            {company.phone.display}
          </a>
          <a
            href={`https://wa.me/${company.whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            WhatsApp
          </a>
          <a href={company.email.href} className="transition-colors hover:text-paper">
            {company.email.display}
          </a>
          <a
            href={company.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-paper"
          >
            <IconInstagram className="h-3.5 w-3.5" />
            {company.instagram.handle}
          </a>
          <a
            href={company.yandexMaps.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            Яндекс Карты
          </a>
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <a href={withBase("/privacy-policy/")} className="transition-colors hover:text-paper">
            Политика конфиденциальности
          </a>
          <a href={withBase("/personal-data-consent/")} className="transition-colors hover:text-paper">
            Согласие на обработку персональных данных
          </a>
        </div>
      </div>

      <div className="container-wide mt-10 flex flex-col gap-2 border-t border-line-dark pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Liberty Technology. Детейлинг и восстановление автомобилей в Махачкале.</p>
        <p>Концепт цифрового представительства Liberty Technology.</p>
      </div>
    </footer>
  );
}
