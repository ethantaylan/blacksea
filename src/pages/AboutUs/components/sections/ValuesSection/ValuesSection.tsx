import { motion } from "framer-motion";
import { SectionHeader } from "../../../../../components/SectionHeader/SectionHeader";
import { useLanguageStore } from "../../../../../stores/languageStore";

export const ValuesSection = () => {
  const { t } = useLanguageStore();

  const values = [
    {
      title: t.aboutUs.values.innovation.title,
      description: t.aboutUs.values.innovation.description,
      icon: "💡",
    },
    {
      title: t.aboutUs.values.quality.title,
      description: t.aboutUs.values.quality.description,
      icon: "✨",
    },
    {
      title: t.aboutUs.values.collaboration.title,
      description: t.aboutUs.values.collaboration.description,
      icon: "🤝",
    },
    {
      title: t.aboutUs.values.passion.title,
      description: t.aboutUs.values.passion.description,
      icon: "❤️",
    },
  ];

  return (
    <section className="px-4 md:px-0 pb-32">
      <SectionHeader title={t.aboutUs.values.title} />

      <div className="max-w-5xl mx-auto">
        {values.map((value, index) => (
          <motion.div
            key={value.title}
            className="group py-12 md:py-16 border-b border-gray-200 last:border-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16">
              {/* Number */}
              <motion.div
                className="flex-shrink-0 text-6xl md:text-7xl font-light text-gray-200 group-hover:text-black transition-colors duration-500"
                whileHover={{ scale: 1.1 }}
              >
                0{index + 1}
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-light mb-4 md:mb-6">
                  {value.title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
