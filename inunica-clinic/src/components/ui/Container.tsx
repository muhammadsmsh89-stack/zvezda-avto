import clsx from "clsx";

/** Единая сетка: 1 колонка на мобильном, поля растут вместе с экраном. */
export function Container({
  children,
  className,
  wide = false,
}: {
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        wide ? "max-w-[1680px]" : "max-w-[1380px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
