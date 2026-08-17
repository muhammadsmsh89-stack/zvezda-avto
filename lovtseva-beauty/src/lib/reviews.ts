// Отзывы — с Яндекс Карт (yandex.ru/maps/org/tsentr_krasoty_natalyi_lovtsevoy/1281310175/reviews/),
// приведены как короткие сохраняющие смысл фрагменты, не дословная копия.
// Проверено 17.08.2026. Процентная разбивка — реальная агрегированная
// статистика Яндекс Карт по категориям (доля положительных упоминаний и
// количество отзывов по каждой), с той же страницы.

export type Testimonial = {
  author: string;
  date: string;
  source: "Яндекс Карты";
  sourceUrl: string;
  tag: string;
  master?: string;
  text: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    author: "Таня Трынова",
    date: "2 июня",
    source: "Яндекс Карты",
    sourceUrl: "https://yandex.ru/maps/org/tsentr_krasoty_natalyi_lovtsevoy/1281310175/reviews/",
    tag: "Маникюр и волосы",
    master: "Варвара Хлопкова, Оксана Якушева",
    text: "Нравится сервис, обслуживание и мастера центра. Хожу не первый год, ценю каждого мастера. Отдельно рекомендую мастера по маникюру и педикюру Варвару Хлопкову и мастера по волосам Оксану Якушеву — профессионалы своего дела.",
  },
  {
    author: "Ася Третьякова",
    date: "6 августа",
    source: "Яндекс Карты",
    sourceUrl: "https://yandex.ru/maps/org/tsentr_krasoty_natalyi_lovtsevoy/1281310175/reviews/",
    tag: "Стрижка",
    master: "Наталья",
    text: "Записывалась на стрижку впервые. На ресепшене приветливые девочки, можно выпить чай или кофе в ожидании. Мастер подстригла быстро и аккуратно, дала советы по уходу за волосами — осталась всем довольна.",
  },
  {
    author: "Инна Уткина",
    date: "7 апреля 2025",
    source: "Яндекс Карты",
    sourceUrl: "https://yandex.ru/maps/org/tsentr_krasoty_natalyi_lovtsevoy/1281310175/reviews/",
    tag: "Стрижка и маникюр",
    master: "Яна, Ангелина Юшева",
    text: "Стригла мастер Яна — очень аккуратно и быстро, сразу поняла задачу. Много лет пользуюсь маникюром у Ангелины Юшевой: приятная атмосфера, огромный выбор лаков, покрытие держится идеально. Наталья Ланшакова — отличный колорист, Анна Степановна — косметолог с индивидуальным подходом. Запись с напоминаниями, мастера пунктуальны.",
  },
] as const;

export type ReviewCategory = { label: string; percent: number; count: number };

export const reviewCategories: readonly ReviewCategory[] = [
  { label: "Компетентность", percent: 100, count: 105 },
  { label: "Атмосфера", percent: 98, count: 81 },
  { label: "Персонал", percent: 97, count: 260 },
  { label: "Лазерная эпиляция", percent: 96, count: 24 },
  { label: "Эпиляция", percent: 96, count: 25 },
  { label: "Косметология", percent: 94, count: 16 },
  { label: "Педикюр", percent: 94, count: 18 },
  { label: "Окрашивание волос", percent: 93, count: 14 },
  { label: "Время ожидания", percent: 93, count: 40 },
  { label: "Маникюр", percent: 90, count: 63 },
  { label: "Чистота", percent: 89, count: 28 },
  { label: "Стрижка", percent: 86, count: 43 },
] as const;
