import { HeroSection } from "./components/sections/HeroSection/HeroSection";
import { PortfolioSection } from "./components/sections/PortfolioSection/PortfolioSection";
import { ProcessSection } from "./components/sections/ProcessSection/ProcessSection";
import { ServicesSection } from "./components/sections/ServicesSection/ServicesSection";
import { TechnologyStack } from "./components/TechnologyStack/TechnologyStack";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TechnologyStack />
    </>
  );
}
