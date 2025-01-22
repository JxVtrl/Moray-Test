import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// Configuração das traduções
i18n
  .use(Backend)  // Carrega arquivos JSON de tradução
  .use(LanguageDetector) // Detecta o idioma automaticamente
  .use(initReactI18next) // React binding
  .init({
    fallbackLng: 'en', // Idioma padrão caso o detectado não tenha tradução
    debug: import.meta.env.MODE === 'development', // Ativa logs no modo dev
    interpolation: {
      escapeValue: false, // React já protege contra XSS, não precisa escapar
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Caminho dos arquivos de tradução
    },
  });

export default i18n;
