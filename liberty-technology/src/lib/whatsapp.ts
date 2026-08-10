import { company } from "@/data/company";

export function buildWhatsAppLink(message: string) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${company.whatsapp.number}?${params.toString()}`;
}

export function whatsAppMessageForContext(context?: string) {
  if (!context) {
    return "Здравствуйте! Хочу обсудить свой автомобиль в Liberty Technology.";
  }
  return `Здравствуйте! Хочу обсудить ${context}.`;
}
