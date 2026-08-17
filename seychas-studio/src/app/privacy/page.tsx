import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности сайта SEYCHAS.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Документы" title="Политика конфиденциальности" />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-2xl space-y-6 text-base leading-relaxed text-muted">
          <p>
            Оператором данных, обрабатываемых на этом сайте, является {contacts.legalName} (студия SEYCHAS,{" "}
            {contacts.addressFull}).
          </p>
          <p>
            Сайт не содержит форм сбора персональных данных. Запись на услуги происходит на стороне сервиса
            DIKIDI ({contacts.dikidiUrl}) либо через мессенджеры WhatsApp и Telegram — обработка данных в этих
            случаях регулируется политиками соответствующих сервисов.
          </p>
          <p>
            Переходя по ссылкам на DIKIDI, WhatsApp, Telegram, VK, Instagram или Яндекс Карты, вы покидаете сайт
            SEYCHAS и попадаете на площадку стороннего сервиса.
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
