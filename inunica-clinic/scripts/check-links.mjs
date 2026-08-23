/**
 * Проверяет статический экспорт: внутренние ссылки, ассеты, пустые href,
 * заглушки и следы «Lorem ipsum». Запускать после `npm run build`.
 */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'out');
const BASE = '/zvezda-avto/inunica-clinic';

const walk = (d) => fs.readdirSync(d, { withFileTypes: true })
  .flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);

if (!fs.existsSync(OUT)) { console.error('out/ не найден — сначала npm run build'); process.exit(1); }

const files = walk(OUT);
const htmls = files.filter(f => f.endsWith('.html'));
const exists = new Set(files.map(f => '/' + path.relative(OUT, f).split(path.sep).join('/')));

const strip = (u) => {
  let s = u.split('#')[0].split('?')[0];
  if (s.startsWith(BASE)) s = s.slice(BASE.length) || '/';
  return s;
};

const resolves = (u) => {
  const s = strip(u);
  if (s === '' || s === '/') return exists.has('/index.html');
  if (exists.has(s)) return true;
  if (exists.has(s + '/index.html')) return true;
  if (exists.has(s.replace(/\/$/, '') + '/index.html')) return true;
  return false;
};

const badLinks = [], badAssets = [], emptyHrefs = [], placeholders = [], noAlt = [];
const PLACEHOLDER = /(lorem ipsum|скоро здесь|фото ожидается|coming soon|TODO:|FIXME|заглушк)/i;
let checkedLinks = 0, checkedAssets = 0;

for (const f of htmls) {
  const rel = '/' + path.relative(OUT, f).split(path.sep).join('/');
  const html = fs.readFileSync(f, 'utf8');
  const visible = html.replace(/<script[\s\S]*?<\/script>/g, ' ');

  if (PLACEHOLDER.test(visible)) {
    const m = visible.match(PLACEHOLDER);
    placeholders.push([rel, m[0]]);
  }

  for (const m of visible.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)) {
    const href = m[1];
    if (href === '' || href === '#') { emptyHrefs.push([rel, href || '(пусто)']); continue; }
    if (/^(https?:|mailto:|tel:|tg:)/.test(href)) continue;
    if (href.startsWith('#')) continue;
    checkedLinks++;
    if (!resolves(href)) badLinks.push([rel, href]);
  }

  for (const m of visible.matchAll(/<(?:img|source|video)\b[^>]*\b(?:src|srcSet|srcset)="([^"]*)"/g)) {
    for (const cand of m[1].split(',').map(s => s.trim().split(/\s+/)[0]).filter(Boolean)) {
      if (/^(https?:|data:)/.test(cand)) continue;
      checkedAssets++;
      if (!resolves(cand)) badAssets.push([rel, cand]);
    }
  }

  for (const m of visible.matchAll(/<img\b((?:(?!>)[\s\S])*)>/g)) {
    if (!/\balt=/.test(m[1])) noAlt.push([rel, m[0].slice(0, 90)]);
  }
}

const uniq = (a) => [...new Map(a.map(x => [x.join('|'), x])).values()];
const report = (name, rows, limit = 12) => {
  const u = uniq(rows);
  console.log(`${u.length ? '✗' : '✓'} ${name}: ${u.length}`);
  u.slice(0, limit).forEach(r => console.log('    ', r[0], '->', r[1]));
  if (u.length > limit) console.log(`     …ещё ${u.length - limit}`);
  return u.length;
};

console.log(`Страниц: ${htmls.length} | проверено ссылок: ${checkedLinks} | ассетов: ${checkedAssets}\n`);
let fail = 0;
fail += report('Битые внутренние ссылки', badLinks);
fail += report('Битые ассеты', badAssets);
fail += report('Пустые href / href="#"', emptyHrefs);
fail += report('Заглушки и Lorem ipsum', placeholders);
fail += report('<img> без alt', noAlt);
console.log(fail === 0 ? '\nВсё чисто.' : `\nПроблем: ${fail}`);
process.exit(fail === 0 ? 0 : 1);
