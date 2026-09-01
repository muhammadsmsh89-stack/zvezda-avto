const { page, h1, h2, label, p, dayCard, wrapDocument } = require('../scripts/render-helpers');

function cover() {
  return `<div class="page" id="ap-cover" style="display:flex;flex-direction:column;justify-content:space-between;min-height:257mm;">
    <div style="margin-top:60mm">
      ${label('AI MONEY START')}
      <h1 class="cover-title">30-DAY<br>PLAN<span class="cover-accent-dot">.</span></h1>
      <p class="cover-sub">Один день — один блок. Не читай вперёд, не читай Guide заново — просто открывай сегодняшний день и делай.</p>
    </div>
    <div>${label('04 · 30-DAY ACTION PLAN')}</div>
  </div>`;
}

function intro() {
  return page('ap-intro', `
    ${label('Как этим пользоваться')}
    ${h1('Правило')}
    ${p('Обучение и поиск клиентов идут параллельно с Дня 9. Не каждый день требует делать всё — объём зависит от твоей нагрузки. Если сегодня уже есть активный проект в работе (Won), приоритет — delivery, а не новые лиды.')}
    ${p('С Дня 10 в каждом дне встречается комбинация: New Leads · Outreach · Follow-Up · Replies · Sales Conversations · Portfolio/Offer Improvement · Delivery (если есть Won-проект). Раз в неделю (Дни 14, 21, 28) — короткий weekly review вместо новых лидов.')}
  `);
}

const week1 = [
  { day: 'День 1', objective: 'Choose Primary Service', doItems: ['Пройти Service Fit Test', 'Заполнить Decision Matrix', 'Выбрать Primary + Backup Service'], output: 'Service Card (Primary + Backup)', track: 'Service Selected', doneWhen: ['Подписан 30-Day Commitment'] },
  { day: 'День 2', objective: 'References + Deconstruction', doItems: ['Найти 10 референсов, разобрать 3', 'Выписать повторяющиеся паттерны'], output: 'Quality Checklist', track: 'Референсов разобрано: 3' },
  { day: 'День 3', objective: 'Rebuild', doItems: ['Повторить механику референса на другой теме', 'Не копировать текст/бренд напрямую'], output: 'Training Result (не в портфолио)', track: 'Rebuild сделан: да/нет' },
  { day: 'День 4', objective: 'Independent Creation', doItems: ['Practice Brief → Draft → AI Critique → Human Review'], output: 'Skill Card', track: 'Собственная работа готова' },
  { day: 'День 5', objective: 'Portfolio Case #1 (Core)', doItems: ['Brief → Production → Quality Check → Case Study'], output: 'Case 1 + Case Study', track: 'Кейсов готово: 1/3' },
  { day: 'День 6', objective: 'Portfolio Case #2 (Different Problem)', doItems: ['Выбрать другую задачу той же услугой', 'Свериться с Case Diversity Matrix'], output: 'Case 2 + Case Study', track: 'Кейсов готово: 2/3' },
  { day: 'День 7', objective: 'Case #3 + Packaging + Offer/Scope/Price', doItems: ['Закончить Case 3', 'Собрать 3 кейса по одной ссылке', 'Заполнить Offer Builder, Scope, STARTER/CORE/PLUS'], output: 'Portfolio + Offer + Price готовы', track: 'Кейсов готово: 3/3', doneWhen: ['Portfolio Scorecard пройден', 'Готово сообщение с предложением'] },
];

const week2 = [
  { day: 'День 8', objective: '50 Leads Sprint', doItems: ['Заполнить ICP, выбрать каналы', 'Round 1–3: 20+20+10 лидов', 'Lead Score + A/B/C, выбрать First 15'], output: 'Lead Tracker с 50 лидами', track: 'Leads Found: 50', doneWhen: ['First 15 выбраны с рабочим контактом'] },
  { day: 'День 9', objective: 'First 15 Outreach', doItems: ['Выбрать шаблон + персонализацию для каждого', 'Отправить 15 сообщений', 'Поставить Follow-Up Date'], output: '15 отправленных сообщений', track: 'Messages Sent: 15' },
  { day: 'День 10', objective: 'New Outreach + Replies', doItems: ['Ответить на входящие', 'Отправить 10 новых сообщений'], output: 'Обновлённый Lead Tracker', track: 'Messages Sent, Replies' },
  { day: 'День 11', objective: 'Outreach + First Follow-Ups', doItems: ['Follow-up по лидам без ответа', '10 новых сообщений'], output: 'Follow-ups отправлены', track: 'Follow-Ups Sent' },
  { day: 'День 12', objective: 'Replenish Leads + Outreach', doItems: ['Найти ещё 10 лидов', 'Отправить 10 сообщений'], output: 'Пополненный pipeline', track: 'Leads Found (накопительно)' },
  { day: 'День 13', objective: 'Sales Conversations', doItems: ['Провести discovery по заинтересованным', 'Сделать summary + предложить решение'], output: 'Offers Sent (если applicable)', track: 'Discussions, Offers' },
  { day: 'День 14', objective: 'Weekly Review', doItems: ['Проверить Reply Rate / Positive Reply Rate в Dashboard', 'Если есть Won-проект — Kickoff и Brief', 'Иначе — докрутить portfolio/offer по одному слабому месту'], output: 'Обновлённый Dashboard', track: 'Reply Rate, Positive Reply Rate' },
];

const week3 = [
  { day: 'День 15', objective: 'Replenish Leads + Outreach', doItems: ['Найти 10 лидов', 'Отправить 10 сообщений'], output: 'Lead Tracker обновлён', track: 'Leads Found' },
  { day: 'День 16', objective: 'Outreach + Sales', doItems: ['Follow-ups', 'Discovery по новым «интересно»'], output: 'Discussions', track: 'Discussions' },
  { day: 'День 17', objective: 'Delivery (если Won) / Outreach', doItems: ['Если есть проект — Kickoff/Brief/Production', 'Если нет — 10 новых сообщений'], output: 'Project Board обновлён или новые сообщения', track: 'Projects in Progress' },
  { day: 'День 18', objective: 'Follow-Up + Sales + Delivery', doItems: ['Закрыть просроченные follow-up', 'Продолжить production по активному проекту'], output: 'Обновлённый статус по всем активным лидам', track: 'Follow-Ups Due = 0' },
  { day: 'День 19', objective: 'Replenish Leads + Outreach', doItems: ['Найти 10 лидов', 'Отправить 10 сообщений'], output: 'Lead Tracker обновлён', track: 'Leads Found' },
  { day: 'День 20', objective: 'Outreach + Sales', doItems: ['Follow-ups', 'Обработать возражения по открытым офферам'], output: 'Offers Sent / Won', track: 'Offer Rate' },
  { day: 'День 21', objective: 'Weekly Review', doItems: ['Price Review, если завершён проект', 'After-Project Review', 'Funnel Diagnosis по текущим цифрам'], output: 'Обновлённые Offer/Price при необходимости', track: 'Won, Reviews' },
];

const week4 = [
  { day: 'День 22', objective: 'Replenish Leads + Outreach', doItems: ['Найти 10 лидов', 'Отправить 10 сообщений'], output: 'Lead Tracker обновлён', track: 'Leads Found' },
  { day: 'День 23', objective: 'Outreach + Sales', doItems: ['Follow-ups', 'Discovery по новым ответам'], output: 'Discussions', track: 'Discussions' },
  { day: 'День 24', objective: 'Delivery / Outreach', doItems: ['Production по активному проекту либо', '10 новых сообщений, если проектов нет'], output: 'Progress по Project Board', track: 'Projects in Progress' },
  { day: 'День 25', objective: 'Follow-Up + Referral', doItems: ['Закрыть просроченные follow-up', 'Если проект завершён — запросить review/referral'], output: 'Review/Referral запрошены', track: 'Reviews, Referrals' },
  { day: 'День 26', objective: 'Replenish Leads + Outreach', doItems: ['Найти 10 лидов (pipeline не должен пустеть)', 'Отправить 10 сообщений'], output: 'Lead Tracker обновлён', track: 'Leads Found' },
  { day: 'День 27', objective: 'Outreach + Sales', doItems: ['Follow-ups', 'Закрыть открытые discovery/offers'], output: 'Won / Lost обновлены', track: 'Close Rate' },
  { day: 'День 28', objective: 'Weekly Review', doItems: ['Specialization Check — виден ли паттерн по нише?', 'Client Quality Score по завершённым проектам'], output: 'Заметки для Day 30', track: 'Specialization signal' },
];

const finalDays = [
  { day: 'День 29', objective: 'Catch-Up Buffer', doItems: ['Закрыть все просроченные follow-up и незавершённые доставки', 'Ничего нового не начинать — только доделать'], output: 'Чистый Lead Tracker без зависших NEXT ACTION', track: 'Overdue items = 0' },
  { day: 'День 30', objective: 'Full Funnel Review', doItems: ['Заполнить Day 30 Review (Workbook 10)', 'Найти главный bottleneck по Final Funnel Diagnosis', 'Поставить Next 30-Day Target'], output: 'Day 30 Review + план на следующие 30 дней', track: 'Все controllable metrics за месяц', doneWhen: ['Final Client Checkpoint пройден (Guide)'] },
];

function weekPage(id, title, days) {
  return page(id, `${h2(title)}${days.map((d) => dayCard(d)).join('')}`);
}

function buildActionPlanHtml() {
  const body = [
    cover(), intro(),
    weekPage('ap-w1', 'Неделя 1 — Service · Skill · Portfolio', week1),
    weekPage('ap-w2', 'Неделя 2 — Leads · Outreach старт', week2),
    weekPage('ap-w3', 'Неделя 3 — Outreach · Sales · Delivery', week3),
    weekPage('ap-w4', 'Неделя 4 — Outreach · Sales · Delivery · Growth', week4),
    weekPage('ap-final', 'Финал', finalDays),
  ].join('\n');
  return wrapDocument({ title: 'AI MONEY START — 30-Day Action Plan', bodyHtml: body });
}

module.exports = { buildActionPlanHtml };
