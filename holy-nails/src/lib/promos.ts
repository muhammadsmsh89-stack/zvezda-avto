// Акции — с официального сайта holy-nails.clients.site (раздел «Акции»).
// Проверено 18.08.2026 — оставлены как есть, сроки в источнике заданы так.

export type Promo = {
  title: string;
  description: string;
  until: string;
};

export const promos: readonly Promo[] = [
  {
    title: "Маникюр подруге",
    description:
      "300 ₽ скидки новому клиенту, которого пригласила подруга, и бонус тому, кто пригласил. Предупредите администратора заранее.",
    until: "31 декабря 2026",
  },
  {
    title: "Первый визит",
    description: "Скидка 10% всем новым клиентам.",
    until: "7 декабря 2026",
  },
] as const;

export const loyalty = {
  welcomeBonus: "−300 ₽ при знакомстве",
  note: "Карта постоянного клиента со скидками и акциями.",
} as const;
