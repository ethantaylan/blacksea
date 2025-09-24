/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { DotBackground } from "../../../../components/DotBackground/DotBackground";

export function Hero() {
  // const { scrollYProgress } = useScroll();

  // const birdX = useTransform(scrollYProgress, [0, 0.2], [0, 1000]);
  // const birdRotate = useTransform(scrollYProgress, [0, 0.2], [0, 45]);
  // const birdScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.5]);

  return (
    <motion.div
      className="hero h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DotBackground />
      <motion.div
        className="hero-content text-center flex flex-col relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="relative text-[200px] font-black uppercase"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          BLACKSEA
          {/* <motion.span
            className="bird absolute left-[350px] bottom-[115px]"
            style={{
              x: birdX,
              rotate: birdRotate,
              scale: birdScale,
            }}
            animate={{
              rotateY: [0, 10, -10, 0],
            }}
          >
            a
          </motion.span> */}
        </motion.h1>

        <motion.p
          className="text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Votre partenaire digital pour des solutions web innovantes. Donnez vie
          à vos projets et démarquez-vous sur le marché.
        </motion.p>

        <motion.div
          className="flex gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="btn w-56 btn-lg btn-primary rounded-full mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact <MdOutlineArrowOutward size={22} />
          </motion.button>
          <motion.button
            className="btn w-56 btn-lg rounded-full mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Réalisations
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
