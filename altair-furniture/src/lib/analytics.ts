export type AnalyticsEvent =
  | "hero_cta_click"
  | "project_open"
  | "calculator_start"
  | "calculator_complete"
  | "whatsapp_click"
  | "phone_click"
  | "instagram_click"
  | "map_click"
  | "form_submit"
  | "form_success"
  | "form_error";

// Абстракция аналитики: пока нет ключей провайдера, события логируются только в dev.
// Подключение реального провайдера (метрика, GA, амплитуда и т.п.) — замена тела track().
export function track(event: AnalyticsEvent, payload?: Record<string, unknown>) {
  if (process.env.NODE_ENV !== "production") {
    console.debug(`[analytics] ${event}`, payload ?? {});
  }
}
