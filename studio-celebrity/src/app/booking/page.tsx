import type { Metadata } from "next";
import { BookingPageContent } from "@/components/BookingPageContent";

export const metadata: Metadata = {
  title: "Запись",
  description: "Запись в Studio Celebrity — выберите направление, мастера и способ связи.",
};

export default function BookingPage() {
  return <BookingPageContent />;
}
