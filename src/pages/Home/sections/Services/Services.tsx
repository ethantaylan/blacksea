/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { services } from "../../../../consts";
import { Collapse } from "../../components/Collapse";

export default function Services() {
  return (
    <motion.section className="h-auto pb-10">
      <div className="my-40">
        <h1 className="text-5xl mt-20">
          Découvrez comment nous avons transformé des idées en réalité.
        </h1>
        <h2 className="text-gray-400 text-5xl">
          Plongez dans les histoires de conceptions de produits réussies qui
          font la différence.
        </h2>
      </div>

      <h1 className="text-xl my-10">Services</h1>

      {services.map((service) => (
        <>
          <Collapse
            key={service.title}
            title={service.title}
            content={service.content.map((item) => (
              <motion.a key={item.title} href={item.url} className="block py-2">
                {item.title}
              </motion.a>
            ))}
          />
          <div className="divider" />
        </>
      ))}
    </motion.section>
  );
}
