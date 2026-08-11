// Собственный графический знак — архитектурный дверной проём, а не копия существующей
// вывески компании (её реальный логотип — фотографируемый объект, не файл, который можно
// легально переиспользовать). Используется мелко, как акцент рядом с wordmark.

export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="15" stroke="currentColor" strokeWidth="1" />
      <path d="M11 22V13a5 5 0 0 1 10 0v9" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M11 22h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
