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

const ICON_SIZE = 120;

type TechnologyItem = {
  name: string;
  icon: JSX.Element;
};

const technologies: TechnologyItem[] = [
  { name: "React", icon: <SiReact size={ICON_SIZE} /> },
  { name: "TypeScript", icon: <SiTypescript size={ICON_SIZE} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={ICON_SIZE} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={ICON_SIZE} /> },
  {
    name: "DaisyUI",
    icon: <IoFlower size={ICON_SIZE} />,
  },
  {
    name: "Axios",
    icon: <SiAxios size={ICON_SIZE} />,
  },
  { name: "Supabase", icon: <SiSupabase size={ICON_SIZE} /> },
  {
    name: "Zustand",
    icon: <RiBearSmileFill size={ICON_SIZE} />,
  },
  {
    name: "Clerk",
    icon: <SiClerk size={ICON_SIZE} />,
  },
  {
    name: "Zod",
    icon: <SiZod size={ICON_SIZE} />,
  },
  { name: "Strapi", icon: <SiStrapi size={ICON_SIZE} /> },
  { name: "Git", icon: <SiGit size={ICON_SIZE} /> },
  { name: "Figma", icon: <SiFigma size={ICON_SIZE} /> },
  { name: "Vercel", icon: <SiVercel size={ICON_SIZE} /> },
  {
    name: "Google Analytics",
    icon: <SiGoogleanalytics size={ICON_SIZE} />,
  },
  { name: "WordPress", icon: <SiWordpress size={ICON_SIZE} /> },
  { name: "Node.js", icon: <SiNodedotjs size={ICON_SIZE} /> },
];

export const Technology = () => {
  return (
    <section className="py-24 overflow-hidden">
      <ThreeDScrollTriggerContainer>
        <ThreeDScrollTriggerRow
          className="pb-20"
          baseVelocity={2}
          direction={1}
        >
          <div className="flex">
            {technologies.map((tech) => (
              <div
                className="flex flex-col items-center mx-8 hover:text-black cursor-pointer text-gray-300"
                key={tech.name}
              >
                <div className="p-16 rounded-full flex flex-col items-center ">
                  <span className="mb-4">{tech.icon}</span>
                </div>
                <small>{tech.name}</small>
              </div>
            ))}
          </div>
        </ThreeDScrollTriggerRow>
      </ThreeDScrollTriggerContainer>
    </section>
  );
};
