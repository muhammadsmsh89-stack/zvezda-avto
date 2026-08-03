import { company, navLinks, salons } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/50 text-accent">
                <span className="font-display text-xl font-semibold">N</span>
              </span>
              <span className="font-display text-lg font-semibold">{company.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {company.description}
            </p>
            <p className="mt-6 text-sm text-muted">
              {company.salonsCount} салонов в Москве · {company.yearsOfExperience} лет опыта · {company.hours}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Навигация
            </h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Контакты
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>
                <a href={`tel:${company.phone.href}`} className="hover:text-accent transition-colors">
                  {company.phone.value}
                </a>
              </li>
              <li>
                <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={company.telegramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  Telegram
                </a>
              </li>
              <li>{salons.length} салонов по Москве — см. раздел «Контакты»</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.fullName}. Все права защищены.</p>
          <a href="#privacy" className="hover:text-accent transition-colors">
            Политика конфиденциальности
          </a>
        </div>
      </div>
    </footer>
  );
}
