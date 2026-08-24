import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { contacts } from "@/lib/contacts";
import { studio } from "@/lib/site";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: `Политика конфиденциальности сайта ${studio.fullName}.`,
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Документы" title="Политика конфиденциальности" />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-2xl space-y-6 text-base leading-relaxed text-muted">
          <p>
            Оператором данных, обрабатываемых на этом сайте, выступает {contacts.legal.entity} (ИНН {contacts.legal.inn},
            ОГРНИП {contacts.legal.ogrnip}), студия {studio.fullName}, {contacts.addressFull}.
          </p>
          <p>
            Калькулятор стоимости и форма обратной связи на сайте открывают WhatsApp с заполненным сообщением — данные,
            которые вы указываете (марка автомобиля, телефон), передаются напрямую в WhatsApp и обрабатываются в
            соответствии с политикой конфиденциальности этого сервиса.
          </p>
          <p>
            Переходя по ссылкам на WhatsApp, Telegram, VK, Instagram, YouTube или Яндекс Карты, вы покидаете сайт{" "}
            {studio.name} и попадаете на площадку стороннего сервиса.
          </p>
          <p>
            По вопросам, связанным с обработкой персональных данных, свяжитесь со студией по телефону{" "}
            {contacts.phone.value} или по адресу {contacts.email}.
          </p>
        </Container>
      </section>
    </>
  );
}
