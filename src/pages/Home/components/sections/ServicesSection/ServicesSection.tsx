import { motion } from "framer-motion";
import { AccordionItem } from "../../../../../components/AccordionItem/AccordionItem";
import { SectionHeader } from "../../../../../components/SectionHeader/SectionHeader";
import { services } from "../../../../../consts";
import { useLanguageStore } from "../../../../../stores/languageStore";

export function ServicesSection() {
  const { t } = useLanguageStore();

  return (
    <motion.section className="px-4 md:px-0">
      <SectionHeader title={t.services.title} />

      <div className="flex flex-col gap-4 md:gap-8">
        {services.map((service) => (
          <div key={service.title}>
            <AccordionItem
              title={service.title}
              content={service.content.map((item) => (
                <motion.div
                  key={item.title}
                  className="block py-2 md:py-3 text-lg md:text-xl"
                >
                  {t.services.items[item.title] || item.title}
                </motion.div>
              ))}
            />
            <div className="divider" />
          </div>
        ))}
      </div>
    </motion.section>
  );
}
