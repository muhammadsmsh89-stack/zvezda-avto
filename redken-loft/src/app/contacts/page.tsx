import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactsSection } from "@/components/sections/ContactsSection";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Redken Loft: Краснодар, ул. Кубанская Набережная, 37, 1 этаж. Телефон, WhatsApp, режим работы.",
};

export default function ContactsPage() {
  return (
    <>
      <PageIntro eyebrow="Контакты" title="Как нас найти" />
      <ContactsSection className="pt-0 lg:pt-0" />
    </>
  );
}
