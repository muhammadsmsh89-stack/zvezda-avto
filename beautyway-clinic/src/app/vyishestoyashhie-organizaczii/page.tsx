import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Контакты вышестоящих организаций",
  description: "Куда обращаться по вопросам, которые не удалось решить в клинике. BeautyWay Clinic, ООО «БьютиВэй клиник», Москва.",
  path: "/vyishestoyashhie-organizaczii",
});

export default function Page() {
  return <LegalPage path="/vyishestoyashhie-organizaczii" title="Контакты вышестоящих организаций" eyebrow="Информация" intro="Куда обращаться по вопросам, которые не удалось решить в клинике." />;
}
