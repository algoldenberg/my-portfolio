import i18n from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'he'],
    debug: false,
    ns: ['header'], // добавляй сюда все свои namespace'ы
    defaultNS: 'home', // можно выбрать любой по умолчанию
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // ✅ путь с namespace
    },
  });

export default i18n;
