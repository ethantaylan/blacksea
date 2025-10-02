/* eslint-disable react/no-unescaped-entities */
import { FaBootstrap } from "react-icons/fa";
import { IoFlower } from "react-icons/io5";
import { RiBearSmileFill } from "react-icons/ri";
import {
  SiAxios,
  SiClerk,
  SiFigma,
  SiGit,
  SiGoogleanalytics,
  SiNodedotjs,
  SiReact,
  SiStrapi,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiWordpress,
  SiZod,
} from "react-icons/si";

import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "../lightswind/3d-scroll-trigger";

type TechnologyItem = {
  name: string;
  IconComponent: React.ComponentType<{ size: number }>;
};

const technologies: TechnologyItem[] = [
  { name: "React", IconComponent: SiReact },
  { name: "TypeScript", IconComponent: SiTypescript },
  { name: "Tailwind CSS", IconComponent: SiTailwindcss },
  { name: "Bootstrap", IconComponent: FaBootstrap },
  { name: "DaisyUI", IconComponent: IoFlower },
  { name: "Axios", IconComponent: SiAxios },
  { name: "Supabase", IconComponent: SiSupabase },
  { name: "Zustand", IconComponent: RiBearSmileFill },
  { name: "Clerk", IconComponent: SiClerk },
  { name: "Zod", IconComponent: SiZod },
  { name: "Strapi", IconComponent: SiStrapi },
  { name: "Git", IconComponent: SiGit },
  { name: "Figma", IconComponent: SiFigma },
  { name: "Vercel", IconComponent: SiVercel },
  { name: "Google Analytics", IconComponent: SiGoogleanalytics },
  { name: "WordPress", IconComponent: SiWordpress },
  { name: "Node.js", IconComponent: SiNodedotjs },
];

export const Technology = () => {
  return (
    <section className="py-12 md:py-24 overflow-hidden">
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow
          className="pb-10 md:pb-20"
          baseVelocity={2}
          direction={1}
        >
          <div className="flex">
            {technologies.map((tech) => (
              <div
                className="flex flex-col items-center mx-4 md:mx-8 hover:text-black cursor-pointer text-gray-300"
                key={tech.name}
              >
                <div className="p-6 md:p-16 rounded-full flex flex-col items-center">
                  <span className="mb-2 md:mb-4 w-12 h-12 md:w-[120px] md:h-[120px] flex items-center justify-center">
                    <tech.IconComponent size={60} />
                  </span>
                </div>
                <small className="text-xs md:text-sm">{tech.name}</small>
              </div>
            ))}
          </div>
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </section>
  );
};
