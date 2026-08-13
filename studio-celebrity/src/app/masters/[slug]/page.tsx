import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { masters, getMasterBySlug } from "@/lib/masters";
import { MasterDetail } from "@/components/MasterDetail";

export function generateStaticParams() {
  return masters.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const master = getMasterBySlug(slug);
  if (!master) return {};
  return {
    title: `${master.name} — ${master.role}`,
    description: `${master.name}, ${master.role.toLowerCase()} в Studio Celebrity. ${master.specialty}.`,
  };
}

export default async function MasterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const master = getMasterBySlug(slug);
  if (!master) notFound();
  return <MasterDetail master={master} />;
}
