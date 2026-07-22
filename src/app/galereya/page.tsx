import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { GalleryGrid } from "./Lightbox";

export const metadata: Metadata = {
  title: "Галерея",
  description: "Фотографии автотехцентра «Звезда» в Махачкале: ремонтная зона, слесарная мастерская, склад запчастей.",
};

export default function GalereyaPage() {
  return (
    <>
      <PageHero
        eyebrow="Галерея"
        breadcrumb="Галерея"
        title="Техцентр изнутри"
        description="Реальные фотографии мастерской, оборудования и рабочего процесса. Нажмите на фото, чтобы открыть его на весь экран."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <GalleryGrid />
        </div>
      </section>
    </>
  );
}
