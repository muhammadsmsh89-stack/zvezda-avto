import clsx from "clsx";

/*
  Фоновые слои секций.

  Оба — чистый CSS, без картинок и canvas: ничего не грузится, ничего не
  считается в рантайме, на мобильном не жрёт батарею. Оба помечены
  aria-hidden — это атмосфера, а не содержание.

  Важно про порядок слоёв: фон — `absolute inset-0` без отрицательного
  z-index, поэтому контент секции обязан лежать в элементе с `relative`
  (обычно это <Container relative>). Отрицательный z-index уводил бы слой
  за фон <body>, и на секциях со своим цветом фон бы просто исчезал.
*/

/**
 * Тёплая сетка с мягким свечением фирменного акцента.
 *
 * Исходник (background-snippets.tsx c 21st.dev) был белым фоном с серой
 * сеткой #f0f0f0 и лавандовым пятном #d5c5ff — оба цвета не из палитры
 * клиники. Здесь сетка набрана чернильным тоном на 5% непрозрачности,
 * свечение — фирменной фуксией на 12%.
 *
 * Свечение уводит в правый верхний угол: в этих двух секциях контент
 * прижат влево, и пятно подсвечивает пустое поле, а не текст.
 */
export function GridGlow({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={clsx("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(36,28,33,.05) 1px, transparent 1px)," +
          "linear-gradient(to bottom, rgba(36,28,33,.05) 1px, transparent 1px)," +
          "radial-gradient(circle 900px at 88% 8%, rgba(157,79,129,.12), transparent 70%)",
        backgroundSize: "6rem 4rem, 6rem 4rem, 100% 100%",
        /* Сетка растворяется к краям, иначе секция выглядит обрезанным листом
           миллиметровки — видно стык с соседней секцией. */
        maskImage:
          "radial-gradient(ellipse 92% 78% at 50% 45%, #000 35%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 92% 78% at 50% 45%, #000 35%, transparent 100%)",
      }}
    />
  );
}

/**
 * Точечный растр — тише сетки, для секций, где уже много содержания.
 * Тот же приём с маской: в центре видно, к краям сходит на нет.
 */
export function DotField({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={clsx("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage: "radial-gradient(rgba(36,28,33,.14) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        maskImage:
          "radial-gradient(ellipse 80% 70% at 50% 35%, #000 20%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 80% 70% at 50% 35%, #000 20%, transparent 100%)",
      }}
    />
  );
}
