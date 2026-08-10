type DimensionLineProps = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  label: string;
  labelOffset?: { x: number; y: number };
};

const TICK = 6;

export function DimensionLine({ x1, y1, x2, y2, label, labelOffset = { x: 0, y: -8 } }: DimensionLineProps) {
  const isHorizontal = y1 === y2;
  return (
    <g stroke="var(--accent)" strokeWidth={1} fill="none">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      {isHorizontal ? (
        <>
          <line x1={x1} y1={y1 - TICK} x2={x1} y2={y1 + TICK} />
          <line x1={x2} y1={y2 - TICK} x2={x2} y2={y2 + TICK} />
        </>
      ) : (
        <>
          <line x1={x1 - TICK} y1={y1} x2={x1 + TICK} y2={y1} />
          <line x1={x2 - TICK} y1={y2} x2={x2 + TICK} y2={y2} />
        </>
      )}
      <text
        x={(x1 + x2) / 2 + labelOffset.x}
        y={(y1 + y2) / 2 + labelOffset.y}
        textAnchor="middle"
        fontSize="11"
        fill="var(--accent)"
        stroke="none"
        className="font-mono-tag"
      >
        {label}
      </text>
    </g>
  );
}
