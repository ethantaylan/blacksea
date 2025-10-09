import { Methodology } from "../../components/Methodology/Methodology";
import { Technology } from "../../components/Technology/Technology";
import { Hero } from "./sections/Hero/Hero";
import { Portfolio } from "./sections/Portfolio/Portfolio";
import Services from "./sections/Services/Services";

export default function Home() {
  return (
    <>
      <Hero />
      {/* <UnderHero /> */}
      {/* <WhyUs /> */}
      <Services />
      <Portfolio />
      <Methodology />
      <Technology />
    </>
  );
}
