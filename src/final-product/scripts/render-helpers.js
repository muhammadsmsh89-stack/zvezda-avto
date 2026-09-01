// Shared HTML block renderers for all 4 PDF documents (Guide/Workbook/Prompt Pack/Action Plan).
// Keeps content files (content.js) focused on copy, not markup boilerplate.

const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;');

// Allow a small safe subset of inline markup authors actually use: **bold**, _italic_, [text](href), and raw <br>.
const inline = (s = '') => esc(s)
  .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
  .replace(/_(.+?)_/g, '<em>$1</em>')
  .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2">$1</a>')
  .replace(/\n/g, '<br>');

const page = (id, inner) => `<div class="page" id="${id}">${inner}</div>`;

const h1 = (t) => `<h1>${inline(t)}</h1>`;
const h2 = (t) => `<h2>${inline(t)}</h2>`;
const h3 = (t) => `<h3>${inline(t)}</h3>`;
const p = (t) => `<p>${inline(t)}</p>`;
const label = (t) => `<div class="label">${inline(t)}</div>`;
const divider = () => `<hr class="divider">`;

const ul = (items = []) => `<ul>${items.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`;
const ol = (items = []) => `<ol>${items.map((i) => `<li>${inline(i)}</li>`).join('')}</ol>`;
const checklist = (items = []) => `<ul class="checklist">${items.map((i) => `<li>${inline(i)}</li>`).join('')}</ul>`;

const formula = (t) => `<div class="formula">${inline(t)}</div>`;

const card = ({ title, text, example } = {}) => `
  <div class="card${example ? ' example' : ''}">
    ${title ? `<div class="card-label">${inline(title)}</div>` : ''}
    ${text ? inline(text).split('<br>').map((l) => `<p>${l}</p>`).join('') : ''}
  </div>`;

const table = ({ headers = [], rows = [] } = {}) => `
  <table>
    <thead><tr>${headers.map((h) => `<th>${inline(h)}</th>`).join('')}</tr></thead>
    <tbody>${rows.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody>
  </table>`;

const fieldBlock = (fieldLabel, lines = 1) => `
  <div class="field-block">
    <div class="field-label">${inline(fieldLabel)}</div>
    ${Array.from({ length: lines }).map(() => `<div class="field-line"></div>`).join('')}
  </div>`;

const fieldBox = (fieldLabel, heightMm = 22) => `
  <div class="field-block">
    <div class="field-label">${inline(fieldLabel)}</div>
    <div class="field-box" style="min-height:${heightMm}mm"></div>
  </div>`;

const promptCard = ({ num, title, role, context, input, task, constraints, output }) => `
  <div class="prompt-card">
    <div class="card-label">${num ? `PROMPT ${num} — ` : ''}${inline(title)}</div>
    <div class="pk">ROLE</div><div class="pv">${inline(role)}</div>
    <div class="pk">CONTEXT</div><div class="pv">${inline(context)}</div>
    <div class="pk">INPUT</div><div class="pv">${inline(input)}</div>
    <div class="pk">TASK</div><div class="pv">${inline(task)}</div>
    <div class="pk">CONSTRAINTS</div><div class="pv">${inline(constraints)}</div>
    <div class="pk">OUTPUT FORMAT</div><div class="pv">${inline(output)}</div>
  </div>`;

const progressDots = (names, activeIndex) => `
  <div class="progress-track">
    ${names.map((n, i) => `<span class="progress-dot${i === activeIndex ? ' active' : ''}" title="${esc(n)}"></span>`).join('')}
  </div>`;

const PROGRESS_NAMES = ['Service', 'Skill', 'Proof', 'Offer', 'Leads', 'Outreach', 'Sales', 'Delivery', 'Growth'];

const moduleHeader = ({ number, title, day, tags = [], progressIndex }) => `
  <div class="module-header">
    <div class="module-number">${esc(number)}</div>
    <div class="module-meta">
      <div class="module-title">${inline(title)}</div>
      <div class="module-tags">${day ? `<span class="tag">${inline(day)}</span>` : ''}${tags.map((t) => `<span class="tag">${inline(t)}</span>`).join('')}</div>
      ${progressIndex != null ? progressDots(PROGRESS_NAMES, progressIndex) : ''}
    </div>
  </div>`;

const dayCard = ({ day, objective, doItems = [], output, track, doneWhen = [] }) => `
  <div class="day-card">
    <span class="day-num">${esc(day)}</span>
    <div class="day-objective">${inline(objective)}</div>
    ${doItems.length ? `<div class="label">Do</div>${checklist(doItems)}` : ''}
    ${output ? `<div class="label">Output</div><p>${inline(output)}</p>` : ''}
    ${track ? `<div class="label">Track</div><p>${inline(track)}</p>` : ''}
    ${doneWhen.length ? `<div class="label">Done When</div>${checklist(doneWhen)}` : ''}
  </div>`;

const tocEntry = (num, title, anchor) => `
  <div class="toc-entry"><a href="#${anchor}"><span class="toc-num">${esc(num)}</span>${inline(title)}</a></div>`;

function wrapDocument({ title, bodyHtml, cssPath = '../styles/print.css' }) {
  return `<!doctype html>
<html lang="ru">
<head>
<meta charset="utf-8">
<title>${esc(title)}</title>
<link rel="stylesheet" href="${cssPath}">
</head>
<body>
${bodyHtml}
</body>
</html>`;
}

module.exports = {
  esc, inline, page, h1, h2, h3, p, label, divider, ul, ol, checklist, formula,
  card, table, fieldBlock, fieldBox, promptCard, moduleHeader, dayCard, tocEntry,
  progressDots, PROGRESS_NAMES, wrapDocument,
};
