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
        <p className="font-mono-tag text-xs uppercase tracking-[0.14em] text-paper/40">Документ-заглушка</p>
        <h1 className="font-display mt-4 text-3xl font-semibold text-paper">
          Согласие на обработку персональных данных
        </h1>
        <p className="text-pretty mt-6 leading-relaxed text-paper/65">
          Обращаясь в {company.name} через WhatsApp или телефон, пользователь передаёт имя,
          номер и содержание обращения для связи по вопросу автомобиля. Финальную формулировку
          согласия, срок хранения и порядок отзыва должен утвердить владелец компании или юрист
          перед запуском сайта в продакшен.
        </p>
      </Container>
    </div>
  );
}
