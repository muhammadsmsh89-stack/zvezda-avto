"use client";

import { createContext, ReactNode, useContext, useMemo, useState } from "react";

export type BookingSelection = {
  categorySlug?: string;
  salonSlug?: string;
  masterName?: string;
};

type BookingContextValue = {
  selection: BookingSelection;
  setSelection: (patch: BookingSelection) => void;
  jumpToBooking: (patch?: BookingSelection) => void;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [selection, setSelectionState] = useState<BookingSelection>({});

  const value = useMemo<BookingContextValue>(
    () => ({
      selection,
      setSelection: (patch) => setSelectionState((prev) => ({ ...prev, ...patch })),
      jumpToBooking: (patch) => {
        if (patch) setSelectionState((prev) => ({ ...prev, ...patch }));
        requestAnimationFrame(() => {
          document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      },
    }),
    [selection]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
