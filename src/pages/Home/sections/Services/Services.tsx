/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { services } from "../../../../consts";
import { Collapse } from "../../components/Collapse/Collapse";

export default function Services() {
  return (
    <motion.section>
      <h1 className="text-xl my-10">Services</h1>

      <div className="flex flex-col gap-8">
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
                    className="block py-3"
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
