/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { useLanguage } from "../../../../contexts/LanguageContext";
import { Header } from "../../../../components/Header/Header";
import { services } from "../../../../consts";
import { Collapse } from "../../components/Collapse/Collapse";

export default function Services() {
  const { t } = useLanguage();

  return (
    <motion.section className="px-4 md:px-0">
      <Header title={t.services.title} />

      <div className="flex flex-col gap-4 md:gap-8">
        {services.map((service) => (
          <div key={service.title}>
            <Collapse
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
