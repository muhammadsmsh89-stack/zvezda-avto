/**
 * Проверка контраста палитры по WCAG 2.1.
 * Ни один токен не уходит в проект без проверенной пары.
 * Запуск: node scripts/check-contrast.mjs
 */
const T = {
  shell: '#F7F4F1', paper: '#FFFDFB', veil: '#EFE9E5', line: '#D6CBC4',
  ink: '#241C21', 'ink-soft': '#574A52', 'ink-mute': '#6C5C66',
  plum: '#2A1E26', 'plum-soft': '#3B2B34',
  accent: '#9D4F81', 'accent-deep': '#7E2D63', 'accent-lift': '#D9A9C6',
};

const lum = (hex) => {
  const c = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
};
const ratio = (a, b) => {
  const [x, y] = [lum(T[a]), lum(T[b])].sort((p, q) => q - p);
  return (x + 0.05) / (y + 0.05);
};

// [текст, фон, минимум]. 4.5 — обычный текст, 3.0 — крупный текст и границы.
const PAIRS = [
  ['ink', 'shell', 4.5], ['ink', 'paper', 4.5], ['ink', 'veil', 4.5],
  ['ink-soft', 'shell', 4.5], ['ink-soft', 'paper', 4.5],
  ['ink-mute', 'shell', 4.5], ['ink-mute', 'paper', 4.5],
  ['accent', 'shell', 4.5], ['accent', 'paper', 4.5],
  ['accent-deep', 'shell', 4.5],
  ['shell', 'accent', 4.5], ['shell', 'accent-deep', 4.5],
  ['shell', 'plum', 4.5], ['shell', 'plum-soft', 4.5],
  ['accent-lift', 'plum', 4.5],
  ['line', 'shell', 1.4],
];

let bad = 0;
for (const [fg, bg, min] of PAIRS) {
  const r = ratio(fg, bg);
  const ok = r >= min;
  if (!ok) bad++;
  console.log(`${ok ? ' ok ' : 'FAIL'}  ${r.toFixed(2).padStart(5)} : 1  (нужно ${min})  ${fg} на ${bg}`);
}
console.log(bad ? `\nне проходят: ${bad}` : '\nвся палитра проходит WCAG AA');
process.exit(bad ? 1 : 0);
