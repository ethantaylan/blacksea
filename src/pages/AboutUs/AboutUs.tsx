import { SEO } from "../../components/SEO/SEO";
import { useLanguageStore } from "../../stores/languageStore";
import { HeroSection } from "../Home/components/sections/HeroSection/HeroSection";
import { StorySection } from "./components/sections/StorySection/StorySection";
// import { TeamSection } from "./components/sections/TeamSection/TeamSection";
import { ValuesSection } from "./components/sections/ValuesSection/ValuesSection";

export default function AboutUs() {
  const { t } = useLanguageStore();

  return (
    <>
      <SEO
        title={t.seo.about.title}
        description={t.seo.about.description}
        keywords={t.seo.about.keywords}
      />
      <HeroSection />
      <StorySection />
      <ValuesSection />
      {/* <TeamSection /> */}
    </>
  );
}
