/** Структурная проверка доступности по собранному экспорту. */
import fs from 'node:fs';
import path from 'node:path';

const OUT = path.join(process.cwd(), 'out');
const walk = (d) => fs.readdirSync(d, { withFileTypes: true })
  .flatMap(e => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
const htmls = walk(OUT).filter(f => f.endsWith('.html'));

const issues = { noH1: [], multiH1: [], noLang: [], noTitle: [], noMain: [], noSkip: [],
  emptyLink: [], divButton: [], noDocTitle: [], badHeadingJump: [], dupIds: [] };

for (const f of htmls) {
  const rel = '/' + path.relative(OUT, f).split(path.sep).join('/');
  const html = fs.readFileSync(f, 'utf8');
  const body = html.replace(/<script[\s\S]*?<\/script>/g, ' ');

  const h1 = [...body.matchAll(/<h1\b/g)].length;
  if (h1 === 0) issues.noH1.push(rel);
  if (h1 > 1) issues.multiH1.push(`${rel} (${h1})`);
  if (!/<html[^>]+lang="ru"/.test(html)) issues.noLang.push(rel);
  if (!/<title>[^<]{3,}/.test(html)) issues.noTitle.push(rel);
  if (!/<main\b/.test(body)) issues.noMain.push(rel);
  if (!/Перейти к основному содержанию/.test(body)) issues.noSkip.push(rel);

  // ссылки без доступного имени
  for (const m of body.matchAll(/<a\b[^>]*>([\s\S]{0,400}?)<\/a>/g)) {
    const tag = m[0];
    const text = m[1].replace(/<[^>]+>/g, '').replace(/&[a-z]+;/g, ' ').trim();
    if (!text && !/aria-label="[^"]+"/.test(tag) && !/\balt="[^"]+"/.test(tag)) {
      issues.emptyLink.push(`${rel} :: ${tag.slice(0, 80)}`);
    }
  }
  // кликабельные div/span вместо кнопок
  for (const m of body.matchAll(/<(div|span)\b[^>]*\bonclick\b[^>]*>/gi)) {
    issues.divButton.push(`${rel} :: ${m[0].slice(0, 70)}`);
  }
  // дубли id
  const ids = [...body.matchAll(/\sid="([^"]+)"/g)].map(m => m[1]);
  const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
  if (dup.length) issues.dupIds.push(`${rel} :: ${[...new Set(dup)].slice(0, 3).join(', ')}`);
}

const uniq = a => [...new Set(a)];
let fail = 0;
const report = (label, rows, limit = 6) => {
  const u = uniq(rows);
  fail += u.length;
  console.log(`${u.length ? '✗' : '✓'} ${label}: ${u.length}`);
  u.slice(0, limit).forEach(r => console.log('    ', r));
  if (u.length > limit) console.log(`     …ещё ${u.length - limit}`);
};

console.log(`Проверено страниц: ${htmls.length}\n`);
report('Страницы без H1', issues.noH1);
report('Страницы с несколькими H1', issues.multiH1);
report('Без lang="ru"', issues.noLang);
report('Без <title>', issues.noTitle);
report('Без <main>', issues.noMain);
report('Без ссылки «к основному содержанию»', issues.noSkip);
report('Ссылки без доступного имени', issues.emptyLink);
report('Кликабельные div/span вместо кнопок', issues.divButton);
report('Дубли id на странице', issues.dupIds);
console.log(fail === 0 ? '\nСтруктурных проблем не найдено.' : `\nНайдено: ${fail}`);
process.exit(fail === 0 ? 0 : 1);
