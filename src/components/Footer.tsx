import Link from "next/link";
import { company, navLinks } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border-strong text-accent">
                <span className="font-sans text-lg font-extrabold">З</span>
              </span>
              <span className="font-sans text-lg font-extrabold">{company.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {company.description}
            </p>
            <p className="mt-6 text-sm text-muted">
              {company.legalName}, ИНН {company.inn}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Навигация
            </h4>
            <ul className="mt-4 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/80 hover:text-accent transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Контакты
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-foreground/80">
              <li>{company.address}</li>
              <li>{company.hours}</li>
              {company.phones.map((p) => (
                <li key={p.href}>
                  <a href={`tel:${p.href}`} className="hover:text-accent transition-colors">
                    {p.value}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${company.email}`} className="hover:text-accent transition-colors">
                  {company.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.fullName}. Все права защищены.</p>
          <Link href="/privacy-policy" className="hover:text-accent transition-colors">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
}
