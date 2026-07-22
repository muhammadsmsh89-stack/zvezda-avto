import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { BookingForm } from "@/components/sections/BookingForm";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты автотехцентра «Звезда» в Махачкале: адрес, телефоны, режим работы и схема проезда.",
};

export default function KontaktyPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        breadcrumb="Контакты"
        title="Свяжитесь с нами"
        description={`${"Работаем ежедневно с 9:00 до 21:00. Звоните напрямую или оставьте заявку — перезвоним в рабочее время."}`}
      />
      <ContactsSection />
      <BookingForm />
    </>
  );
}
