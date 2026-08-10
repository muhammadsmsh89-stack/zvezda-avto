import { DrawPath } from "@/components/ui/DrawPath";
import { DimensionLine } from "./DimensionLine";

export function AxonKitchen({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} fill="none">
      <g stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <DrawPath d="M60 230h360M60 230V90h100v-20h180v20h80v140" />
        <DrawPath d="M60 150h360" delay={0.15} />
        <path d="M60 90h100" opacity={0.6} />
        <path d="M100 70h140" opacity={0.5} strokeDasharray="3 4" />
        <path d="M110 150v80M150 150v80M190 150v80M230 150v80M270 150v80M310 150v80M350 150v80M390 150v80" opacity={0.35} />
        <path d="M90 108h100v42H90z" opacity={0.5} />
        <path d="M92 129h96" opacity={0.4} />
        <circle cx="178" cy="129" r="1.6" fill="currentColor" stroke="none" />
        <path d="M60 230v-20h360v20" opacity={0.7} />
        <path d="M300 90v60" opacity={0.3} strokeDasharray="2 5" />
      </g>
      <DimensionLine x1={60} y1={252} x2={420} y2={252} label="3400" />
      <DimensionLine x1={38} y1={90} x2={38} y2={230} label="820" labelOffset={{ x: -18, y: 4 }} />
      <text x="240" y="278" textAnchor="middle" fontSize="11" fill="currentColor" className="font-mono-tag" opacity={0.55}>
        вентканал — фасад смещён на 40 мм
      </text>
    </svg>
  );
}
