import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { PageIntro } from "@/components/ui/PageIntro";
import { masters } from "@/lib/masters";

export const metadata: Metadata = {
  title: "Мастера",
  description: "Мастера Studio Celebrity — стилисты, визажист и brow-мастер. Ярославль, ул. Кедрова, 3/8.",
};

export default function MastersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Команда"
        title="Мастера Studio Celebrity"
        description="Имена и специализации подтверждены отзывами клиентов на Яндекс Картах."
      />
      <section className="bg-background py-14 lg:py-20">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {masters.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.07}>
                <Link href={`/masters/${m.slug}`} className="group block">
                  <PhotoPlaceholder
                    shotNumber={m.slug}
                    label={`${m.name} — портрет`}
                    description={m.role}
                    tone="ivory"
                    subject="portrait"
                    aspectClassName="aspect-[3/4]"
                    className="overflow-hidden rounded-2xl transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <h2 className="mt-3.5 text-base font-semibold text-foreground">{m.name}</h2>
                  <p className="text-xs text-muted">{m.role}</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted/80">{m.specialty}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
