import { motion } from "framer-motion";
import { SectionHeader } from "../../../../../components/SectionHeader/SectionHeader";
import { useLanguageStore } from "../../../../../stores/languageStore";

export const StorySection = () => {
  const { t } = useLanguageStore();

  return (
    <section className="px-4 md:px-0 pb-20">
      <SectionHeader title={t.aboutUs.story.title} />

      <motion.div
        className="max-w-4xl mx-auto space-y-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          {t.aboutUs.story.paragraph1}
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          {t.aboutUs.story.paragraph2}
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          {t.aboutUs.story.paragraph3}
        </p>
      </motion.div>
    </section>
  );
};
