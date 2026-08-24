import type { Metadata } from "next";
import { site } from "@/lib/site";
import { clinics } from "@/data/clinics";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Адреса, телефоны и часы работы трёх клиник «Этель» в Брянске.",
  alternates: { canonical: "/contacts/" },
};

export default function ContactsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Контакты"
        title="Как до нас добраться"
        lead={`${site.email} · ${site.hours.short}`}
      />

      <section className="pb-24">
        <Container wide>
          <ul className="grid gap-10 border-t border-line pt-12 lg:grid-cols-3">
            {clinics.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 90} className="rule pt-6">
                <p className="eyebrow">{c.district}</p>
                <h2 className="font-display mt-3 text-[1.5rem] text-ink">{c.address}</h2>
                <a href={c.phone.href} className="mt-3 block text-[1.0625rem] text-ink hover:text-accent">
                  {c.phone.display}
                </a>
                <p className="mt-2 text-[0.9375rem] text-ink-soft">{c.hours}</p>
                <Button href={c.mapUrl} variant="ghost" className="mt-4">
                  На карте →
                </Button>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className="mt-16 border-t border-line pt-8">
            <p className="eyebrow">Онлайн</p>
            <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
              {site.socials.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[1.0625rem] text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Контакты", path: "/contacts/" },
        ])}
      />
    </>
  );
}
