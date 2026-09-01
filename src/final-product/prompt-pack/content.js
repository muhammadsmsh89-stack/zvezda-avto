const { page, h1, h2, label, p, promptCard, wrapDocument } = require('../scripts/render-helpers');

function cover() {
  return `<div class="page" id="pp-cover" style="display:flex;flex-direction:column;justify-content:space-between;min-height:257mm;">
    <div style="margin-top:60mm">
      ${label('AI MONEY START')}
      <h1 class="cover-title">PROMPT<br>PACK<span class="cover-accent-dot">.</span></h1>
      <p class="cover-sub">70 промптов по формату ROLE / CONTEXT / INPUT / TASK / CONSTRAINTS / OUTPUT FORMAT. Открывай по конкретной задаче — не читай подряд.</p>
    </div>
    <div>${label('03 · PROMPT PACK')}</div>
  </div>`;
}

const COMMON_NO_INVENT = 'Не выдумывай факты, цифры, отзывы или результаты, которых нет во входных данных. Если данных недостаточно — пиши UNKNOWN / NEEDS INPUT вместо предположения.';

function categoryIntro(num, title, sub) {
  return page(`pp-cat-${num}`, `${label(`Раздел ${num}`)}${h1(title)}${p(sub)}`);
}

function prompts(list, startNum) {
  return list.map((item, i) => promptCard({ num: startNum + i, ...item })).join('');
}

// ---------- 01 SERVICE ----------
function cat01() {
  const list = [
    { title: 'Service Ideas', role: 'Продуктовый консультант для новичков во фрилансе с ИИ.', context: 'Пользователь ещё не выбрал услугу, но знает свои интересы.', input: '[ИНТЕРЕСЫ] — чем нравится заниматься; [ВРЕМЯ В ДЕНЬ]', task: 'Предложи 5 услуг из категорий Landing Pages, Presentations, Lead Magnets, Telegram Content, Short-Form Scripts, Product Descriptions, Social Media, Research, SOP, Email, Visual Content, Video Editing, Automation, Audit, Website Redesign, которые соответствуют интересам.', constraints: `Не предлагай услуг вне этого списка. ${COMMON_NO_INVENT}`, output: 'Таблица: Услуга | Почему подходит | Что осваивать первым.' },
    { title: 'Service Comparison', role: 'Аналитик рынка фриланс-услуг.', context: 'Пользователь выбирает между 2–3 услугами.', input: '[УСЛУГА A], [УСЛУГА B], [УСЛУГА C — опционально]', task: 'Сравни по Learning Difficulty, Portfolio Speed, Lead Finding, Starter Friendliness (1–5, редакционная оценка).', constraints: 'Явно указывай, что это не рыночная статистика, а ориентир для сравнения.', output: 'Таблица сравнения + 1 рекомендация с обоснованием.' },
    { title: 'Service Fit', role: 'Карьерный консультант.', context: 'Пользователь прошёл Service Fit Test и получил баллы по осям.', input: '[VISUAL SCORE], [WRITING SCORE], [RESEARCH SCORE], [TECHNICAL SCORE], [МОДИФИКАТОРЫ]', task: 'Предложи Primary и Backup Service на основе баллов, объясни логику в 2–3 предложениях.', constraints: 'Не придумывай баллы, которые не переданы. Если данных не хватает — попроси их.', output: 'Primary Service / Backup Service / Почему.' },
    { title: 'Starter Scope', role: 'Наставник по фрилансу.', context: 'Пользователь выбрал услугу, но формулирует её слишком широко.', input: '[ШИРОКАЯ ФОРМУЛИРОВКА УСЛУГИ]', task: 'Сузь до Safe Starter Scope — конкретного ограниченного объёма, который новичок может честно выполнить.', constraints: 'Не обещай экспертный уровень. Формулировка должна звучать естественно на русском.', output: 'Safe Starter Scope одним предложением + список из 3 границ (что не входит).' },
    { title: 'Skill Requirements', role: 'Методист по обучению навыкам.', context: 'Пользователь выбрал [УСЛУГА] и должен понять, что учить в первую очередь.', input: '[УСЛУГА], [ТЕКУЩИЙ УРОВЕНЬ]', task: 'Перечисли 5 core skills, необходимых для Minimum Sellable Skill по этой услуге.', constraints: COMMON_NO_INVENT, output: 'Список из 5 навыков, каждый — строка с конкретным примером.' },
  ];
  return `${categoryIntro('01', 'Service', 'Выбор направления — 5 промптов.')}${page('pp-01', prompts(list, 1))}`;
}

// ---------- 02 SKILL ----------
function cat02() {
  const list = [
    { title: 'Concept Explainer', role: 'Терпеливый наставник без профессионального жаргона.', context: 'Пользователь не понимает термин из своей услуги.', input: '[ПОНЯТИЕ], [УСЛУГА]', task: 'Объясни понятие простыми словами, приведи 1 короткий пример.', constraints: 'Не используй профессиональный жаргон без объяснения. Максимум 5 предложений.', output: 'Объяснение + 1 пример.' },
    { title: 'Reference Breakdown', role: 'Аналитик референсов.', context: 'Пользователь нашёл хороший пример работы и хочет разобрать его структуру.', input: '[ОПИСАНИЕ ИЛИ ССЫЛКА НА ПРИМЕР], [УСЛУГА]', task: 'Разбери структуру по блокам, объясни назначение каждого блока, найди закономерности.', constraints: `Задавай уточняющие вопросы, если данных не хватает. ${COMMON_NO_INVENT}`, output: 'Список блоков структуры + короткий вывод по паттерну.' },
    { title: 'Skill Gap Finder', role: 'Диагност учебных пробелов.', context: 'Пользователь готовится к практике по [УСЛУГА] для [НИША].', input: '[УСЛУГА], [НИША], [ЧТО УЖЕ ПОНИМАЮ]', task: 'Определи 5 конкретных навыков/знаний, которых не хватает для базового качественного результата.', constraints: 'Отвечай списком, без общих фраз вроде «нужно больше практики».', output: '5 пунктов, каждый — конкретный навык.' },
    { title: 'Practice Brief Generator', role: 'Генератор учебных брифов.', context: 'Пользователю нужен тренировочный проект для Дня 4 Skill Sprint.', input: '[УСЛУГА], [НИША], [ЦЕЛЬ КЛИЕНТА]', task: 'Сгенерируй условный бриф: проблема, целевая аудитория, ключевое сообщение, ограничения.', constraints: 'Бриф вымышленный — не привязывай к реальной компании без пометки.', output: 'Бриф из 4 полей.' },
    { title: 'Critique My Draft', role: 'Строгий, но конструктивный ревьюер.', context: 'Пользователь прислал черновик работы и свой Quality Checklist.', input: '[ЧЕРНОВИК], [QUALITY CHECKLIST]', task: 'Оцени черновик строго по каждому пункту чек-листа.', constraints: 'Не хвали то, что не в чек-листе. Укажи максимум 3 главные проблемы.', output: 'Оценка по пунктам чек-листа (выполнено/не выполнено) + топ-3 проблемы.' },
    { title: 'Checklist Review', role: 'Ревьюер по чек-листу.', context: 'Пользователь хочет быструю проверку без развёрнутых комментариев.', input: '[QUALITY CHECKLIST], [РАБОТА]', task: 'Пройдись по каждому пункту чек-листа.', constraints: 'Ответ только «выполнено» / «не выполнено» на пункт — без общих комментариев.', output: 'Список пунктов со статусом.' },
    { title: 'Mistake Explainer', role: 'Наставник, сравнивающий с эталоном.', context: 'Пользователь хочет понять разницу между своей работой и референсом.', input: '[МОЯ РАБОТА], [РЕФЕРЕНС], [QUALITY CHECKLIST]', task: 'Объясни, в чём работа слабее референса по структуре и логике решений — не по вкусу.', constraints: COMMON_NO_INVENT, output: 'Список конкретных расхождений со структурой референса.' },
    { title: 'Next Exercise', role: 'Тренер по методу ONE INPUT → ONE OUTPUT.', context: 'Пользователь только что изучил тему и должен сразу что-то создать.', input: '[ИЗУЧЕННАЯ ТЕМА], [ДОСТУПНОЕ ВРЕМЯ]', task: 'Дай одно конкретное тренировочное задание с готовым артефактом на выходе.', constraints: 'Задание должно укладываться в заданное время и не быть теоретическим.', output: 'Одно задание одним предложением + ожидаемый артефакт.' },
  ];
  return `${categoryIntro('02', 'Skill', '3-Day Skill Sprint — 8 промптов.')}${page('pp-02', prompts(list, 6))}`;
}

// ---------- 03 PORTFOLIO ----------
function cat03() {
  const list = [
    { title: 'Concept Brief', role: 'Генератор демонстрационных брифов.', context: 'Пользователь готовит Concept Project для портфолио.', input: '[УСЛУГА], [НИША], [СЛОЖНОСТЬ], [ЦЕЛЬ ДЛЯ ПОРТФОЛИО]', task: 'Сгенерируй реалистичный бриф: Business, Context, Audience, Problem, Goal, Deliverable, Required content, Constraints, Success criteria, Things NOT to invent.', constraints: 'Если бизнес реальный и факты неизвестны — оставь как [PLACEHOLDER]. Никогда не выдумывай выручку, клиентов, награды, результаты, цены.', output: 'Бриф строго по перечисленным полям.' },
    { title: 'Case Diversity', role: 'Куратор портфолио.', context: 'Пользователь должен убедиться, что 3 кейса достаточно различаются.', input: '[ОПИСАНИЕ CASE 1], [CASE 2], [CASE 3]', task: 'Сравни по Niche, Audience, Problem, Deliverable, Style, Complexity — укажи, где кейсы слишком похожи.', constraints: COMMON_NO_INVENT, output: 'Таблица сравнения + вывод: достаточно ли различий (да/нет) и что изменить.' },
    { title: 'Case Critique', role: 'Ревьюер портфолио.', context: 'Пользователь хочет проверить кейс перед публикацией.', input: '[CASE STUDY]', task: 'Оцени по Clarity, Business Logic, Presentation, Credibility.', constraints: 'Сначала назови 3 самых критичных недостатка, не хвали автоматически.', output: '3 главных недостатка + краткая оценка по 4 категориям.' },
    { title: 'Case Study Writer', role: 'Копирайтер портфолио-кейсов.', context: 'Пользователь выполнил работу и должен оформить её в Case Study Format.', input: '[БРИФ], [DELIVERABLE], [КЛЮЧЕВЫЕ РЕШЕНИЯ]', task: 'Собери кейс по полям: Title, Status, Client Type, Challenge, Goal, Approach, Deliverable, Key Decisions, What This Case Demonstrates.', constraints: 'Status всегда «Concept Project», если это не оплаченный проект. Поле Results не используется — только Project Outcome.', output: 'Заполненный Case Study по всем полям.' },
    { title: 'Portfolio Audit', role: 'Критичный аудитор портфолио.', context: 'Пользователь хочет проверить всё портфолио целиком перед отправкой клиентам.', input: '[ССЫЛКА/ОПИСАНИЕ ПОРТФОЛИО]', task: 'Проверь Clarity, Consistency, Credibility, что выглядит любительским, что улучшить перед показом клиентам.', constraints: 'Не придумывай проблемы, которых нет в материале. Не хвали автоматически.', output: 'Список конкретных замечаний, отсортированный по важности.' },
    { title: '30-Second Pitch', role: 'Тренер по питчингу.', context: 'Пользователь должен уметь объяснить кейс за 30 секунд.', input: '[CASE STUDY]', task: 'Собери питч по формуле: Это концепт для [TYPE]. Задача — [PROBLEM]. Сделал(а) [DELIVERABLE]. Акцент — [DECISION].', constraints: 'Не длиннее 4 предложений.', output: '1 версия на 30 секунд + 1 версия для сообщения клиенту.' },
    { title: 'Fake Claim Detector', role: 'Контролёр честности портфолио.', context: 'Пользователь хочет проверить текст кейса на непроверенные утверждения.', input: '[ТЕКСТ КЕЙСА]', task: 'Найди утверждения, похожие на факт, но не подтверждённые (цифры, результаты, отзывы, «клиент сказал»).', constraints: 'Помечай каждое найденное утверждение как VERIFIED / CLIENT PROVIDED / UNVERIFIED.', output: 'Список найденных утверждений с пометкой и рекомендацией (оставить/убрать/заменить на Project Outcome).' },
  ];
  return `${categoryIntro('03', 'Portfolio', '3-Case Portfolio Sprint — 7 промптов.')}${page('pp-03', prompts(list, 14))}`;
}

// ---------- 04 OFFER ----------
function cat04() {
  const list = [
    { title: 'Offer Builder', role: 'Копирайтер офферов.', context: 'Пользователь должен превратить услугу в понятное предложение.', input: '[УСЛУГА], [CLIENT TYPE], [DELIVERABLE], [СРОК]', task: 'Собери оффер по формуле: Помогаю [КТО] решить [ЗАДАЧА] с помощью [DELIVERABLE] за [СРОК].', constraints: 'Не используй абстрактные результаты вроде «помогаю бизнесу расти».', output: 'Оффер одним предложением + one-sentence версия для сайта/сообщения.' },
    { title: 'Scope Builder', role: 'Ассистент по фиксации объёма работ.', context: 'Пользователь должен зафиксировать, что входит и не входит в проект.', input: '[УСЛУГА], [DELIVERABLE]', task: 'Предложи Included / Not Included / Number of Revisions на основе типового объёма для этой услуги.', constraints: COMMON_NO_INVENT, output: 'Таблица: Included | Not Included | Revisions.' },
    { title: 'Package Builder', role: 'Консультант по пакетированию услуг.', context: 'Пользователь должен собрать STARTER/CORE/PLUS.', input: '[УСЛУГА], [БАЗОВЫЙ SCOPE]', task: 'Предложи 3 уровня пакета с разным реальным объёмом deliverable (не «плохой/хороший»).', constraints: 'Не предлагай scope выше уровня новичка из Skill Sprint. Цены — только как пример, помечай явно.', output: 'Таблица STARTER/CORE/PLUS: For / Includes / Timeline / Revisions.' },
    { title: 'Price Message Critique', role: 'Ревьюер сообщений о цене.', context: 'Пользователь написал сообщение с ценой клиенту.', input: '[ЧЕРНОВИК СООБЩЕНИЯ]', task: 'Проверь на формулу PRICE + SCOPE + TERMS, наличие оправданий или излишней неуверенности.', constraints: 'Не переписывай тон на слишком уверенный/агрессивный.', output: 'Оценка + переписанная версия, если нужна.' },
    { title: 'Offer Critique', role: 'Ревьюер офферов.', context: 'Пользователь хочет проверить оффер перед использованием.', input: '[ОФФЕР]', task: 'Проверь, понимает ли обычный владелец бизнеса предложение за 10 секунд.', constraints: 'Укажи конкретно, какое слово/часть неясны — не общие рекомендации.', output: 'Вердикт (ясно/неясно) + конкретная правка.' },
  ];
  return `${categoryIntro('04', 'Offer', 'Offer + Pricing — 5 промптов.')}${page('pp-04', prompts(list, 21))}`;
}

// ---------- 05 LEADS ----------
function cat05() {
  const list = [
    { title: 'ICP Builder', role: 'Ассистент по определению целевой аудитории.', context: 'Пользователь выбрал услугу и должен описать идеального клиента.', input: '[УСЛУГА], [ЗАМЕТКИ О НИШЕ]', task: 'Заполни поля ICP Builder: Niche, Business Type, Common Problem, Visible Signals, Where to Find Them.', constraints: 'Задавай уточняющие вопросы там, где данных не хватает. Не придумывай ниши, которых пользователь не упоминал.', output: 'ICP по всем полям.' },
    { title: 'Lead Qualification', role: 'Аналитик лидов.', context: 'Пользователь нашёл компанию и хочет оценить её как лида.', input: '[ПУБЛИЧНО ДОСТУПНАЯ ИНФОРМАЦИЯ О КОМПАНИИ]', task: 'Оцени по Lead Score: Need / Buying Capacity / Contactability / Fit / Timing (0–2 каждый).', constraints: 'Если по пункту данных недостаточно — пиши UNKNOWN, не придумывай значение.', output: 'Оценка по 5 пунктам + Total Score /10.' },
    { title: 'Company Research Summary', role: 'Ресёрчер.', context: 'Пользователь собрал открытые материалы о компании.', input: '[ССЫЛКИ / ТЕКСТ]', task: 'Сделай короткую сводку: что продают, кто аудитория, какие сигналы активности видны.', constraints: 'Не добавляй фактов, которых нет в материалах.', output: 'Сводка в 4–5 пунктах.' },
    { title: 'Website / Profile Observation', role: 'Наблюдатель, не эксперт по продажам.', context: 'Пользователь описал сайт или профиль потенциального лида.', input: '[ОПИСАНИЕ САЙТА/ПРОФИЛЯ]', task: 'Перечисли конкретные наблюдения (что видно буквально), отдельно от предположений (что это может значить).', constraints: 'Не смешивай два списка. Не утверждай проблему как факт.', output: 'Два отдельных списка: Observations / Hypotheses.' },
    { title: 'Personalization Hook Generator', role: 'Автор персонализации.', context: 'Пользователь имеет конкретное наблюдение о лиде.', input: '[НАБЛЮДЕНИЕ], [УСЛУГА]', task: 'Сформулируй personalization hook на 1 предложение.', constraints: 'Запрещены комплименты общего характера («классный бизнес», «потрясающая компания»).', output: '1 предложение-крючок.' },
    { title: 'Lead Prioritization', role: 'Ассистент по приоритизации.', context: 'У пользователя есть список лидов с их Lead Score.', input: '[СПИСОК ЛИДОВ С БАЛЛАМИ]', task: 'Распредели по A/B/C по правилам: A = сильный fit + проблема + хороший контакт.', constraints: COMMON_NO_INVENT, output: 'Список с категорией A/B/C + причина одним предложением на лид.' },
    { title: 'Economic Fit', role: 'Аналитик экономики сделки.', context: 'Пользователь оценивает, оправдана ли его цена для этого лида.', input: '[ЧТО ПРОДАЁТ КЛИЕНТ], [ПУБЛИЧНО ВИДИМЫЙ ORDER VALUE], [ЦЕНА УСЛУГИ]', task: 'Оцени соразмерность цены масштабу бизнеса клиента.', constraints: 'Не выдумывай ROI и не гарантируй окупаемость.', output: 'Вывод: вероятно соразмерно / вероятно нет / недостаточно данных — с обоснованием.' },
  ];
  return `${categoryIntro('05', 'Leads', 'Lead System — 7 промптов.')}${page('pp-05', prompts(list, 26))}`;
}

// ---------- 06 OUTREACH ----------
function cat06() {
  const list = [
    { title: 'Personalized First Message', role: 'Автор первых сообщений.', context: 'Пользователь готовит первое касание с лидом.', input: '[НАБЛЮДЕНИЕ], [УСЛУГА], [КАНАЛ]', task: 'Собери сообщение по формуле CONTEXT → OBSERVATION → RELEVANCE → NEXT STEP.', constraints: 'Максимум 4 строки. Без ложной срочности и обещаний результата.', output: '1 готовое сообщение.' },
    { title: 'Message Shortener', role: 'Редактор.', context: 'Сообщение пользователя получилось слишком длинным.', input: '[ЧЕРНОВИК СООБЩЕНИЯ]', task: 'Сократи до 2–4 строк, сохранив наблюдение и next step.', constraints: 'Не убирай персонализацию ради краткости.', output: 'Короткая версия сообщения.' },
    { title: 'Observation → Outreach', role: 'Связующее звено между research и outreach.', context: 'У пользователя есть сырое наблюдение из Lead Research Card.', input: '[НАБЛЮДЕНИЕ], [КОМПАНИЯ], [УСЛУГА]', task: 'Преобразуй наблюдение в первое сообщение по формуле CONTEXT→OBSERVATION→RELEVANCE→NEXT STEP.', constraints: 'Не превращай наблюдение в критику бизнеса.', output: '1 готовое сообщение.' },
    { title: 'Follow-Up Generator', role: 'Автор follow-up сообщений.', context: 'Клиент не ответил на первое сообщение.', input: '[ПЕРВОЕ СООБЩЕНИЕ], [СКОЛЬКО ДНЕЙ ПРОШЛО], [НОМЕР FOLLOW-UP]', task: 'Сгенерируй follow-up соответствующего типа (gentle / value-based / timing-signal / close-the-loop).', constraints: 'Без пассивной агрессии и намёков вроде «вы наверное не видели».', output: '1 follow-up сообщение.' },
    { title: 'Reply Classifier', role: 'Классификатор ответов клиентов.', context: 'Пользователь получил ответ и не понимает, что это значит.', input: '[ОТВЕТ КЛИЕНТА]', task: 'Классифицируй: Interested / Price Question / Objection / No / Needs More Info.', constraints: 'Если ответ неоднозначен — укажи это, не выбирай категорию силой.', output: 'Категория + рекомендованный следующий шаг.' },
    { title: 'Message Critique', role: 'Ревьюер outreach-сообщений.', context: 'Пользователь хочет проверить сообщение перед отправкой.', input: '[СООБЩЕНИЕ]', task: 'Проверь на длину, наличие наблюдения, ложную срочность, шаблонность.', constraints: 'Укажи максимум 3 проблемы, не переписывай тон полностью.', output: 'До 3 замечаний + одна конкретная правка.' },
    { title: 'A/B Variant Generator', role: 'Автор вариантов сообщений.', context: 'Пользователь хочет протестировать альтернативный вариант сообщения.', input: '[СООБЩЕНИЕ A], [ЧТО МЕНЯЕМ: opening/CTA/offer framing/personalization]', task: 'Создай вариант B, меняя только указанный элемент.', constraints: 'Не меняй остальные элементы сообщения одновременно.', output: 'Message B.' },
    { title: 'Freelance Proposal Builder', role: 'Автор откликов на фриланс-биржах.', context: 'Пользователь отвечает на опубликованную задачу.', input: '[ТЕКСТ ЗАДАЧИ], [УСЛУГА], [РЕЛЕВАНТНЫЙ КЕЙС]', task: 'Собери отклик: понял задачу → релевантный опыт → как бы подошёл → что уточнить → следующий шаг.', constraints: 'Не писать «готов выполнить быстро и качественно» и подобные пустые фразы.', output: 'Готовый отклик по 5 пунктам.' },
  ];
  return `${categoryIntro('06', 'Outreach', 'Outreach Engine — 8 промптов.')}${page('pp-06', prompts(list, 33))}`;
}

// ---------- 07 SALES ----------
function cat07() {
  const list = [
    { title: 'Discovery Questions', role: 'Ассистент по продажам.', context: 'Клиент проявил интерес, нужно начать discovery.', input: '[КОНТЕКСТ ЛИДА]', task: 'Предложи 2–3 естественных discovery-вопроса для начала диалога, не анкету.', constraints: 'Не задавай больше 3 вопросов за раз.', output: '2–3 вопроса + короткое обоснование выбора.' },
    { title: 'Discovery Summary', role: 'Ассистент по суммированию диалога.', context: 'Пользователь провёл discovery и хочет проверить понимание перед предложением.', input: '[ЗАМЕТКИ ДИАЛОГА]', task: 'Собери summary по формуле: сейчас у вас… нужно… главное… срок…', constraints: COMMON_NO_INVENT, output: 'Summary из 4 предложений.' },
    { title: 'Scope Clarifier', role: 'Ассистент по объёму работ.', context: 'После discovery неясен точный scope.', input: '[ЗАМЕТКИ ДИАЛОГА]', task: 'Предложи Included/Not Included на основе того, что реально обсуждалось.', constraints: 'Не добавляй scope, которого не было в диалоге.', output: 'Included / Not Included списком.' },
    { title: 'Offer Draft', role: 'Автор предложений по итогам discovery.', context: 'Discovery завершён, нужно сформулировать решение.', input: '[SUMMARY], [УСЛУГА], [SCOPE]', task: 'Собери предложение по формуле YOU SAID → SO I RECOMMEND → IT INCLUDES.', constraints: 'Предлагай только то, что связано с discovery — не весь список возможностей.', output: '3–4 предложения.' },
    { title: 'Price Message', role: 'Автор сообщений о цене.', context: 'Пользователь готов назвать цену клиенту.', input: '[SCOPE], [ЦЕНА], [СРОК], [ПРАВКИ]', task: 'Собери сообщение по формуле PRICE + SCOPE + TERMS.', constraints: 'Без оправданий и извинений за цену.', output: '1 готовое сообщение.' },
    { title: 'Objection Analyzer', role: 'Аналитик возражений.', context: 'Клиент написал возражение.', input: '[ВОЗРАЖЕНИЕ КЛИЕНТА]', task: 'Определи, к какой из 15 категорий Objection Library оно ближе всего и что может стоять за ним.', constraints: 'Не выбирай одну причину как единственно верную — перечисли 2–3 варианта.', output: 'Категория + возможные скрытые причины.' },
    { title: 'Objection Response', role: 'Автор ответов на возражения.', context: 'Пользователь знает категорию возражения и хочет ответ.', input: '[ВОЗРАЖЕНИЕ], [КАТЕГОРИЯ]', task: 'Собери ответ по формуле ACKNOWLEDGE → CLARIFY → RESPOND → NEXT STEP.', constraints: 'Не предлагай скидку без изменения scope.', output: '1 готовый ответ.' },
    { title: 'Sales Conversation Critique', role: 'Ревьюер продажных диалогов.', context: 'Пользователь хочет проверить переписку с клиентом.', input: '[ПЕРЕПИСКА]', task: 'Оцени: не питчил ли слишком рано, назвал ли цену со scope, не гарантировал ли лишнего.', constraints: 'Укажи максимум 3 проблемы.', output: 'До 3 замечаний с конкретным местом в переписке.' },
    { title: 'Project Summary Generator', role: 'Ассистент по фиксации условий.', context: 'Сделка согласована, нужна письменная фиксация.', input: '[SCOPE], [ЦЕНА], [СРОК], [ПРАВКИ], [ОПЛАТА]', task: 'Собери Project Summary по 9 полям (Project, Deliverables, Deadline, Price, Payment terms, Revisions, Not Included, Client materials, Final delivery).', constraints: COMMON_NO_INVENT, output: 'Заполненный Project Summary.' },
    { title: 'Offer Follow-Up', role: 'Автор follow-up после отправленного предложения.', context: 'Пользователь отправил цену/предложение и не получил ответ.', input: '[ЧТО БЫЛО ПРЕДЛОЖЕНО], [СКОЛЬКО ДНЕЙ ПРОШЛО]', task: 'Сгенерируй мягкий follow-up без давления.', constraints: 'Без «просто напоминаю» и пассивной агрессии.', output: '1 сообщение.' },
  ];
  return `${categoryIntro('07', 'Sales', 'Sales Engine — 10 промптов.')}${page('pp-07', prompts(list, 41))}`;
}

// ---------- 08 DELIVERY ----------
function cat08() {
  const list = [
    { title: 'Brief Builder', role: 'Ассистент по сбору брифа.', context: 'Проект оплачен, нужен Minimum Brief.', input: '[УСЛУГА], [ЧТО ИЗВЕСТНО О КЛИЕНТЕ]', task: 'Собери вопросы по 11 полям Minimum Brief, отметь, каких данных не хватает.', constraints: 'Не выдумывай ответы клиента.', output: 'Список вопросов по недостающим полям.' },
    { title: 'Client Materials Extractor', role: 'Ассистент по организации материалов.', context: 'Клиент прислал материалы вперемешку.', input: '[СПИСОК ПРИСЛАННЫХ ФАЙЛОВ/ТЕКСТА]', task: 'Рассортируй по категориям: логотип, тексты, фото, контакты, референсы и т.д.', constraints: 'Не додумывай назначение файла, если оно неочевидно — помечай как UNKNOWN.', output: 'Список материалов по категориям + что ещё нужно запросить.' },
    { title: 'Source Verification Checklist', role: 'Контролёр достоверности.', context: 'В брифе клиента есть фактические утверждения (цифры, опыт, награды).', input: '[ТЕКСТ БРИФА]', task: 'Помечай каждый факт: VERIFIED PUBLIC / CLIENT PROVIDED / PLACEHOLDER / UNKNOWN.', constraints: 'Не переводи CLIENT PROVIDED в VERIFIED без основания.', output: 'Список фактов с пометкой источника.' },
    { title: 'Project Plan Generator', role: 'Ассистент по планированию.', context: 'Нужно разбить проект на этапы.', input: '[УСЛУГА], [SCOPE]', task: 'Предложи Delivery Plan из этапов (Inputs → Production → QA → Review → Handoff) под конкретную услугу.', constraints: 'Не добавляй этапы, не относящиеся к согласованному scope.', output: 'Список этапов по порядку.' },
    { title: 'Internal QA', role: 'Строгий QA-ревьюер.', context: 'Первая версия готова, нужна проверка перед отправкой клиенту.', input: '[DELIVERABLE], [SCOPE]', task: 'Проверь по Pre-Send Check: content, scope, consistency, technical, business logic.', constraints: 'Не пропускай пункты, даже если работа выглядит завершённой.', output: 'Чек-лист с отметками + список проблем, если есть.' },
    { title: 'Client Feedback Organizer', role: 'Организатор фидбека.', context: 'Клиент прислал разрозненные комментарии в нескольких сообщениях.', input: '[СООБЩЕНИЯ КЛИЕНТА]', task: 'Собери все замечания в один структурированный список.', constraints: 'Не добавляй собственные интерпретации сверх сказанного.', output: 'Единый нумерованный список правок.' },
    { title: 'Revision Planner', role: 'Ассистент по планированию правок.', context: 'Собран список замечаний клиента.', input: '[СПИСОК ЗАМЕЧАНИЙ]', task: 'Раздели на: быстрые правки / требующие уточнения / похожие на новый scope.', constraints: 'Явно помечай пункты, похожие на New Scope, не смешивай с revisions.', output: 'Три сгруппированных списка.' },
    { title: 'Scope Change Analyzer', role: 'Аналитик изменений объёма.', context: 'Клиент запросил что-то новое.', input: '[ЗАПРОС КЛИЕНТА], [ИСХОДНЫЙ SCOPE]', task: 'Определи: это revision в рамках текущего scope или новый scope.', constraints: 'При сомнении — трактуй как New Scope, а не как бесплатную правку.', output: 'Вердикт + короткое обоснование + черновик ответа клиенту.' },
    { title: 'Handoff Checklist Generator', role: 'Ассистент по финальной передаче.', context: 'Проект завершён, нужна организованная передача.', input: '[УСЛУГА], [ЧТО ВХОДИТ В ПЕРЕДАЧУ]', task: 'Сформируй структуру передачи (01_FINAL/02_SOURCE/03_ASSETS/04_README) под конкретный проект.', constraints: 'Не включай файлы/доступы, которые не обсуждались.', output: 'Структура папки + черновик README.' },
    { title: 'Client Update Draft', role: 'Автор статусных сообщений клиенту.', context: 'Нужно сообщить клиенту о ходе проекта, задержке или следующем шаге.', input: '[ТЕКУЩИЙ СТАТУС], [ПРИЧИНА ОБНОВЛЕНИЯ]', task: 'Собери короткое сообщение по правилу NO SURPRISES: что происходит, что нужно от клиента, следующий шаг.', constraints: 'Без длинных оправданий.', output: '1 сообщение.' },
  ];
  return `${categoryIntro('08', 'Delivery', 'Client Delivery System — 10 промптов.')}${page('pp-08', prompts(list, 51))}`;
}

// ---------- 09 GROWTH ----------
function cat09() {
  const list = [
    { title: 'Feedback Analyzer', role: 'Аналитик обратной связи.', context: 'Клиент ответил на запрос фидбека после завершения проекта.', input: '[ОТВЕТ КЛИЕНТА]', task: 'Определи: доволен ли клиент, есть ли скрытая проблема, стоит ли просить review сейчас.', constraints: 'Не проси review у явно недовольного клиента.', output: 'Вывод (просить review / сначала уточнить) + почему.' },
    { title: 'Review Request Draft', role: 'Автор запросов отзывов.', context: 'Клиент доволен результатом.', input: '[ТИП КЛИЕНТА: casual/professional/repeat], [DELIVERABLE]', task: 'Собери запрос отзыва по формуле CONTEXT → WHY → EASY ACTION.', constraints: 'Без «Оставьте отзыв пожалуйста!!!» и давления.', output: '1 сообщение.' },
    { title: 'Real Case Study Builder', role: 'Копирайтер реальных кейсов.', context: 'Проект завершён, клиент дал разрешение на публикацию.', input: '[БРИФ], [DELIVERABLE], [FEEDBACK КЛИЕНТА], [PERMISSION]', task: 'Собери Real Case по полям Real Case Builder.', constraints: 'Business Result используй только если он реально измерялся и подтверждён — иначе используй Project Outcome.', output: 'Заполненный Real Case по всем полям.' },
    { title: 'Referral Message Generator', role: 'Автор запросов рекомендаций.', context: 'Клиент доволен, подходящий момент попросить referral.', input: '[УСЛУГА], [ТИП КЛИЕНТА]', task: 'Собери сообщение по формуле CONTEXT → WHO I HELP → LOW-PRESSURE ASK.', constraints: 'Без «дайте мне клиента» и давления.', output: '1 сообщение.' },
    { title: 'Upsell Opportunity Analyzer', role: 'Аналитик возможностей допродажи.', context: 'Проект завершён.', input: '[УСЛУГА], [DELIVERABLE], [ЧТО ИЗВЕСТНО О КЛИЕНТЕ]', task: 'Определи логичный следующий deliverable по Natural Upsell Map.', constraints: 'Не предлагай upsell, если явно рано (клиент недоволен или проект только что стартовал).', output: '1 предложение upsell по формуле OBSERVATION → RELEVANCE → OPTION.' },
    { title: 'Client Check-In Draft', role: 'Автор check-in сообщений.', context: 'Прошло разумное время с завершения проекта.', input: '[DELIVERABLE], [СКОЛЬКО ВРЕМЕНИ ПРОШЛО]', task: 'Собери ненавязчивое check-in сообщение.', constraints: 'Без «Ну что, ещё что-нибудь купить хотите?».', output: '1 сообщение.' },
    { title: 'Project Retrospective', role: 'Ассистент по ретроспективе проекта.', context: 'Проект завершён, нужно извлечь уроки.', input: '[КАК ПРОШЁЛ ПРОЕКТ]', task: 'Заполни After-Project Review: что прошло хорошо, что исправить, что стандартизировать, что добавить в портфолио.', constraints: COMMON_NO_INVENT, output: 'Заполненный After-Project Review по 5 полям.' },
    { title: 'Price Review Assistant', role: 'Ассистент по пересмотру цены.', context: 'Завершено 2–3 проекта по текущей цене.', input: '[ПОСЛЕДНИЕ ПРОЕКТЫ: цена, время, сложность]', task: 'Пройди Price Review Checkpoint и дай рекомендацию keep/adjust price.', constraints: 'Не предлагай повышение в разы без реальных оснований (кейсы, отзывы, спрос).', output: 'Keep Price / Adjust Price + обоснование.' },
    { title: 'Funnel Diagnosis', role: 'Диагност воронки продаж.', context: 'Пользователь видит цифры своей воронки в Lead Tracker.', input: '[МЕТРИКИ: leads, messages, replies, positive replies, discussions, offers, won]', task: 'Определи, на каком этапе воронка слабее всего, по Final Funnel Diagnosis.', constraints: 'Не называй единственную гарантированную причину — дай направление диагностики.', output: 'Слабый этап + 2–3 гипотезы, что проверить.' },
    { title: 'Next 30-Day Plan', role: 'Ассистент по планированию следующего месяца.', context: 'Завершены первые 30 дней.', input: '[DAY 30 REVIEW: что сработало, что нет, bottleneck]', task: 'Предложи 3 конкретных приоритета на следующие 30 дней.', constraints: 'Не предлагай сменить услугу без явного основания из bottleneck.', output: 'Список из 3 приоритетов с обоснованием.' },
  ];
  return `${categoryIntro('09', 'Growth', 'Review → Referral → Next Client — 10 промптов.')}${page('pp-09', prompts(list, 61))}`;
}

function buildPromptPackHtml() {
  const body = [cover(), cat01(), cat02(), cat03(), cat04(), cat05(), cat06(), cat07(), cat08(), cat09()].join('\n');
  return wrapDocument({ title: 'AI MONEY START — Prompt Pack', bodyHtml: body });
}

module.exports = { buildPromptPackHtml };
