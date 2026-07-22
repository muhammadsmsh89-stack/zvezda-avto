// Реальные данные автотехцентра «Звезда», собранные с tc-zvezda.ru и Яндекс.Карт.
// Цены и факты не изменялись. Источник прайса — официальный прайс-лист tc-zvezda.ru/price/.

import { withBase } from "@/lib/basePath";

export const company = {
  name: "ЗВЕЗДА",
  fullName: "Автотехцентр «Звезда»",
  legalName: "ООО «Звезда»",
  inn: "0573017188",
  city: "Махачкала",
  tagline: "Решаем любые проблемы с авто. Просто. Быстро. Качественно",
  description:
    "Высокое качество обслуживания и доступные цены. Новые и б/у автозапчасти. Ремонт по ОСАГО и страховому полису.",
  address: "пр. Али-Гаджи Акушинского, 395, Махачкала",
  addressShort: "Акушинского, 395",
  hours: "Ежедневно с 9:00 до 21:00",
  phones: [
    { label: "Основной", value: "+7 (8722) 55-20-25", href: "+78722552025" },
    { label: "Доп. линия", value: "+7 (8722) 50-20-25", href: "+78722502025" },
    { label: "Доп. линия", value: "+7 (8722) 52-22-19", href: "+78722522219" },
  ],
  email: "texcentr-zvezda@mail.ru",
  mapUrl:
    "https://yandex.ru/maps/org/zvezda/54461611639/?ll=47.408176%2C42.968826&z=16.5",
  routeUrl:
    "https://yandex.ru/maps/org/zvezda/54461611639/?ll=47.408176%2C42.968826&z=16.5&mode=routes&rtext=~42.968826,47.408176",
  mapEmbedSrc:
    "https://yandex.ru/map-widget/v1/?ll=47.408176%2C42.968826&z=16.5&pt=47.408176,42.968826,pm2rdm",
} as const;

export const trustStats = [
  { value: "12", suffix: " мес.", label: "Гарантия на все виды работ" },
  { value: "25 000", suffix: "+", label: "Запчастей в наличии на складе" },
  { value: "10", suffix: "+ лет", label: "Опыт каждого специалиста" },
  { value: "2", suffix: " часа", label: "Диагностика и ТО" },
] as const;

export const advantages = [
  {
    title: "Прозрачность",
    description:
      "На все услуги техцентр предоставляет полный пакет документов. С организациями заключаем официальный договор.",
  },
  {
    title: "Гибкие цены",
    description:
      "Работаем напрямую с поставщиками запчастей — гибкая система скидок и доступные цены на работы любой сложности.",
  },
  {
    title: "Всё в наличии",
    description:
      "Более 25 000 запчастей на собственном складе — не нужно ждать доставку по большинству позиций.",
  },
  {
    title: "Оперативность",
    description:
      "Техническое обслуживание — в пределах 2 часов. Слесарный ремонт основных узлов — в течение дня.",
  },
  {
    title: "Опытная команда",
    description:
      "Все специалисты техцентра имеют опыт ремонта более 10 лет и регулярно проходят обучение по современным моделям.",
  },
  {
    title: "Любая форма оплаты",
    description: "Принимаем наличный и безналичный расчёт, работаем по ОСАГО и страховому полису.",
  },
] as const;

export type ServiceItem = { name: string; price?: string };

export const serviceCategories = [
  {
    slug: "slesarnyy-remont",
    title: "Слесарный ремонт",
    shortTitle: "Слесарный ремонт",
    description:
      "Комплексный слесарный ремонт легковых автомобилей более 20 марок: от планового ТО до капитального ремонта узлов.",
    heroNote: "Основные узлы — в течение дня",
    image: withBase("/images/gallery/photo-6.jpg"),
    items: [
      { name: "Техническое обслуживание", price: "от 500 ₽" },
      { name: "Ремонт рулевого управления", price: "от 500 ₽" },
      { name: "Ремонт подвески и трансмиссии", price: "от 800 ₽" },
      { name: "Замена сцепления", price: "от 700 ₽" },
      { name: "Ремонт АКПП", price: "от 900 ₽" },
      { name: "Замена ремня ГРМ", price: "от 500 ₽" },
      { name: "Ремонт выхлопной системы", price: "от 800 ₽" },
      { name: "Регулировка развал-схождения", price: "от 800 ₽" },
      { name: "Чистка топливной системы", price: "от 500 ₽" },
      { name: "Ремонт ходовой части", price: "от 400 ₽" },
      { name: "Чистка системы кондиционирования", price: "от 400 ₽" },
      { name: "Ремонт двигателя", price: "от 590 ₽" },
      { name: "Ремонт тормозной системы", price: "от 400 ₽" },
      { name: "Ремонт лёгкого коммерческого транспорта", price: "от 800 ₽" },
    ] as ServiceItem[],
  },
  {
    slug: "avtoelektrika",
    title: "Автоэлектрика",
    shortTitle: "Автоэлектрика",
    description:
      "Диагностика и ремонт электрооборудования: от поиска обрыва в проводке до программирования блоков управления.",
    heroNote: "Диагностика на дилерском уровне",
    image: withBase("/images/gallery/photo-9.jpg"),
    items: [
      { name: "Компьютерная диагностика" },
      { name: "Ремонт систем освещения" },
      { name: "Программирование блоков управления (ЭБУ)" },
      { name: "Ремонт стартеров и генераторов" },
      { name: "Замена аккумулятора" },
    ] as ServiceItem[],
  },
  {
    slug: "kuzovnoy-remont",
    title: "Кузовной ремонт",
    shortTitle: "Кузовной ремонт",
    description:
      "Восстановление геометрии кузова, покраска и рихтовка любой сложности с бесплатным осмотром и оценкой перед началом работ.",
    heroNote: "Бесплатный осмотр и оценка",
    image: withBase("/images/gallery/photo-2.jpg"),
    items: [
      { name: "Осмотр и диагностика кузова", price: "от 1 800 ₽" },
      { name: "Рихтовка без покраски" },
      { name: "Выправление и замена панелей" },
      { name: "Комплексная покраска кузова", price: "от 53 000 ₽" },
      { name: "Замена стёкол" },
      { name: "Ремонт и покраска бамперов" },
      { name: "Ремонт и замена дверей" },
      { name: "Ремонт капота" },
      { name: "Замена крыльев" },
      { name: "Ремонт крыши" },
      { name: "Восстановление геометрии кузова / замена рамы", price: "от 25 000 ₽" },
    ] as ServiceItem[],
  },
] as const;

export type PriceRow = { name: string; price: string };
export type PriceCategory = { title: string; rows: PriceRow[] };

export const priceList: PriceCategory[] = [
  {
    title: "Двигатель",
    rows: [
      { name: "Замена масла ДВС + масляного фильтра", price: "600 ₽" },
      { name: "Компьютерная диагностика ДВС", price: "1 000 ₽" },
      { name: "Замер компрессии ДВС, 4 цилиндра (без снятия инжектора)", price: "600–1200 ₽" },
      { name: "Замена охлаждающей жидкости", price: "1200–1500 ₽" },
      { name: "Замена переднего сальника двигателя", price: "1200–1500 ₽" },
      { name: "Замена заднего сальника коленвала", price: "4000–6000 ₽" },
      { name: "Замена прокладки клапанной крышки", price: "1 800 ₽" },
      { name: "Замена ремня кондиционера", price: "600 ₽" },
      { name: "Замена ремня гидроусилителя руля", price: "600 ₽" },
      { name: "Замена ремня генератора", price: "600 ₽" },
      { name: "Замена помпы", price: "2 000 ₽" },
      { name: "Замена термостата", price: "1600–1800 ₽" },
      { name: "Замена радиатора", price: "3 200 ₽" },
      { name: "Замена топливного фильтра", price: "800 ₽" },
      { name: "Замена воздушного фильтра двигателя", price: "400 ₽" },
    ],
  },
  {
    title: "Трансмиссия",
    rows: [
      { name: "Замена привода в сборе", price: "1 800 ₽" },
      { name: "Замена ШРУСа", price: "1 600 ₽" },
      { name: "Замена пыльника ШРУСа", price: "1 600 ₽" },
      { name: "Замена сальника привода", price: "2 000 ₽" },
      { name: "Замена сцепления", price: "6 000 ₽" },
      { name: "Замена ступицы в сборе", price: "1400–2600 ₽" },
      { name: "Замена масла АКПП (через установку)", price: "5 000 ₽" },
      { name: "Замена масла АКПП (частичная)", price: "3 000 ₽" },
    ],
  },
  {
    title: "Подвеска",
    rows: [
      { name: "Замена опоры шаровой (без снятия рычага)", price: "600–800 ₽" },
      { name: "Диагностика передней и задней подвески", price: "1 200 ₽" },
      { name: "Замена опоры шаровой (со снятием рычага)", price: "700–1400 ₽" },
      { name: "Замена нижнего рычага в сборе", price: "1200–1400 ₽" },
      { name: "Замена верхнего рычага в сборе", price: "1200–1400 ₽" },
      { name: "Замена амортизатора", price: "800–900 ₽" },
      { name: "Замена стойки стабилизатора", price: "600 ₽" },
      { name: "Замена втулок стабилизатора (2 шт.)", price: "600 ₽" },
      { name: "Регулировка углов установки колёс (одна ось)", price: "1 200 ₽" },
      { name: "Регулировка углов установки колёс (две оси)", price: "2 000 ₽" },
    ],
  },
  {
    title: "Рулевое управление",
    rows: [
      { name: "Замена рулевого наконечника", price: "600 ₽" },
      { name: "Замена рулевой тяги", price: "600 ₽" },
      { name: "Замена рулевой рейки", price: "4500–6000 ₽" },
      { name: "Замена насоса гидроусилителя", price: "2 500 ₽" },
      { name: "Замена жидкости ГУР", price: "800 ₽" },
    ],
  },
  {
    title: "Тормозная система",
    rows: [
      { name: "Замена тормозного диска со снятием ступицы", price: "3 800 ₽" },
      { name: "Замена тормозного диска без снятия ступицы + колодки", price: "1 000 ₽" },
      { name: "Диагностика износа тормозных колодок", price: "400 ₽" },
      { name: "Замена передних тормозных колодок", price: "800 ₽" },
      { name: "Замена суппорта", price: "800 ₽" },
      { name: "Замена тормозной жидкости", price: "1 200 ₽" },
    ],
  },
  {
    title: "Электрооборудование",
    rows: [
      { name: "Замена свечей", price: "600 ₽" },
      { name: "Замена высоковольтных проводов", price: "600 ₽" },
      { name: "Замена катушек зажигания", price: "600 ₽" },
      { name: "Замена генератора", price: "2 000 ₽" },
      { name: "Замена стартера", price: "1 800 ₽" },
      { name: "Замена насоса омывателя", price: "600 ₽" },
    ],
  },
  {
    title: "Кондиционер",
    rows: [
      { name: "Диагностика неисправностей кондиционера", price: "800 ₽" },
      { name: "Вакуумирование системы", price: "800 ₽" },
      { name: "Заправка кондиционера", price: "1 400 ₽" },
      { name: "Замена компрессора", price: "1 400 ₽" },
      { name: "Замена испарителя", price: "6 000 ₽" },
    ],
  },
];

export const promotions = [
  {
    title: "Диагностика ходовой — бесплатно",
    description:
      "Комплексная диагностика ходовой части без оплаты. Услуга предоставляется по предварительной записи и не суммируется с другими акциями.",
    cta: "Записаться на диагностику",
  },
  {
    title: "Программа лояльности «Звезда»",
    description:
      "Личный кабинет клиента и гибкая система скидок, которая снижает стоимость обслуживания автомобиля при повторных визитах.",
    cta: "Узнать об условиях",
  },
] as const;

export type Brand = { name: string; file: string };

export const brands: Brand[] = [
  { name: "BMW", file: "bmw.jpg" },
  { name: "Mercedes-Benz", file: "mercedes.jpg" },
  { name: "Audi", file: "audi.jpg" },
  { name: "Porsche", file: "porshe.jpg" },
  { name: "Lamborghini", file: "lamborgini.jpg" },
  { name: "Bentley", file: "bentley.jpg" },
  { name: "Land Rover", file: "landrover.jpg" },
  { name: "Lexus", file: "lexsus.jpg" },
  { name: "Toyota", file: "toyota.jpg" },
  { name: "Nissan", file: "nissan.jpg" },
  { name: "Mazda", file: "mazda.jpg" },
  { name: "Honda", file: "honda.jpg" },
  { name: "Subaru", file: "subaru.jpg" },
  { name: "Infiniti", file: "infinity.jpg" },
  { name: "Hummer", file: "hummer.jpg" },
  { name: "Jeep", file: "jeep.jpg" },
  { name: "Opel", file: "opel.jpg" },
  { name: "Renault", file: "reno.jpg" },
  { name: "Chevrolet", file: "chevrolet.jpg" },
  { name: "Kia", file: "kia.jpg" },
  { name: "Hyundai", file: "hunday.jpg" },
] as const;

export const brandModelHighlights = [
  { brand: "Porsche", models: "Macan, Panamera, Cayenne, Carrera, 911 GT" },
  { brand: "Nissan", models: "Almera, GT-R, Juke, Murano, Terrano, Qashqai, X-Trail" },
  { brand: "Renault", models: "Duster, Logan, Sandero, Koleos, Kaptur" },
  { brand: "Chevrolet", models: "Cruze, Lacetti, Aveo, Corvette, Camaro, Colorado" },
] as const;

export const insurancePartners = [
  { name: "СК Ergo", file: "ergo.jpg" },
  { name: "СК Абсолют", file: "absolut.jpg" },
  { name: "СК Гелиос", file: "gelios.jpg" },
  { name: "СК Ренессанс", file: "renaissance.jpg" },
  { name: "СК РЕСО", file: "reso.jpg" },
  { name: "СК Тинькофф", file: "tinkoff.jpg" },
  { name: "СК Росгосстрах", file: "rosgosstrakh.jpg" },
] as const;

export const certificates = [
  { title: "Сертификат соответствия", file: "certificate-conformity.jpg" },
  {
    title: "Свидетельство Национального реестра надёжных поставщиков",
    file: "certificate-reliable-suppliers.jpg",
  },
  { title: "Сертификат качества", file: "certificate-extra.jpg" },
] as const;

export const gallery = Array.from({ length: 12 }, (_, i) => ({
  src: withBase(`/images/gallery/photo-${i + 1}.jpg`),
  alt: `Автотехцентр «Звезда» — фото ${i + 1}`,
}));

// Реальные отзывы с Яндекс.Карт (yandex.ru/maps/org/zvezda/54461611639), даты и авторы сохранены как есть.
export const reviewsSummary = {
  rating: 4.4,
  ratingsCount: 495,
  reviewsCount: 213,
  categories: [
    { label: "Персонал", positive: 77 },
    { label: "Ремонт", positive: 77 },
    { label: "Время ожидания", positive: 71 },
    { label: "Запчасти", positive: 76 },
    { label: "Диагностика", positive: 71 },
  ],
};

export const reviews = [
  {
    author: "Гаджимурад Д.",
    date: "29 мая 2025",
    text: "Отличный сервис, обслуживаю там Шевроле Круз, быстро находят нужные запчасти, всегда на связи и показывают в WhatsApp этапы проведения ремонта, оповещают о всех нюансах работы заранее.",
  },
  {
    author: "Наталья С.",
    date: "19 мая",
    text: "Обслуживание как всегда — молодцы. Если есть какие-то сомнения — свяжутся, посоветуют. Обслуживаю машины частенько у них.",
  },
  {
    author: "Магомед Мухтаров",
    date: "18 апреля",
    text: "Отличный сервис для тех, у кого нет времени заниматься своей машиной, всё делается под ключ, есть и кузовной ремонт, всё просто и удобно.",
  },
  {
    author: "Аида Вердиева",
    date: "10 апреля",
    text: "Обратилась для замены масла. Как приехала — вежливо приняли. Порадовала зона ожидания, бесплатный кофе. Сделали быстро, осталась довольной.",
  },
  {
    author: "оксана",
    date: "21 мая 2025",
    text: "Хороший сервис. Всё сделали быстро и качественно, проблемы быстро устранили, теперь всё работает как надо. Цены приятно удивили.",
  },
  {
    author: "Катя Владимировна",
    date: "1 августа 2025",
    text: "Машину обслуживаю только в этом месте, всё объяснят, персонал отличный, делают гарантию на работу и, что очень приятно, постоянным клиентам делают скидки.",
  },
] as const;

export const navLinks = [
  { href: "/uslugi", label: "Услуги" },
  { href: "/price", label: "Прайс-лист" },
  { href: "/akcii", label: "Акции" },
  { href: "/galereya", label: "Галерея" },
  { href: "/o-kompanii", label: "О компании" },
  { href: "/kontakty", label: "Контакты" },
] as const;

export const carModelOptions = [
  "BMW", "Mercedes-Benz", "Audi", "Porsche", "Lamborghini", "Bentley", "Land Rover",
  "Lexus", "Toyota", "Nissan", "Mazda", "Honda", "Subaru", "Infiniti", "Hummer",
  "Jeep", "Opel", "Renault", "Chevrolet", "Kia", "Hyundai", "Другая марка",
] as const;

export const serviceOptions = [
  "Слесарный ремонт",
  "Автоэлектрика",
  "Кузовной ремонт",
  "Компьютерная диагностика",
  "Сход-развал",
  "Шиномонтаж",
  "Детейлинг",
  "Другое / не знаю",
] as const;
