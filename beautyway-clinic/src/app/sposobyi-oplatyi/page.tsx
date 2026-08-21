import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Способы оплаты",
  description: "Как оплатить процедуры и абонементы в клинике. BeautyWay Clinic, ООО «БьютиВэй клиник», Москва.",
  path: "/sposobyi-oplatyi",
});

export default function Page() {
  return <LegalPage path="/sposobyi-oplatyi" title="Способы оплаты" eyebrow="Информация" intro="Как оплатить процедуры и абонементы в клинике." />;
}
