import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { gallery } from "@/lib/content";

const layout = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-1",
];

export function GalleryPreview() {
  const items = gallery.slice(0, 6);
  return (
    <section id="galereya" className="border-b border-border bg-surface/40 py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Галерея"
            title="Как устроен техцентр изнутри"
            description="Ремонтная зона, слесарная мастерская, склад запчастей и приёмная — реальные фото центра."
          />
          <Link href="/galereya" className="hidden shrink-0 text-sm font-semibold text-accent hover:opacity-80 md:block">
            Вся галерея →
          </Link>
        </div>

        <Stagger className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 md:auto-rows-[160px]">
          {items.map((photo, i) => (
            <StaggerItem key={photo.src} className={layout[i] ?? ""}>
              <div className="group relative h-full min-h-[140px] w-full overflow-hidden rounded-xl border border-border">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <div className="mt-8 flex justify-center md:hidden">
          <Link href="/galereya" className="text-sm font-semibold text-accent">
            Вся галерея →
          </Link>
        </div>
      </div>
    </section>
  );
}
