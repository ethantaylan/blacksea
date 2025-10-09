import { AnimatePresence, motion } from "framer-motion";
import { Instagram, Linkedin, Twitter, X } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-gray-400"
                >
                  {t.contact.fullName}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base bg-neutral-900 border border-neutral-800 rounded-xl focus:outline-none focus:border-white transition-colors text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-gray-400"
                >
                  {t.contact.email}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base bg-neutral-900 border border-neutral-800 rounded-xl focus:outline-none focus:border-white transition-colors text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2 text-gray-400"
                >
                  {t.contact.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-xl focus:outline-none focus:border-white transition-colors text-white resize-none"
                  placeholder={t.contact.messagePlaceholder}
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-white text-black font-semibold py-3 md:py-4 px-6 md:px-8 text-sm md:text-base rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
              >
                {t.contact.sendBtn}
              </motion.button>
            </form>

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
            <div className="space-y-4">
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 md:p-5 bg-gradient-to-r from-neutral-900 to-neutral-900/50 hover:from-pink-950/20 hover:to-neutral-900 border border-neutral-800 hover:border-pink-500/30 rounded-xl transition-all cursor-pointer group"
                aria-label="Instagram"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 md:p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg group-hover:shadow-lg group-hover:shadow-pink-500/30 transition-all">
                    <Instagram size={20} className="md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-white">Instagram</p>
                    <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300">@blacksea_agency</p>
                  </div>
                </div>
                <motion.div
                  className="text-gray-600 group-hover:text-pink-400"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.div>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 md:p-5 bg-gradient-to-r from-neutral-900 to-neutral-900/50 hover:from-blue-950/20 hover:to-neutral-900 border border-neutral-800 hover:border-blue-500/30 rounded-xl transition-all cursor-pointer group"
                aria-label="LinkedIn"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 md:p-3 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg group-hover:shadow-lg group-hover:shadow-blue-500/30 transition-all">
                    <Linkedin size={20} className="md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-white">LinkedIn</p>
                    <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300">BlackSea Agency</p>
                  </div>
                </div>
                <motion.div
                  className="text-gray-600 group-hover:text-blue-400"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.div>
              </motion.a>

              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, x: 4 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center justify-between p-4 md:p-5 bg-gradient-to-r from-neutral-900 to-neutral-900/50 hover:from-sky-950/20 hover:to-neutral-900 border border-neutral-800 hover:border-sky-500/30 rounded-xl transition-all cursor-pointer group"
                aria-label="Twitter"
              >
                <div className="flex items-center gap-4">
                  <div className="p-2.5 md:p-3 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg group-hover:shadow-lg group-hover:shadow-sky-500/30 transition-all">
                    <Twitter size={20} className="md:w-5 md:h-5 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-white">Twitter</p>
                    <p className="text-xs md:text-sm text-gray-400 group-hover:text-gray-300">@blacksea_agency</p>
                  </div>
                </div>
                <motion.div
                  className="text-gray-600 group-hover:text-sky-400"
                  whileHover={{ x: 4 }}
                >
                  →
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
