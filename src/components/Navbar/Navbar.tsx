import { Mail, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../translations";
import { ContactPopup } from "../ContactPopup/ContactPopup";

export function Navbar() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  return (
    <div className="flex justify-center relative">
      <div className="flex fixed container p-4 w-full items-center justify-between h-16 md:h-20 rounded-3xl bg-transparent z-50 backdrop-blur bg-blend-difference">
        <NavLink
          className="text-xl md:text-2xl font-black cursor-pointer"
          to="/"
        >
          BLACKSEA
        </NavLink>

        <div className="flex items-center gap-2">
          {/* Contact Button */}
          <button
            className="p-2.5 md:p-3 bg-black text-white rounded-full cursor-pointer hover:scale-105 transition-transform"
            onClick={() => setIsContactOpen(true)}
            aria-label="Contact"
          >
            <Mail size={20} className="md:w-5 md:h-5" />
          </button>

          {/* Burger Menu Button */}
          <button
            className="p-2.5 md:p-3 bg-gray-200 text-black rounded-full cursor-pointer hover:scale-105 hover:bg-gray-300 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X size={20} className="md:w-5 md:h-5" />
            ) : (
              <Menu size={20} className="md:w-5 md:h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Fullscreen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-col items-center gap-16">
              {/* Navigation */}
              <nav>
                <ul className="flex flex-col gap-8 text-center">
                  <motion.li
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <NavLink
                      to="/"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors"
                    >
                      {t.common.home}
                    </NavLink>
                  </motion.li>
                  <motion.li
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <NavLink
                      to="/works"
                      onClick={() => setIsMenuOpen(false)}
                      className="text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors"
                    >
                      {t.nav.works}
                    </NavLink>
                  </motion.li>
                </ul>
              </nav>

              {/* Language Switcher */}
              <motion.div
                className="flex gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <button
                  onClick={() => setLanguage(Language.FR)}
                  className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all cursor-pointer shadow-lg ${
                    language === Language.FR
                      ? "bg-black text-white scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  🇫🇷 FR
                </button>
                <button
                  onClick={() => setLanguage(Language.EN)}
                  className={`px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold transition-all cursor-pointer shadow-lg ${
                    language === Language.EN
                      ? "bg-black text-white scale-105"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  🇬🇧 EN
                </button>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={() => setIsMenuOpen(false)}
                className="p-3 bg-black text-white rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg"
                aria-label="Close menu"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <X size={24} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contact Popup */}
      <ContactPopup
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
