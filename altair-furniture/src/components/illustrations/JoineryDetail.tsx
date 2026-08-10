import { DrawPath } from "@/components/ui/DrawPath";
import { DimensionLine } from "./DimensionLine";

// Макро-деталь узла соединения: фасад, корпус, зазор, петля. Сознательно
// другой масштаб и композиция, чем у планов/разрезов помещений — это фрагмент
// объекта, а не ещё один чертёж комнаты.
export function JoineryDetail({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} fill="none">
      <g stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <DrawPath d="M70 60h60v200H70z" opacity={0.85} />
        <DrawPath d="M154 40h70v240h-70z" delay={0.15} />
        <path d="M80 60v200M204 40v240" opacity={0.3} />
        <circle cx="189" cy="160" r="17" opacity={0.7} />
        <circle cx="189" cy="160" r="4" fill="currentColor" stroke="none" opacity={0.7} />
        <path d="M172 160h-18" opacity={0.5} strokeDasharray="2 4" />
        <path d="M224 90h180M224 230h180" opacity={0.35} />
        <path d="M224 90v140" opacity={0.35} />
        <text x="240" y="84" fontSize="11" fill="currentColor" className="font-mono-tag" opacity={0.55}>
          корпус — 16 мм
        </text>
        <text x="240" y="248" fontSize="11" fill="currentColor" className="font-mono-tag" opacity={0.55}>
          фасад — 18 мм
        </text>
      </g>
      <DimensionLine x1={134} y1={40} x2={154} y2={40} label="3" labelOffset={{ x: 0, y: -12 }} />
      <circle cx="144" cy="150" r="46" stroke="var(--accent)" strokeWidth={1} opacity={0.4} />
      <text x="240" y="160" fontSize="11" fill="currentColor" className="font-mono-tag" opacity={0.55}>
        узел А — система открывания
      </text>
    </svg>
  );
}
