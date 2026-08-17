import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextLink } from "@/components/ui/Button";
import { contacts, whatsappLink } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Вопросы и ответы",
  description: "Частые вопросы о записи и услугах студии SEYCHAS в Туле.",
};

const faq = [
  {
    q: "Как записаться?",
    a: (
      <>
        Онлайн через <TextLink href={contacts.dikidiUrl}>DIKIDI</TextLink> — там видно свободное время каждого
        мастера. Также можно написать в <TextLink href={whatsappLink()}>WhatsApp</TextLink> или позвонить по телефону{" "}
        {contacts.phone.value}.
      </>
    ),
  },
  {
    q: "Где находится студия?",
    a: <>{contacts.addressFull}, {contacts.landmark}.</>,
  },
  {
    q: "Можно ли выбрать мастера?",
    a: (
      <>
        Да. На странице <TextLink href="/masters">«Мастера»</TextLink> можно посмотреть специализацию каждого
        специалиста и перейти к записи в DIKIDI.
      </>
    ),
  },
  {
    q: "Где посмотреть актуальную стоимость?",
    a: (
      <>
        Актуальные цены и время студия показывает в <TextLink href={contacts.dikidiUrl}>DIKIDI</TextLink> на этапе
        выбора услуги — так вы видите точную стоимость сразу.
      </>
    ),
  },
  {
    q: "Как перенести запись?",
    a: (
      <>
        Напишите администратору в <TextLink href={whatsappLink()}>WhatsApp</TextLink> или позвоните по телефону{" "}
        {contacts.phone.value} — уточните перенос напрямую.
      </>
    ),
  },
  {
    q: "Какие направления есть в SEYCHAS?",
    a: (
      <>
        Ногти, брови, ресницы и beauty-уход — подробнее на странице{" "}
        <TextLink href="/services">«Услуги»</TextLink>.
      </>
    ),
  },
  {
    q: "Можно ли записаться через WhatsApp?",
    a: (
      <>
        Да, напишите на <TextLink href={whatsappLink()}>{contacts.whatsappNumber.value}</TextLink> — администратор
        подскажет свободное время.
      </>
    ),
  },
] as const;

export default function FaqPage() {
  return (
    <>
      <PageIntro eyebrow="Вопросы" title="Вопросы и ответы" description="Если не нашли ответ — напишите администратору в WhatsApp." />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-3xl">
          <div className="divide-y divide-border border-t border-border">
            {faq.map((item, i) => (
              <Reveal key={item.q} delay={i * 0.04} className="py-7">
                <h2 className="text-lg font-bold text-foreground">{item.q}</h2>
                <p className="mt-2 text-base leading-relaxed text-muted">{item.a}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
