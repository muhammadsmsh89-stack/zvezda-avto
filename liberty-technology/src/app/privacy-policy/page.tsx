import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 sm:pt-36">
      <Container size="text">
        <p className="font-mono-tag text-xs uppercase tracking-[0.14em] text-paper/40">Документ-заглушка</p>
        <h1 className="font-display mt-4 text-3xl font-semibold text-paper">Политика конфиденциальности</h1>
        <p className="text-pretty mt-6 leading-relaxed text-paper/65">
          Этот раздел — заготовка структуры страницы, а не юридически проверенный документ.
          Перед публикацией сайта {company.name} текст должен подготовить или проверить юрист
          с учётом реального объёма собираемых данных (обращения в WhatsApp, аналитика, cookies).
        </p>
        <p className="text-pretty mt-4 leading-relaxed text-paper/65">
          На сайте нет форм, собирающих персональные данные напрямую — обращения происходят
          через WhatsApp и телефон, где данные обрабатываются на стороне этих сервисов.
        </p>
      </Container>
    </div>
  );
}
