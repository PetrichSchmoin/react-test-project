import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationsEN from 'translations/en.json';

const translations = {
  en: {
    translation: translationsEN,
  },
};

const options = {
  resources: translations,
  lng: 'en',
  keySeparator: '.',

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
};

i18n.use(initReactI18next).init(options);

export default i18n;
