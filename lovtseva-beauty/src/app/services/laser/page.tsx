import type { Metadata } from "next";
import { DirectionPage } from "@/components/DirectionPage";
import { getDirectionBySlug } from "@/lib/services";

export const metadata: Metadata = {
  title: "Лазерная эпиляция",
  description: "Лазерная эпиляция, шугаринг и восковая депиляция в Центре красоты Натальи Ловцевой, Рязань.",
};

export default function LaserPage() {
  return <DirectionPage direction={getDirectionBySlug("laser")!} />;
}
