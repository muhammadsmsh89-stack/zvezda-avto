import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { StudioSection } from "@/components/sections/StudioSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { ContractBenefits } from "@/components/sections/ContractBenefits";
import { contacts } from "@/lib/contacts";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "О студии",
  description: "WrapMeNow — студия оклейки автомобилей в Москве с 2014 года. Ташкентская улица, 28, строение 8.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="О студии"
        title={`С ${studio.yearFounded} года делаем машины такими, какими владельцы хотели видеть их с завода`}
        description={`${contacts.addressFull}.`}
      />

      <section className="bg-background pb-16 lg:pb-20">
        <Container className="max-w-2xl">
          <Reveal>
            <p className="text-base leading-relaxed text-foreground/90">
              WrapMeNow — студия оклейки, защиты и стайлинга автомобилей в Москве. Работаем с полиуретановой защитной
              плёнкой, цветной виниловой оклейкой, антихромом, тонировкой и брендированием коммерческого транспорта.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              { value: "5 000+", label: "клиентов*" },
              { value: "12+", label: "сотрудников*" },
              { value: "7 лет", label: "средний стаж специалистов*" },
              { value: String(studio.yearFounded), label: "год основания" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={0.06 + i * 0.04}>
                <p className="text-2xl font-semibold text-foreground sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs uppercase tracking-[0.08em] text-muted">{stat.label}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.24}>
            <p className="mt-4 text-xs text-muted">* Данные требуют подтверждения перед публикацией — см. CONTENT_VERIFICATION.md.</p>
          </Reveal>
        </Container>
      </section>

      <TrustStrip />
      <StudioSection />
      <TeamSection />
      <ContractBenefits />
    </>
  );
}
