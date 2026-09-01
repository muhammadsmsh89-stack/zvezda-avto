const {
  page, h1, h2, h3, p, label, ul, checklist, formula, card, table,
  moduleHeader, tocEntry, wrapDocument,
} = require('../scripts/render-helpers');

function cover() {
  return `<div class="page" id="cover" style="display:flex;flex-direction:column;justify-content:space-between;min-height:257mm;">
    <div style="margin-top:60mm">
      ${label('AI MONEY START')}
      <h1 class="cover-title">AI MONEY<br>START<span class="cover-accent-dot">.</span></h1>
      <p class="cover-sub">Система первого дохода с ИИ: от выбора услуги до поиска и работы с клиентами.</p>
    </div>
    <div>${label('01 · GUIDE')}</div>
  </div>`;
}

function whatThisIs() {
  return page('what-this-is', `
    ${label('Прежде чем начать')}
    ${h1('Что это, а что нет')}
    ${card({ title: 'Это НЕ', text: 'курс по нейросетям.\nсписок из 50 идей заработка, который можно только читать.\nобещание дохода.' })}
    ${card({ title: 'Это', text: 'практическая система действий: 11 модулей, каждый из которых заканчивается конкретным результатом — файлом, сообщением, цифрой в таблице.', example: true })}
    ${p('Продукт не обещает лёгких денег и не гарантирует доход. Он помогает выбрать одну услугу, собрать минимальный навык, упаковать предложение и системно искать первых клиентов.')}
    ${p('990 ₽ здесь — не за текст, который можно получить одним вопросом к ChatGPT, а за готовую систему: методику, шаблоны, таблицу лидов с формулами и пошаговый план на 30 дней.')}
  `);
}

function howToUse() {
  return page('how-to-use', `
    ${label('Правило продукта')}
    ${h1('Как этим пользоваться')}
    ${formula('READ → DO → MOVE ON')}
    ${p('Не изучай продукт полностью перед тем, как начать действовать. Каждый модуль читается один раз и сразу закрывается конкретным действием из Workbook. Если действие не сделано — DONE WHEN в конце модуля не закрыт, и переходить к следующему рано.')}
    ${card({ title: '30-Minute Rule', text: 'Если действие можно начать меньше чем за 30 минут — сначала сделай его, потом читай дальше. Не превращай этот продукт в ещё один контент про заработок, который ты просто посмотрел и закрыл.', example: true })}
    ${h3('Что где искать')}
    ${table({
    headers: ['Файл', 'Роль'],
    rows: [
      ['01 Guide (этот файл)', 'понять систему и метод — не заполняется'],
      ['02 Workbook', 'все поля и бланки — здесь всё заполняется'],
      ['03 Prompt Pack', 'открывается по конкретной задаче, не читается подряд'],
      ['04 30-Day Action Plan', 'ежедневный чек-лист на весь месяц'],
      ['05 Lead Tracker.xlsx', 'база лидов и цифры воронки, с Дня 8'],
    ],
  })}
    ${h3('Формат каждого модуля')}
    ${p('WHAT (что делаем) → WHY (зачем, коротко) → HOW (метод + формулы) → пример → указание, что заполнить в Workbook → YOUR TURN → DONE WHEN — жёсткий гейт: не закрыл пункты, рано открывать следующий модуль.')}
  `);
}

function map30Day() {
  return page('map-30-day', `
    ${label('Вся система целиком')}
    ${h1('30-Day Map')}
    ${table({
    headers: ['Дни', 'Модуль', 'Результат'],
    rows: [
      ['День 1', 'Module 2 — Choose Your Service', 'Primary + Backup Service'],
      ['Дни 2–4', 'Module 3 — 3-Day Skill Sprint', 'минимальный навык, Skill Card'],
      ['Дни 5–7', 'Module 4 + 5 — Portfolio, Offer + Pricing', '3 кейса, оффер, цена, пакеты'],
      ['День 8', 'Module 6 — Lead System', '50 лидов, First 15'],
      ['День 9', 'Module 7 — Outreach Engine', 'первые 15 сообщений'],
      ['Дни 10–29', 'Modules 7–10 параллельно', 'outreach + продажи + сдача проектов + рост'],
      ['День 30', 'Module 10 — Day 30 Review', 'диагностика воронки, план на следующие 30 дней'],
    ],
  })}
    ${p('Обучение и поиск клиентов идут параллельно, а не последовательно — с Дня 9 ты уже пишешь людям, даже если навык ещё не идеальный. Полный day-by-day чек-лист (включая Дни 10–30) — в 04_30-DAY-ACTION-PLAN.pdf.')}
  `);
}

function toc(modules) {
  return page('toc', `
    ${label('Оглавление')}
    ${h1('Table of Contents')}
    ${tocEntry('00–01', 'Start Here / Money With AI', 'm01')}
    ${modules.map((m) => tocEntry(String(m.number).padStart(2, '0'), m.title, `m${m.number}`)).join('')}
    ${tocEntry('—', 'Final Client Checkpoint', 'checkpoint')}
    ${tocEntry('—', 'Day 30 Review', 'day30')}
    ${tocEntry('—', 'Final Page', 'final')}
  `);
}

// ---------- MODULE 0 + 1 ----------
function module01() {
  return page('m01', `
    ${moduleHeader({ number: '0–1', title: 'Start Here / Money With AI', day: 'Сейчас · День 1, утро', progressIndex: 0 })}
    ${h2('What')}
    ${p('Модуль 0 — карта всей системы целиком, на 10–15 минут, без обучения. Модуль 1 — перевести «я умею пользоваться ИИ» в формулировку, за которую готовы платить.')}
    ${h2('Why')}
    ${p('Не хватает не мотивации и не ещё одной теории — не хватает системы, где после каждого шага остаётся конкретный результат. И: ИИ сам по себе не услуга. Клиент платит за результат, который решает его проблему, — не за ChatGPT или Claude.')}
    ${card({ title: 'К концу Дня 7 обязаны существовать', text: '1 услуга · 1 ЦА · 3 демонстрационных кейса · портфолио · оффер · стартовая цена · первое сообщение (черновик) · Lead Tracker.' })}
    ${formula('Проблема клиента → Результат → Услуга → ИИ ускоряет производство')}
    ${table({
    headers: ['Плохо (язык инструмента)', 'Лучше (язык результата)'],
    rows: [
      ['«Я использую ИИ»', '«Я сделаю вам презентацию для инвестора»'],
      ['«Я умею Claude»', '«Я соберу лендинг вашего бизнеса»'],
      ['«Я генерирую тексты»', '«Я подготовлю 30 постов для вашего Telegram»'],
    ],
  })}
    ${formula('Я не продаю [ИИ-инструмент].\nЯ продаю [конкретный результат] в виде [услуга] для [ниша].')}
    ${h2('Your Turn')}
    ${checklist(['Прочитать 30-Day Map целиком', 'Принять правило 30 минут', 'Заполнить «Точку старта» в Workbook (00 — Start)', 'Переписать 3 фразы вида «я генерирую контент с помощью нейросетей» по формуле выше'])}
    ${h2('Done When')}
    ${checklist(['Я понимаю карту всех 11 модулей и знаю дату своего Дня 1', 'Я понимаю разницу «использую ИИ» vs «клиент платит за результат»'])}
  `);
}

// ---------- MODULE 2 ----------
function module2() {
  const services = [
    ['Landing Page Creation', 'Продающая страница', 'Локальный бизнес без сайта', 3, 4, 4, 4],
    ['Website Redesign', 'Обновление сайта', 'Бизнес с сайтом 5+ лет', 3, 3, 4, 3],
    ['Commercial Presentations', 'PDF/PPTX для продажи/питча', 'B2B, стартапы, консультанты', 2, 5, 3, 5],
    ['Lead Magnets / PDF Guides', 'Лид-магнит за подписку', 'Эксперты, локальные специалисты', 2, 5, 3, 5],
    ['Telegram Content Packs', 'Контент-план + тексты постов', 'Бизнес с заброшенным каналом', 2, 5, 4, 5],
    ['Short-Form Video Scripts', 'Сценарии для Reels/Shorts', 'Эксперты, снимающие видео', 2, 4, 4, 4],
    ['Product Descriptions', 'Тексты карточек товара', 'Продавцы на маркетплейсах', 1, 5, 5, 5],
    ['Social Media Content Packs', 'Контент + оформление VK/Instagram', 'Салоны, кафе, локальные бренды', 2, 4, 5, 4],
    ['Competitor Research', 'Разбор конкурентов', 'Начинающие предприниматели', 2, 4, 3, 4],
    ['SOP / Process Documentation', 'Инструкции для сотрудников', 'Растущий локальный бизнес', 3, 3, 2, 3],
    ['Email Sequences', 'Цепочка писем', 'Онлайн-школы, эксперты с базой', 3, 3, 3, 3],
    ['Visual Content / Ad Creatives', 'Рекламные креативы', 'Бизнес с акциями/таргетом', 3, 4, 4, 3],
    ['Short-Form Video Editing', 'Монтаж коротких видео', 'Эксперты, снимающие, но не монтирующие', 3, 3, 4, 3],
    ['Basic AI Automation Setup', 'Простая автоматизация (бот-ответчик)', 'Бизнес с потоком однотипных вопросов', 4, 2, 2, 2],
    ['Local Business Digital Audit', 'Короткий аудит сайта/соцсетей', 'Любой локальный бизнес', 2, 5, 5, 5],
  ];
  return page('m2', `
    ${moduleHeader({ number: '2', title: 'Choose Your Service', day: 'День 1', progressIndex: 0 })}
    ${h2('What')}
    ${p('Выбрать одну услугу на следующие 30 дней — не «идеальную профессию на всю жизнь», а достаточно хорошую услугу, которую можно протестировать на рынке.')}
    ${h2('Why')}
    ${p('Новичок обычно мечется между направлениями: «буду делать сайты» → «монтаж проще» → «автоматизации дороже» — и через месяц нет ни навыка, ни портфолио, ни клиентов.')}
    ${formula('ONE SERVICE FOR 30 DAYS')}
    ${p('PRIMARY SERVICE нельзя менять из-за плохого настроения, одного отказа или ролика про другую профессию — только после честного теста рынка (30-Day Commitment в Workbook).')}
    ${h3('Каталог из 15 услуг')}
    ${p('Шкала 1–5 — редакционная модель AI MONEY START для сравнения направлений, не рыночная статистика.')}
    ${table({
    headers: ['Услуга', 'Что получает клиент', 'Кому продавать', 'Learn', 'Portfolio', 'Leads', 'Starter'],
    rows: services.map((s) => [s[0], s[1], s[2], String(s[3]), String(s[4]), String(s[5]), String(s[6])]),
  })}
    ${p('По каждой услуге отдельно фиксируется, что реально ускоряет ИИ (AI Role) и что человек всё равно обязан сделать сам (Human Role) — это не позволяет новичку продавать компетенцию, которой у него нет.')}
    ${table({
    headers: ['Услуга', 'AI Role', 'Human Role'],
    rows: [
      ['Landing Page Creation', 'структура, текст, варианты заголовков', 'приоритеты блоков, проверка фактов и адаптивности'],
      ['Commercial Presentations', 'структура слайдов, тексты', 'аккуратная вёрстка, согласование логики подачи'],
      ['Lead Magnets / PDF Guides', 'структура, текст, черновой дизайн', 'фирменный вид, проверка полезности контента'],
      ['Telegram Content Packs', 'темы, черновики, вариации заголовков', 'адаптация под голос бренда, проверка фактов'],
      ['Short-Form Video Scripts', 'идеи, варианты хуков, структура', 'адаптация под спикера, проверка реалистичности съёмки'],
      ['Product Descriptions', 'варианты текста под структуру площадки', 'сверка характеристик с реальным товаром'],
      ['Basic AI Automation Setup', 'сценарий/промпт для бота, логика ответов', 'настройка no-code инструмента, тестирование на ошибках'],
    ],
  })}
    ${h3('Top 5 Starter Services и маршрут')}
    ${table({
    headers: ['Услуга', 'Day 1 (Learn)', 'Day 2 (Rebuild)', 'Day 3 (Create)', 'Первый клиент'],
    rows: [
      ['Landing Pages', 'разбор 3 лендингов', 'повтор структуры на новой нише', 'собственный лендинг', 'бизнес без сайта'],
      ['Presentations', 'разбор 3 презентаций', 'повтор на новых данных', 'своя презентация', 'B2B перед встречей'],
      ['Lead Magnets', 'разбор 3 гайдов', 'повтор структуры', 'собственный гайд', 'эксперт без лид-магнита'],
      ['Telegram Content', 'разбор 3 каналов', 'повтор формата постов', 'контент-план на 2 недели', 'заброшенный канал'],
      ['Short-Form Scripts', 'разбор 3 роликов', 'повтор структуры сценария', '5 своих сценариев', 'снимает, но без сценария'],
    ],
  })}
    ${p('Product Descriptions и Local Business Digital Audit набирают высокие баллы, но структурно имеют низкий ценовой потолок или служат инструментом продажи (Модуль 9), а не самостоятельной услугой на 30 дней.')}
    ${h3('Service Fit Test → «Могу сделать» ≠ «Могу продать»')}
    ${p('15 коротких утверждений (0–2 балла) по осям Visual / Writing / Research / Technical / Video / Communication + 5 модификаторов (терпение, детали, скорость результата, готовность учиться, наличие компьютера). Высокий Visual → Landing/Presentations; высокий Writing → Telegram/Scripts/Email; высокий Research → Competitor Research/SOP; высокий Technical → Landing/Website Redesign/Automation. Полный бланк — Workbook 01.')}
    ${card({ title: 'Пример', text: '«Делать картинки» → «10 рекламных креативов для акции салона красоты». «Работать с Claude» → «Лендинг услуги с готовой структурой и адаптивной версией».', example: true })}
    ${h2('Your Turn')}
    ${checklist(['Просмотреть 15 услуг', 'Пройти Service Fit Test', 'Заполнить Decision Matrix по 3 вариантам', 'Выбрать Primary + Backup Service', 'Подписать 30-Day Commitment'])}
    ${h2('Done When')}
    ${checklist(['Я выбрал(а) Primary и Backup Service', 'Я знаю, кому продаю, что получает клиент и какую проблему решаю', 'Я подписал(а) 30-Day Commitment'])}
  `);
}

// ---------- MODULE 3 ----------
function module3() {
  return page('m3', `
    ${moduleHeader({ number: '3', title: '3-Day Skill Sprint', day: 'Дни 2–4', progressIndex: 1 })}
    ${h2('What')}
    ${p('Не мастерство — переход из «я вообще не знаю, как это делается» в «я понимаю стандарт результата и способен(на) сделать первый концептуальный кейс».')}
    ${h2('Why')}
    ${p('Главная ошибка новичка: 20 часов YouTube → ещё один курс → ни одного результата. Здесь — наоборот: практика важнее бесконечного потребления контента.')}
    ${formula('SEE → BREAK DOWN → REBUILD → CREATE → REVIEW')}
    ${card({ title: 'Minimum Sellable Skill', text: '«Я могу выполнить ограниченный и чётко описанный scope без обмана клиента» — не «я разработчик любых сайтов», а «я могу собрать простой одностраничный сайт по утверждённой структуре».', example: true })}
    ${h3('Правило 70/20/10')}
    ${p('70% создание руками · 20% разбор хороших работ · 10% теория — практическая модель продукта, не научный факт.')}
    ${h3('Reference Analysis Card')}
    ${p('Для 10–15 хороших примеров фиксируется: what works, structure, visual/writing pattern, CTA/business purpose, что взять как принцип, что не копировать напрямую. REFERENCE = понять принцип; COPY = чужое конкретное решение — продукт учит первому, а не второму.')}
    ${table({
    headers: ['День', 'Действие', 'Результат'],
    rows: [
      ['День 2', 'Найти 10 примеров, разобрать 3 по Reference Analysis Card, выписать паттерны', 'Quality Checklist из 5–8 пунктов'],
      ['День 3', 'Rebuild — повторить механику на другой теме/нише, без копирования текста и бренда', 'Тренировочный результат (не идёт в портфолио)'],
      ['День 4', 'Practice Brief → Draft → AI Critique → Human Review → Final', 'Собственная работа + Skill Card'],
    ],
  })}
    ${card({ title: 'AI Critique — не автопринятие', text: 'ASK AI → CHECK AGAINST REFERENCES → DECIDE YOURSELF. ИИ способен галлюцинировать, выдумывать правила и перехваливать работу — финальное решение всегда принимает человек.', example: true })}
    ${p('Готовые треки Дней 2–4 под каждую из Top 5 услуг (с собственным Quality Checklist) и Universal Skill Sprint Generator для оставшихся 10 услуг каталога — Workbook 02. 8 AI-tutor промптов (Reference Breakdown, Skill Gap Finder, Critique My Draft и др.) — Prompt Pack, раздел Skill.')}
    ${h3('Know Your Limits')}
    ${p('Узкий scope повышает безопасность и качество: не продавать сложный backend, если не понимаешь его; не обещать юридически корректный текст без специалиста; не выдавать AI-сгенерированный совет за профессиональную экспертизу в медицине, финансах или праве.')}
    ${h2('Your Turn')}
    ${checklist(['Найти референсы, разобрать 3, создать Quality Checklist', 'Сделать rebuild и сравнить с референсом', 'Получить practice brief, создать собственную работу, провести AI critique и human review', 'Заполнить Skill Card'])}
    ${h2('Done When')}
    ${checklist(['Я разобрал(а) минимум 3 референса и создал(а) Quality Checklist', 'Я сделал(а) rebuild и одну самостоятельную работу, проверенную через AI и по референсам', 'Я могу объяснить, что умею, и что пока НЕ умею — готов(а) создать 3 Portfolio Cases'])}
  `);
}

// ---------- MODULE 4 ----------
function module4() {
  return page('m4', `
    ${moduleHeader({ number: '4', title: '3-Case Portfolio Sprint', day: 'Дни 5–7', progressIndex: 2 })}
    ${h2('What')}
    ${p('3 законченных Concept Project, которые честно показывают: «я могу выполнить эту услугу» — клиенту, а не самому себе.')}
    ${h2('Why')}
    ${p('Клиент думает проще: «этот человек сможет сделать что-то подобное для меня?» Портфолио снижает его неопределённость — задача не «три красивые работы», а BUILD PROOF: я могу выполнить услугу, понимаю задачи бизнеса, умею довести работу до законченного deliverable.')}
    ${h3('Concept vs Real Work')}
    ${p('Concept Project / Demo Project / Практика — разрешённые формулировки. Запрещено: «клиент обратился ко мне…», «результат: +37% заявок», если этого не было. Смешивать типы работ нельзя.')}
    ${formula('CASE 1 — Core (базовый deliverable)\nCASE 2 — Different Problem (та же услуга, другая бизнес-задача)\nCASE 3 — Premium (сильнее, но в границах реальной компетенции из Module 3)')}
    ${h3('Тройка кейсов по Top 5')}
    ${table({
    headers: ['Услуга', 'Case 1', 'Case 2', 'Case 3'],
    rows: [
      ['Landing Pages', 'стоматология/детейлинг (high-intent)', 'ремонт/недвижимость (долгий цикл)', 'premium concept'],
      ['Presentations', 'commercial proposal', 'company/service deck', 'premium pitch deck'],
      ['Lead Magnets', 'checklist', 'mini guide', 'premium branded guide'],
      ['Telegram Content', 'экспертный канал', 'локальный бизнес', 'premium service brand'],
      ['Short-Form Scripts', 'educational', 'sales/conversion', 'brand/authority'],
    ],
  })}
    ${h3('Case Study Format')}
    ${p('Title · Status (Concept Project) · Client Type · Challenge («в рамках концепта я поставил(а) задачу…») · Goal · Approach · Deliverable · Key Decisions · Final · What This Case Demonstrates. Поле RESULTS запрещено без реальных данных — вместо него PROJECT OUTCOME («готовый concept-лендинг из 8 секций», не «продажи выросли»).')}
    ${table({
    headers: ['Bad (описание красоты)', 'Good (объяснение решений)'],
    rows: [
      ['«Сделал сайт стоматологии. Красивый дизайн.»', '«Задача концепта — сделать список услуг понятнее и привести к записи. Первый экран — направление, далее врачи, доверие, CTA.»'],
    ],
  })}
    ${h3('30-Second Pitch')}
    ${formula('«Это концепт для [TYPE]. Я поставил(а) задачу [PROBLEM]. Сделал(а) [DELIVERABLE]. Акцент — на [DECISION]. Добавил(а), чтобы показать, как я решаю [TYPE OF TASK].»')}
    ${p('Portfolio Scorecard (0–24, самопроверка, не рыночный рейтинг) и правило Done, Not Perfect: SHIP после Quality Gate — портфолио улучшится после реальных клиентов, первый настоящий проект ценнее ещё одной недели полировки концептов.')}
    ${h2('Your Turn')}
    ${checklist(['День 5 — Case 1 + Case Study', 'День 6 — Case 2 + сверка по Diversity Matrix', 'День 7 — Case 3 + Portfolio Scorecard + сборка по одной ссылке + 30-second pitch'])}
    ${h2('Done When')}
    ${checklist(['У меня 3 кейса, честно отмеченных как Concept Project, демонстрирующих разные задачи', 'Нет выдуманных результатов и чужих работ, выданных за свои', 'Все доступны по одной простой ссылке, я объясняю каждый за 30 секунд'])}
  `);
}

// ---------- MODULE 5 ----------
function module5() {
  return page('m5', `
    ${moduleHeader({ number: '5', title: 'Offer + Pricing', day: 'Дни 5–7', progressIndex: 3 })}
    ${h2('What')}
    ${p('Превратить навык и портфолио в понятное коммерческое предложение: ЦА, deliverable, scope, срок, правки, цена, STARTER/CORE/PLUS.')}
    ${formula('SKILL ≠ OFFER\nSKILL: «Я умею делать сайты» → SERVICE: «Landing Page» → OFFER: «Соберу одностраничный сайт для стоматологии с услугами, врачами и записью»')}
    ${table({
    headers: ['Vague', 'Specific'],
    rows: [
      ['«Делаю сайты»', '«Собираю одностраничный сайт с услугами, врачами и формой записи для стоматологий»'],
      ['«Пишу PDF-материалы»', '«Готовлю лид-магнит на 5–7 страниц, который эксперт отдаёт за подписку»'],
      ['«Веду Telegram»', '«Собираю контент-план и 20 постов на месяц для заброшенного канала»'],
      ['«Пишу сценарии»', '«Готовлю 5–7 сценариев для Reels с хуком и призывом к действию»'],
      ['«Занимаюсь SMM»', '«Оформляю профиль и готовлю 10 постов на месяц для салона красоты»'],
      ['«Настраиваю автоматизации»', '«Настраиваю Telegram-бота, который отвечает на 5 частых вопросов клиентов»'],
    ],
  })}
    ${h3('Result vs Deliverable')}
    ${p('Гарантировать можно только то, что реально контролируешь: структуру и текст лендинга, срок со своей стороны, техническую работоспособность, количество и логику правок. Нельзя гарантировать трафик, бюджет клиента на рекламу, работу его отдела продаж, действия конкурентов.')}
    ${card({ title: 'Пример', text: 'Нельзя: «сделаю вам +30% продаж». Можно: «соберу лендинг по согласованной структуре с адаптивной версией и формой заявки».', example: true })}
    ${h3('Scope Builder и Scope Creep')}
    ${p('Included / Not Included / Number of Revisions / Client Provides / I Provide — фиксируется до старта. Правило: NEW DELIVERABLE = NEW SCOPE. «Поменять цвет кнопки» — правка; «добавить вторую страницу» — новый scope, оцениваемый отдельно.')}
    ${h3('Price Builder')}
    ${p('Цена = Base Scope + Complexity + Deadline + Revisions + Additional Deliverables + Experience + Client Context — решение, не физический закон. TEST PRICE для первой версии услуги, лестница ENTRY → PROVEN → STRONGER по мере появления реальных кейсов и отзывов.')}
    ${h3('STARTER / CORE / PLUS по Top 5')}
    ${p('Не «плохой/нормальный/хороший», а разные объёмы deliverable. Цены ниже — пример учебной цены, не рыночный факт.')}
    ${table({
    headers: ['Услуга', 'STARTER', 'CORE', 'PLUS'],
    rows: [
      ['Landing Pages', '1 экран · ~3 000 ₽', '6–8 секций · ~8 000 ₽', 'CORE + доп. страница · ~14 000 ₽'],
      ['Presentations', 'до 6 слайдов · ~2 500 ₽', '8–12 слайдов · ~6 000 ₽', '10–14 слайдов + версии · ~10 000 ₽'],
      ['Lead Magnets', 'checklist 1–2 стр · ~2 000 ₽', 'guide 5–7 стр · ~5 000 ₽', '7–10 стр premium · ~9 000 ₽'],
      ['Telegram Content', '10 постов · ~3 000 ₽', '15–20 постов + календарь · ~7 000 ₽', 'CORE + доп. рубрика · ~11 000 ₽'],
      ['Short-Form Scripts', '3 сценария · ~2 000 ₽', '5–7 сценариев · ~5 000 ₽', 'CORE + вторая линия · ~8 000 ₽'],
    ],
  })}
    ${p('Никаких фейковых старых цен и искусственных таймеров — ценность объясняется объёмом, не маркетингом. 50% предоплаты до старта, вторая половина — после сдачи и согласования финальной версии.')}
    ${h2('Your Turn')}
    ${checklist(['Заполнить Client Focus Builder и Scope Builder', 'Определить Revision Policy и срок', 'Выбрать Test Price и собрать STARTER/CORE/PLUS', 'Написать One-Sentence Offer и Message Version'])}
    ${h2('Done When')}
    ${checklist(['Я могу за 10 секунд объяснить, что продаю', 'У меня есть scope, срок, revision policy, цена, STARTER/CORE/PLUS', 'Я не обещаю бизнес-результаты вне своего контроля'])}
  `);
}

// ---------- MODULE 6 ----------
function module6() {
  return page('m6', `
    ${moduleHeader({ number: '6', title: 'Lead System', day: 'День 8', progressIndex: 4 })}
    ${h2('What')}
    ${p('FIND → QUALIFY → PRIORITIZE → TRACK: 50 потенциальных клиентов за один день, а не просто «список сайтов, где искать».')}
    ${formula('COMPANY ≠ LEAD\nМы формируем гипотезу, а не утверждаем, что бизнесу точно нужна услуга.')}
    ${h3('ICP + Buying Capacity')}
    ${p('Не «делаю сайты для бизнеса», а «стоматологии в крупных городах с отзывами, активными соцсетями и слабым сайтом». Buying Capacity — visible proxies (отзывы, филиалы, реклама, регулярный контент), не выдуманная выручка; много подписчиков ≠ обязательно деньги (False Signal).')}
    ${h3('Lead Score 0–10 и приоритет A/B/C')}
    ${p('Need · Buying Capacity · Contactability · Fit · Timing — по 0–2 каждый. Внутренняя модель продукта, не статистический прогноз покупки. A — сильный fit + заметная проблема + хороший контакт → глубокая персонализация; C — гипотеза слабая → быстрый outreach или отложить.')}
    ${h3('2-Minute Lead Rule и День 8 Sprint')}
    ${p('30 минут на одного лида × 50 = 25 часов — это убивает outreach. Round 1 — 20 лидов, Round 2 — ещё 20, Round 3 — ещё 10; после каждого раунда — Score и A/B/C. Результат — 50 «достаточно квалифицированных» лидов, не 50 идеальных.')}
    ${h3('Где искать: Top 5 playbooks')}
    ${table({
    headers: ['Услуга', 'Where', 'Look for'],
    rows: [
      ['Landing Pages', 'Карты, Instagram, поиск, каталоги', 'активный бизнес, отзывы, слабый/нет сайта'],
      ['Presentations', 'LinkedIn, сайты компаний', 'сложный оффер, B2B-сделки, слабая презентация'],
      ['Lead Magnets', 'Instagram, Telegram', 'аудитория есть, лид-магнита нет или слабый'],
      ['Telegram Content', 'Telegram, Instagram', 'канал есть, публикации нерегулярны'],
      ['Short-Form Scripts', 'Instagram/Reels', 'уже снимает, но теряет зрителя в начале'],
    ],
  })}
    ${h3('Все источники лидов')}
    ${table({
    headers: ['Канал', 'Best for', 'Common mistake'],
    rows: [
      ['Google Maps / Яндекс Карты / 2GIS', 'локальный бизнес', 'не проверять активность карточки'],
      ['Instagram / VK', 'визуальный бизнес, эксперты', 'писать без просмотра последних постов'],
      ['Telegram', 'эксперты, каналы', 'писать в канал вместо владельца'],
      ['LinkedIn (где релевантно)', 'B2B, презентации', 'обобщённые сообщения без контекста компании'],
      ['Avito', 'услуги, локальный спрос', 'игнорировать свежесть объявления'],
      ['Profi', 'услуги с явным запросом (intent)', 'не читать текст запроса целиком'],
      ['Kwork / другие фриланс-биржи', 'проектные задачи', 'конкурировать только ценой'],
      ['Бизнес-каталоги', 'локальный/нишевый бизнес', 'не проверять актуальность контактов'],
      ['Google Search / сайты компаний', 'любая ниша, B2B', 'брать первые ссылки без проверки ЛПР'],
      ['Сообщества предпринимателей', 'ранняя стадия бизнеса', 'спамить в общий чат вместо личных сообщений'],
      ['Знакомые / рекомендации', 'любая ниша', 'давить продажей вместо информирования'],
      ['Публикации проектов/задач', 'явный запрос', 'отвечать слишком поздно'],
      ['Публичные комментарии/обсуждения', 'активные ниши', 'комментировать не по теме'],
    ],
  })}
    ${p('AI-промпты для research работают только с проверяемыми данными, с жёстким правилом UNKNOWN вместо выдумывания фактов — Prompt Pack, раздел Leads.')}
    ${h3('Наблюдение ≠ факт')}
    ${card({ title: 'Пример', text: 'Не «у вас плохая конверсия», а «на мобильной версии CTA появляется только после нескольких экранов — возможно, стоит сделать путь к записи заметнее».', example: true })}
    ${h2('Your Turn')}
    ${checklist(['Заполнить ICP, выбрать 2 Primary + 1 Backup канала', 'Найти 50 лидов тремя раундами (20+20+10)', 'Присвоить Lead Score и A/B/C, выбрать First 15 с рабочим контактом'])}
    ${h2('Done When')}
    ${checklist(['У меня есть минимум 50 лидов с источником и Lead Score', 'Я распределил(а) A/B/C и выбрал(а) First 15 с personalization notes', 'Lead Tracker готов к outreach'])}
  `);
}

// ---------- MODULE 7 (compact per brief) ----------
function module7() {
  return page('m7', `
    ${moduleHeader({ number: '7', title: 'Outreach Engine', day: 'День 9+', progressIndex: 5 })}
    ${h2('What')}
    ${p('Отправить первые 15 сообщений и продолжать outreach ежедневно.')}
    ${formula('Первое сообщение не обязано закрыть продажу — его задача: получить следующий маленький шаг.\nCONTEXT → OBSERVATION → RELEVANCE → LOW-FRICTION NEXT STEP')}
    ${card({ title: 'Пример', text: '«Посмотрел вашу карточку и Instagram. Увидел, что отдельной страницы под запись сейчас нет. Я как раз собираю такие страницы для локального бизнеса. Если актуально, могу показать короткую идею.»', example: true })}
    ${p('The 4-Line Rule: 2–4 короткие строки, не коммерческое предложение. Personalization Levels: Light (имя + 1 наблюдение) для большинства B-лидов, Deep — только для сильных A-лидов.')}
    ${h3('Free Value Boundary')}
    ${formula('SHOW THINKING ≠ DELIVER THE PROJECT')}
    ${p('Допустимо: 2–3 наблюдения, один rough concept, короткий sample. Не допустимо: полный лендинг, 20 постов, готовая презентация.')}
    ${h3('Follow-Up System и Scoreboard')}
    ${p('Молчание ≠ отказ, но спамить нельзя: 3 раунда follow-up + мягкое закрытие цикла. Каденция (пример, не научный факт): День 9 первое сообщение → 11–12 follow-up #1 → 15–17 follow-up #2 → финал.')}
    ${formula('Reply Rate = Replies / Messages Sent × 100\nPositive Reply Rate = Positive Replies / Messages Sent × 100\nDiscussion / Offer / Close Rate — аналогично по следующим этапам воронки')}
    ${p('15 первых сообщений и 12 follow-up шаблонов по всем Top 5, ответы на «интересно»/молчание/«дорого» — Workbook 06 и Prompt Pack, раздел Outreach.')}
    ${h2('Your Turn')}
    ${checklist(['Подготовить First 15 (template + personalization + relevant case + CTA)', 'Отправить 15 сообщений, записать Message Version, поставить Follow-Up Date', 'Не сидеть в мессенджере — перейти к следующей задаче'])}
    ${h2('Done When')}
    ${checklist(['Я отправил(а) первые 15 сообщений с реальными наблюдениями', 'У меня есть follow-up system и я фиксирую Message Version в Tracker', 'Наличие ответа — не условие завершения: я контролирую действия, не реакцию'])}
  `);
}

// ---------- MODULE 8 (compact) ----------
function module8() {
  return page('m8', `
    ${moduleHeader({ number: '8', title: 'Sales Engine', day: 'День 9+', progressIndex: 6 })}
    ${h2('What')}
    ${p('Превратить «Интересно, сколько стоит?» в понятный sales process.')}
    ${formula('INTEREST → DISCOVERY → FIT → SOLUTION → SCOPE → PRICE → OBJECTIONS → AGREEMENT → PREPAYMENT → PROJECT START')}
    ${p('Продажа — не давление, а выяснение: есть ли реальная задача и совпадают ли ожидания. Иногда правильный итог — NOT A FIT.')}
    ${h3('Discovery без допроса')}
    ${formula('ASK → LISTEN → CLARIFY → SUMMARIZE')}
    ${card({ title: 'Summarize before selling', text: '«Правильно понял: сейчас у вас [CURRENT]. Нужно [DESIRED]. Главное — [PRIORITY]. Тогда я бы предложил [SOLUTION].»', example: true })}
    ${h3('Цена и тишина после неё')}
    ${formula('PRICE + SCOPE + TERMS\nSTATE → CLARIFY IF NEEDED → LET THEM PROCESS')}
    ${p('После цены не оправдываться и не предлагать скидку от страха. «Дорого» ≠ отказ — может значить что угодно от нет бюджета до плохого timing; уточнять, не додумывать.')}
    ${h3('Objection Framework')}
    ${formula('ACKNOWLEDGE → CLARIFY → RESPOND → NEXT STEP')}
    ${card({ title: 'Discount Rules', text: 'IF PRICE GOES DOWN → SCOPE SHOULD OFTEN GO DOWN TOO. Не тот же CORE со скидкой — предложить STARTER.', example: true })}
    ${p('Полная Objection Library на 15 категорий («дорого», «подумаю», «сделайте сначала», «гарантируете результат» и др.) с 3 хорошими ответами на каждую — Workbook 07 и Prompt Pack, раздел Sales.')}
    ${h3('Closing → Payment & Legal Reality')}
    ${formula('AGREEMENT → SUMMARY → PAYMENT → START DATE')}
    ${p('Письменная фиксация scope перед стартом (Project Summary). Нет одной схемы договора/оплаты для всех стран и возрастов — соблюдай законы своей юрисдикции; несовершеннолетним — отдельно проверить, что можно заключать самостоятельно. Это не юридическая консультация.')}
    ${card({ title: 'Guarantee Results', text: 'Гарантировать можно deliverable/process, не sales/leads/revenue. «Отвечаю за согласованный scope и техническую работоспособность — количество продаж зависит также от трафика и цены».', example: true })}
    ${h2('Your Turn')}
    ${checklist(['Провести discovery и сделать summary перед предложением', 'Назвать цену вместе со scope, обработать реальное возражение', 'Зафиксировать условия письменно и получить предоплату'])}
    ${h2('Done When')}
    ${checklist(['Я умею провести discovery, суммировать задачу и назвать цену спокойно', 'Я не даю скидку из страха и не гарантирую бизнес-результат', 'У меня есть NEXT ACTION по каждой активной сделке в Lead Tracker'])}
  `);
}

// ---------- MODULE 9 (compact) ----------
function module9() {
  return page('m9', `
    ${moduleHeader({ number: '9', title: 'Client Delivery System', day: 'После WON', progressIndex: 7 })}
    ${h2('What')}
    ${p('Выполнить проект профессионально после первой оплаты, не потерять контроль над scope, получить финальную оплату.')}
    ${formula("DON'T START PRODUCTION UNTIL INPUTS ARE CLEAR")}
    ${p('Перед стартом — Minimum Brief (11 вопросов) и Materials Checklist. Source of Truth: VERIFIED PUBLIC / CLIENT PROVIDED / PLACEHOLDER / UNKNOWN — UNKNOWN ≠ право придумывать факты.')}
    ${h3('First Version → QA → Feedback')}
    ${p('First Version должна пройти внутренний QA (нет placeholders, нет выдуманных фактов, всё согласованное на месте) прежде чем уйти клиенту — не «ну вот примерно».')}
    ${table({
    headers: ['Vague feedback', 'Уточняющий вопрос'],
    rows: [['«Сделайте современнее»', '«Есть пример того, что вы называете современным?»']],
  })}
    ${h3('Revision vs New Scope')}
    ${card({ title: 'Пример', text: 'Клиент: «Добавим ещё страницу». Ответ: «Да, можем. Это уже дополнительный deliverable вне текущего scope — оценю объём отдельно.»', example: true })}
    ${h3('Final Approval → Payment → Handoff')}
    ${p('Не отправлять файлы без подтверждения финальной версии. Остаток оплаты — по согласованным условиям (не универсальный стандарт). Handoff — организованная папка (01_FINAL / 02_SOURCE / 03_ASSETS / 04_README), не «final-final2-LAST.zip».')}
    ${card({ title: "Don't Overdeliver Into Burnout", text: 'DELIVER WHAT WAS PROMISED + DO IT WELL. Бесплатное «в 3 раза больше» создаёт плохие ожидания на будущее.', example: true })}
    ${h2('Your Turn')}
    ${checklist(['Отправить Kickoff, получить Brief, собрать Materials', 'Провести Internal QA перед отправкой First Version', 'Собрать feedback одним раундом, получить Final Approval и провести Handoff'])}
    ${h2('Done When')}
    ${checklist(['Materials собраны, неизвестные факты не придуманы', 'Feedback собран структурированно, New Scope отделён от revisions', 'Получено Final Approval, оплата и передача организованы, Support Boundary понятен'])}
  `);
}

// ---------- MODULE 10 (compact) ----------
function module10() {
  return page('m10', `
    ${moduleHeader({ number: '10', title: 'Review → Referral → Next Client', day: 'После каждого проекта', progressIndex: 8 })}
    ${h2('What')}
    ${formula('PROJECT COMPLETE → REVIEW → REAL CASE → REFERRAL → UPSELL/REPEAT → BETTER PORTFOLIO → BETTER OFFER → NEXT CLIENT')}
    ${p('ONE CLIENT SHOULD CREATE MORE THAN ONE ASSET. Не гарантия, что каждый клиент даст рекомендацию — система возможностей.')}
    ${card({ title: 'Review Request', text: '«Спасибо за работу. Если результат вас устроил, буду благодарен(на) за короткий отзыв в 2–3 предложениях: какая была задача и как вам прошла работа.»', example: true })}
    ${p('Никогда: выдумывать отзыв, писать его за клиента, представлять concept как оплаченный проект. Real Case Builder — PROJECT OUTCOME вместо непроверенного BUSINESS RESULT.')}
    ${h3('Referral и Natural Upsell')}
    ${formula('CONTEXT → WHO I HELP → LOW-PRESSURE ASK')}
    ${p('Не «дайте мне клиента». Natural Upsell — логичный следующий deliverable (доп. страница после лендинга, следующий контент-пак), не продажа ненужного, и не раньше, чем клиент доволен.')}
    ${h3('Не останавливать outreach')}
    ${formula('DELIVERY + LIGHT OUTREACH')}
    ${p('Получил первый заказ → перестал искать клиентов → воронка пустая — типичная ошибка. Pipeline продолжается параллельно, без выгорания.')}
    ${h3('Final Funnel Diagnosis')}
    ${table({
    headers: ['Симптом', 'Направление диагностики'],
    rows: [
      ['Нет лидов', 'ICP / sourcing'],
      ['Лиды есть, нет ответов', 'качество лидов / outreach'],
      ['Ответы есть, нет продаж', 'sales / доверие / цена / timing'],
      ['Проекты завершены, нет повторов', 'client fit / опыт / offer'],
    ],
  })}
    ${p('Если за 30 дней нет клиента — DO NOT RESET EVERYTHING: изменить одно слабое звено (лиды/сообщение/оффер/портфолио) и тестировать снова.')}
    ${h2('Your Turn')}
    ${checklist(['После каждого проекта: closeout → feedback → review → real case → referral → апдейт портфолио и цены', 'Продолжать outreach параллельно с delivery'])}
    ${h2('Done When')}
    ${p('Финальный DONE WHEN всего продукта — Final Client Checkpoint на следующей странице.')}
  `);
}

function checkpoint() {
  const items = [
    'Я выбрал(а) одну услугу', 'Я получил(а) базовый навык', 'Я сделал(а) 3 Portfolio Cases',
    'У меня есть Offer', 'У меня есть Price', 'У меня есть Lead System',
    'Я нашёл(нашла) потенциальных клиентов', 'Я начал(а) Outreach', 'Я делаю Follow-Up',
    'Я умею проводить Discovery', 'Я умею назвать цену', 'Я умею фиксировать Scope',
    'Я понимаю Payment Terms', 'Я умею выполнить проект', 'Я умею работать с Revisions',
    'Я умею провести Handoff', 'Я знаю, как запросить Review', 'Я знаю, как запросить Referral',
    'Я умею анализировать Funnel', 'Я знаю свой следующий шаг',
  ];
  return page('checkpoint', `
    ${label('Финал продукта')}
    ${h1('Final Client Checkpoint')}
    ${checklist(items)}
  `);
}

function day30() {
  return page('day30', `
    ${label('День 30')}
    ${h1('Day 30 Review')}
    ${p('Полный бланк — Workbook 10. Здесь — принцип: смотреть не на «заработал/не заработал», а на controllable metrics — Leads Found, Messages Sent, Replies, Positive Replies, Discussions, Offers, Won, Projects Completed, Reviews, Referrals.')}
    ${p('Главный результат 30 дней — построена работающая система и появились реальные рыночные данные, а не гарантированный доход.')}
  `);
}

function finalPage() {
  return page('final', `
    <div style="height:70mm"></div>
    ${label('Финальная страница')}
    ${h1('У тебя уже есть система.')}
    ${p('Не открывай ещё один список способов заработка.')}
    ${p('Открой Lead Tracker.')}
    ${p('Посмотри на NEXT ACTION.')}
    ${p('Сделай его.')}
  `);
}

function buildGuideHtml() {
  const modulesForToc = [
    { number: 2, title: 'Choose Your Service' },
    { number: 3, title: '3-Day Skill Sprint' },
    { number: 4, title: '3-Case Portfolio Sprint' },
    { number: 5, title: 'Offer + Pricing' },
    { number: 6, title: 'Lead System' },
    { number: 7, title: 'Outreach Engine' },
    { number: 8, title: 'Sales Engine' },
    { number: 9, title: 'Client Delivery System' },
    { number: 10, title: 'Review → Referral → Next Client' },
  ];
  const body = [
    cover(), whatThisIs(), howToUse(), map30Day(), toc(modulesForToc),
    module01(), module2(), module3(), module4(), module5(),
    module6(), module7(), module8(), module9(), module10(),
    checkpoint(), day30(), finalPage(),
  ].join('\n');
  return wrapDocument({ title: 'AI MONEY START — Guide', bodyHtml: body });
}

module.exports = { buildGuideHtml };
