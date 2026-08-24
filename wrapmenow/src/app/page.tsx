import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { NeedsSection } from "@/components/sections/NeedsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { FeaturedCase } from "@/components/sections/FeaturedCase";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProtectionConfigurator } from "@/components/sections/ProtectionConfigurator";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ContractBenefits } from "@/components/sections/ContractBenefits";
import { ProcessUpdates } from "@/components/sections/ProcessUpdates";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { StudioSection } from "@/components/sections/StudioSection";
import { TeamSection } from "@/components/sections/TeamSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <NeedsSection />
      <ProjectsSection />
      <FeaturedCase />
      <ServicesSection />
      <ProtectionConfigurator />
      <BeforeAfterSection />
      <PriceCalculator />
      <ProcessTimeline />
      <ContractBenefits />
      <ProcessUpdates />
      <ReviewsSection />
      <StudioSection />
      <TeamSection />
      <FAQSection />
      <FinalCtaSection />
      <ContactsSection />
    </>
  );
}
