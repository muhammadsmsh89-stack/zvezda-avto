import type { Metadata } from "next";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactsSection } from "@/components/sections/ContactsSection";
import { studio } from "@/lib/studio";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Studio Celebrity — ${studio.addressFull}. Телефон ${studio.phone.value}, график ${studio.hours}.`,
};

export default function ContactsPage() {
  return (
    <>
      <PageIntro eyebrow="Контакты" title="Как нас найти" />
      <ContactsSection />
    </>
  );
}
