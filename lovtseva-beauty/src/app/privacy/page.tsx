import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { contacts } from "@/lib/contacts";
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
            Оператором данных, обрабатываемых на этом сайте, является {studio.name} ({contacts.addressFull}).
          </p>
          <p>
            Сайт не содержит форм сбора персональных данных. Запись на услуги происходит через мессенджеры
            WhatsApp и Telegram либо по телефону — обработка данных в этих случаях регулируется политиками
            соответствующих сервисов.
          </p>
          <p>
            Переходя по ссылкам на WhatsApp, Telegram, Яндекс Карты или 2ГИС, вы покидаете сайт центра и
            попадаете на площадку стороннего сервиса.
          </p>
          <p>
            По вопросам, связанным с обработкой персональных данных, свяжитесь с центром по телефону{" "}
            {contacts.phone.value} или email {contacts.email}.
          </p>
        </Container>
      </section>
    </>
  );
}
