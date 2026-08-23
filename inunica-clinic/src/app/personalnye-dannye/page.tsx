import type { Metadata } from "next";
import { LegalDoc } from "@/components/LegalDoc";

export const metadata: Metadata = {
  title: "Обработка персональных данных",
  description:
    "Положение об обработке и защите персональных данных работников и клиентов ООО «АТМ» (INUNICA clinic).",
  alternates: { canonical: "/personalnye-dannye/" },
  robots: { index: false, follow: true },
};

export default function PersonalDataPage() {
  return (
    <LegalDoc
      slug="personalnye-dannye"
      lead="Положение ООО «АТМ» об обработке и защите персональных данных работников и клиентов клиники."
    />
  );
}
