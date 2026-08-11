"use client";

import { whatsappInstallment } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";
import { track } from "@/lib/analytics";

export function InstallmentSection() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-wide">
        <Reveal variant="rise" className="flex flex-col items-start justify-between gap-8 border border-border-strong p-8 sm:p-12 lg:flex-row lg:items-center">
          <div className="max-w-xl">
            <p className="text-[13px] uppercase tracking-[0.14em] text-muted">Рассрочка</p>
            <h2 className="text-balance mt-3 text-[28px] leading-[1.2] sm:text-[34px]">
              Не откладывайте завершение ремонта
            </h2>
            <p className="mt-3 text-[16px] leading-relaxed text-muted">
              Рассрочка на двери доступна — точные условия уточняйте у менеджера, они зависят от модели и комплектации.
            </p>
          </div>
          <a
            href={whatsappInstallment()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              track("installment_click", { location: "homepage" });
              track("whatsapp_click", { location: "installment" });
            }}
            className="inline-flex shrink-0 items-center justify-center rounded-[3px] bg-foreground px-7 py-4 text-[16px] text-background transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Узнать условия
          </a>
        </Reveal>
      </div>
    </section>
  );
}
