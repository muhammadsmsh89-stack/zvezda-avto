import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { ConcernNavigator } from "@/components/sections/ConcernNavigator";
import { WhyUs } from "@/components/sections/WhyUs";
import { FeaturedDoctors } from "@/components/sections/FeaturedDoctors";
import { Technology } from "@/components/sections/Technology";
import { History } from "@/components/sections/History";
import { Reviews } from "@/components/sections/Reviews";
import { Clinics } from "@/components/sections/Clinics";
import { FirstVisit } from "@/components/sections/FirstVisit";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConcernNavigator />
      <WhyUs />
      <FeaturedDoctors />
      <Technology />
      <History />
      <Reviews />
      <Clinics />
      <FirstVisit />
      <Faq />
      <FinalCta />
    </>
  );
}
