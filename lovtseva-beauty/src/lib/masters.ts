// Состав команды — только специалисты, чьё имя и направление подтверждены
// живыми отзывами клиентов на Яндекс Картах (раздел «Отзывы», проверено
// 17.08.2026) или прямой подписью работ на 2ГИС («Работы мастера Варвары»).
// Другие имена, упоминавшиеся в источниках без чёткой привязки к
// направлению (например, работы «мастера Анжелы» на 2ГИС), сюда намеренно
// не включены — требуют уточнения у владельца. Стаж, образование и
// сертификаты не публикуются — не подтверждены.

export type Master = {
  slug: string;
  name: string;
  nameDative: string;
  role: string;
  categorySlug: string;
  note?: string;
  featured?: boolean;
};

export const masters: readonly Master[] = [
  {
    slug: "natalya-lanshakova",
    name: "Наталья Ланшакова",
    nameDative: "Наталье Ланшаковой",
    role: "Парикмахер-колорист",
    categorySlug: "hair",
    note: "Клиенты отдельно отмечают её как колориста — «отличный парикмахер-колорист».",
    featured: true,
  },
  {
    slug: "oksana-yakusheva",
    name: "Оксана Якушева",
    nameDative: "Оксане Якушевой",
    role: "Мастер по волосам",
    categorySlug: "hair",
  },
  {
    slug: "yana",
    name: "Яна",
    nameDative: "Яне",
    role: "Парикмахер",
    categorySlug: "hair",
  },
  {
    slug: "varvara-khlopkova",
    name: "Варвара Хлопкова",
    nameDative: "Варваре Хлопковой",
    role: "Мастер маникюра и педикюра",
    categorySlug: "nails",
  },
  {
    slug: "angelina-yusheva",
    name: "Ангелина Юшева",
    nameDative: "Ангелине Юшевой",
    role: "Мастер маникюра",
    categorySlug: "nails",
    note: "Клиенты пользуются её услугами много лет: «все мастера своего дела, покрытие держится идеально».",
  },
  {
    slug: "anna-stepanovna",
    name: "Анна Степановна",
    nameDative: "Анне Степановне",
    role: "Косметолог",
    categorySlug: "cosmetology",
    note: "«Очень приятная мастер косметолог с индивидуальным подходом к клиентам» — из отзывов.",
  },
] as const;

export function getMasterBySlug(slug: string): Master | undefined {
  return masters.find((m) => m.slug === slug);
}

export function getMastersByDirection(directionSlug: string) {
  return masters.filter((m) => m.categorySlug === directionSlug);
}
