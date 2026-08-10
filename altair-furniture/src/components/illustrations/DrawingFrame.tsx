import clsx from "clsx";

type DrawingFrameProps = {
  children: React.ReactNode;
  label: string;
  sheet?: string;
  scale?: string;
  tone?: "light" | "dark";
  className?: string;
  padded?: boolean;
};

export function DrawingFrame({
  children,
  label,
  sheet = "01/06",
  scale = "М 1:20",
  tone = "light",
  className,
  padded = true,
}: DrawingFrameProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-none border",
        isDark ? "border-paper/15 bg-ink-2" : "border-border bg-paper",
        className,
      )}
    >
      <span
        className={clsx(
          "absolute left-0 top-0 h-4 w-4 border-l border-t",
          isDark ? "border-accent" : "border-accent",
        )}
        aria-hidden="true"
      />
      <span
        className={clsx("absolute right-0 top-0 h-4 w-4 border-r border-t", "border-accent")}
        aria-hidden="true"
      />
      <span
        className={clsx("absolute bottom-0 left-0 h-4 w-4 border-b border-l", "border-accent")}
        aria-hidden="true"
      />
      <span
        className={clsx("absolute bottom-0 right-0 h-4 w-4 border-b border-r", "border-accent")}
        aria-hidden="true"
      />
      <div className={padded ? "p-6 sm:p-8" : ""}>{children}</div>
      <div
        className={clsx(
          "font-mono-tag flex items-center justify-between border-t px-4 py-2.5 text-[11px] uppercase tracking-[0.1em] sm:px-6",
          isDark ? "border-paper/15 text-paper/50" : "border-border text-muted",
        )}
      >
        <span>{label}</span>
        <span className="flex gap-4">
          <span>{scale}</span>
          <span>Лист {sheet}</span>
        </span>
      </div>
    </div>
  );
}
