import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Пациентам",
  description: "Нормативные документы, лицензии и контакты надзорных органов. BeautyWay Clinic, ООО «БьютиВэй клиник», Москва.",
  path: "/pacientam",
});

export default function Page() {
  return <LegalPage path="/pacientam" title="Пациентам" eyebrow="Информация" intro="Нормативные документы, лицензии и контакты надзорных органов." />;
}
