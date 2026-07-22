import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { company } from "@/lib/content";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика обработки персональных данных ООО «Звезда».",
  robots: { index: false, follow: true },
};

export default function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Документы"
        breadcrumb="Политика конфиденциальности"
        title="Политика конфиденциальности"
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <div className="space-y-8 text-sm leading-relaxed text-muted">
            <p>
              Настоящая политика определяет порядок обработки и защиты персональных данных посетителей
              сайта {company.legalName}, действующей в соответствии с Федеральным законом №152-ФЗ
              «О персональных данных». Защита конфиденциальности и персональной информации пользователей
              является одним из приоритетов нашей работы.
            </p>

            <div>
              <h2 className="mb-2 font-sans text-base font-bold text-foreground">Оператор и сфера действия</h2>
              <p>
                Оператором персональных данных, обрабатываемых в связи с использованием сайта, выступает{" "}
                {company.legalName} (ИНН {company.inn}).
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-sans text-base font-bold text-foreground">Принципы обработки данных</h2>
              <p>
                Обработка персональных данных осуществляется на законной и справедливой основе, ограничена
                достижением конкретных, заранее определённых целей. Мы поддерживаем точность и актуальность
                обрабатываемых данных.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-sans text-base font-bold text-foreground">Права пользователя</h2>
              <p>
                Вы вправе запросить информацию о своих персональных данных, потребовать их уточнения или
                удаления, отозвать согласие на обработку, а также обратиться с жалобой в уполномоченный орган
                по защите прав субъектов персональных данных.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-sans text-base font-bold text-foreground">Защита данных</h2>
              <p>
                Безопасность персональных данных обеспечивается путём реализации правовых, организационных и
                технических мер, предусмотренных действующим законодательством Российской Федерации.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-sans text-base font-bold text-foreground">Передача третьим лицам</h2>
              <p>
                Персональные данные не передаются третьим лицам, за исключением случаев, предусмотренных
                законодательством, либо с явного согласия пользователя для целей исполнения договора.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-sans text-base font-bold text-foreground">Срок хранения</h2>
              <p>
                Данные хранятся не дольше, чем это необходимо для достижения целей обработки, если иной срок
                не установлен федеральным законом.
              </p>
            </div>

            <div>
              <h2 className="mb-2 font-sans text-base font-bold text-foreground">Изменение и отзыв согласия</h2>
              <p>
                Для уточнения данных или отзыва согласия на обработку направьте запрос на адрес{" "}
                <a href="mailto:tc-zvezda@yandex.ru" className="text-accent hover:opacity-80">
                  tc-zvezda@yandex.ru
                </a>{" "}
                с соответствующей пометкой.
              </p>
            </div>

            <p className="text-xs text-muted/70">
              Политика действует бессрочно до замены её новой редакцией.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
