/**
 * Команда клиники.
 *
 * Три специалиста — ровно те, что опубликованы на inunica.ru. Медицинские
 * агрегаторы показывают больше анкет, но клиника их у себя не подтверждает,
 * поэтому здесь их нет: состав команды нужно уточнить у заказчика.
 */
export type Doctor = {
  slug: string;
  name: string;
  role: string;
  /** Медицинский стаж в годах — как указано клиникой. */
  experience: number;
  photo: string;
  focus: string[];
};

export const doctors: Doctor[] = [
  {
    slug: "timchenko",
    name: "Тимченко Татьяна Сергеевна",
    role: "Врач-дерматовенеролог, косметолог",
    experience: 9,
    photo: "/doctors/timchenko.webp",
    focus: ["Инъекционная косметология", "Аппаратные методики лица", "Дерматология"],
  },
  {
    slug: "rubtsova",
    name: "Рубцова Ирина Алексеевна",
    role: "Косметолог-эстетист",
    experience: 15,
    photo: "/doctors/rubtsova.webp",
    focus: ["Чистки и пилинги", "Комплексные уходы", "Лазерная эпиляция"],
  },
  {
    slug: "svistelnikov",
    name: "Свистельников Евгений Игоревич",
    role: "Массажист",
    experience: 5,
    photo: "/doctors/svistelnikov.webp",
    focus: ["Массаж лица", "Массаж тела", "Коррекция фигуры"],
  },
];
