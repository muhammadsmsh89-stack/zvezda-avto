import { facts } from "@/lib/site";
import { IconStar } from "../ui/Icons";

const items = [
  { value: facts.clients, label: "довольных клиентов" },
  { value: facts.specialists, label: "профильных специалистов" },
  { value: "Гарантия", label: "на работы и материалы" },
];

export function TrustStrip() {
  return (
    <div className="border-t border-line pt-3.5">
      <ul className="grid grid-cols-3 gap-3">
        {items.map((it) => (
          <li key={it.label}>
            <p className="text-[17px] font-bold leading-none text-fg sm:text-[19px]">
              {it.value}
            </p>
            <p className="mt-1.5 text-micro text-fg-faint">
              {it.label}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-3 flex items-center gap-1.5 text-micro text-fg-faint">
        <IconStar className="size-3.5 text-gold" />
        <span>
          <span className="font-semibold text-fg-dim">{facts.rating}</span> на {facts.ratingSourceIn}
        </span>
      </p>
    </div>
  );
}
