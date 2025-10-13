import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { DotBackground } from "../../components/DotBackground/DotBackground";
import { useLanguageStore } from "../../stores/languageStore";

export default function NotFound() {
  const navigate = useNavigate();
  const { t } = useLanguageStore();

  return (
    <motion.section
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DotBackground />

      <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full text-center">
        <motion.div
          className="space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* 404 Number */}
          <motion.h1
            className="text-[150px] sm:text-[200px] md:text-[280px] lg:text-[350px] font-black leading-none tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            404
          </motion.h1>

          {/* Message */}
          <motion.div
            className="space-y-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
              PAGE NOT
              <br />
              <span className="italic font-light">Found</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto leading-relaxed">
              {t.common.home === "Home"
                ? "Oops! The page you're looking for doesn't exist. Let's get you back on track."
                : "Oups ! La page que vous recherchez n'existe pas. Revenons sur la bonne voie."}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              className="btn w-full sm:w-56 btn-lg btn-primary rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")}
            >
              {t.common.home} <MdOutlineArrowOutward size={22} />
            </motion.button>
            <motion.button
              className="btn w-full sm:w-56 btn-lg rounded-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate(-1)}
            >
              {t.common.home === "Home" ? "Go Back" : "Retour"}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
