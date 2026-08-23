import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Showcase } from "@/components/sections/Showcase";
import { Directions } from "@/components/sections/Directions";
import { Technology } from "@/components/sections/Technology";
import { Space } from "@/components/sections/Space";
import { Doctors } from "@/components/sections/Doctors";
import { Promo } from "@/components/sections/Promo";
import { Trust } from "@/components/sections/Trust";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Showcase />
      <Directions />
      <Technology />
      <Space />
      <Doctors />
      <Promo />
      <Trust />
      <FinalCta />
    </>
  );
}
