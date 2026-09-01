const {
  page, h1, h2, h3, p, label, checklist, formula, card, table,
  fieldBlock, fieldBox, wrapDocument,
} = require('../scripts/render-helpers');

function cover() {
  return `<div class="page" id="wb-cover" style="display:flex;flex-direction:column;justify-content:space-between;min-height:257mm;">
    <div style="margin-top:60mm">
      ${label('AI MONEY START')}
      <h1 class="cover-title">WORK<br>BOOK<span class="cover-accent-dot">.</span></h1>
      <p class="cover-sub">Guide = понять. Workbook = сделать. Здесь ты не читаешь — здесь заполняешь.</p>
    </div>
    <div>${label('02 · WORKBOOK')}</div>
  </div>`;
}

function sectionHeader(num, title, sub) {
  return `${label(`${num} — ${sub || ''}`)}${h1(title)}`;
}

// 00 — START
function s00() {
  return page('wb-00', `
    ${sectionHeader('00', 'Start', 'Точка старта')}
    ${fieldBlock('Сегодняшняя дата')}
    ${fieldBlock('Сколько часов в день я готов(а) уделять')}
    ${fieldBlock('Дата моего Дня 30')}
    ${fieldBox('Что мешало мне начать раньше', 30)}
    ${h2('30-Day Commitment')}
    ${p('До [дата] я тестирую [услуга]. Я не обязан(а) заниматься этим всю жизнь. Моя задача — провести честный рыночный эксперимент.')}
    ${checklist(['создать 3 кейса', 'собрать предложение (оффер + цена)', 'найти минимум 50 подходящих лидов', 'начать outreach', 'собрать реальные реакции рынка'])}
    ${fieldBlock('Подпись')}${fieldBlock('Дата')}
  `);
}

// 01 — SERVICE
function s01() {
  const fitQuestions = [
    'Мне нравится визуальная работа', 'Мне нравится писать тексты', 'Мне интересно исследовать информацию',
    'Мне комфортно с техническими настройками', 'Мне легко даётся общение с незнакомыми людьми',
    'У меня есть терпение доводить задачу до конца', 'Я обращаю внимание на детали',
    'Я хочу увидеть первый результат быстро', 'Я готов(а) учиться новому в процессе',
    'Мне некомфортно, но я готов(а) писать бизнесу первым', 'У меня есть ноутбук/компьютер',
    'Мне интересна тема маркетинга и продаж', 'Мне интересен дизайн', 'Мне интересно выстраивать структуру и логику', 'Мне интересно видео как формат',
  ];
  return page('wb-01', `
    ${sectionHeader('01', 'Service', 'Выбор услуги')}
    ${h2('Service Fit Test')}
    ${p('Оцени каждое утверждение: 0 = нет, 1 = иногда, 2 = да.')}
    ${table({ headers: ['#', 'Утверждение', '0–2'], rows: fitQuestions.map((q, i) => [String(i + 1), q, '']) })}
    ${h2('Decision Matrix')}
    ${table({
    headers: ['Критерий (1–5)', 'Service A', 'Service B', 'Service C'],
    rows: [
      ['Мне интересно', '', '', ''], ['Могу сделать кейс за 3 дня', '', '', ''],
      ['Понимаю покупателя', '', '', ''], ['Могу найти 50 потенциальных клиентов', '', '', ''],
      ['Могу показать результат', '', '', ''], ['Понятен deliverable', '', '', ''],
      ['AI ускоряет работу', '', '', ''], ['Готов(а) делать это 30 дней', '', '', ''],
      ['TOTAL SCORE', '', '', ''],
    ],
  })}
    ${h2('Primary + Backup Service')}
    ${fieldBlock('MY PRIMARY SERVICE')}${fieldBlock('I SELL')}${fieldBlock('TO')}${fieldBlock('THE CLIENT GETS')}
    ${fieldBlock('THE PROBLEM I SOLVE')}${fieldBlock('AI HELPS ME WITH')}${fieldBlock('I STILL NEED TO LEARN')}
    ${fieldBlock('MY FIRST PORTFOLIO PROJECT WILL BE')}${fieldBlock('WHERE I WILL FIND CLIENTS')}
    ${fieldBlock('MY BACKUP SERVICE')}${fieldBlock('WHY IT IS BACKUP')}
  `);
}

// 02 — SKILL
function s02() {
  return page('wb-02', `
    ${sectionHeader('02', 'Skill', '3-Day Skill Sprint')}
    ${h2('Reference Analysis Cards (×3)')}
    ${[1, 2, 3].map((n) => `
      ${h3(`Референс #${n}`)}
      ${fieldBlock('Источник')}${fieldBlock('What works')}${fieldBlock('Structure')}
      ${fieldBlock('Visual / writing pattern')}${fieldBlock('CTA / business purpose')}
      ${fieldBlock('Что я взял(а) бы как принцип')}${fieldBlock('Что НЕ буду копировать напрямую')}
    `).join('')}
    ${h2('Quality Checklist Builder')}
    ${table({ headers: ['#', 'Обязательный пункт качества'], rows: [1, 2, 3, 4, 5].map((n) => [String(n), '']) })}
    ${h2('Rebuild Review')}
    ${checklist(['Я взял(а) структуру/принцип, а не текст и визуал целиком', 'Тема/ниша в моём rebuild — другая, не оригинальная', 'Я могу объяснить, что именно повторил(а) и зачем', 'Я не выдаю rebuild за собственный оригинальный проект'])}
    ${h2('Practice Brief (День 4)')}
    ${fieldBlock('Ниша клиента')}${fieldBlock('Цель клиента')}${fieldBox('Ограничения', 25)}
    ${h2('Skill Card')}
    ${fieldBlock('PRIMARY SERVICE')}${fieldBlock('MY STARTER SCOPE')}${fieldBox('I CAN CURRENTLY DO', 25)}
    ${fieldBox('I CANNOT YET DO', 25)}${fieldBlock('MY WORKFLOW')}${fieldBlock('MY TOOLS')}${fieldBlock('MY DELIVERY FORMAT')}${fieldBlock('MY NEXT SKILL TO IMPROVE')}
  `);
}

// 03 — PORTFOLIO
function s03() {
  return page('wb-03', `
    ${sectionHeader('03', 'Portfolio', '3-Case Portfolio Sprint')}
    ${[1, 2, 3].map((n) => `
      ${h3(`Case Brief #${n}`)}
      ${fieldBlock('Service')}${fieldBlock('Business type')}${fieldBlock('Real or fictional business')}
      ${fieldBlock('Target audience')}${fieldBlock('Main problem')}${fieldBlock('Project goal')}
      ${fieldBlock('Deliverable')}${fieldBlock('What I want this case to prove')}
    `).join('')}
    ${h2('Case Diversity Matrix')}
    ${table({
    headers: ['', 'Case 1', 'Case 2', 'Case 3'],
    rows: ['Niche', 'Audience', 'Problem', 'Deliverable', 'Style', 'Business Goal', 'Complexity', 'Main Skill Demonstrated']
      .map((r) => [r, '', '', '']),
  })}
    ${h2('Case Study Builder (на каждый из 3 кейсов)')}
    ${fieldBlock('01 Title')}${fieldBlock('02 Status (Concept Project)')}${fieldBlock('03 Client Type')}
    ${fieldBox('04 Challenge', 20)}${fieldBlock('05 Goal')}${fieldBox('06 Approach', 20)}
    ${fieldBlock('07 Deliverable')}${fieldBox('08 Key Decisions', 20)}${fieldBlock('09 What This Case Demonstrates')}
    ${fieldBlock('Project Outcome (не Business Result)')}
    ${h2('Portfolio Scorecard (0–2 по пункту, самопроверка)')}
    ${table({
    headers: ['Пункт', '0–2'],
    rows: ['Clear Service', 'Clear Audience', 'Clear Problem', 'Finished Deliverable', 'Visual / Text Quality',
      'Business Logic', 'Case Explanation', 'No Fake Claims', 'Easy to View', 'Consistent Presentation',
      'Different From Other Cases', 'Ready to Send'].map((r) => [r, '']),
  })}
    ${h2('30-Second Pitch')}
    ${fieldBlock('1 предложение')}${fieldBox('20–30 секунд версия', 30)}${fieldBox('Версия для сообщения клиенту', 20)}
  `);
}

// 04 — OFFER
function s04() {
  return page('wb-04', `
    ${sectionHeader('04', 'Offer', 'Offer + Pricing')}
    ${h2('Client Focus Builder')}
    ${fieldBlock('Service')}${fieldBlock('Client type')}${fieldBlock('Niche')}${fieldBlock('Business size')}
    ${fieldBlock('What they sell')}${fieldBlock('Who their customer is')}${fieldBlock('Common problem')}
    ${fieldBlock('Why my service fits')}${fieldBlock('Where I can find these clients')}
    ${h2('Scope Builder')}
    ${fieldBlock('Project')}${fieldBox('Included', 25)}${fieldBox('Not included', 25)}
    ${fieldBlock('Number of revisions')}${fieldBlock('Client must provide')}${fieldBlock('I will provide')}
    ${fieldBlock('Final delivery')}${fieldBlock('Deadline')}
    ${h2('Revision Policy')}
    ${fieldBlock('Rounds included')}${fieldBox('Что считается новым scope', 20)}
    ${h2('Price Builder')}
    ${table({ headers: ['Фактор', 'Заметка'], rows: ['Base scope', 'Complexity', 'Deadline', 'Revisions', 'Additional deliverables', 'Experience / proof', 'Client context'].map((r) => [r, '']) })}
    ${h2('Package Builder')}
    ${table({
    headers: ['', 'STARTER', 'CORE', 'PLUS'],
    rows: ['For', 'Includes', 'Timeline', 'Revisions', 'Price'].map((r) => [r, '', '', '']),
  })}
    ${h2('Offer Builder')}
    ${fieldBlock('My service')}${fieldBlock('My client')}${fieldBlock('The problem / task')}${fieldBlock('Deliverable')}
    ${fieldBlock('Timeline')}${fieldBlock('Prepayment')}${fieldBox('Not included', 20)}
    ${h2('One-Sentence Offer')}
    ${fieldBox('«Я [DELIVERABLE] для [CLIENT TYPE], чтобы [TASK]. В работу входит [KEY SCOPE].»', 25)}
  `);
}

// 05 — LEADS
function s05() {
  return page('wb-05', `
    ${sectionHeader('05', 'Leads', 'Lead System')}
    ${h2('ICP Builder')}
    ${fieldBlock('My service')}${fieldBlock('Niche')}${fieldBlock('Business type')}${fieldBlock('Location')}
    ${fieldBlock('Business size')}${fieldBlock('What they sell')}${fieldBlock('Typical customer')}
    ${fieldBlock('Why this business may need my service')}${fieldBlock('Visible signals')}${fieldBlock('Disqualifiers')}
    ${fieldBlock('Where I can find them')}${fieldBlock('How I can contact them')}
    ${h2('Must Have / Nice to Have')}
    ${table({ headers: ['MUST HAVE', 'NICE TO HAVE'], rows: [['service fit', 'сильный timing signal'], ['business exists / active', 'идеальный прямой контакт'], ['contact', 'крупный соцаккаунт'], ['plausible need', 'очевидная проблема']] })}
    ${h2('Economic Fit Check')}
    ${fieldBlock('Что продаёт клиент')}${fieldBlock('Примерный order value (публично видимый)')}${fieldBlock('Насколько digital presence важна для продажи')}
    ${h2('Channel Selector')}
    ${fieldBlock('Primary channel 1')}${fieldBlock('Primary channel 2')}${fieldBlock('Backup channel')}
    ${h2('Lead Research Card (для A-лидов)')}
    ${fieldBlock('Company')}${fieldBlock('What they sell')}${fieldBlock('Why they fit')}${fieldBlock('Observed signal')}
    ${fieldBlock('Possible problem')}${fieldBlock('Why now')}${fieldBlock('My service fit')}${fieldBlock('Best contact')}
    ${fieldBlock('Personalization hook')}${fieldBlock('Source')}
    ${h2('First 15 Planner')}
    ${table({ headers: ['#', 'Company', 'Score', 'A/B/C', 'Contact', 'I noticed'], rows: Array.from({ length: 15 }, (_, i) => [String(i + 1), '', '', '', '', '']) })}
    ${p('Полная CRM (50 лидов, статусы, follow-up даты) — в 05_LEAD-TRACKER.xlsx, не здесь.')}
  `);
}

// 06 — OUTREACH
function s06() {
  return page('wb-06', `
    ${sectionHeader('06', 'Outreach', 'Outreach Engine')}
    ${h2('First Message Builder')}
    ${fieldBlock('Context')}${fieldBlock('Observation')}${fieldBlock('Relevance')}${fieldBlock('Next step')}
    ${h2('Personalization Builder')}
    ${table({ headers: ['Lead', 'Level (0/1/2)', 'Hook'], rows: Array.from({ length: 5 }, () => ['', '', '']) })}
    ${h2('Mini Audit Builder')}
    ${fieldBlock('Observation')}${fieldBlock('Why it matters')}${fieldBlock('Possible direction')}
    ${h2('Follow-Up Planner')}
    ${table({ headers: ['Lead', 'Follow-up #1 date', 'Follow-up #2 date', 'Close loop date'], rows: Array.from({ length: 8 }, () => ['', '', '', '']) })}
    ${h2('A/B Test Log')}
    ${table({ headers: ['Элемент теста', 'Message A', 'Message B', 'Наблюдение'], rows: [['Opening', '', '', ''], ['CTA', '', '', ''], ['Offer framing', '', '', '']] })}
  `);
}

// 07 — SALES
function s07() {
  return page('wb-07', `
    ${sectionHeader('07', 'Sales', 'Sales Engine')}
    ${h2('Discovery Notes')}
    ${fieldBlock('Current state')}${fieldBlock('Desired state')}${fieldBlock('Problem')}${fieldBlock('Scope')}
    ${fieldBlock('Timing')}${fieldBlock('Decision maker')}${fieldBlock('Constraints')}${fieldBlock('Budget context')}
    ${h2('Fit Check')}
    ${table({ headers: ['Критерий', 'Да/Нет'], rows: ['Need', 'Fit', 'Scope', 'Timing', 'Payment', 'Communication'].map((r) => [r, '']) })}
    ${h2('Client Summary')}
    ${fieldBox('«Правильно понял: сейчас у вас… Нужно… Главное —… Тогда я бы предложил…»', 25)}
    ${h2('Solution Builder')}
    ${fieldBlock('You said')}${fieldBlock('So I recommend')}${fieldBlock('It includes')}
    ${h2('Objection Notes')}
    ${fieldBlock('Возражение')}${fieldBlock('Что клиент может иметь в виду')}${fieldBlock('Мой ответ')}
    ${h2('Project Summary')}
    ${fieldBlock('Project')}${fieldBlock('Deliverables')}${fieldBlock('Deadline')}${fieldBlock('Price')}
    ${fieldBlock('Payment terms')}${fieldBlock('Revisions')}${fieldBlock('Not included')}${fieldBlock('Client materials')}${fieldBlock('Final delivery')}
    ${h2('Next Action')}
    ${table({ headers: ['Lead / Client', 'Next Action', 'Date'], rows: Array.from({ length: 6 }, () => ['', '', '']) })}
  `);
}

// 08 — DELIVERY
function s08() {
  return page('wb-08', `
    ${sectionHeader('08', 'Delivery', 'Client Delivery System')}
    ${h2('Minimum Brief')}
    ${fieldBlock('Business / project')}${fieldBlock('Audience')}${fieldBlock('Goal')}${fieldBlock('Offer / product')}
    ${fieldBlock('Content')}${fieldBlock('CTA')}${fieldBlock('Style')}${fieldBlock('Materials')}
    ${fieldBlock('Restrictions')}${fieldBlock('Decision maker')}${fieldBlock('Deadline')}
    ${h2('Materials Checklist')}
    ${checklist(['Логотип', 'Фотографии', 'Тексты', 'Услуги / цены', 'Контакты', 'Ссылки', 'Кейсы / отзывы', 'References'])}
    ${h2('Source of Truth')}
    ${table({ headers: ['Факт', 'Verified Public / Client Provided / Placeholder / Unknown'], rows: Array.from({ length: 5 }, () => ['', '']) })}
    ${h2('Delivery Plan')}
    ${table({ headers: ['Этап', 'Статус'], rows: ['Inputs', 'Structure/Storyline', 'Production', 'QA', 'Client review', 'Revisions', 'Handoff'].map((r) => [r, '']) })}
    ${h2('Pre-Send QA')}
    ${checklist(['Нет placeholders', 'Нет выдуманных фактов', 'Тексты вычитаны', 'Всё согласованное присутствует', 'Единый стиль и tone', 'Технически работает (links/buttons/mobile)', 'Понятен CTA'])}
    ${h2('Feedback Notes')}
    ${fieldBlock('Что сказал клиент')}${fieldBlock('Уточняющий вопрос')}${fieldBlock('Итоговая правка')}
    ${h2('Change Request')}
    ${fieldBlock('Запрос клиента')}${fieldBlock('Revision или New Scope?')}${fieldBlock('Изменение цены/срока')}
    ${h2('Handoff Checklist')}
    ${checklist(['01_FINAL', '02_SOURCE (если входит)', '03_ASSETS (если входят)', '04_README', 'Доступы переданы, чувствительные — удалены'])}
    ${h2('Support Policy')}
    ${fieldBox('Included support', 20)}${fieldBox('Not included', 20)}
  `);
}

// 09 — GROWTH
function s09() {
  return page('wb-09', `
    ${sectionHeader('09', 'Growth', 'Review → Referral → Next Client')}
    ${h2('Review Builder')}
    ${fieldBlock('Какая была задача')}${fieldBlock('Что было важно')}${fieldBlock('Что понравилось в результате')}
    ${h2('Real Case Builder')}
    ${fieldBlock('Client / business')}${fieldBlock('Project')}${fieldBlock('Initial task')}${fieldBlock('Constraints')}
    ${fieldBlock('Deliverable')}${fieldBlock('My approach')}${fieldBlock('Key decisions')}${fieldBlock('Project outcome')}
    ${fieldBlock('Client feedback')}${fieldBlock('Permission to show')}
    ${h2('Permission Check')}
    ${checklist(['Можно показывать бренд', 'Можно показывать дизайн', 'Можно использовать цифры', 'Можно использовать отзыв', 'Можно назвать компанию'])}
    ${h2('Referral Planner')}
    ${table({ headers: ['Клиент', 'Referral asked?', 'Referred by', 'Referral given to'], rows: Array.from({ length: 5 }, () => ['', '', '', '']) })}
    ${h2('After-Project Review')}
    ${fieldBlock('What went well')}${fieldBlock('What to fix')}${fieldBlock('What to standardize')}
    ${fieldBlock('What to add to portfolio')}${fieldBlock('What did client value most')}
    ${h2('Price Review')}
    ${checklist(['Стал ли результат сильнее?', 'Появился ли real proof?', 'Был ли текущий price слишком низким?', 'Keep price / Adjust price?'])}
    ${h2('Project Review')}
    ${fieldBlock('Price')}${fieldBlock('Time spent')}${fieldBlock('Extra scope')}${fieldBlock('Would I take this project again?')}
    ${h2('Client Quality Score (0–2)')}
    ${table({ headers: ['Пункт', '0–2'], rows: ['Clear Communication', 'Pays as Agreed', 'Respects Scope', 'Provides Materials', 'Reasonable Feedback', 'Good Service Fit', 'Repeat Potential', 'Referral Potential'].map((r) => [r, '']) })}
    ${h2('Specialization Check')}
    ${checklist(['Выполнено несколько похожих проектов?', 'Понимаю нишу лучше, чем раньше?', 'Легко находить лидов в ней?', 'Ценят ли клиенты эту услугу?'])}
  `);
}

// 10 — DAY 30
function s10() {
  return page('wb-10', `
    ${sectionHeader('10', 'Day 30', 'Full Review')}
    ${fieldBlock('My service')}${fieldBlock('Leads found')}${fieldBlock('Messages sent')}${fieldBlock('Replies')}
    ${fieldBlock('Positive replies')}${fieldBlock('Discussions')}${fieldBlock('Offers')}${fieldBlock('Won')}
    ${fieldBlock('Revenue (опционально)')}${fieldBlock('Projects completed')}${fieldBlock('Reviews')}${fieldBlock('Referrals')}
    ${fieldBox('What worked', 20)}${fieldBox("What didn't", 20)}${fieldBlock('My biggest bottleneck')}
    ${fieldBlock('What I will change')}${fieldBox('Next 30-Day Target', 25)}
  `);
}

function buildWorkbookHtml() {
  const body = [cover(), s00(), s01(), s02(), s03(), s04(), s05(), s06(), s07(), s08(), s09(), s10()].join('\n');
  return wrapDocument({ title: 'AI MONEY START — Workbook', bodyHtml: body, cssPath: '../styles/print.css' });
}

module.exports = { buildWorkbookHtml };
