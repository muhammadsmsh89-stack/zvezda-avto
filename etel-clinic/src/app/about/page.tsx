import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { withBase } from "@/lib/basePath";
import { site } from "@/lib/site";
import { milestones } from "@/data/history";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { ThreadLine } from "@/components/ui/ThreadLine";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "О центре",
  description:
    "«Этель» — центр красоты и медицинской косметологии в Брянске с 2007 года. История, принципы работы, три клиники.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="О центре"
        title="19 лет медицинской косметологии в Брянске"
        lead="«Этель» начинала как один центр в 2007 году. Сегодня это три клиники, команда врачей-косметологов и медицинская лицензия на аппаратную, инъекционную и врачебную косметологию."
      />

      <section className="pb-24">
        <Container wide>
          <div className="grid gap-14 border-t border-line pt-12 lg:grid-cols-[minmax(0,0.55fr)_minmax(0,0.45fr)]">
            <Reveal>
              <div className="relative aspect-4/3 overflow-hidden bg-line">
                <Image
                  src={withBase("/clinic/about-general.webp")}
                  alt="Интерьер одной из клиник «Этель»"
                  fill
                  sizes="(min-width: 1024px) 55vw, 90vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="font-display text-[1.75rem] text-ink">Принцип работы</h2>
              <p className="mt-5 max-w-[52ch] text-[1.0625rem] leading-[1.7] text-ink-soft">
                Красота — это системный, регулярный уход, а не разовая
                процедура. Поэтому визит в «Этель» начинается с диагностики и
                разговора с врачом, а план подбирается под конкретную задачу
                и особенности кожи, а не под ассортимент клиники.
              </p>
              <ul className="mt-8 space-y-3 text-[1.0625rem] text-ink-soft">
                <li>— Врачебная и аппаратная косметология под одной лицензией.</li>
                <li>— Команда врачей-косметологов, дерматовенерологов, трихолог, акушер-гинеколог.</li>
                <li>— Три клиники в Брянске с единым стандартом приёма.</li>
              </ul>
              <Link
                href="/legal/"
                className="mt-8 inline-block text-[1rem] text-ink underline decoration-ink/25 underline-offset-4 hover:decoration-ink"
              >
                Юридические реквизиты и лицензия →
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="bg-stone py-24 sm:py-32">
        <Container wide>
          <Reveal className="max-w-[42rem]">
            <p className="eyebrow">2007 → 2026</p>
            <h2 className="font-display mt-4 text-[2.25rem] text-ink sm:text-[2.875rem]">
              19 лет рядом с вами
            </h2>
          </Reveal>

          <div className="mt-16 hidden lg:block">
            <div className="relative">
              <div className="absolute top-[7px] right-0 left-0 h-px">
                <ThreadLine orientation="horizontal" nodeAt="none" />
              </div>
              <ol className="grid grid-cols-4 gap-8">
                {milestones.map((m) => (
                  <li key={m.year} className="relative pt-8">
                    <span className="absolute top-0 left-0 h-[15px] w-[15px] -translate-y-1/2 rounded-full border-2 border-accent bg-stone" />
                    <p className="font-mono tabular text-[1rem] text-accent">{m.year}</p>
                    <h3 className="font-display mt-3 text-[1.375rem] text-ink">{m.title}</h3>
                    <p className="mt-2 text-[0.9375rem] leading-[1.6] text-ink-soft">
                      {m.body}
                      {m.needsVerification && <span className="text-ink-mute"> (уточняется)</span>}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ol className="mt-14 space-y-10 lg:hidden">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 60} className="flex gap-5">
                <div className="flex w-6 shrink-0 flex-col items-center pt-1.5">
                  <span className="h-[11px] w-[11px] shrink-0 rounded-full border-2 border-accent bg-stone" />
                  {i < milestones.length - 1 && <span className="mt-1 w-px flex-1 bg-line" />}
                </div>
                <div className="pb-2">
                  <p className="font-mono tabular text-[0.9375rem] text-accent">{m.year}</p>
                  <h3 className="font-display mt-2 text-[1.25rem] text-ink">{m.title}</h3>
                  <p className="mt-2 text-[0.9375rem] leading-[1.6] text-ink-soft">
                    {m.body}
                    {m.needsVerification && <span className="text-ink-mute"> (уточняется)</span>}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </Container>
      </section>

      <section className="py-24 sm:py-32">
        <Container wide>
          <Reveal className="max-w-[64ch]">
            <h2 className="eyebrow">Заявленный показатель</h2>
            <p className="mt-4 text-[1.0625rem] leading-[1.7] text-ink-soft">
              В публичных материалах клиника упоминает {site.clientsClaim.value} {site.clientsClaim.label}.
              Показатель не подтверждён независимо и перед публикацией на
              боевом сайте требует официального подтверждения клиникой.
            </p>
          </Reveal>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "О центре", path: "/about/" },
        ])}
      />
    </>
  );
}
