import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd, breadcrumbLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Как ООО «Этель» обрабатывает персональные данные посетителей сайта и клиентов.",
  alternates: { canonical: "/privacy/" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Документы"
        title="Политика конфиденциальности"
        lead="Общие принципы обработки персональных данных на сайте «Этель»."
      />

      <section className="pb-24">
        <Container wide className="max-w-[64rem] space-y-10">
          <Reveal className="rule pt-6">
            <h2 className="font-display text-[1.375rem] text-ink">Оператор персональных данных</h2>
            <p className="mt-3 text-[1.0625rem] leading-[1.7] text-ink-soft">
              {site.legalName}, ИНН {site.requisites.inn}, ОГРН {site.requisites.ogrn},
              юридический адрес: {site.requisites.legalAddress}.
            </p>
          </Reveal>

          <Reveal delay={80} className="rule pt-6">
            <h2 className="font-display text-[1.375rem] text-ink">Какие данные собираются</h2>
            <p className="mt-3 text-[1.0625rem] leading-[1.7] text-ink-soft">
              При заполнении формы записи на сайте — имя и номер телефона.
              Эти данные используются только для связи по вопросу записи и не
              передаются третьим лицам, кроме случаев, предусмотренных законом.
            </p>
          </Reveal>

          <Reveal delay={160} className="rule pt-6">
            <h2 className="font-display text-[1.375rem] text-ink">Согласие на обработку</h2>
            <p className="mt-3 text-[1.0625rem] leading-[1.7] text-ink-soft">
              Отправляя форму на сайте, посетитель даёт согласие на обработку
              указанных персональных данных в соответствии с 152-ФЗ «О
              персональных данных». Согласие можно отозвать, обратившись по
              контактам, указанным в разделе «Контакты».
            </p>
          </Reveal>

          <Reveal delay={240} className="rule pt-6">
            <p className="text-[0.9375rem] leading-[1.7] text-ink-mute">
              Полный текст политики и форма согласия на обработку персональных
              данных должны быть утверждены клиникой перед публикацией на
              боевом домене — здесь приведены общие принципы для превью.
            </p>
          </Reveal>
        </Container>
      </section>

      <JsonLd
        data={breadcrumbLd([
          { name: "Главная", path: "/" },
          { name: "Политика конфиденциальности", path: "/privacy/" },
        ])}
      />
    </>
  );
}
