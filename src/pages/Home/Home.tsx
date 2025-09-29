import { Hero } from "./sections/Hero/Hero";
import { Portfolio } from "./sections/Portfolio/Portfolio";
import Services from "./sections/Services/Services";
import { UnderHero } from "./sections/UnderHero/UnderHero";

export default function Home() {
  return (
    <>
      <Hero />
      <UnderHero />
      {/* <WhyUs /> */}
      <Services />
      <Portfolio />
    </>
  );
}
