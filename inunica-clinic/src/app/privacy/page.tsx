import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description:
    "Политика конфиденциальности сайта INUNICA clinic: какие данные собираются, зачем и как их можно отозвать.",
  alternates: { canonical: "/privacy/" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <LegalDoc
      slug="privacy"
      lead="Документ определяет, какие данные собирает сайт, для чего они используются и как отозвать согласие на их обработку."
    />
  );
}
