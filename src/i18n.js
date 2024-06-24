import { createI18n } from 'vue-i18n';

import en from '../locales/en.json';
import es from '../locales/es.json';
import pt from '../locales/pt.json';

const messages = {
  en,
  es,
  pt
};

const i18n = createI18n({
  locale: localStorage.getItem('locale') || 'en', 
  legacy: false,
  fallbackLocale: 'en',
  messages
});

export default i18n;
