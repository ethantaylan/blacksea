import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useLanguageStore } from "../../stores/languageStore";
import { ContactForm } from "./ContactForm";
import { SocialLinks } from "./SocialLinks";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const { t } = useLanguageStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup */}
          <motion.div
            className="fixed left-4 right-4 top-4 bottom-4 md:left-auto md:right-4 md:top-4 md:bottom-4 w-auto md:w-full md:max-w-md bg-black text-white rounded-3xl p-6 md:p-8 z-50 overflow-y-auto"
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
              aria-label="Fermer"
            >
              <X size={20} className="md:w-6 md:h-6" />
            </button>

            {/* Header */}
            <div className="mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                {t.contact.title}
              </h2>
              <p className="text-sm md:text-base text-gray-400">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Form */}
            <ContactForm onSuccess={onClose} />

            {/* Divider */}
            <div className="relative my-8 md:my-10">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-neutral-800"></div>
              </div>
              <div className="relative flex justify-center text-xs md:text-sm">
                <span className="bg-black px-4 md:px-6 text-gray-500 uppercase tracking-wider font-medium">
                  {t.contact.joinUs}
                </span>
              </div>
            </div>

            {/* Social Links */}
            <SocialLinks />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
