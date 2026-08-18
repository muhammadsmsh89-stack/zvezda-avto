import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { contacts, legal } from "@/lib/contacts";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: `Политика конфиденциальности сайта ${studio.name}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Документы" title="Политика конфиденциальности" />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-2xl space-y-6 text-base leading-relaxed text-muted">
          <p>
            Оператор данных, обрабатываемых в связи с этим сайтом, — ИП, работающее под брендом {studio.name}
            ({contacts.addressFull}), ОГРНИП {legal.ogrnip}, ИНН {legal.inn}.
          </p>
          <p>
            Сайт не содержит форм сбора персональных данных и не использует файлы cookie для аналитики
            или рекламы. Запись на услуги происходит через сторонние сервисы — онлайн-запись YCLIENTS,
            WhatsApp, Telegram или по телефону; обработка данных в этих случаях регулируется политиками
            конфиденциальности соответствующих сервисов.
          </p>
          <p>
            Переходя по ссылкам на YCLIENTS, WhatsApp, Telegram, ВКонтакте, Instagram, Яндекс Карты или
            2ГИС, вы покидаете сайт студии и попадаете на площадку стороннего сервиса, действующую по
            собственным правилам обработки данных.
          </p>
          <p>
            По вопросам, связанным с обработкой персональных данных, свяжитесь со студией по телефону{" "}
            {contacts.phone.value}.
          </p>
        </Container>
      </section>
    </>
  );
}
