import clsx from "clsx";

/** Единая сетка: поля растут вместе с экраном, две ширины контейнера. */
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
        wide ? "max-w-[1560px]" : "max-w-[1280px]",
        className,
      )}
    >
      {children}
    </div>
  );
}
