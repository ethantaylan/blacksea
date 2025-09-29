/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

export function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-4 items-center flex flex-col">
      <div className="container flex justify-between">
        <div className="w-full">
          <motion.h2
            className="text-5xl font-light mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's start
            <br />
            creating together
          </motion.h2>

          <motion.button
            className="btn w-56 btn-lg rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact <MdOutlineArrowOutward size={22} />
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:flex md:justify-between w-2/4 items-start">
          <div className="space-y-4">
            {["Home", "Work", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block hover:text-gray-300 transition-colors"
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="space-y-4">
            {[
              { name: "Twitter", icon: <MdOutlineArrowOutward /> },
              { name: "Dribbble", icon: <MdOutlineArrowOutward /> },
              { name: "Instagram", icon: <MdOutlineArrowOutward /> },
              { name: "LinkedIn", icon: <MdOutlineArrowOutward /> },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={`https://${item.name.toLowerCase()}.com`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex justify-between w-40 items-center gap-2 hover:gap-4 transition-all hover:text-gray-300"
              >
                {item.name} {item.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <motion.p
          className="text-sm text-gray-400 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          © 2025 BLACKSEA. Tous droits réservés.
        </motion.p>
      </div>
    </footer>
  );
}
