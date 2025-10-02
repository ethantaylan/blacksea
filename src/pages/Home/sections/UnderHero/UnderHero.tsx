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
    <section className="min-h-[300px] h-[500px] text-white py-12">
      <motion.div
        className="shadow-xl bg-black rounded-3xl p-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <video className="rounded-3xl" autoPlay loop muted>
              <source src={Waves} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {infos.map((i) => (
            <InformationCard
              key={i.title}
              title={i.title}
              description={i.description}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
