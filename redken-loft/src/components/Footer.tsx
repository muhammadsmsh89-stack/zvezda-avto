import { company, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-editorial text-2xl text-ink">Redken Loft</span>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {company.positioning}
            </p>
            <p className="mt-6 text-sm text-muted">
              {company.city} · {company.address} · {company.hours}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Навигация</h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-foreground/80 transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">Контакты</h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>
                <a href={`tel:${company.phone.href}`} className="transition-colors hover:text-accent">
                  {company.phone.value}
                </a>
              </li>
              <li>
                <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={company.instagram.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  Instagram {company.instagram.handle}
                </a>
              </li>
              <li>
                <a href={company.vk.url} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">
                  VK
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Redken Loft, {company.city}.</p>
          {/* Юридические реквизиты (ИНН/ОГРНИП) добавляются после подтверждения владельцем — см. legal в content.ts */}
          <p>Реквизиты юридического лица уточняются перед публикацией.</p>
        </div>
      </div>
    </footer>
  );
}
