import { Hero } from "@/components/sections/Hero";
import { Positioning } from "@/components/sections/Positioning";
import { Works } from "@/components/sections/Works";
import { Services } from "@/components/sections/Services";
import { Team } from "@/components/sections/Team";
import { Process } from "@/components/sections/Process";
import { Reviews } from "@/components/sections/Reviews";
import { Atmosphere } from "@/components/sections/Atmosphere";
import { Location } from "@/components/sections/Location";
import { FinalCta } from "@/components/sections/FinalCta";

export default function Home() {
  return (
    <>
      <Hero />
      <Positioning />
      <Works />
      <Services />
      <Team />
      <Process />
      <Reviews />
      <Atmosphere />
      <Location />
      <FinalCta />
    </>
  );
}
