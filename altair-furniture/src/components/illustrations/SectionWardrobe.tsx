import { DrawPath } from "@/components/ui/DrawPath";
import { DimensionLine } from "./DimensionLine";

export function SectionWardrobe({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} fill="none">
      <g stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <DrawPath d="M150 50h180v230H150z" />
        <DrawPath d="M150 50h-30v230h30M330 50h30v230h-30" delay={0.2} opacity={0.55} />
        <path d="M150 105h180M150 160h180M150 215h180" opacity={0.4} />
        <path d="M165 65h150v30h-150z" opacity={0.35} />
        <circle cx="180" cy="80" r="10" fill="none" opacity={0.5} />
        <circle cx="300" cy="80" r="10" fill="none" opacity={0.5} />
        <path d="M165 175h60v70h-60zM235 175h60v70h-60z" opacity={0.35} />
        <path d="M175 210h40M245 210h40" opacity={0.5} />
      </g>
      <DimensionLine x1={150} y1={295} x2={330} y2={295} label="1800" />
      <DimensionLine x1={365} y1={50} x2={365} y2={280} label="2300" labelOffset={{ x: 22, y: 4 }} />
      <text x="240" y="30" textAnchor="middle" fontSize="11" fill="currentColor" className="font-mono-tag" opacity={0.55}>
        разрез А—А, ниша коридора
      </text>
    </svg>
  );
}
