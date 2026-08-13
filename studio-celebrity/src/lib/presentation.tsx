"use client";

import { createContext, useContext, useSyncExternalStore, ReactNode } from "react";

const PresentationContext = createContext(false);

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return new URLSearchParams(window.location.search).get("presentation") === "1";
}

function getServerSnapshot() {
  return false;
}

/**
 * ?presentation=1 скрывает техническую разметку OWNER_ASSET_REQUIRED
 * (номер кадра, подпись, рамки) при показе прототипа клиенту.
 */
export function PresentationProvider({ children }: { children: ReactNode }) {
  const presentation = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <PresentationContext.Provider value={presentation}>{children}</PresentationContext.Provider>
  );
}

export function usePresentation() {
  return useContext(PresentationContext);
}
