import { motion } from "framer-motion";
import { DotBackground } from "../../../../components/DotBackground/DotBackground";
import { useLanguageStore } from "../../../../stores/languageStore";

export const HeroSection = () => {
  const { t } = useLanguageStore();

  return (
    <motion.section
      className="relative min-h-screen flex items-center overflow-hidden bg-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DotBackground />

      <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left side - Text content */}
          <motion.div
            className="lg:col-span-7 space-y-6 md:space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.9] tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t.aboutUs.hero.title}
              <br />
              <span className="italic font-light">
                {t.aboutUs.hero.subtitle}
              </span>
            </motion.h1>

            <motion.div
              className="flex items-start gap-6 md:gap-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex-1">
                <p className="text-lg md:text-xl text-gray-600 max-w-lg leading-relaxed">
                  {t.aboutUs.hero.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
