"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import {
  buildWhatsappBookingUrl,
  serviceCategories,
  salons,
  masters,
  company,
} from "@/lib/content";
import { useBooking } from "@/lib/booking-context";

const STEPS = ["Услуга", "Салон и мастер", "Дата и время", "Контакт", "Готово"] as const;
const EASE = [0.22, 1, 0.36, 1] as const;
const TIME_SLOTS = ["10:00", "12:00", "14:00", "16:00", "18:00", "20:00"];

export function BookingWizard() {
  const { selection, setSelection } = useBooking();
  const [step, setStep] = useState(0);

  const [categorySlug, setCategorySlug] = useState<string | undefined>(selection.categorySlug);
  const [subcategoryName, setSubcategoryName] = useState<string | undefined>();
  const [salonSlug, setSalonSlug] = useState<string | undefined>(selection.salonSlug);
  const [masterName, setMasterName] = useState<string | undefined>(selection.masterName);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);

  // Pick up preselection made from Services/Team cards elsewhere on the page.
  // Applied during render (not in an effect) so it can't trigger a cascading re-render.
  const [appliedSelection, setAppliedSelection] = useState(selection);
  if (selection !== appliedSelection) {
    setAppliedSelection(selection);
    if (selection.categorySlug) setCategorySlug(selection.categorySlug);
    if (selection.salonSlug) setSalonSlug(selection.salonSlug);
    if (selection.masterName) setMasterName(selection.masterName);
    if (selection.categorySlug || selection.salonSlug || selection.masterName) {
      setStep(1);
    }
  }

  const category = useMemo(() => serviceCategories.find((c) => c.slug === categorySlug), [categorySlug]);
  const salon = useMemo(() => salons.find((s) => s.slug === salonSlug), [salonSlug]);
  const relevantMasters = useMemo(
    () => (salonSlug ? masters.filter((m) => m.salonSlug === salonSlug) : masters),
    [salonSlug]
  );

  const goNext = () => {
    setError(null);
    if (step === 0 && !categorySlug) return setError("Выберите услугу, чтобы продолжить");
    if (step === 1 && !salonSlug) return setError("Выберите салон, чтобы продолжить");
    if (step === 2 && (!date || !time)) return setError("Выберите дату и время");
    setStep((s) => Math.min(s + 1, 3));
  };

  const goBack = () => {
    setError(null);
    setStep((s) => Math.max(s - 1, 0));
  };

  const handleConfirm = () => {
    const url = buildWhatsappBookingUrl({
      categoryTitle: category?.title,
      subcategoryName,
      salonMetro: salon?.metro,
      masterName,
      date,
      time,
      name,
      phone,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const reset = () => {
    setStep(0);
    setCategorySlug(undefined);
    setSubcategoryName(undefined);
    setSalonSlug(undefined);
    setMasterName(undefined);
    setDate("");
    setTime("");
    setName("");
    setPhone("");
    setSent(false);
    setSelection({});
  };

  return (
    <section id="booking" className="border-b border-border bg-surface py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-3xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Онлайн-запись"
          title="Запись за 30 секунд — без звонков"
          description="Выберите услугу, салон, удобное время — и отправьте заявку прямо в WhatsApp администратору."
          align="center"
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="rounded-3xl border border-border bg-background p-6 md:p-10">
            {!sent && (
              <div className="mb-8 flex items-center justify-between">
                {STEPS.slice(0, 4).map((label, i) => (
                  <div key={label} className="flex flex-1 items-center">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-colors ${
                          i <= step
                            ? "border-accent bg-accent text-accent-foreground"
                            : "border-border-strong text-muted"
                        }`}
                      >
                        {i + 1}
                      </div>
                      <span className="hidden text-center text-[11px] text-muted sm:block">{label}</span>
                    </div>
                    {i < 3 && (
                      <div
                        className={`mx-2 h-px flex-1 ${i < step ? "bg-accent" : "bg-border-strong"}`}
                      />
                    )}
                  </div>
                ))}
              </div>
            )}

            <>
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center py-6 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12.5L9.5 18L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                    Заявка отправлена в WhatsApp
                  </h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Если WhatsApp не открылся автоматически — напишите нам напрямую или позвоните,
                    администратор подтвердит запись в течение 15 минут.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={`tel:${company.phone.href}`}
                      className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
                    >
                      Позвонить: {company.phone.value}
                    </a>
                    <button
                      onClick={reset}
                      className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground"
                    >
                      Новая запись
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key={`step-${step}`}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, ease: EASE }}
                >
                  {step === 0 && (
                    <div>
                      <p className="mb-4 text-sm font-semibold text-foreground/80">Какая услуга интересует?</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {serviceCategories.map((c) => (
                          <button
                            key={c.slug}
                            onClick={() => {
                              setCategorySlug(c.slug);
                              setSubcategoryName(undefined);
                            }}
                            className={`rounded-2xl border px-4 py-3.5 text-left text-sm font-medium transition-colors ${
                              categorySlug === c.slug
                                ? "border-accent bg-accent/10 text-accent"
                                : "border-border-strong text-foreground/80 hover:border-accent/50"
                            }`}
                          >
                            {c.title}
                          </button>
                        ))}
                      </div>

                      {category && (
                        <div className="mt-5">
                          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
                            Уточнить услугу (необязательно)
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {category.subcategories.map((s) => (
                              <button
                                key={s.name}
                                onClick={() => setSubcategoryName(s.name === subcategoryName ? undefined : s.name)}
                                className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                                  subcategoryName === s.name
                                    ? "border-accent bg-accent text-accent-foreground"
                                    : "border-border-strong text-foreground/70 hover:border-accent/50"
                                }`}
                              >
                                {s.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {step === 1 && (
                    <div>
                      <p className="mb-4 text-sm font-semibold text-foreground/80">Выберите салон</p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {salons.map((s) => (
                          <button
                            key={s.slug}
                            onClick={() => setSalonSlug(s.slug)}
                            className={`rounded-2xl border px-4 py-3.5 text-left transition-colors ${
                              salonSlug === s.slug
                                ? "border-accent bg-accent/10"
                                : "border-border-strong hover:border-accent/50"
                            }`}
                          >
                            <span className="block text-sm font-semibold text-foreground">м. {s.metro}</span>
                            <span className="block text-xs text-muted">{s.address}</span>
                          </button>
                        ))}
                      </div>

                      <p className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-muted">
                        Мастер (необязательно — подберём сами)
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {relevantMasters.map((m) => (
                          <button
                            key={m.name}
                            onClick={() => setMasterName(m.name === masterName ? undefined : m.name)}
                            className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors ${
                              masterName === m.name
                                ? "border-accent bg-accent text-accent-foreground"
                                : "border-border-strong text-foreground/70 hover:border-accent/50"
                            }`}
                          >
                            {m.name} · {m.role}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div>
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-foreground/80">Дата</span>
                        <input
                          type="date"
                          value={date}
                          min={new Date().toISOString().slice(0, 10)}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full rounded-xl border border-border-strong bg-surface-2 px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                        />
                      </label>

                      <p className="mt-6 mb-3 text-sm font-medium text-foreground/80">Время</p>
                      <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                        {TIME_SLOTS.map((t) => (
                          <button
                            key={t}
                            onClick={() => setTime(t)}
                            className={`rounded-xl border px-3 py-2.5 text-sm font-medium transition-colors ${
                              time === t
                                ? "border-accent bg-accent text-accent-foreground"
                                : "border-border-strong text-foreground/80 hover:border-accent/50"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <p className="mt-3 text-xs text-muted">Салоны работают {company.hours.toLowerCase()}.</p>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-foreground/80">Ваше имя</span>
                        <input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Как к вам обращаться"
                          className="w-full rounded-xl border border-border-strong bg-surface-2 px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                        />
                      </label>
                      <label className="block">
                        <span className="mb-2 block text-sm font-medium text-foreground/80">Телефон</span>
                        <input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          type="tel"
                          placeholder="+7 (___) ___-__-__"
                          className="w-full rounded-xl border border-border-strong bg-surface-2 px-4 py-3 text-sm text-foreground outline-none focus:border-accent"
                        />
                      </label>
                    </div>
                  )}
                </motion.div>
              )}
            </>

            {!sent && (
              <>
                {error && <p className="mt-4 text-xs font-medium text-red-500">{error}</p>}

                {step === 3 && (
                  <div className="mt-6 rounded-2xl border border-border bg-surface-2 p-4 text-xs text-foreground/75">
                    <p className="font-semibold text-foreground">Проверьте детали записи:</p>
                    <p className="mt-1">
                      {category?.title}
                      {subcategoryName ? ` — ${subcategoryName}` : ""} · м. {salon?.metro}
                      {masterName ? ` · ${masterName}` : ""} · {date || "дата не выбрана"} {time}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex items-center justify-between gap-4">
                  <button
                    onClick={goBack}
                    disabled={step === 0}
                    className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground disabled:opacity-0"
                  >
                    Назад
                  </button>
                  {step < 3 ? (
                    <button
                      onClick={goNext}
                      className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105 active:scale-[0.98] accent-glow"
                    >
                      Далее
                    </button>
                  ) : (
                    <button
                      onClick={() => {
                        setError(null);
                        if (name.trim().length < 2) return setError("Укажите имя");
                        if (!/^[\d+][\d\s()+-]{9,}$/.test(phone.trim())) return setError("Проверьте номер телефона");
                        handleConfirm();
                      }}
                      className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-all hover:brightness-105 active:scale-[0.98] accent-glow"
                    >
                      Отправить в WhatsApp
                    </button>
                  )}
                </div>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
