/**
 * Раскладывает отобранные фотографии inunica.ru в public/ и пережимает их
 * в WebP одной ширины на роль.
 *
 * Одна ширина, а не набор: экспорт статический (`images.unoptimized`), поэтому
 * next/image отдаёт один src без srcSet — лишние размеры просто утяжелили бы
 * репозиторий, ничего не дав браузеру. WebP поддерживают все актуальные
 * браузеры, так что фолбэки тоже не нужны.
 *
 * Источник — scripts/import/assets-orig (локальные копии, скачанные
 * fetch_assets.mjs). Соответствие «исходник → назначение» задано явно: имена
 * файлов у Tilda нечитаемые, и держать эту таблицу в коде честнее, чем
 * угадывать по маске.
 */
import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SRC = path.join(ROOT, 'scripts/import/assets-orig');
const DST = path.join(ROOT, 'public');

/** Ширина и пропорция кадра под каждую роль на странице. */
const PROFILE = {
  hero:      { width: 1800, ratio: 3 / 2 },
  interior:  { width: 1440, ratio: 16 / 10 },
  doctor:    { width: 900,  ratio: 3 / 4 },
  procedure: { width: 1200, ratio: 4 / 3 },
  equipment: { width: 1100, ratio: 4 / 3 },
  document:  { width: 1100, ratio: null },
  brand:     { width: 900,  ratio: 3 / 2 },
};

/** [исходник, назначение без расширения, профиль] */
const PLAN = [
  // Интерьер и пространство
  ['6662-626-1.jpg',                     'clinic/reception',     'hero'],
  ['3561-646-4F6A2243_HDR_Panoram.jpg',  'clinic/room-hardware', 'interior'],
  ['3038-306-4F6A2129_HDR.jpg',          'clinic/room-care',     'interior'],
  ['3063-623-4F6A2390_HDR.jpg',          'clinic/room-mirror',   'interior'],
  ['3662-373-4F6A2058_HDR_Panoram.jpg',  'clinic/room-laser',    'interior'],
  ['3934-633-DSC_8153-min_11zon.jpg',    'clinic/kids',          'interior'],

  // Врачи
  ['3964-326-6_1.jpg',                   'doctors/timchenko',    'doctor'],
  ['3139-636-IMG_4073_.jpg',             'doctors/rubtsova',     'doctor'],
  ['6639-643-4F6A2330.jpg',              'doctors/svistelnikov', 'doctor'],

  // Оборудование
  ['6337-656-4F6A2261_HDR.jpg',          'equipment/plasma',     'equipment'],
  ['6265-333-L60A3443-min.jpg',          'equipment/in-motion',  'equipment'],
  ['3436-393-maxresdefault.jpg',         'equipment/gigi',       'equipment'],

  // Процедуры
  ['3265-653-IMG_2145.jpg',              'procedures/laser-1',       'procedure'],
  ['3266-343-IMG_2184.jpg',              'procedures/laser-2',       'procedure'],
  ['3030-613-photo_2023-08-08_12-.jpg',  'procedures/care-1',        'procedure'],
  ['3137-393-photo_2023-08-08_12-.jpg',  'procedures/care-2',        'procedure'],
  ['3163-663-1648054108_2-kartink.jpg',  'procedures/massage',       'procedure'],
  ['3763-313-1648054259_77-kartin.jpg',  'procedures/hardware-face', 'procedure'],
  ['6165-363-2022-06-16_19-16-21_.jpg',  'procedures/hardware-body', 'procedure'],
  ['6464-656-photo_2022-03-17_18-.jpg',  'procedures/plasma-face',   'procedure'],

  // Бренд
  ['3261-366-IMG_6534_.jpg',             'brand/kit',            'brand'],
  ['6437-636-_-1.jpg',                   'brand/gift',           'brand'],

  // Документы: лицензия, санэпидзаключение, РУ на лазер
  ['3233-656-photo_2022-03-17_18-.jpg',  'documents/license',    'document'],
  ['6635-326-______1.jpg',               'documents/sanitary',   'document'],
  ['3532-396-_IN_MOTION__page-000.jpg',  'documents/in-motion-ru', 'document'],
];

let made = 0, bytesIn = 0, bytesOut = 0;
const missing = [];

for (const [src, dest, profileName] of PLAN) {
  const from = path.join(SRC, src);
  if (!fs.existsSync(from)) { missing.push(src); continue; }

  const { width: w, ratio } = PROFILE[profileName];
  const meta = await sharp(from).metadata();
  bytesIn += fs.statSync(from).size;
  fs.mkdirSync(path.join(DST, path.dirname(dest)), { recursive: true });

  // Не растягиваем: если исходник уже нужной ширины, берём его настоящую.
  const width = Math.min(w, meta.width);
  let pipe = sharp(from).rotate();
  pipe = ratio
    // position: 'attention' — sharp сам держит в кадре самую контрастную
    // область, а не геометрический центр: на портретах это лицо.
    ? pipe.resize(width, Math.round(width / ratio), { fit: 'cover', position: 'attention' })
    : pipe.resize(width, null, { withoutEnlargement: true });

  const out = path.join(DST, `${dest}.webp`);
  await pipe.webp({ quality: 78 }).toFile(out);
  bytesOut += fs.statSync(out).size;
  made++;
}

console.log(`создано файлов: ${made}`);
console.log(`исходники ${(bytesIn / 1e6).toFixed(1)} МБ → выдача ${(bytesOut / 1e6).toFixed(1)} МБ`);
if (missing.length) console.log('НЕ НАЙДЕНЫ:', missing.join(', '));
