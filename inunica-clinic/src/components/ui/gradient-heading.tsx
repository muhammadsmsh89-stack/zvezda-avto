import clsx from "clsx";

/**
 * Заголовок с градиентной заливкой букв.
 *
 * Исходник (Gradient Heading c 21st.dev) заливал текст серым от белого
 * к тёмному на чёрном фоне. Здесь градиент идёт от основных чернил к
 * фирменной фуксии — то есть заголовок буквально «дотягивается» до
 * акцентного цвета, а не подсвечивается чужим.
 *
 * Крайние точки градиента проверены как обычный текст: ink 15,2:1,
 * accent 4,95:1 на фоне сайта — оба проходят WCAG AA, так что читаемость
 * не зависит от того, на какую букву попал переход.
 *
 * inline-block обязателен: у строчного элемента с переносом внутри
 * background-clip считается по каждой строке отдельно, и градиент
 * перезапускается на второй строке вместо того, чтобы идти через весь блок.
 */
export function GradientHeading({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={clsx(
        "inline-block bg-gradient-to-br from-ink via-ink to-accent",
        "bg-clip-text text-transparent",
        /* В режиме высокой контрастности ОС фоны выбрасываются — без этого
           текст остался бы прозрачным, то есть невидимым. */
        "forced-colors:bg-none forced-colors:text-ink",
        className,
      )}
    >
      {children}
    </span>
  );
}
