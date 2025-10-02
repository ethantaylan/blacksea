/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { services } from "../../../../consts";
import { Collapse } from "../../components/Collapse/Collapse";

export default function Services() {
  return (
    <motion.section className="px-4 md:px-0">
      <h1 className="text-lg md:text-xl my-6 md:my-10">Services</h1>

      <div className="flex flex-col gap-4 md:gap-8">
        {services.map((service) => (
          <>
            <div>
              <Collapse
                key={service.title}
                title={service.title}
                content={service.content.map((item) => (
                  <motion.a
                    key={item.title}
                    href={item.url}
                    className="block py-2 md:py-3 text-lg md:text-xl"
                  >
                    {item.title}
                  </motion.a>
                ))}
              />
              <div className="divider" />
            </div>
          </>
        ))}
      </div>
    </motion.section>
  );
}
