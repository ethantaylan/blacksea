/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";
import { socials } from "../../consts";
import { useLanguageStore } from "../../stores/languageStore";

interface FooterProps {
  onContactClick: () => void;
}

export function Footer({ onContactClick }: FooterProps) {
  const { t } = useLanguageStore();

  return (
    <footer className="bg-black h-auto md:h-[400px] text-white pt-12 md:pt-20 pb-4 px-4 md:px-0 items-center flex flex-col justify-between" role="contentinfo">
      <div className="container flex flex-col md:flex-row justify-between gap-8 md:gap-0">
        <div className="w-full">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-light mb-8 md:mb-12 whitespace-pre-line"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t.footer.title}
          </motion.h2>

          <motion.button
            className="btn w-full sm:w-56 btn-md md:btn-lg rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onContactClick}
            aria-label="Open contact form"
          >
            {t.footer.contactBtn} <MdOutlineArrowOutward size={22} aria-hidden="true" />
          </motion.button>
        </div>

        <nav className="space-y-3 md:space-y-4" aria-label="Social media links">
          {socials.map((item) => (
            <motion.a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="flex justify-between md:w-40 items-center gap-2 hover:gap-4 transition-all hover:text-gray-300 text-sm md:text-base"
              aria-label={`Visit our ${item.name} page`}
            >
              {item.name} <MdOutlineArrowOutward aria-hidden="true" />
            </motion.a>
          ))}
        </nav>
      </div>

      <div className="mt-12 md:mt-20">
        <motion.p
          className="text-xs md:text-sm text-gray-500 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {t.footer.copyright}
        </motion.p>
      </div>
    </footer>
  );
}
