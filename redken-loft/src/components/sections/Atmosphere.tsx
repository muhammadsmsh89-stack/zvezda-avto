import { atmosphereCopy } from "@/lib/content";
import { ColorField } from "@/components/ui/ColorField";
import { Reveal } from "@/components/ui/Reveal";

const frames: Array<readonly [string, string]> = [
  ["#efe6d3", "#cdbb95"],
  ["#e3d3b8", "#9c7a4e"],
  ["#dccbb3", "#5c3a2e"],
  ["#8c5a52", "#3d1f1c"],
  ["#f2ecdf", "#b7a37f"],
];

export function Atmosphere() {
  return (
    <section className="border-t border-border bg-ink py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-balance max-w-xl font-editorial text-3xl leading-[1.15] text-background md:text-4xl">
            {atmosphereCopy.title}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.15} className="mt-12">
        <div className="flex gap-3 overflow-x-auto px-5 pb-2 md:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {frames.map((swatch, i) => (
            <div key={i} className="relative h-64 w-48 shrink-0 overflow-hidden sm:h-80 sm:w-60">
              <ColorField swatch={swatch} className="absolute inset-0" />
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
