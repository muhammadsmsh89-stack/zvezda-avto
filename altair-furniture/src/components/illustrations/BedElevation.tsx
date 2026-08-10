import { DrawPath } from "@/components/ui/DrawPath";
import { DimensionLine } from "./DimensionLine";

export function BedElevation({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} fill="none">
      <g stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <DrawPath d="M110 70h260v40H110z" />
        <path d="M130 70v40M160 70v40M190 70v40M220 70v40M250 70v40M280 70v40M310 70v40M340 70v40M370 70v40" opacity={0.3} />
        <DrawPath d="M90 150h300v70H90z" delay={0.15} />
        <path d="M90 220h300v10H90z" opacity={0.5} />
        <DrawPath d="M40 190h50v40H40z" delay={0.3} opacity={0.6} />
        <DrawPath d="M390 190h50v40h-50z" delay={0.3} opacity={0.6} />
        <path d="M55 200h20M405 200h20" opacity={0.4} />
      </g>
      <DimensionLine x1={90} y1={244} x2={390} y2={244} label="1600" />
      <DimensionLine x1={20} y1={70} x2={20} y2={230} label="900" labelOffset={{ x: -18, y: 4 }} />
      <text x="240" y="30" textAnchor="middle" fontSize="11" fill="currentColor" className="font-mono-tag" opacity={0.55}>
        фронтальная проекция, спальня
      </text>
    </svg>
  );
}
