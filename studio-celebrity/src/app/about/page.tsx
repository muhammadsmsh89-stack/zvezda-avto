import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal, FrameReveal } from "@/components/ui/Reveal";
import { PhotoPlaceholder } from "@/components/ui/PhotoPlaceholder";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "О студии",
  description: "Studio Celebrity — студия причёски, макияжа, бровей и ресниц в Ярославле, ул. Кедрова, 3/8.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="О студии"
        title="Место, где создают законченный образ"
        description="Studio Celebrity — не отдельная процедура, а результат: hair, makeup, brows и lashes собираются в один визит, под руководством мастеров, к которым клиенты возвращаются снова."
      />

      <section className="bg-background py-14 lg:py-20">
        <Container>
          <FrameReveal>
            <PhotoPlaceholder
              shotNumber="Studio"
              label="Интерьер студии"
              description="Общий план пространства студии"
              tone="ivory"
              aspectClassName="aspect-[16/8]"
            />
          </FrameReveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface-2/50 py-16 lg:py-20">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal>
            <h2 className="text-2xl text-foreground sm:text-3xl">Что отмечают клиенты</h2>
            <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted">
              <li>— Персональный подход: мастера обсуждают пожелания и референсы перед процедурой.</li>
              <li>— Несколько услуг за один визит — hair, makeup, brows и lashes.</li>
              <li>— Уютная атмосфера, кофе и сервис, за которые студию отмечают в отзывах.</li>
              <li>— Сильные мастера, к которым клиенты возвращаются снова.</li>
            </ul>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-2xl text-foreground sm:text-3xl">Студия</h2>
            <dl className="mt-6 space-y-4 text-sm">
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted">Адрес</dt>
                <dd className="text-right font-medium text-foreground">{studio.addressFull}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted">График</dt>
                <dd className="text-right font-medium text-foreground">{studio.hours}, {studio.hoursNote.toLowerCase()}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted">Рейтинг</dt>
                <dd className="text-right font-medium text-foreground">{studio.rating} · {studio.reviewsCount} отзыва, Яндекс Карты</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-border pb-3">
                <dt className="text-muted">Награда</dt>
                <dd className="text-right font-medium text-foreground">{studio.award}</dd>
              </div>
              <div className="flex flex-wrap justify-between gap-2">
                <dt className="text-muted">Возможности</dt>
                <dd className="text-right font-medium text-foreground">{studio.features.join(" · ")}</dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
