"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { carModelOptions, serviceOptions, company } from "@/lib/content";

type FormState = {
  name: string;
  phone: string;
  brand: string;
  model: string;
  service: string;
  date: string;
  comment: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  brand: "",
  model: "",
  service: "",
  date: "",
  comment: "",
};

export function BookingForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sent, setSent] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};
    if (form.name.trim().length < 2) nextErrors.name = "Укажите имя";
    if (!/^[\d+][\d\s()+-]{9,}$/.test(form.phone.trim())) nextErrors.phone = "Проверьте номер телефона";
    if (!form.service) nextErrors.service = "Выберите услугу";

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    const subject = encodeURIComponent(`Запись на сервис — ${form.name}`);
    const body = encodeURIComponent(
      [
        `Имя: ${form.name}`,
        `Телефон: ${form.phone}`,
        `Автомобиль: ${[form.brand, form.model].filter(Boolean).join(" ") || "—"}`,
        `Услуга: ${form.service}`,
        `Желаемая дата: ${form.date || "не указана"}`,
        `Комментарий: ${form.comment || "—"}`,
      ].join("\n")
    );

    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="booking" className="border-b border-border bg-background py-20 md:py-28 scroll-mt-20">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Запись на сервис"
          title="Оставьте заявку — перезвоним в рабочее время"
          align="center"
          description="Заполните форму или позвоните напрямую — так быстрее для срочного ремонта."
        />

        <Reveal delay={0.1} className="mt-12">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-6 md:p-10">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center py-10 text-center"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                      <path d="M4 12.5L9.5 18L20 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="mt-5 font-sans text-xl font-bold text-foreground">Заявка сформирована</h3>
                  <p className="mt-2 max-w-sm text-sm text-muted">
                    Мы открыли почтовый клиент с заполненным письмом на {company.email}. Если он не открылся —
                    позвоните нам напрямую, это быстрее всего.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <a
                      href={`tel:${company.phones[0].href}`}
                      className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
                    >
                      Позвонить: {company.phones[0].value}
                    </a>
                    <button
                      onClick={() => {
                        setForm(initialState);
                        setSent(false);
                      }}
                      className="rounded-full border border-border-strong px-6 py-3 text-sm font-semibold text-foreground"
                    >
                      Отправить ещё одну заявку
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="grid gap-5 sm:grid-cols-2"
                  noValidate
                >
                  <Field label="Ваше имя" error={errors.name}>
                    <input
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Как к вам обращаться"
                      className={inputClass(!!errors.name)}
                    />
                  </Field>

                  <Field label="Телефон" error={errors.phone}>
                    <input
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      placeholder="+7 (___) ___-__-__"
                      type="tel"
                      className={inputClass(!!errors.phone)}
                    />
                  </Field>

                  <Field label="Марка автомобиля">
                    <select
                      value={form.brand}
                      onChange={(e) => update("brand", e.target.value)}
                      className={inputClass(false)}
                    >
                      <option value="">Не выбрано</option>
                      {carModelOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Модель автомобиля">
                    <input
                      value={form.model}
                      onChange={(e) => update("model", e.target.value)}
                      placeholder="Например, Camry"
                      className={inputClass(false)}
                    />
                  </Field>

                  <Field label="Услуга" error={errors.service}>
                    <select
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className={inputClass(!!errors.service)}
                    >
                      <option value="">Выберите услугу</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Желаемая дата">
                    <input
                      value={form.date}
                      onChange={(e) => update("date", e.target.value)}
                      type="date"
                      className={inputClass(false)}
                    />
                  </Field>

                  <Field label="Комментарий" full>
                    <textarea
                      value={form.comment}
                      onChange={(e) => update("comment", e.target.value)}
                      placeholder="Опишите проблему или пожелания"
                      rows={4}
                      className={inputClass(false)}
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-accent px-7 py-4 text-sm font-semibold text-accent-foreground transition-all hover:brightness-110 active:scale-[0.98] accent-glow sm:w-auto"
                    >
                      Записаться на сервис
                    </button>
                    <p className="mt-4 text-xs text-muted">
                      Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className={`block ${full ? "sm:col-span-2" : ""}`}>
      <span className="mb-2 block text-sm font-medium text-foreground/80">{label}</span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-red-400">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-surface-2 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted/60 focus:border-accent ${
    hasError ? "border-red-400/60" : "border-border-strong"
  }`;
}
