import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { PageIntro } from "@/components/ui/PageIntro";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности и согласие на обработку персональных данных Studio Celebrity.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Документы" title="Политика конфиденциальности" />
      <section className="bg-background pb-20 lg:pb-28">
        <Container className="max-w-2xl space-y-8 text-sm leading-relaxed text-muted">
          <div>
            <h2 className="text-lg font-semibold text-foreground">1. Общие положения</h2>
            <p className="mt-3">
              Заполняя форму записи на сайте Studio Celebrity, вы соглашаетесь на обработку
              персональных данных (имя, номер телефона), переданных для связи с администратором
              и подтверждения записи на услугу.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">2. Цели обработки</h2>
            <p className="mt-3">
              Данные используются исключительно для связи с клиентом по вопросам записи,
              оказания услуг студии и не передаются третьим лицам, кроме случаев, предусмотренных
              законодательством РФ.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">3. Хранение и защита данных</h2>
            <p className="mt-3">
              Студия принимает разумные организационные меры для защиты персональных данных от
              несанкционированного доступа, изменения, раскрытия или уничтожения.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">4. Права клиента</h2>
            <p className="mt-3">
              Вы вправе запросить уточнение, блокирование или удаление своих персональных данных,
              обратившись по телефону {studio.phone.value} или в WhatsApp студии.
            </p>
          </div>
          <p className="text-xs text-muted/70">
            Документ носит информационный характер. Актуальную редакцию и реквизиты
            уточняйте у администратора студии.
          </p>
        </Container>
      </section>
    </>
  );
}
