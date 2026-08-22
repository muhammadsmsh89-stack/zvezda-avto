import { Hero } from "@/components/sections/Hero";
import { SelectedProjects } from "@/components/sections/SelectedProjects";
import { Services } from "@/components/sections/Services";
import { FeaturedCase } from "@/components/sections/FeaturedCase";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { Materials } from "@/components/sections/Materials";
import { Reviews } from "@/components/sections/Reviews";
import { Calculator } from "@/components/sections/Calculator";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Contacts } from "@/components/sections/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <SelectedProjects />
      <Services />
      <FeaturedCase />
      <WhyUs />
      <Process />
      <Materials />
      <Reviews />
      <Calculator />
      <FinalCTA />
      <Contacts />
    </>
  );
}
