"use client";

import { createContext, useCallback, useContext, useMemo, useState, ReactNode } from "react";

type BookingContextValue = {
  isOpen: boolean;
  openBooking: (masterSlug?: string) => void;
  closeBooking: () => void;
  presetMasterSlug?: string;
};

const BookingContext = createContext<BookingContextValue | null>(null);

export function BookingProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [presetMasterSlug, setPresetMasterSlug] = useState<string | undefined>(undefined);

  const openBooking = useCallback((masterSlug?: string) => {
    setPresetMasterSlug(masterSlug);
    setIsOpen(true);
  }, []);

  const closeBooking = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, openBooking, closeBooking, presetMasterSlug }),
    [isOpen, openBooking, closeBooking, presetMasterSlug]
  );

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error("useBooking must be used within BookingProvider");
  return ctx;
}
