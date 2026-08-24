import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Отзывы",
  description: "Рейтинг центра «Этель» на Яндекс Картах и ссылки на площадки с отзывами.",
  alternates: { canonical: "/reviews/" },
};

const platforms = [
  { label: "Яндекс Карты", url: site.reviews.yandexUrl, note: `${site.reviews.yandexRating} · ${site.reviews.yandexCount} отзывов` },
  { label: "ПроДокторов", url: "https://prodoctorov.ru/bryansk/lpu/43948-etel/", note: "отзывы о врачах" },
  { label: "2ГИС", url: "https://2gis.ru/bryansk/firm/70000001018746025", note: "отзывы и фото клиник" },
];

export default function ReviewsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Отзывы"
        title="Отзывы о клинике «Этель»"
        lead="Мы не публикуем отдельные отзывы без согласования с их авторами — вместо этого честно показываем рейтинг и площадки, где отзывы можно прочитать полностью."
      />

      <section className="pb-24">
        <Container wide>
          <Reveal className="border-t border-line pt-12">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[4.5rem] leading-none text-ink">
                {site.reviews.yandexRating}
              </span>
              <p className="text-[1.0625rem] text-ink-soft">
                {site.reviews.yandexCount} отзывов на Яндекс Картах
                {site.reviews.needsVerification && (
                  <span className="mt-1 block text-[0.9375rem] text-ink-mute">
                    Рейтинг требует финальной сверки перед запуском — площадки обновляют счётчик ежедневно.
                  </span>
                )}
              </p>
            </div>
          </Reveal>

          <ul className="mt-14 grid gap-6 sm:grid-cols-3">
            {platforms.map((p, i) => (
              <Reveal as="li" key={p.label} delay={i * 80} className="rule pt-6">
                <h2 className="font-display text-[1.375rem] text-ink">{p.label}</h2>
                <p className="mt-2 text-[0.9375rem] text-ink-soft">{p.note}</p>
                <Button href={p.url} variant="ghost" className="mt-4">
                  Открыть →
                </Button>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Отзывы", path: "/reviews/" },
        ])}
      />
    </>
  );
}
