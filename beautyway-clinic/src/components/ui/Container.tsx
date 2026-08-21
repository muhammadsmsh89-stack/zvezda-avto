import clsx from "clsx";

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
    <div className={clsx("mx-auto w-full px-5 sm:px-8", wide ? "max-w-[1320px]" : "max-w-[1180px]", className)}>
      {children}
    </div>
  );
}
