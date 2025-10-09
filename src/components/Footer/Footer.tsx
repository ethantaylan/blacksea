/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { socials } from "../../consts";

export function Footer() {
  return (
    <footer className="bg-black h-auto md:h-[600px] text-white pt-12 md:pt-20 pb-4 px-4 md:px-0 items-center flex flex-col justify-between">
      <div className="container flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        <div className="w-full">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 md:mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Let's start
            <br />
            creating together
          </motion.h2>

          <motion.button
            className="btn w-full sm:w-56 btn-md md:btn-lg rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact <MdOutlineArrowOutward size={22} />
          </motion.button>
        </div>

        {/* <div className="grid grid-cols-2 md:flex md:justify-between w-full md:w-2/4 items-start gap-8 md:gap-0"> */}
        {/* <div className="space-y-3 md:space-y-4">
            {menus.map((item, index) => (
              <motion.a
                key={item.link}
                href={`#${item.link}`}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block hover:text-gray-300 transition-colors text-sm md:text-base"
              >
                {item.name}
              </motion.a>
            ))}
          </div> */}

        <div className="space-y-3 md:space-y-4">
          {socials.map((item) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex justify-between md:w-40 items-center gap-2 hover:gap-4 transition-all hover:text-gray-300 text-sm md:text-base"
            >
              {item.name} <MdOutlineArrowOutward />
            </motion.a>
          ))}
          {/* </div> */}
        </div>
      </div>

      <div className="mt-12 md:mt-20">
        <motion.p
          className="text-xs md:text-sm text-gray-500 text-center"
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
