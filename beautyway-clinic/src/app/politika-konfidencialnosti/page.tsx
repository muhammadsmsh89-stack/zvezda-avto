import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Политика конфиденциальности",
  description: "Как обрабатываются данные пользователей сайта клиники. BeautyWay Clinic, ООО «БьютиВэй клиник», Москва.",
  path: "/politika-konfidencialnosti",
});

export default function Page() {
  return <LegalPage path="/politika-konfidencialnosti" title="Политика конфиденциальности" eyebrow="Документ" intro="Как обрабатываются данные пользователей сайта клиники." />;
}
