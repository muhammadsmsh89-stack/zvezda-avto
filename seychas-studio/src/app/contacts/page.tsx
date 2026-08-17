import type { Metadata } from "next";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Контакты",
  description: `SEYCHAS в Туле: ${contacts.addressFull}. Телефон, WhatsApp, DIKIDI и соцсети.`,
};

export default function ContactsPage() {
  return <ContactsSection className="pt-28 lg:pt-36" />;
}
