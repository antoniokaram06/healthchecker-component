import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from './locales/en/healthchecker.json' with { type: 'json' };
import esTranslations from './locales/es/healthchecker.json' with { type: 'json' };
import arTranslations from './locales/ar/healthchecker.json' with { type: 'json' };
import frTranslations from './locales/fr/healthchecker.json' with { type: 'json' };
import itTranslations from './locales/it/healthchecker.json' with { type: 'json' };
import plTranslations from './locales/pl/healthchecker.json' with { type: 'json' };
import zhTranslations from './locales/zh/healthchecker.json' with { type: 'json' };
import jaTranslations from './locales/ja/healthchecker.json' with { type: 'json' };
import ruTranslations from './locales/ru/healthchecker.json' with { type: 'json' };

console.log("enTranslations:", enTranslations);


i18n.use(initReactI18next).init({
  lng: 'en', // default language
  fallbackLng: 'en',
  ns: ['healthchecker'],
  defaultNS: 'healthchecker',
  debug: false,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
  resources: {
    en: { healthchecker: enTranslations },
    fr: { healthchecker: frTranslations },
    es: { healthchecker: esTranslations },
    ar: { healthchecker: arTranslations },
    ja: { healthchecker: jaTranslations },
    it: { healthchecker: itTranslations },
    ru: { healthchecker: ruTranslations },
    zh: { healthchecker: zhTranslations },
    pl: { healthchecker: plTranslations }

    // add other languages here
  },
});

console.log("Translate title:", i18n.t("title")); 

export default i18n;
