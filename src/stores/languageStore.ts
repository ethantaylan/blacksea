import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { en, fr, Language, Translations } from '../translations';

const translations: Record<Language, Translations> = {
  [Language.FR]: fr,
  [Language.EN]: en,
};

interface LanguageState {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      language: Language.FR,
      t: translations[Language.FR],
      setLanguage: (lang: Language) => {
        set({ language: lang, t: translations[lang] });
        // Update HTML lang attribute for accessibility and SEO
        document.documentElement.lang = lang === Language.FR ? 'fr' : 'en';
      },
    }),
    {
      name: 'blacksea-language',
    }
  )
);
