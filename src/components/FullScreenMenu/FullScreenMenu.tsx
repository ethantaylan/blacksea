import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useLanguageStore } from "../../stores/languageStore";
import { Language } from "../../translations";

interface FullScreenMenuProps {
  isMenuOpen: boolean;
  onNavigation: () => void;
}

export const FullScreenMenu = ({
  isMenuOpen,
  onNavigation,
}: FullScreenMenuProps) => {
  const { t, language, setLanguage } = useLanguageStore();

  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-50 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Navigation - Center */}
          <div className="flex-1 flex items-center justify-center">
            <nav>
              <ul className="flex flex-col gap-8 text-center">
                <motion.li
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <NavLink
                    to="/"
                    onClick={onNavigation}
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
                    onClick={onNavigation}
                    className="text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors"
                  >
                    {t.nav.works}
                  </NavLink>
                </motion.li>
                <motion.li
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <NavLink
                    to="/about"
                    onClick={onNavigation}
                    className="text-5xl md:text-7xl font-bold hover:text-gray-400 transition-colors"
                  >
                    {t.nav.about}
                  </NavLink>
                </motion.li>
              </ul>

              <div className="mt-16 flex justify-center md:riht-8">
                <motion.button
                  onClick={onNavigation}
                  className="p-3 bg-black text-white rounded-full cursor-pointer hover:scale-110 transition-transform shadow-lg"
                  aria-label="Close menu"
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  <X size={24} />
                </motion.button>
              </div>
            </nav>
            {/* Close Button - Top Right */}
          </div>

          {/* Language Switcher - Bottom Center */}
          <motion.div
            className="pb-8 md:pb-12 flex justify-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage(Language.FR)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all cursor-pointer ${
                  language === Language.FR
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage(Language.EN)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all cursor-pointer ${
                  language === Language.EN
                    ? "bg-black text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                EN
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
