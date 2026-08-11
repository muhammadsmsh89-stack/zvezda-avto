// Реальные отзывы с публичных карточек компании (Яндекс Карты, 2ГИС), август 2026. Цитаты — короткие
// дословные фрагменты (смысл не изменён), подобранные под конкретные возражения покупателя, а не
// сгенерированные. Полные тексты и авторство — на источниках по ссылке `source`.

export type Review = {
  id: string;
  author: string;
  objection: "Подбор" | "Монтаж" | "Сроки" | "Качество" | "WhatsApp" | "Повторная покупка";
  quote: string;
  source: "Яндекс Карты" | "2ГИС";
  sourceUrl: string;
  date: string;
};

export const reviews: Review[] = [
  {
    id: "podbor",
    author: "Аминат А.",
    objection: "Подбор",
    quote:
      "Менеджеры не навязывали своё мнение, а терпеливо отвечали на все вопросы, показывали разные варианты, помогали сравнивать.",
    source: "2ГИС",
    sourceUrl: "https://2gis.ru/makhachkala/firm/70000001044045224/tab/reviews",
    date: "август 2025",
  },
  {
    id: "montazh",
    author: "Малик С.",
    objection: "Монтаж",
    quote:
      "У них свои мастера по установке дверей и напольных покрытий — это очень удобно.",
    source: "2ГИС",
    sourceUrl: "https://2gis.ru/makhachkala/firm/70000001044045224/tab/reviews",
    date: "октябрь 2025",
  },
  {
    id: "sroki",
    author: "Городской житель",
    objection: "Сроки",
    quote: "Выбор хороший. Вовремя доставили. Двери приехали без брака. Установщик — очень хороший мастер.",
    source: "2ГИС",
    sourceUrl: "https://2gis.ru/makhachkala/firm/70000001044045224/tab/reviews",
    date: "май 2026",
  },
  {
    id: "kachestvo",
    author: "Эльвира",
    objection: "Качество",
    quote: "Заказывали двери 6 лет назад. Качество шикарное — двери как новые до сих пор.",
    source: "2ГИС",
    sourceUrl: "https://2gis.ru/makhachkala/firm/70000001044045224/tab/reviews",
    date: "июнь 2025",
  },
  {
    id: "whatsapp",
    author: "Аминат А.",
    objection: "WhatsApp",
    quote: "Всегда была на связи по WhatsApp — прекрасно организованный сервис.",
    source: "2ГИС",
    sourceUrl: "https://2gis.ru/makhachkala/firm/70000001044045224/tab/reviews",
    date: "август 2025",
  },
  {
    id: "povtor",
    author: "Раиска Гамидова",
    objection: "Повторная покупка",
    quote: "Уже не в первый раз мы приобретаем двери в «Царь дверей» — и снова остались довольны.",
    source: "2ГИС",
    sourceUrl: "https://2gis.ru/makhachkala/firm/70000001044045224/tab/reviews",
    date: "сентябрь 2025",
  },
];
