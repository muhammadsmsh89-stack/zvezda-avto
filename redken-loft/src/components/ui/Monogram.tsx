export function Monogram({ name, className }: { name: string; className?: string }) {
  const initial = name.trim().charAt(0).toUpperCase();
  return (
    <div
      className={`flex items-center justify-center bg-grain relative overflow-hidden ${className ?? ""}`}
      style={{ background: "linear-gradient(160deg, #ece2cd 0%, #cdb488 55%, #7a2e2e 130%)" }}
      aria-hidden="true"
    >
      <span className="font-editorial text-6xl text-ink/80 md:text-7xl">{initial}</span>
    </div>
  );
}
