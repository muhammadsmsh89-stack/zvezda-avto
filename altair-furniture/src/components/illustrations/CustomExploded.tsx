import { DrawPath } from "@/components/ui/DrawPath";
import { DimensionLine } from "./DimensionLine";

export function CustomExploded({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 320" className={className} fill="none">
      <g stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <DrawPath d="M60 60L340 40l60 30v20L340 70 60 90z" />
        <DrawPath d="M90 90v110h240l40-25V95" delay={0.2} />
        <path d="M90 130h240M90 165h240" opacity={0.35} />
        <path d="M120 90v110M170 90v110M220 90v110M270 90v110M320 90v110" opacity={0.3} />
        <DrawPath d="M330 70l40-25" strokeDasharray="3 5" opacity={0.55} delay={0.35} />
        <circle cx="370" cy="45" r="12" opacity={0.6} />
        <text x="370" y="49" textAnchor="middle" fontSize="11" fill="currentColor" stroke="none" className="font-mono-tag">
          05
        </text>
      </g>
      <DimensionLine x1={90} y1={215} x2={330} y2={215} label="2400" />
      <text x="240" y="255" textAnchor="middle" fontSize="11" fill="currentColor" className="font-mono-tag" opacity={0.55}>
        корпус повторяет линию скоса кровли
      </text>
    </svg>
  );
}
