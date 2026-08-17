import type { Metadata } from "next";
import Image from "next/image";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { rating } from "@/lib/site";
import { contacts } from "@/lib/contacts";
import { ctaLabels } from "@/lib/site";
import { interiorImages } from "@/lib/media";

export const metadata: Metadata = {
  title: "О студии",
  description: "SEYCHAS — студия красоты в Туле на ул. Льва Толстого, 81.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="О студии"
        title="SEYCHAS — время, которое принадлежит вам"
        description="Студия красоты в центре Тулы, рядом с филармонией. Ногти, брови и ресницы — в одном пространстве, с записью к конкретному мастеру."
      />

      <section className="bg-background pb-20 lg:pb-28">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-xl font-bold text-foreground">Что такое SEYCHAS</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                SEYCHAS — салон красоты, брови-ресниц студия и ногтевая студия в одном адресе:
                {" "}{contacts.addressFull}. В студии принимают по направлениям «Ногти», «Брови»,
                «Ресницы» и «Beauty» — с предварительной записью.
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="text-xl font-bold text-foreground">Как мы работаем</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                Перед визитом можно посмотреть работы студии, выбрать мастера по направлению и
                записаться на удобное время через DIKIDI — без звонков и ожидания ответа.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <h2 className="text-xl font-bold text-foreground">Атмосфера</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted">
                По отзывам клиентов на Яндекс Картах и DIKIDI, в студии отмечают приятную атмосферу,
                аккуратную работу мастеров и напитки — чай, кофе, воду — перед процедурой.
              </p>
            </Reveal>
            <Reveal delay={0.18} className="flex flex-wrap gap-3 pt-2">
              <Button href={contacts.dikidiUrl}>{ctaLabels.primary}</Button>
              <Button variant="secondary" href="/masters">
                {ctaLabels.chooseMaster}
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="space-y-5 rounded-2xl border border-border bg-surface p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Рейтинг</p>
              <p className="mt-2 text-3xl font-extrabold text-foreground">{rating.value}</p>
              <p className="text-sm text-muted">
                {rating.ratingsCount} оценок · {rating.reviewsCount} отзывов на {rating.source}
              </p>
            </div>
            <div className="border-t border-border pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Адрес</p>
              <p className="mt-2 text-sm text-foreground">{contacts.addressFull}</p>
              <p className="text-xs text-muted">{contacts.landmark}</p>
            </div>
            <div className="border-t border-border pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Режим</p>
              <p className="mt-2 text-sm text-foreground">{contacts.hoursNote}</p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t border-border bg-surface py-16 lg:py-20">
        <Container>
          <Reveal>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-muted">Студия изнутри</p>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-5">
            <Reveal className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-2xl border border-border lg:aspect-auto lg:row-span-2">
              <Image
                src={interiorImages[0].src}
                alt={interiorImages[0].alt}
                fill
                sizes="(min-width: 1024px) 40vw, 92vw"
                className="object-cover"
              />
            </Reveal>
            {interiorImages.slice(1, 5).map((img, i) => (
              <Reveal key={img.src} delay={i * 0.05} className="relative aspect-square overflow-hidden rounded-2xl border border-border">
                <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 18vw, 46vw" className="object-cover" />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
