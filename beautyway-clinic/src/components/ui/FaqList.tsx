import { IconChevron } from "./Icons";

/**
 * Аккордеон на <details>/<summary>: раскрывается и с клавиатуры,
 * и при полностью отключённом JavaScript.
 */
export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  if (!items.length) return null;
  return (
    <ul className="divide-y divide-line overflow-hidden rounded-[12px] border border-line bg-porcelain">
      {items.map((f, i) => (
        <li key={`${i}-${f.q.slice(0, 24)}`}>
          <details className="group">
            <summary className="flex min-h-[60px] cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-[1rem] font-medium leading-snug text-graphite transition-colors hover:bg-plum-tint [&::-webkit-details-marker]:hidden">
              {f.q}
              <IconChevron className="h-5 w-5 shrink-0 rotate-90 text-plum transition-transform duration-200 group-open:-rotate-90" />
            </summary>
            <div className="px-5 pb-5 text-[0.9375rem] leading-relaxed text-graphite-soft">
              {f.a.split("\n").filter(Boolean).map((p, j) => (
                <p key={j} className={j ? "mt-2.5" : undefined}>
                  {p}
                </p>
              ))}
            </div>
          </details>
        </li>
      ))}
    </ul>
  );
}
