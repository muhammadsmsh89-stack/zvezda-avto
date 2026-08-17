import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { contacts } from "@/lib/contacts";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "О студии",
  description: "HPD Studio — детейлинг-студия в центре Воронежа на Пушкинской, 8.",
};

const points = [
  "Работают с мойкой, полировкой, защитой кузова, химчисткой салона, тонировкой и шумоизоляцией.",
  "Находятся в центре города, рядом с Центральным рынком — подземный паркинг, лифт и пандус.",
  "По отзывам клиентов персонал честно говорит, что реально нужно автомобилю, не навязывая лишнее.",
];

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="О студии"
        title={`${studio.fullName} — детейлинг в центре ${studio.city}`}
        description={`${contacts.addressFull}, ${contacts.landmark}.`}
      />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-2xl">
          <Reveal>
            <p className="text-base leading-relaxed text-foreground/90">
              HPD занимается уходом за автомобилем: мойка, полировка кузова, защита плёнкой и керамикой, химчистка
              салона, тонировка стёкол и шумоизоляция. Студия расположена на Пушкинской, 8, в подземном паркинге
              (−1 этаж, 5-я секция), рядом с Центральным рынком.
            </p>
          </Reveal>
          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <Reveal key={p} delay={0.06}>
                <li className="flex items-start gap-3 text-sm leading-relaxed text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {p}
                </li>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>
      <TrustStrip />
    </>
  );
}
