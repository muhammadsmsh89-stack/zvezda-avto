import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { contacts } from "@/lib/contacts";

export const metadata: Metadata = {
  title: "Контакты",
  description: `HPD Studio: ${contacts.addressFull}, ${contacts.landmark}. Телефон ${contacts.phone.value}.`,
};

export default function ContactsPage() {
  return (
    <>
      <PageIntro eyebrow="Контакты" title="Как до нас добраться" description={contacts.landmark} />
      <ContactsSection className="pt-0" />
    </>
  );
}
