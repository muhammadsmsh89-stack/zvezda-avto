import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Согласие на обработку персональных данных",
  robots: { index: false },
};

export default function ConsentPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36">
      <Container size="text">
        <p className="font-mono-tag text-xs uppercase tracking-[0.14em] text-muted">Документ-заглушка</p>
        <h1 className="font-display mt-4 text-3xl font-semibold text-ink">
          Согласие на обработку персональных данных
        </h1>
        <p className="text-pretty mt-6 leading-relaxed text-muted">
          Отправляя заявку через форму на сайте {company.name}, пользователь передаёт имя,
          телефон/WhatsApp и описание задачи для связи по вопросу расчёта мебели. Финальную
          формулировку согласия, срок действия и порядок отзыва должен утвердить владелец
          компании или юрист перед запуском сайта в продакшен.
        </p>
      </Container>
    </div>
  );
}
