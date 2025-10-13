import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { DotBackground } from "../DotBackground/DotBackground";
import { useContactStore } from "../../stores/contactStore";
import { useLanguageStore } from "../../stores/languageStore";

export function HeroSection() {
  const navigate = useNavigate();
  const { t } = useLanguageStore();
  const { openContact } = useContactStore();

  return (
    <motion.section
      className="hero h-screen relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DotBackground />
      <motion.div
        className="hero-content text-center flex flex-col relative z-10 px-4 md:px-0"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.h1
          className="relative text-5xl sm:text-7xl md:text-9xl lg:text-[150px] font-black uppercase leading-tight"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {t.hero.title}
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg md:text-2xl lg:text-4xl px-4 md:px-0 max-w-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto px-4 md:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="btn w-full sm:w-56 btn-lg btn-primary rounded-full mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={openContact}
          >
            {t.hero.contactBtn} <MdOutlineArrowOutward size={22} />
          </motion.button>
          <motion.button
            className="btn w-full sm:w-56 btn-lg rounded-full mt-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/works")}
          >
            {t.hero.worksBtn}
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
