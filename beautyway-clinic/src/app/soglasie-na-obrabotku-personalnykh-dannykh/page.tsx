import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Согласие на обработку персональных данных",
  description: "Условия, на которых пользователь даёт согласие на обработку персональных данных. BeautyWay Clinic, ООО «БьютиВэй клиник», Москва.",
  path: "/soglasie-na-obrabotku-personalnykh-dannykh",
});

export default function Page() {
  return <LegalPage path="/soglasie-na-obrabotku-personalnykh-dannykh" title="Согласие на обработку персональных данных" eyebrow="Документ" intro="Условия, на которых пользователь даёт согласие на обработку персональных данных." />;
}
