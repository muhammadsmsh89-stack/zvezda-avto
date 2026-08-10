import clsx from "clsx";

export function NumberTag({ value, className }: { value: string; className?: string }) {
  return (
    <span className={clsx("font-mono-tag text-sm text-accent", className)} aria-hidden="true">
      {value}
    </span>
  );
}
