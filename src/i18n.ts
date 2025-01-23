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
    fallbackLng: 'pt', // Idioma padrão caso o detectado não tenha tradução
    debug: import.meta.env.VITE_APP_ENV === 'development', // Ativa logs no modo dev
     detection: {
      order: ['localStorage', 'cookie', 'navigator', 'htmlTag'], // Ordem de detecção
      caches: ['localStorage', 'cookie'], // Salva a seleção do usuário
    },
    interpolation: {
      escapeValue: false, // React já protege contra XSS, não precisa escapar
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Caminho dos arquivos de tradução
    },
  });

export default i18n;
