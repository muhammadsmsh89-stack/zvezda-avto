import { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-12", className)}>
      {children}
    </div>
  );
}
