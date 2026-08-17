import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MasterDetail } from "@/components/MasterDetail";
import { masters, getMasterBySlug } from "@/lib/masters";

export function generateStaticParams() {
  return masters.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const master = getMasterBySlug(slug);
  if (!master) return {};
  return {
    title: master.name,
    description: `${master.name} — ${master.role} в студии SEYCHAS, Тула.`,
  };
}

export default async function MasterPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const master = getMasterBySlug(slug);
  if (!master) notFound();
  return <MasterDetail master={master} />;
}
