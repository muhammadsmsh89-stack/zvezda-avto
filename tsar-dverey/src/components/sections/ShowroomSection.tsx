"use client";

import { company, locations } from "@/data/company";
import { PhotoSlot } from "@/components/art/PhotoSlot";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconPin } from "@/components/icons";
import { track } from "@/lib/analytics";

// Крупный визуальный момент, а не карточка — цель: сломать ощущение цифрового концепта и показать
// реальный физический шоурум. Fallback намеренно НЕ декоративная SVG-сцена (см. VISUAL_QA Iteration 2:
// «не маскировать отсутствие фото декоративной графикой») — честная нейтральная плашка с адресом,
// пока клиент не предоставит фото.
export function ShowroomSection() {
  const primary = locations[0];

  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="Шоурум"
          title="Место, где двери можно увидеть вживую"
          lead={`Заезжайте посмотреть фактуры и цвета до заказа — ${primary.address}, ${primary.hours.toLowerCase()}.`}
        />

        <Reveal variant="mask" className="mt-10">
          {/* REAL_SHOWROOM_IMAGE_REQUIRED — фото торгового зала/витрины от клиента. До получения —
              честная заглушка с реальным адресом, не имитация интерьера. */}
          <PhotoSlot
            id="REAL_SHOWROOM_IMAGE_REQUIRED"
            alt="Шоурум «Царь Дверей» на ул. Ирчи Казака, 86, Махачкала"
            objectPositionClassName="object-center"
            className="h-[420px] sm:h-[440px]"
            overlay={
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 bg-gradient-to-t from-deep/85 via-deep/20 to-transparent p-6 pt-16 sm:flex-row sm:items-end sm:justify-between sm:p-9 sm:pt-20">
                <div className="flex items-center gap-2.5 text-deep-foreground">
                  <IconPin className="h-5 w-5 shrink-0 text-accent" />
                  <span className="text-[15px] sm:text-[16px]">
                    {company.city}, {primary.address}
                    {primary.floor ? `, ${primary.floor}` : ""}
                  </span>
                </div>
                <a
                  href={primary.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("route_click", { location: "showroom_section" })}
                  className="inline-flex items-center justify-center rounded-[3px] bg-accent px-6 py-3 text-[14px] text-accent-foreground transition-colors hover:bg-deep-foreground hover:text-deep"
                >
                  Построить маршрут
                </a>
              </div>
            }
            fallback={
              <div className="flex h-full flex-col items-center justify-start gap-3 bg-surface-2 px-6 pt-12 pb-40 text-center sm:justify-center sm:pt-0 sm:pb-0">
                <IconPin className="h-7 w-7 text-muted" />
                <p className="text-[16px] text-foreground">Реальный шоурум на {primary.address}</p>
                <p className="max-w-sm text-[13px] text-muted">
                  Фотографии торгового зала — от клиента. До получения показываем только подтверждённый адрес.
                </p>
              </div>
            }
          />
        </Reveal>
      </div>
    </section>
  );
}
