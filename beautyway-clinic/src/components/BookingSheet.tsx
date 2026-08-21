"use client";

import { createContext, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import { branches, bookingLink, site, MEDICAL_DISCLAIMER } from "@/lib/site";
import { IconClose, IconPhone, IconTelegram, IconCheck } from "./ui/Icons";

type Ctx = { open: (preset?: Preset) => void };
type Preset = { service?: string; doctor?: string; branch?: string };

const BookingContext = createContext<Ctx>({ open: () => {} });
export const useBooking = () => useContext(BookingContext);

const TOPICS = [
  "Не знаю, нужна консультация",
  "Морщины и мимика",
  "Овал лица",
  "Губы",
  "Акне и постакне",
  "Пигментация",
  "Качество кожи",
  "Лазерная эпиляция",
  "Волосы",
  "Мужская косметология",
];

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [preset, setPreset] = useState<Preset | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const returnFocus = useRef<HTMLElement | null>(null);

  const open = useCallback((p?: Preset) => {
    returnFocus.current = document.activeElement as HTMLElement;
    setPreset(p ?? {});
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    // Возвращаем фокус на элемент, который открыл шторку.
    window.setTimeout(() => returnFocus.current?.focus?.(), 0);
  }, []);

  const value = useMemo(() => ({ open }), [open]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      {isOpen && <Sheet preset={preset ?? {}} onClose={close} />}
    </BookingContext.Provider>
  );
}

function Sheet({ preset, onClose }: { preset: Preset; onClose: () => void }) {
  const titleId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const [topic, setTopic] = useState(preset.service ?? TOPICS[0]);
  const [branch, setBranch] = useState(preset.branch ?? "any");
  const [doctor, setDoctor] = useState(preset.doctor ?? "any");

  // Блокируем прокрутку фона без скачка раскладки.
  useEffect(() => {
    const { body } = document;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
    };
  }, []);

  // Escape + удержание фокуса внутри шторки.
  useEffect(() => {
    const node = panelRef.current;
    node?.querySelector<HTMLElement>("[data-autofocus]")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !node) return;
      const items = node.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),input,select,textarea,[tabindex]:not([tabindex="-1"])',
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const branchLabel =
    branch === "any" ? "любой филиал" : branches.find((b) => b.slug === branch)?.addressShort ?? branch;
  const doctorLabel = doctor === "any" ? "любой свободный врач" : doctor;
  const message = `${topic}. Филиал: ${branchLabel}. Врач: ${doctorLabel}.`;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Закрыть окно записи"
        onClick={onClose}
        className="absolute inset-0 bg-ink/55 backdrop-blur-[2px]"
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92svh] w-full flex-col overflow-hidden rounded-t-[18px] bg-porcelain shadow-[0_-8px_40px_rgba(30,23,38,0.28)] sm:max-w-[520px] sm:rounded-[16px]"
      >
        <div className="flex items-start justify-between gap-4 border-b border-line px-5 pt-5 pb-4">
          <div>
            <p className="eyebrow text-plum">Запись</p>
            <h2 id={titleId} className="mt-1.5 font-display text-[1.45rem] leading-tight text-graphite">
              Запишитесь в BeautyWay
            </h2>
          </div>
          <button
            type="button"
            data-autofocus
            onClick={onClose}
            aria-label="Закрыть"
            className="-mr-1 -mt-1 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px] text-graphite-soft transition-colors hover:bg-plum-tint hover:text-plum-deep cursor-pointer"
          >
            <IconClose />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-5">
          <Group label="Что вас интересует?">
            <ChipRow options={TOPICS.map((t) => ({ value: t, label: t }))} value={topic} onChange={setTopic} name="topic" />
          </Group>

          <Group label="Какой филиал удобнее?">
            <ChipRow
              name="branch"
              value={branch}
              onChange={setBranch}
              options={[
                { value: "any", label: "Любой" },
                ...branches.map((b) => ({ value: b.slug, label: b.addressShort })),
              ]}
            />
          </Group>

          <Group label="Конкретный врач?">
            <ChipRow
              name="doctor"
              value={doctor}
              onChange={setDoctor}
              options={[
                { value: "any", label: "Любой свободный" },
                ...(preset.doctor ? [{ value: preset.doctor, label: preset.doctor }] : []),
              ]}
            />
            {!preset.doctor && (
              <p className="mt-2.5 text-[0.875rem] leading-snug text-graphite-soft">
                Выбрать конкретного специалиста можно в разделе «Врачи» — кнопка записи есть в каждой карточке.
              </p>
            )}
          </Group>

          <div className="mt-6 rounded-[10px] border border-line bg-milk p-4">
            <p className="text-[0.875rem] leading-relaxed text-graphite-soft">
              Мы не собираем персональные данные на этом сайте: запись происходит напрямую в Telegram клиники
              или по телефону. Ваш выбор просто подставится в первое сообщение — отправите его вы сами.
            </p>
          </div>
        </div>

        <div className="safe-bottom border-t border-line bg-porcelain px-5 pt-4 pb-4">
          <p className="eyebrow mb-3 text-graphite-soft">Как связаться</p>
          <div className="grid grid-cols-1 gap-2.5">
            <a
              href={bookingLink(message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[4px] bg-plum px-5 text-[0.9375rem] font-medium text-white transition-colors hover:bg-plum-deep"
            >
              <IconTelegram className="h-[18px] w-[18px]" />
              Написать в Telegram
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-[4px] border border-plum/45 px-5 text-[0.9375rem] font-medium text-plum-deep transition-colors hover:border-plum hover:bg-plum-tint"
            >
              <IconPhone className="h-[18px] w-[18px]" />
              {site.phone}
            </a>
          </div>
          <p className="mt-3 flex items-start gap-2 text-[0.8125rem] leading-snug text-graphite-soft">
            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-plum" />
            {MEDICAL_DISCLAIMER}
          </p>
        </div>
      </div>
    </div>
  );
}

function Group({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <fieldset className="mb-6 border-0 p-0">
      <legend className="mb-3 block text-[0.9375rem] font-semibold text-graphite">{label}</legend>
      {children}
    </fieldset>
  );
}

function ChipRow({
  options,
  value,
  onChange,
  name,
}: {
  options: { value: string; label: string }[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const active = o.value === value;
        return (
          <label
            key={o.value}
            className={clsx(
              "inline-flex min-h-[44px] cursor-pointer items-center rounded-full border px-4 text-[0.875rem] leading-tight transition-colors",
              active
                ? "border-plum bg-plum text-white"
                : "border-line bg-porcelain text-graphite hover:border-plum/45 hover:bg-plum-tint",
            )}
          >
            <input
              type="radio"
              name={name}
              value={o.value}
              checked={active}
              onChange={() => onChange(o.value)}
              className="sr-only"
            />
            {o.label}
          </label>
        );
      })}
    </div>
  );
}
