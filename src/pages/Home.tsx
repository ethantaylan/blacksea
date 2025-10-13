import { ProcessSection } from "../components/ProcessSection/ProcessSection";
import { TechnologyStack } from "../components/TechnologyStack/TechnologyStack";
import { HeroSection } from "../components/HeroSection/HeroSection";
import { PortfolioSection } from "../components/PortfolioSection/PortfolioSection";
import { ServicesSection } from "../components/ServicesSection/ServicesSection";

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
