import { motion } from "framer-motion";
import Waves from "../../../../assets/wave.mp4";

export const UnderHero = () => {
  return (
    <section className="min-h-[300px] text-white py-12">
      <motion.div
        className="mx-auto shadow-xl bg-black rounded-3xl p-8 relative overflow-hidden"
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-gray-400 mb-2">À PROPOS DE NOUS</p>
            <p className="text-xl font-semibold">
              Une équipe passionnée de développeurs, dédiée à transformer vos
              idées en projets digitaux.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center md:text-left w-full"
          >
            <p className="text-sm text-gray-400 mb-2">BASÉ EN</p>
            <p className="text-xl font-semibold">
              France &<br />
              Travaille dans le monde entier.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center md:text-left"
          >
            <p className="text-sm text-gray-400 mb-2">EXPERT DANS</p>
            <p className="text-xl font-semibold">
              Sites vitrines, e-commerce, branding, SEO et campagnes digitales.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
