import { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
  as: Comp = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "section";
}) {
  return (
    <Comp className={clsx("mx-auto w-full max-w-[85rem] px-5 sm:px-8 lg:px-16", className)}>
      {children}
    </Comp>
  );
}
