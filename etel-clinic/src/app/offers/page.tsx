import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Акции",
  description: "Действующие предложения центра «Этель»: скидки на стрижки, укладки, полировку волос и программа лояльности.",
  alternates: { canonical: "/offers/" },
};

const offers = [
  { title: "Скидка на стрижки и укладки", value: "30%" },
  { title: "День рождения — скидка на все услуги", value: "15%" },
  { title: "Пакеты полировки волос", value: "20%" },
  { title: "Накопительная программа лояльности", value: "3–10%" },
];

export default function OffersPage() {
  return (
    <>
      <PageIntro
        eyebrow="Акции"
        title="Действующие предложения"
        lead="Условия и сроки действия акций уточняйте у администратора при записи — на сайте клиники они обновляются регулярно."
      />

      <section className="pb-24">
        <Container wide>
          <ul className="grid gap-x-8 gap-y-10 border-t border-line pt-12 sm:grid-cols-2 lg:grid-cols-4">
            {offers.map((o, i) => (
              <Reveal key={o.title} as="li" delay={i * 80} className="rule pt-6">
                <span className="font-display text-[2.5rem] text-accent">{o.value}</span>
                <p className="mt-3 text-[1.0625rem] leading-[1.5] text-ink">{o.title}</p>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={200} className="mt-14 max-w-[64ch] border-t border-line pt-8">
            <p className="text-[0.9375rem] leading-[1.7] text-ink-mute">
              Список предложений требует регулярной сверки с клиникой перед
              публикацией — акции меняются чаще, чем остальной контент сайта.
            </p>
          </Reveal>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Акции", path: "/offers/" },
        ])}
      />
    </>
  );
}
