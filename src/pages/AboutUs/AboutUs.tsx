import { HeroSection } from "../Home/components/sections/HeroSection/HeroSection";
import { StorySection } from "./components/sections/StorySection/StorySection";
// import { TeamSection } from "./components/sections/TeamSection/TeamSection";
import { ValuesSection } from "./components/sections/ValuesSection/ValuesSection";

export default function AboutUs() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      {/* <TeamSection /> */}
    </>
  );
}
