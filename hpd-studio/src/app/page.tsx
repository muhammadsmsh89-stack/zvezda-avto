import { Hero } from "@/components/sections/Hero";
import { TrustStrip } from "@/components/sections/TrustStrip";
import { BigPhoto } from "@/components/sections/BigPhoto";
import { NeedsSection } from "@/components/sections/NeedsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ReviewsSection } from "@/components/sections/ReviewsSection";
import { FinalCtaSection } from "@/components/sections/FinalCtaSection";
import { ContactsSection } from "@/components/sections/ContactsSection";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <BigPhoto />
      <NeedsSection />
      <ServicesSection />
      <ProjectsSection />
      <BeforeAfterSection />
      <HowItWorksSection />
      <ReviewsSection />
      <FinalCtaSection />
      <ContactsSection />
    </>
  );
}
