import Link from "next/link";
import { Wordmark } from "./ui/Wordmark";
import { Container } from "./ui/Container";
import { site, clinics, footerNav } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-graphite text-shell">
      <Container wide className="py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Wordmark dark />
            <p className="mt-5 max-w-[26rem] text-[0.9375rem] leading-[1.7] text-shell/60">
              {site.fullName}. {site.tagline}. Три клиники в Брянске.
            </p>
            <div className="mt-7 space-y-1.5">
              <a href={site.phone.href} className="block text-[1.0625rem] tabular-nums text-shell hover:text-accent-lift">
                {site.phone.display}
              </a>
              <a href={`mailto:${site.email}`} className="block text-[0.9375rem] text-shell/60 hover:text-accent-lift">
                {site.email}
              </a>
              <p className="pt-1 text-[0.875rem] text-shell/45">{site.hours.short}</p>
            </div>
            {site.socials.length > 0 && (
              <div className="mt-6 flex gap-5">
                {site.socials.map((s) => (
                  <a key={s.href} href={s.href} className="text-[0.875rem] text-shell/60 hover:text-accent-lift">
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerNav.map((col) => (
              <div key={col.title}>
                <h3 className="eyebrow-mute text-shell/45">{col.title}</h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[0.9375rem] text-shell/75 hover:text-accent-lift">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Маршрут: три клиники как узлы одной линии — сигнатурный мотив в футере. */}
        <div className="route-line mt-16 border-t border-shell/12 pt-10">
          <div className="grid gap-8 sm:grid-cols-3">
            {clinics.map((c) => (
              <Link key={c.slug} href={`/clinics/${c.slug}/`} className="group flex items-start gap-3">
                <span className="route-node mt-2 shrink-0" aria-hidden />
                <span>
                  <span className="block text-[0.9375rem] text-shell group-hover:text-accent-lift">{c.name}</span>
                  <span className="mt-0.5 block text-[0.8125rem] text-shell/50">{c.addressShort}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-shell/12 pt-8 text-[0.8125rem] text-shell/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            {site.legalName} · ИНН {site.requisites.inn} · ОГРН {site.requisites.ogrn}
          </p>
          <p>© {new Date().getFullYear()} Этель. {site.legalNotice}</p>
        </div>
      </Container>
    </footer>
  );
}
