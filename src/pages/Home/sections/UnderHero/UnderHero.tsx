import { motion } from "framer-motion";
import Waves from "../../../../assets/wave.mp4";
import { InformationCard } from "../../components/InformationCard/InformationCard";

export const UnderHero = () => {
  const infos = [
    {
      title: "À PROPOS DE NOUS",
      description:
        "Une équipe passionnée de développeurs, dédiée à transformer vos idées en projets digitaux.",
    },
    {
      title: "BASÉ EN",
      description: "France &\nTravaille dans le monde entier.",
    },
    {
      title: "EXPERT DANS",
      description:
        "Sites vitrines, e-commerce, branding, SEO et campagnes digitales.",
    },
  ];

  return (
    <section className="min-h-[300px] h-auto md:h-[500px] text-white py-6 md:py-12 px-4 md:px-0">
      <motion.div
        className="shadow-xl bg-black rounded-3xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <video
              className="rounded-3xl w-full h-auto"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={Waves} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row justify-between items-center md:items-stretch gap-10 md:gap-8">
            {infos.map((i) => (
              <InformationCard
                key={i.title}
                title={i.title}
                description={i.description}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
