import { Globe } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { Language } from "../../translations";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <div className="relative">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-16 top-1/2 -translate-y-1/2 text-nowrap flex flex-col gap-1 bg-white rounded-2xl shadow-2xl border border-gray-200 p-2 min-w-[120px]"
            >
              <button
                onClick={() => handleLanguageChange(Language.FR)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  language === Language.FR
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                🇫🇷 Français
              </button>
              <button
                onClick={() => handleLanguageChange(Language.EN)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer ${
                  language === Language.EN
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                🇬🇧 English
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-white text-black rounded-full cursor-pointer hover:scale-105 hover:bg-black hover:text-white transition-all shadow-lg"
          aria-label="Change language"
        >
          <Globe size={20} />
        </button>
      </div>
    </div>
  );
}
