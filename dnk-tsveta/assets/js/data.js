/**
 * DNK ЦВЕТА — shared factual data (branches, contacts, roster).
 * Every value here is sourced from public Yandex Maps / clients.site / yclients
 * listings as of 2026-08-20. Anything not publicly confirmed is intentionally
 * left out rather than guessed — see the "owner data" notes on relevant pages.
 */
window.DNK = (function () {
  var BRANCHES = {
    chertanovo: {
      id: "chertanovo",
      shortName: "Азовская",
      fullName: "DNK Цвета на Азовской",
      metro: "Севастопольская / Каховская",
      metroNote: "500 м от м. Севастопольская",
      address: "ул. Азовская, 35, корп. 3, подъезд 5",
      addressFull: "Москва, ул. Азовская, 35, корп. 3, подъезд 5",
      hours: "Ежедневно, 10:00–21:00",
      phoneDisplay: "+7 (977) 729-18-72",
      phoneHref: "tel:+79777291872",
      wa: "https://wa.me/79777291872",
      tg: "https://telegram.me/dnk_colors_chertanovo",
      vk: "https://vk.ru/dnkcolors_chertanovo",
      instagram: "https://www.instagram.com/dnk.colors/",
      yandexMaps: "https://yandex.ru/maps/org/dnk_tsveta/119730949929/",
      yandexRoute: "https://yandex.ru/maps/org/dnk_tsveta/119730949929/?utm_source=site",
      mapEmbed: "https://yandex.ru/map-widget/v1/?text=Москва%2C%20ул.%20Азовская%2C%2035%2C%20корп.%203&z=16",
      rating: "5.0",
      ratingsCount: "303",
      reviewsCount: "227",
      services: ["Волосы", "Ногти", "Косметология", "Депиляция", "Массаж"],
      hasNails: true,
      hasFace: true,
      highlights: [
        "Полный спектр: волосы, ногти, косметология, депиляция, массаж",
        "Можно без записи — при наличии свободного мастера",
        "Есть парковка и подарочные сертификаты"
      ]
    },
    mira: {
      id: "mira",
      shortName: "Проспект Мира",
      fullName: "DNK Цвета на Проспекте Мира",
      metro: "ВДНХ / Улица Кибальчича",
      metroNote: "190 м от Улицы Кибальчича",
      address: "просп. Мира, 124, корп. 8, подъезд 18",
      addressFull: "Москва, просп. Мира, 124, корп. 8, подъезд 18",
      hours: "Ежедневно, 10:00–22:00",
      phoneDisplay: "+7 (915) 489-92-32",
      phoneHref: "tel:+79154899232",
      wa: "https://wa.me/79154899232",
      tg: "https://telegram.me/DNKcolorsStudio",
      vk: "https://vk.ru/dnk_colors",
      viber: "https://viber.click/79154899232",
      yandexMaps: "https://yandex.ru/maps/org/dnk_tsveta_salon_koloristiki/218021840358/",
      mapEmbed: "https://yandex.ru/map-widget/v1/?text=Москва%2C%20просп.%20Мира%2C%20124%2C%20корп.%208&z=16",
      rating: "5.0",
      ratingsCount: "283",
      reviewsCount: "239",
      services: ["Волосы"],
      hasNails: false,
      hasFace: false,
      highlights: [
        "Специализация на сложном окрашивании и уходе за кудрявыми волосами",
        "На час дольше работы вечером — до 22:00",
        "Отдельная студия для окрашивания и стрижек"
      ]
    }
  };

  var BOOKING_URL = "https://n987665.yclients.com/";

  function wa(branchId, text) {
    var b = BRANCHES[branchId] || BRANCHES.chertanovo;
    return b.wa + "?text=" + encodeURIComponent(text);
  }

  return { BRANCHES: BRANCHES, BOOKING_URL: BOOKING_URL, wa: wa };
})();
