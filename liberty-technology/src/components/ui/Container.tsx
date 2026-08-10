import clsx from "clsx";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  size?: "wide" | "content" | "text";
  as?: keyof React.JSX.IntrinsicElements;
};

const sizeClass: Record<NonNullable<ContainerProps["size"]>, string> = {
  wide: "container-wide",
  content: "container-content",
  text: "container-text",
};

export function Container({ children, className, size = "content", as = "div" }: ContainerProps) {
  const Tag = as as React.ElementType;
  return <Tag className={clsx(sizeClass[size], className)}>{children}</Tag>;
}
