// Реальные отзывы с Яндекс Карт (yandex.ru/maps/org/seychas/132539768768/reviews)
// и DIKIDI (dikidi.net/ru/profile/seychas_953828), тексты не изменены по смыслу,
// приведены как короткие фрагменты. Проверено 14.08.2026.

export type Testimonial = {
  author: string;
  date: string;
  source: "Яндекс Карты" | "DIKIDI";
  sourceUrl: string;
  tag: string;
  master?: string;
  text: string;
};

export const testimonials: readonly Testimonial[] = [
  {
    author: "fulleren_e",
    date: "14 сентября 2024",
    source: "Яндекс Карты",
    sourceUrl: "https://yandex.ru/maps/org/seychas/132539768768/reviews/",
    tag: "Маникюр",
    master: "Анастасия",
    text: "Приятная атмосфера самого салона, красивый интерьер. Мастер очень аккуратно работала с ногтями — максимально нежно, вдумчиво и чисто. Предложили большой выбор напитков: чай, кофе, вода.",
  },
  {
    author: "Валерия П.",
    date: "9 апреля",
    source: "Яндекс Карты",
    sourceUrl: "https://yandex.ru/maps/org/seychas/132539768768/reviews/",
    tag: "Маникюр",
    master: "Дарья",
    text: "Хожу на ногти больше года, Дарья прекрасный мастер! Любая задумка по дизайну исполняется, и не нужно переживать, что будет что-то не так.",
  },
  {
    author: "Ирина Дзюба",
    date: "12 августа 2025",
    source: "DIKIDI",
    sourceUrl: "https://dikidi.net/ru/profile/seychas_953828",
    tag: "Педикюр",
    master: "Дарья",
    text: "Мастер очень аккуратно и быстро выполняет свою работу! Спасибо большое за такой бережный подход к клиентам и высокое качество работы.",
  },
  {
    author: "Анна",
    date: "24 мая",
    source: "Яндекс Карты",
    sourceUrl: "https://yandex.ru/maps/org/seychas/132539768768/reviews/",
    tag: "Уход за лицом",
    text: "Очень хороший салон. Работницы доброжелательные. После процедуры лицо сияет, ещё и получила множество полезных советов.",
  },
  {
    author: "Александра",
    date: "4 марта 2026",
    source: "DIKIDI",
    sourceUrl: "https://dikidi.net/ru/profile/seychas_953828",
    tag: "Маникюр",
    master: "Дарья",
    text: "Делает очень красивый маникюр!!",
  },
] as const;
