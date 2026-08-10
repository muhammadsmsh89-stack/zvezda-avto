import { Hero } from "@/components/sections/Hero";
import { ProofStrip } from "@/components/sections/ProofStrip";
import { Philosophy } from "@/components/sections/Philosophy";
import { Categories } from "@/components/sections/Categories";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { CalculatorSection } from "@/components/sections/Calculator/CalculatorSection";
import { Materials } from "@/components/sections/Materials";
import { Reviews } from "@/components/sections/Reviews";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contacts } from "@/components/sections/Contacts";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <Philosophy />
      <Categories />
      <Projects />
      <Process />
      <CalculatorSection />
      <Materials />
      <Reviews />
      <Faq />
      <FinalCta />
      <Contacts />
    </>
  );
}
