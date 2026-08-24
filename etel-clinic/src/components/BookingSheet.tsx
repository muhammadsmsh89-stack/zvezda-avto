"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { site } from "@/lib/site";
import { Button, ButtonAction } from "./ui/Button";

type BookingContext = {
  /** subject — контекст, из которого пришёл пользователь: врач, услуга, аппарат, клиника. */
  open: (subject?: string) => void;
};

const Ctx = createContext<BookingContext>({ open: () => {} });

export function useBooking() {
  return useContext(Ctx);
}

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [subject, setSubject] = useState<string | undefined>();
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((s?: string) => {
    setSubject(s);
    setIsOpen(true);
  }, []);

  return (
    <Ctx.Provider value={{ open }}>
      {children}
      {isOpen && <Sheet subject={subject} onClose={() => setIsOpen(false)} />}
    </Ctx.Provider>
  );
}

function Sheet({ subject, onClose }: { subject?: string; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    const prevFocus = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const root = dialogRef.current;
      if (!root) return;
      const items = root.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
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
    }

    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[90] flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Закрыть форму записи"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-[2px]"
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative flex max-h-[92dvh] w-full max-w-[520px] flex-col overflow-y-auto bg-paper px-6 pt-8 pb-[max(2rem,env(safe-area-inset-bottom))] sm:px-10 sm:py-11"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Закрыть"
          className="absolute top-4 right-4 grid h-11 w-11 cursor-pointer place-items-center text-ink-mute transition-colors duration-200 hover:text-ink"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
            <path d="M1 1l14 14M15 1L1 15" stroke="currentColor" strokeWidth="1.25" fill="none" />
          </svg>
        </button>

        {sent ? (
          <Success onClose={onClose} />
        ) : (
          <Form subject={subject} titleId={titleId} onSent={() => setSent(true)} />
        )}
      </div>
    </div>
  );
}

function Form({
  subject,
  titleId,
  onSent,
}: {
  subject?: string;
  titleId: string;
  onSent: () => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState<string | null>(null);
  const nameId = useId();
  const phoneId = useId();

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "");
    if (name.trim().length < 2) {
      setError("Напишите, как к вам обращаться.");
      return;
    }
    if (digits.length < 11) {
      setError("Проверьте номер телефона — нужно 11 цифр.");
      return;
    }
    setError(null);
    onSent();
  }

  return (
    <form onSubmit={submit} noValidate>
      <p className="eyebrow">Запись на консультацию</p>
      <h2 id={titleId} className="font-display mt-4 text-[1.875rem] text-ink">
        Оставьте телефон — администратор перезвонит
      </h2>

      {subject && (
        <p className="mt-4 border-l-2 border-accent pl-3 text-[1rem] text-ink-soft">
          Интересует: <span className="text-ink">{subject}</span>
        </p>
      )}

      <div className="mt-8 space-y-6">
        <Field id={nameId} label="Имя">
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-b border-line bg-transparent pb-3 text-[1.125rem] text-ink outline-none transition-colors duration-200 focus:border-ink"
          />
        </Field>

        <Field id={phoneId} label="Телефон">
          <input
            id={phoneId}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="+7 ___ ___ __ __"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            aria-invalid={error ? true : undefined}
            className="w-full border-b border-line bg-transparent pb-3 text-[1.125rem] text-ink outline-none transition-colors duration-200 placeholder:text-ink-mute/60 focus:border-ink"
          />
        </Field>
      </div>

      {error && (
        <p role="alert" className="mt-5 text-[1rem] text-accent-deep">
          {error}
        </p>
      )}

      <ButtonAction type="submit" variant="accent" className="mt-9 w-full">
        Отправить заявку
      </ButtonAction>

      <p className="mt-5 text-[0.9375rem] leading-relaxed text-ink-mute">
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="/privacy/" className="underline underline-offset-2 hover:text-ink">
          политикой обработки персональных данных
        </a>
        .
      </p>

      <p className="mt-6 border-t border-line pt-6 text-[1rem] text-ink-soft">
        Или позвоните:{" "}
        <a
          href={site.primaryPhone.href}
          className="text-ink underline underline-offset-4 whitespace-nowrap"
        >
          {site.primaryPhone.display}
        </a>
        <span className="mt-1 block text-ink-mute">{site.hours.short}</span>
      </p>
    </form>
  );
}

function Field({ id, label, children }: { id: string; label: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="eyebrow mb-3 block">
        {label}
      </label>
      {children}
    </div>
  );
}

function Success({ onClose }: { onClose: () => void }) {
  return (
    <div className="py-6">
      <p className="eyebrow">Заявка заполнена</p>
      <h2 className="font-display mt-4 text-[1.875rem] text-ink">Форма готова к подключению</h2>

      {/*
        Честность важнее красивого «Спасибо!»: у статического экспорта нет
        бэкенда, поэтому мы не изображаем отправку. Пользователь сразу
        получает рабочий канал связи, владелец сайта — понятную точку
        интеграции (форма-сервис или почта).
      */}
      <p className="mt-5 text-[1.125rem] leading-[1.65] text-ink-soft">
        Данные не были отправлены: приём заявок с сайта пока не подключён.
        Чтобы записаться прямо сейчас, позвоните или напишите — администратор
        подберёт врача, клинику и время.
      </p>

      <div className="mt-8 flex flex-col gap-3">
        <Button href={site.primaryPhone.href} size="lg">
          Позвонить {site.primaryPhone.display}
        </Button>
        {site.whatsapp && (
          <Button href={site.whatsapp} target="_blank" variant="secondary" size="lg" icon={false}>
            Написать в WhatsApp
          </Button>
        )}
      </div>

      <button
        type="button"
        onClick={onClose}
        className="mt-7 cursor-pointer text-[1rem] text-ink-mute underline underline-offset-4 transition-colors duration-200 hover:text-ink"
      >
        Закрыть
      </button>
    </div>
  );
}
