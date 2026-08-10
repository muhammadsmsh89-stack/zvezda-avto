export type AnalyticsEvent =
  | "hero_whatsapp_click"
  | "project_open"
  | "service_open"
  | "before_after_interaction"
  | "review_source_click"
  | "contact_whatsapp_click"
  | "map_open"
  | "phone_click";

// Абстракция аналитики: пока нет ключей провайдера, события логируются только в dev.
// Подключение реального провайдера — замена тела track().
export function track(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, payload ?? {});
  }
}
