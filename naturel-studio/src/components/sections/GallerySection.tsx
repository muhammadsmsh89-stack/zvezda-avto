import { SectionHeading } from "@/components/ui/SectionHeading";
import { Stagger, StaggerItem } from "@/components/ui/Reveal";
import { gallery } from "@/lib/content";

const tones = [
  "linear-gradient(160deg, #efe4cd 0%, #d8c39a 100%)",
  "linear-gradient(160deg, #e3d5b8 0%, #b08d57 100%)",
  "linear-gradient(160deg, #d9cdb8 0%, #8c6d3f 100%)",
  "linear-gradient(160deg, #f0e9dc 0%, #c9a765 100%)",
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-background py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Галерея"
          title="Атмосфера, в которой хочется остаться"
          description="Интерьер, процесс работы и детали, из которых складывается ощущение премиального сервиса."
          align="center"
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((item, i) => (
            <StaggerItem key={item.id} className={i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""}>
              <div
                className="flex aspect-square w-full items-end rounded-2xl border border-border p-4 md:aspect-auto md:h-full"
                style={{ background: tones[i % tones.length] }}
              >
                <span className="rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white">
                  Фото {item.id}
                </span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
