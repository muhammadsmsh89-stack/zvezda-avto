import { company } from "@/data/company";
import { withBase } from "@/lib/basePath";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink-2 pb-24 pt-14 text-paper/70 md:pb-14">
      <div className="container-wide flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-xl font-semibold text-paper">АЛЬТАИР</p>
          <p className="font-mono-tag mt-1 text-[11px] uppercase text-paper/50">{company.tagline}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            {company.address.line}, {company.city}
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
            WhatsApp {company.whatsapp.display}
          </a>
          <a
            href={company.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-paper"
          >
            {company.instagram.handle}
          </a>
        </div>

        <div className="flex flex-col gap-1 text-sm">
          <a href={withBase("/privacy/")} className="transition-colors hover:text-paper">
            Политика конфиденциальности
          </a>
          <a href={withBase("/consent/")} className="transition-colors hover:text-paper">
            Согласие на обработку данных
          </a>
        </div>
      </div>

      <div className="container-wide mt-10 flex flex-col gap-2 border-t border-paper/10 pt-6 text-xs text-paper/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Альтаир. Мебель на заказ в Махачкале.</p>
        <p>Сайт — независимый концепт, не является официальным ресурсом компании до подтверждения владельцем.</p>
      </div>
    </footer>
  );
}
