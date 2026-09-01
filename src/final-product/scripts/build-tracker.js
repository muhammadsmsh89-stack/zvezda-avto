// Builds 05_LEAD-TRACKER.xlsx: 01_LEADS (CRM) + 02_DASHBOARD (funnel metrics) + 03_SETTINGS (dropdown sources).
const path = require('path');
const ExcelJS = require('exceljs');

const ACCENT = 'FF0057FF';
const INK = 'FF111111';
const BG_SOFT = 'FFE8EEFF';
const LINE = 'FFDEDCD5';

const STATUSES = ['NEW', 'READY', 'CONTACTED', 'REPLIED', 'INTERESTED', 'DISCOVERY', 'OFFER SENT', 'FOLLOW-UP', 'WON', 'LOST', 'NOT A FIT'];
const PRIORITIES = ['A', 'B', 'C'];
const CHANNELS = ['Telegram', 'WhatsApp', 'Instagram', 'VK', 'Email', 'Phone', 'Marketplace', 'Other'];
const MESSAGE_VERSIONS = ['A', 'B', 'C'];
const SOURCES = ['Google Maps', 'Яндекс Карты', '2GIS', 'Instagram', 'VK', 'Telegram', 'LinkedIn', 'Avito', 'Profi', 'Kwork', 'Бизнес-каталог', 'Знакомые / рекомендация', 'Фриланс-биржа (другая)', 'Другое'];
const SERVICES = ['Landing Page Creation', 'Website Redesign', 'Commercial Presentations', 'Lead Magnets / PDF Guides', 'Telegram Content Packs', 'Short-Form Video Scripts', 'Product Descriptions', 'Social Media Content Packs', 'Competitor Research', 'SOP / Process Documentation', 'Email Sequences', 'Visual Content / Ad Creatives', 'Short-Form Video Editing', 'Basic AI Automation Setup', 'Local Business Digital Audit'];

// [заголовок колонки (RU), ширина, внутренний ключ (EN, для формул/кода)]
const COLUMNS = [
  ['ID', 8, 'ID'], ['Компания', 22, 'Company'], ['Ниша', 16, 'Niche'], ['Город / рынок', 14, 'City / Market'], ['Сайт / профиль', 22, 'Website / Profile'],
  ['Контактное лицо', 16, 'Contact Person'], ['Канал связи', 14, 'Contact Channel'], ['Контакт', 18, 'Contact'], ['Источник', 16, 'Source'],
  ['Наблюдение', 26, 'Observed Signal'], ['Возможная проблема', 26, 'Possible Problem'], ['Почему подходит мой оффер', 24, 'Why My Offer Fits'], ['Сигнал момента', 18, 'Timing Signal'],
  ['Need (0–2)', 8, 'Need Score'], ['Buying Capacity (0–2)', 8, 'Buying Capacity Score'], ['Contactability (0–2)', 8, 'Contactability Score'], ['Fit (0–2)', 8, 'Fit Score'], ['Timing (0–2)', 8, 'Timing Score'],
  ['Итоговый Lead Score', 9, 'Total Lead Score'], ['Приоритет', 8, 'Priority'],
  ['Дата находки', 12, 'Date Found'], ['Дата обращения', 12, 'Date Contacted'], ['Версия сообщения', 10, 'Message Version'], ['Статус', 12, 'Status'],
  ['Последний ответ', 12, 'Last Reply'], ['Дата follow-up', 12, 'Follow-Up Date'], ['Следующее действие', 26, 'Next Action'],
  ['Кто порекомендовал', 16, 'Referred By'], ['Кому порекомендовал(а)', 16, 'Referral Given To'], ['Заметки', 26, 'Notes'],
];
// Column letters A..AD
const LETTERS = COLUMNS.map((_, i) => colLetter(i + 1));
function colLetter(n) {
  let s = '';
  while (n > 0) { const m = (n - 1) % 26; s = String.fromCharCode(65 + m) + s; n = Math.floor((n - 1) / 26); }
  return s;
}
// L — доступ по внутреннему EN-ключу (используется в формулах), заголовки в файле — на русском.
const L = Object.fromEntries(COLUMNS.map((c, i) => [c[2], LETTERS[i]]));
const DATA_LAST_ROW = 500;

function styleHeader(ws) {
  ws.getRow(1).eachCell((cell) => {
    cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 9 };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: INK } };
    cell.alignment = { vertical: 'middle', wrapText: true };
  });
  ws.views = [{ state: 'frozen', ySplit: 1 }];
}

function buildLeadsSheet(wb) {
  const ws = wb.addWorksheet('01_LEADS');
  ws.columns = COLUMNS.map(([header, width]) => ({ header, width }));
  // (header — русский; сопоставление с формулами идёт через L[EN-ключ], см. массив COLUMNS выше)
  styleHeader(ws);
  ws.autoFilter = { from: 'A1', to: `${L.Notes}1` };

  // Total Lead Score formula + conditional/dropdown validations for all data rows.
  for (let r = 2; r <= DATA_LAST_ROW; r += 1) {
    ws.getCell(`${L['Total Lead Score']}${r}`).value = {
      formula: `IF(COUNT(${L['Need Score']}${r}:${L['Timing Score']}${r})=0,"",SUM(${L['Need Score']}${r}:${L['Timing Score']}${r}))`,
    };
    ws.getCell(`${L['Date Found']}${r}`).numFmt = 'yyyy-mm-dd';
    ws.getCell(`${L['Date Contacted']}${r}`).numFmt = 'yyyy-mm-dd';
    ws.getCell(`${L['Last Reply']}${r}`).numFmt = 'yyyy-mm-dd';
    ws.getCell(`${L['Follow-Up Date']}${r}`).numFmt = 'yyyy-mm-dd';

    ws.getCell(`${L.Priority}${r}`).dataValidation = { type: 'list', allowBlank: true, formulae: [`"${PRIORITIES.join(',')}"`] };
    ws.getCell(`${L.Status}${r}`).dataValidation = { type: 'list', allowBlank: true, formulae: [`"${STATUSES.join(',')}"`] };
    ws.getCell(`${L['Contact Channel']}${r}`).dataValidation = { type: 'list', allowBlank: true, formulae: [`"${CHANNELS.join(',')}"`] };
    ws.getCell(`${L['Message Version']}${r}`).dataValidation = { type: 'list', allowBlank: true, formulae: [`"${MESSAGE_VERSIONS.join(',')}"`] };
    ws.getCell(`${L.Source}${r}`).dataValidation = { type: 'list', allowBlank: true, formulae: [`"${SOURCES.join(',')}"`] };
    for (const scoreCol of ['Need Score', 'Buying Capacity Score', 'Contactability Score', 'Fit Score', 'Timing Score']) {
      ws.getCell(`${L[scoreCol]}${r}`).dataValidation = { type: 'list', allowBlank: true, formulae: ['"0,1,2"'] };
    }
  }

  // Conditional formatting: overdue follow-up (date in the past, status still active) -> red text.
  const activeStatuses = STATUSES.filter((s) => !['WON', 'LOST', 'NOT A FIT'].includes(s));
  ws.addConditionalFormatting({
    ref: `${L['Follow-Up Date']}2:${L['Follow-Up Date']}${DATA_LAST_ROW}`,
    rules: [{
      type: 'expression',
      formulae: [`AND(${L['Follow-Up Date']}2<>"",${L['Follow-Up Date']}2<TODAY(),NOT(OR(${L.Status}2="WON",${L.Status}2="LOST",${L.Status}2="NOT A FIT")))`],
      style: { font: { color: { argb: 'FFB00020' }, bold: true } },
    }],
  });
  // Priority visual cue (soft fill for A leads).
  ws.addConditionalFormatting({
    ref: `${L.Priority}2:${L.Priority}${DATA_LAST_ROW}`,
    rules: [{ type: 'expression', formulae: [`${L.Priority}2="A"`], style: { fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: BG_SOFT } }, font: { bold: true } } }],
  });

  // Demo rows — clearly marked, fictional businesses.
  const demoRows = [
    ['DEMO-1', 'DEMO — Стоматология «Северная» (удалить)', 'Стоматология', 'Новосибирск', 'instagram.com/demo1', 'Анна', 'Instagram', '@demo_dental', 'Instagram', 'Активный Instagram, нет сайта с записью', 'Нет страницы с услугами и формой записи', 'Лендинг с услугами и записью', 'Анонс нового врача на этой неделе', 2, 1, 2, 2, 1, null, 'A', new Date(), new Date(), 'A', 'CONTACTED', null, addDays(3), 'Follow-up через 2 дня', '', '', 'DEMO — удалить перед использованием'],
    ['DEMO-2', 'DEMO — Детейлинг «Глянец» (удалить)', 'Детейлинг', 'Москва', 'vk.com/demo2', 'Игорь', 'VK', 'vk.com/demo2_msg', 'VK', 'Много отзывов, сайта нет', 'Заявки только через директ', 'Лендинг с портфолио работ', '', 1, 2, 1, 2, 0, null, 'B', addDays(-5), null, '', 'NEW', null, null, 'Написать первое сообщение', '', '', 'DEMO — удалить перед использованием'],
    ['DEMO-3', 'DEMO — Эксперт по маникюру (удалить)', 'Бьюти', 'Санкт-Петербург', 'instagram.com/demo3', 'Мария', 'Instagram', '@demo_nails', 'Instagram', 'Снимает Reels, слабый хук', 'Зрители не досматривают ролики', '5 сценариев с сильным хуком', '', 2, 1, 2, 2, 2, null, 'A', addDays(-2), addDays(-1), 'B', 'REPLIED', addDays(-1), addDays(2), 'Провести discovery', '', '', 'DEMO — удалить перед использованием'],
    ['DEMO-4', 'DEMO — Онлайн-школа «Рост» (удалить)', 'Образование', 'Екатеринбург', 't.me/demo4', 'Павел', 'Telegram', '@demo_edu', 'Telegram', 'База подписчиков, нет лид-магнита', 'Нет входного бесплатного материала', 'PDF-гайд как лид-магнит', '', 1, 2, 2, 1, 1, null, 'B', addDays(-10), addDays(-8), 'A', 'FOLLOW-UP', addDays(-8), addDays(-1), 'Отправить follow-up #2', '', '', 'DEMO — удалить перед использованием'],
    ['DEMO-5', 'DEMO — Кофейня «Утро» (удалить)', 'Кафе', 'Казань', 'instagram.com/demo5', 'Светлана', 'Instagram', '@demo_coffee', 'Instagram', 'Заброшенный Telegram-канал', 'Нет публикаций 3 недели', 'Контент-план на месяц', 'Ищут бариста — набор команды', 2, 1, 1, 2, 2, null, 'A', addDays(-1), null, '', 'NEW', null, null, 'Найти контакт и написать', '', '', 'DEMO — удалить перед использованием'],
  ];
  demoRows.forEach((row, i) => {
    const r = i + 2;
    COLUMNS.forEach(([header], ci) => {
      const val = row[ci];
      if (val !== null && val !== undefined && val !== '') ws.getCell(`${LETTERS[ci]}${r}`).value = val;
    });
  });

  return ws;
}

function addDays(n) {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d;
}

function buildDashboardSheet(wb) {
  const ws = wb.addWorksheet('02_DASHBOARD');
  ws.columns = [{ width: 26 }, { width: 14 }, { width: 60 }];
  const LEADS = "'01_LEADS'";
  const rng = (col) => `${LEADS}!$${L[col]}$2:$${L[col]}$${DATA_LAST_ROW}`;

  const safeDiv = (num, den) => `IF(${den}=0,"0%",TEXT(${num}/${den},"0%"))`;

  const rows = [
    ['ПОКАЗАТЕЛЬ', 'ЗНАЧЕНИЕ', 'КАК СЧИТАЕТСЯ'],
    ['Всего лидов', { formula: `COUNTA(${rng('ID')})` }, 'непустые строки в столбце ID'],
    ['Лиды A', { formula: `COUNTIF(${rng('Priority')},"A")` }, 'Приоритет = A'],
    ['Лиды B', { formula: `COUNTIF(${rng('Priority')},"B")` }, 'Приоритет = B'],
    ['Лиды C', { formula: `COUNTIF(${rng('Priority')},"C")` }, 'Приоритет = C'],
    ['Написано (Contacted)', { formula: `COUNTA(${rng('Date Contacted')})` }, 'заполнена «Дата обращения»'],
    ['Ответили (Replies)', { formula: `COUNTA(${rng('Last Reply')})` }, 'заполнен «Последний ответ» (хотя бы раз ответили)'],
    ['Заинтересованы (Interested и дальше)', { formula: `COUNTIF(${rng('Status')},"INTERESTED")+COUNTIF(${rng('Status')},"DISCOVERY")+COUNTIF(${rng('Status')},"OFFER SENT")+COUNTIF(${rng('Status')},"WON")` }, 'текущий статус INTERESTED и дальше по воронке'],
    ['Обсуждение (Discovery и дальше)', { formula: `COUNTIF(${rng('Status')},"DISCOVERY")+COUNTIF(${rng('Status')},"OFFER SENT")+COUNTIF(${rng('Status')},"WON")` }, 'текущий статус DISCOVERY и дальше'],
    ['Офферы отправлены (или Won)', { formula: `COUNTIF(${rng('Status')},"OFFER SENT")+COUNTIF(${rng('Status')},"WON")` }, 'текущий статус OFFER SENT или WON'],
    ['Закрыто (Won)', { formula: `COUNTIF(${rng('Status')},"WON")` }, 'текущий статус WON'],
    ['Потеряно (Lost)', { formula: `COUNTIF(${rng('Status')},"LOST")` }, 'текущий статус LOST'],
    ['Follow-up сегодня и просрочен', {
      formula: `SUMPRODUCT((${rng('Follow-Up Date')}<>"")*(${rng('Follow-Up Date')}<=TODAY())*(${rng('Status')}<>"WON")*(${rng('Status')}<>"LOST")*(${rng('Status')}<>"NOT A FIT"))`,
    }, '«Дата follow-up» наступила/прошла, сделка ещё активна'],
  ];

  rows.forEach((r, i) => {
    const row = ws.addRow(r);
    if (i === 0) row.eachCell((c) => { c.font = { bold: true, color: { argb: 'FFFFFFFF' } }; c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: INK } }; });
  });
  ws.views = [{ state: 'frozen', ySplit: 1 }];

  ws.addRow([]);
  const funnelHeaderRow = ws.addRow(['МЕТРИКА ВОРОНКИ', 'ЗНАЧЕНИЕ', 'ФОРМУЛА (по строкам выше)']);
  funnelHeaderRow.eachCell((c) => { c.font = { bold: true, color: { argb: 'FFFFFFFF' } }; c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: ACCENT } }; });

  const B = (n) => `$B$${n}`; // metric rows are 2..13 as added above (row1 header)
  // Row map: 2 Total,3 A,4 B,5 C,6 Contacted,7 Replies,8 Interested,9 Discovery,10 Offers,11 Won,12 Lost,13 FollowUpsDue
  ws.addRow(['Доля ответов (Reply Rate)', { formula: `IF(${B(6)}=0,"0%",TEXT(${B(7)}/${B(6)},"0%"))` }, 'Ответили / Написано']);
  ws.addRow(['Доля позитивных ответов (Positive Reply Rate)', { formula: `IF(${B(6)}=0,"0%",TEXT(${B(8)}/${B(6)},"0%"))` }, 'Заинтересованы (и дальше) / Написано']);
  ws.addRow(['Доля обсуждений (Discussion Rate)', { formula: `IF(${B(8)}=0,"0%",TEXT(${B(9)}/${B(8)},"0%"))` }, 'Обсуждение (и дальше) / Заинтересованы (и дальше)']);
  ws.addRow(['Доля офферов (Offer Rate)', { formula: `IF(${B(9)}=0,"0%",TEXT(${B(10)}/${B(9)},"0%"))` }, 'Офферы (или Won) / Обсуждение (и дальше)']);
  ws.addRow(['Доля закрытых сделок (Close Rate)', { formula: `IF(${B(10)}=0,"0%",TEXT(${B(11)}/${B(10)},"0%"))` }, 'Won / Офферы (или Won)']);

  ws.addRow([]);
  ws.addRow(['Эти показатели — инструмент поиска слабого места собственной воронки, не сравнение с «нормальными» цифрами рынка.']);
  return ws;
}

function buildSettingsSheet(wb) {
  const ws = wb.addWorksheet('03_SETTINGS');
  ws.columns = [{ width: 22 }, { width: 22 }, { width: 22 }, { width: 24 }, { width: 26 }];
  const header = ws.addRow(['Статусы', 'Приоритеты', 'Каналы', 'Версии сообщений', 'Источники']);
  header.eachCell((c) => { c.font = { bold: true, color: { argb: 'FFFFFFFF' } }; c.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: INK } }; });
  const maxLen = Math.max(STATUSES.length, PRIORITIES.length, CHANNELS.length, MESSAGE_VERSIONS.length, SOURCES.length);
  for (let i = 0; i < maxLen; i += 1) {
    ws.addRow([STATUSES[i] || '', PRIORITIES[i] || '', CHANNELS[i] || '', MESSAGE_VERSIONS[i] || '', SOURCES[i] || '']);
  }
  ws.addRow([]);
  ws.addRow(['Услуги (каталог Module 2, справочно):']);
  SERVICES.forEach((s) => ws.addRow(['', '', '', '', s]));
  ws.getRow(maxLen + 3).font = { italic: true, color: { argb: 'FF4A4A46' } };
  return ws;
}

async function main() {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'AI MONEY START';
  wb.created = new Date();
  wb.calcProperties.fullCalcOnLoad = true;
  buildLeadsSheet(wb);
  buildDashboardSheet(wb);
  buildSettingsSheet(wb);

  const outPath = path.resolve(process.argv[2] || '../../dist/AI-MONEY-START/05_LEAD-TRACKER.xlsx');
  await wb.xlsx.writeFile(outPath);
  console.log('Built:', outPath);
}

main().catch((e) => { console.error(e); process.exit(1); });
