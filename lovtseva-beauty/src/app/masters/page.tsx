import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { masters } from "@/lib/masters";
import { getDirectionBySlug } from "@/lib/services";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Мастера",
  description: "Специалисты Центра красоты Натальи Ловцевой в Рязани: волосы, ногти, косметология.",
};

export default function MastersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Команда"
        title="Мастера, которых клиенты называют по именам"
        description="Специалисты, чьи имена подтверждены отзывами клиентов на Яндекс Картах. Полный состав центра шире — уточняйте у администратора."
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {masters.map((m, i) => {
              const direction = getDirectionBySlug(m.categorySlug);
              return (
                <Reveal key={m.slug} delay={i * 0.06}>
                  <Link href={`/masters/${m.slug}`} className="group block">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                      <PhotoPlaceholder
                        shotNumber={direction?.code ?? ""}
                        label={m.name}
                        description={`Портрет мастера — ${m.name}, ${m.role}`}
                        tone="ivory"
                        subject="portrait"
                        aspectClassName="h-full"
                        className="transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </div>
                    <h2 className="mt-4 font-serif text-xl text-foreground">{m.name}</h2>
                    <p className="mt-1 text-sm text-muted">{m.role}</p>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
