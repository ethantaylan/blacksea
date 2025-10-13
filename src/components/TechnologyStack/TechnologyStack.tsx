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
  url: string;
};

const technologies: TechnologyItem[] = [
  { name: "React", IconComponent: SiReact, url: "https://react.dev" },
  {
    name: "TypeScript",
    IconComponent: SiTypescript,
    url: "https://www.typescriptlang.org",
  },
  {
    name: "Tailwind CSS",
    IconComponent: SiTailwindcss,
    url: "https://tailwindcss.com",
  },
  {
    name: "Bootstrap",
    IconComponent: FaBootstrap,
    url: "https://getbootstrap.com",
  },
  { name: "DaisyUI", IconComponent: IoFlower, url: "https://daisyui.com" },
  { name: "Axios", IconComponent: SiAxios, url: "https://axios-http.com" },
  { name: "Supabase", IconComponent: SiSupabase, url: "https://supabase.com" },
  {
    name: "Zustand",
    IconComponent: RiBearSmileFill,
    url: "https://zustand-demo.pmnd.rs",
  },
  { name: "Clerk", IconComponent: SiClerk, url: "https://clerk.com" },
  { name: "Zod", IconComponent: SiZod, url: "https://zod.dev" },
  { name: "Strapi", IconComponent: SiStrapi, url: "https://strapi.io" },
  { name: "Git", IconComponent: SiGit, url: "https://git-scm.com" },
  { name: "Figma", IconComponent: SiFigma, url: "https://www.figma.com" },
  { name: "Vercel", IconComponent: SiVercel, url: "https://vercel.com" },
  {
    name: "Google Analytics",
    IconComponent: SiGoogleanalytics,
    url: "https://analytics.google.com",
  },
  {
    name: "WordPress",
    IconComponent: SiWordpress,
    url: "https://wordpress.org",
  },
  { name: "Node.js", IconComponent: SiNodedotjs, url: "https://nodejs.org" },
];

export const TechnologyStack = () => {
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
              <a
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center mx-4 md:mx-8 hover:text-black cursor-pointer text-gray-300"
                key={tech.name}
              >
                <div className="p-6 md:p-16 rounded-full flex flex-col items-center">
                  <span className="mb-2 md:mb-4 w-12 h-12 md:w-[120px] md:h-[120px] flex items-center justify-center">
                    <tech.IconComponent size={60} />
                  </span>
                </div>
                <small className="text-xs md:text-sm">{tech.name}</small>
              </a>
            ))}
          </div>
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </section>
  );
};
