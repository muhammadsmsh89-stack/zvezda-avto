// Независимый analytics adapter. Компоненты вызывают только track(event, params) и не знают,
// какой счётчик подключён — сейчас это заглушка (console.debug в dev), реальный счётчик
// подключается здесь в одном месте, когда клиент предоставит идентификатор.

export const ANALYTICS_EVENTS = [
  "hero_cta_click",
  "catalog_open",
  "category_open",
  "product_open",
  "interior_open",
  "quiz_started",
  "quiz_step",
  "quiz_completed",
  "whatsapp_click",
  "phone_click",
  "route_click",
  "installment_click",
  "form_started",
  "form_submit",
] as const;

export type AnalyticsEvent = (typeof ANALYTICS_EVENTS)[number];

type EventParams = Record<string, string | number | boolean | undefined>;

export function track(event: AnalyticsEvent, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event, params);
  }
  // Реальный счётчик (Яндекс.Метрика и т.п.) подключается здесь после получения ID от клиента.
}
