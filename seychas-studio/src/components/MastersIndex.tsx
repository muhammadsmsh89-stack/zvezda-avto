import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { masters } from "@/lib/masters";
import { masterImages } from "@/lib/media";

export function MastersIndex() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {masters.map((m, i) => {
        const image = masterImages[m.slug];
        return (
          <Reveal key={m.slug} delay={i * 0.06}>
            <Link href={`/masters/${m.slug}`} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-4 text-xl font-bold text-foreground">{m.name}</h3>
              <p className="mt-1 text-sm text-muted">{m.role}</p>
            </Link>
          </Reveal>
        );
      })}
    </div>
  );
}
