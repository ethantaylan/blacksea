import { motion } from 'framer-motion';
import { useContactForm } from '../../hooks/useContactForm';
import { useLanguageStore } from '../../stores/languageStore';

interface ContactFormProps {
  onSuccess: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const { t } = useLanguageStore();
  const { formData, errors, isSubmitting, handleChange, handleSubmit } =
    useContactForm(onSuccess);

  return (
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
          className={`w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base bg-neutral-900 border rounded-xl focus:outline-none transition-colors text-white ${
            errors.name
              ? 'border-red-500 focus:border-red-500'
              : 'border-neutral-800 focus:border-white'
          }`}
        />
        {errors.name && (
          <p className="mt-1 text-xs md:text-sm text-red-500">{errors.name}</p>
        )}
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
          className={`w-full px-3 py-2.5 md:px-4 md:py-3 text-sm md:text-base bg-neutral-900 border rounded-xl focus:outline-none transition-colors text-white ${
            errors.email
              ? 'border-red-500 focus:border-red-500'
              : 'border-neutral-800 focus:border-white'
          }`}
        />
        {errors.email && (
          <p className="mt-1 text-xs md:text-sm text-red-500">{errors.email}</p>
        )}
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
          rows={5}
          className={`w-full px-4 py-3 bg-neutral-900 border rounded-xl focus:outline-none transition-colors text-white resize-none ${
            errors.message
              ? 'border-red-500 focus:border-red-500'
              : 'border-neutral-800 focus:border-white'
          }`}
          placeholder={t.contact.messagePlaceholder}
        />
        {errors.message && (
          <p className="mt-1 text-xs md:text-sm text-red-500">
            {errors.message}
          </p>
        )}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full bg-white text-black font-semibold py-3 md:py-4 px-6 md:px-8 text-sm md:text-base rounded-xl transition-colors ${
          isSubmitting
            ? 'opacity-50 cursor-not-allowed'
            : 'hover:bg-gray-100 cursor-pointer'
        }`}
      >
        {isSubmitting ? 'Envoi en cours...' : t.contact.sendBtn}
      </motion.button>
    </form>
  );
}
