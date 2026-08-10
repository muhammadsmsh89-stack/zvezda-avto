import { DrawPath } from "@/components/ui/DrawPath";
import { DimensionLine } from "./DimensionLine";

export function DressingPlan({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} fill="none">
      <g stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <DrawPath d="M70 60h340v200H210v-40H70z" />
        <path d="M90 60v90M110 60v90M130 60v90M150 60v90M170 60v90M190 60v90" opacity={0.35} />
        <path d="M230 240v-160M270 240v-160M310 240v-160M350 240v-160M390 240v-160" opacity={0.35} />
        <DrawPath d="M110 240a70 70 0 0 0 70-70" strokeDasharray="4 5" opacity={0.5} delay={0.25} />
        <path d="M175 178l-8-4v8z" fill="currentColor" stroke="none" opacity={0.5} />
      </g>
      <DimensionLine x1={70} y1={54} x2={410} y2={54} label="3600" />
      <DimensionLine x1={64} y1={60} x2={64} y2={260} label="1900" labelOffset={{ x: -18, y: 4 }} />
      <text x="240" y="285" textAnchor="middle" fontSize="11" fill="currentColor" className="font-mono-tag" opacity={0.55}>
        план, бывшая кладовая — М 1:30
      </text>
    </svg>
  );
}
