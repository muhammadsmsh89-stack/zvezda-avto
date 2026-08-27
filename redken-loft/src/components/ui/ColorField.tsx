/**
 * ColorField — художественная цветовая карта вместо фотографии.
 *
 * В этом окружении нет доступа к реальным фотографиям работ Redken Loft, а бриф
 * прямо запрещает выдавать стоковые снимки за работы салона. ColorField рисует
 * editorial "color story" — плашку с двумя тонами окрашивания и лёгким зерном —
 * и явно не претендует быть фотографией клиента. Перед публикацией каждый экземпляр
 * нужно заменить на реальный кадр из портфолио салона (см. WorkItem.isPlaceholder).
 */
export function ColorField({
  swatch,
  className,
  grain = true,
}: {
  swatch: readonly [string, string];
  className?: string;
  grain?: boolean;
}) {
  const [from, to] = swatch;
  return (
    <div
      className={`overflow-hidden ${grain ? "bg-grain" : ""} ${className ?? ""}`}
      style={{
        background: `linear-gradient(155deg, ${from} 0%, ${to} 100%)`,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 mix-blend-overlay opacity-40"
        style={{
          background: `radial-gradient(120% 90% at 15% 0%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 55%)`,
        }}
      />
    </div>
  );
}
