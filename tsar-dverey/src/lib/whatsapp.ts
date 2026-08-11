// Единая точка формирования WhatsApp-ссылок с контекстным сообщением. Компоненты не собирают
// текст сами — это исключает рассинхронизацию формулировок и упрощает будущую правку номера.

const WHATSAPP_NUMBER = "79634086223";

function buildUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function whatsappGeneric(): string {
  return buildUrl("Здравствуйте! Подскажите, пожалуйста, по дверям в наличии и под заказ.");
}

export function whatsappCategory(categoryLabel: string): string {
  return buildUrl(
    `Здравствуйте!\nСмотрю ${categoryLabel} на сайте «Царь Дверей».\nХочу узнать стоимость и доступные варианты.`
  );
}

export function whatsappProduct(productName: string): string {
  return buildUrl(
    `Здравствуйте!\nСмотрю модель «${productName}» на сайте «Царь Дверей».\nХочу узнать стоимость и доступные варианты.`
  );
}

export function whatsappMeasurement(): string {
  return buildUrl(
    "Здравствуйте!\nХочу заказать/уточнить замер дверей.\nПодскажите, пожалуйста, дальнейшие шаги."
  );
}

export function whatsappInstallment(): string {
  return buildUrl("Здравствуйте! Хочу узнать условия рассрочки на двери.");
}

export type QuizAnswers = {
  style: string;
  interior: string;
  doorType: string;
  quantity?: string;
};

export function whatsappQuiz(answers: QuizAnswers): string {
  const lines = [
    "Здравствуйте!",
    "Хочу подобрать двери.",
    "",
    `Стиль: ${answers.style}`,
    `Интерьер: ${answers.interior}`,
    `Тип: ${answers.doorType}`,
  ];
  if (answers.quantity) lines.push(`Количество: ${answers.quantity}`);
  lines.push("", "Подскажите, пожалуйста, подходящие варианты.");
  return buildUrl(lines.join("\n"));
}
