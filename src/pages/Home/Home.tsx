import { SEO } from "../../components/SEO/SEO";
import { useLanguageStore } from "../../stores/languageStore";
import { HeroSection } from "./components/sections/HeroSection/HeroSection";
import { PortfolioSection } from "./components/sections/PortfolioSection/PortfolioSection";
import { ProcessSection } from "./components/sections/ProcessSection/ProcessSection";
import { ServicesSection } from "./components/sections/ServicesSection/ServicesSection";
import { TechnologyStack } from "./components/TechnologyStack/TechnologyStack";

export default function Home() {
  const { t } = useLanguageStore();

  return (
    <>
      <SEO
        title={t.seo.home.title}
        description={t.seo.home.description}
        keywords={t.seo.home.keywords}
      />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TechnologyStack />
    </>
  );
}
