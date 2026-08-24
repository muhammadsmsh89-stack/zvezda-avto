"use client";

import { useMemo, useState } from "react";
import clsx from "clsx";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ChevronRight, WhatsAppIcon, TelegramIcon } from "@/components/ui/Icons";
import { vehicleClasses, calcNeeds, calcAreas, calcMaterials, estimateRange, formatRub } from "@/lib/pricing";
import { contacts } from "@/lib/contacts";

const steps = ["Автомобиль", "Что требуется", "Площадь", "Материал"] as const;

export function PriceCalculator() {
  const [step, setStep] = useState(0);
  const [vehicleClass, setVehicleClass] = useState<string>(vehicleClasses[0].id);
  const [need, setNeed] = useState<string>(calcNeeds[0].id);
  const [area, setArea] = useState<string>(calcAreas[0].id);
  const [material, setMaterial] = useState<string>(calcMaterials[0].id);
  const [model, setModel] = useState("");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);

  const range = useMemo(() => estimateRange(need, area, vehicleClass), [need, area, vehicleClass]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const needLabel = calcNeeds.find((n) => n.id === need)?.label ?? "";
    const areaLabel = calcAreas.find((a) => a.id === area)?.label ?? "";
    const classLabel = vehicleClasses.find((v) => v.id === vehicleClass)?.label ?? "";
    const materialLabel = calcMaterials.find((m) => m.id === material)?.label ?? "";
    const message = `Здравствуйте! Хочу точный расчёт оклейки.\nАвтомобиль: ${model || "не указан"} (${classLabel})\nЗадача: ${needLabel}, ${areaLabel}\nМатериал: ${materialLabel}\nТелефон для связи: ${phone || "не указан"}\nПредварительный ориентир на сайте: ${formatRub(range.from)}–${formatRub(range.to)}`;
    window.open(`${contacts.whatsappUrl}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setSent(true);
  }

  return (
    <section id="calculator" className="bg-background py-20 lg:py-28">
      <Container>
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">Калькулятор</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-4 max-w-xl text-pretty text-display font-medium text-foreground">
            Рассчитайте стоимость оклейки
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-10 overflow-hidden rounded-[1.75rem] border border-border bg-surface">
          <div className="flex items-center gap-1.5 border-b border-border px-6 py-4 sm:px-8">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-1 items-center gap-1.5">
                <span
                  className={clsx(
                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold",
                    i <= step ? "bg-accent text-accent-foreground" : "bg-surface-2 text-muted"
                  )}
                >
                  {i + 1}
                </span>
                <span className={clsx("hidden text-xs font-medium sm:inline", i === step ? "text-foreground" : "text-muted")}>
                  {s}
                </span>
                {i < steps.length - 1 && <span className="mx-1 h-px flex-1 bg-border" aria-hidden />}
              </div>
            ))}
          </div>

          <div className="p-6 sm:p-8">
            {!sent ? (
              <>
                {step === 0 && (
                  <StepGrid>
                    {vehicleClasses.map((v) => (
                      <OptionButton key={v.id} active={vehicleClass === v.id} onClick={() => setVehicleClass(v.id)}>
                        {v.label}
                      </OptionButton>
                    ))}
                  </StepGrid>
                )}
                {step === 1 && (
                  <StepGrid>
                    {calcNeeds.map((n) => (
                      <OptionButton key={n.id} active={need === n.id} onClick={() => setNeed(n.id)}>
                        {n.label}
                      </OptionButton>
                    ))}
                  </StepGrid>
                )}
                {step === 2 && (
                  <StepGrid>
                    {calcAreas.map((a) => (
                      <OptionButton key={a.id} active={area === a.id} onClick={() => setArea(a.id)}>
                        {a.label}
                      </OptionButton>
                    ))}
                  </StepGrid>
                )}
                {step === 3 && (
                  <>
                    <StepGrid>
                      {calcMaterials.map((m) => (
                        <OptionButton key={m.id} active={material === m.id} onClick={() => setMaterial(m.id)}>
                          {m.label}
                        </OptionButton>
                      ))}
                    </StepGrid>

                    <div className="mt-8 rounded-2xl border border-border-strong bg-surface-2 p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.1em] text-muted">Предварительный диапазон</p>
                      <p className="mt-1.5 text-2xl font-semibold text-accent">
                        {formatRub(range.from)} – {formatRub(range.to)}
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-muted">
                        Ориентир по введённым параметрам, не окончательная цена. Оставьте автомобиль и телефон — специалист
                        рассчитает точную стоимость.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <label className="block text-sm">
                        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-muted">
                          Марка и модель автомобиля
                        </span>
                        <input
                          value={model}
                          onChange={(e) => setModel(e.target.value)}
                          placeholder="Например, BMW X5"
                          className="min-h-11 w-full rounded-xl border border-border-strong bg-background px-4 py-3 text-base text-foreground outline-none placeholder:text-muted focus-visible:border-accent"
                        />
                      </label>
                      <label className="block text-sm">
                        <span className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.08em] text-muted">Телефон</span>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="tel"
                          required
                          placeholder="+7 ("
                          className="min-h-11 w-full rounded-xl border border-border-strong bg-background px-4 py-3 text-base text-foreground outline-none placeholder:text-muted focus-visible:border-accent"
                        />
                      </label>
                      <div className="flex flex-wrap items-center gap-3 sm:col-span-2">
                        <Button type="submit" icon={<WhatsAppIcon className="h-4 w-4" />} dataEvent="calculator_submit_click">
                          Получить точный расчёт
                        </Button>
                        <a
                          href={contacts.telegramUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/80 hover:text-foreground"
                        >
                          <TelegramIcon className="h-4 w-4" /> Написать в Telegram
                        </a>
                      </div>
                    </form>
                  </>
                )}
              </>
            ) : (
              <div className="py-6 text-center">
                <p className="text-lg font-medium text-foreground">Открыли WhatsApp с вашим запросом</p>
                <p className="mx-auto mt-2 max-w-sm text-sm text-muted">
                  Если чат не открылся сам, напишите нам напрямую: {contacts.phone.value} или {contacts.whatsappUrl}.
                </p>
              </div>
            )}
          </div>

          {!sent && step < 3 && (
            <div className="flex items-center justify-between gap-3 border-t border-border px-6 py-4 sm:px-8">
              <button
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
                className="min-h-11 rounded-full px-4 text-sm font-semibold text-muted transition-colors hover:text-foreground disabled:pointer-events-none disabled:opacity-40"
              >
                Назад
              </button>
              <button
                onClick={() => setStep((s) => Math.min(steps.length - 1, s + 1))}
                className="inline-flex min-h-11 items-center gap-1.5 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent-2"
              >
                Далее <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </Reveal>
      </Container>
    </section>
  );
}

function StepGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">{children}</div>;
}

function OptionButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={clsx(
        "min-h-11 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors",
        active ? "border-accent bg-accent-soft text-foreground" : "border-border-strong text-foreground/80 hover:border-foreground"
      )}
    >
      {children}
    </button>
  );
}
