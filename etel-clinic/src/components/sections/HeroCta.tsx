"use client";

import Link from "next/link";
import { useBooking } from "../BookingSheet";

export function HeroCta() {
  const { open } = useBooking();
  return (
    <div className="mt-9 flex flex-wrap gap-4">
      <button
        type="button"
        onClick={() => open("Подбор процедуры")}
        className="inline-flex min-h-[54px] cursor-pointer items-center justify-center rounded-[2px] bg-accent px-8 text-[1rem] font-medium text-shell transition-colors duration-200 hover:bg-accent-deep active:scale-[0.98]"
      >
        Подобрать процедуру
      </button>
      <Link
        href="/clinics/"
        className="inline-flex min-h-[54px] items-center justify-center rounded-[2px] border border-shell/35 px-8 text-[1rem] font-medium text-shell transition-colors duration-200 hover:bg-shell/10"
      >
        Выбрать клинику
      </Link>
    </div>
  );
}
