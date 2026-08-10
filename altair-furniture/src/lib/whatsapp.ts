import { company } from "@/data/company";

export function buildWhatsAppLink(message: string) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${company.whatsapp.number}?${params.toString()}`;
}

export function whatsAppMessageForCategory(context?: string) {
  if (!context) {
    return "Здравствуйте! Хочу рассчитать мебель по индивидуальному проекту.";
  }
  return `Здравствуйте! Хочу предварительно рассчитать ${context} по индивидуальному проекту.`;
}
