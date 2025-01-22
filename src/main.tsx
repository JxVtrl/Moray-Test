import './styles/global.css';
import './i18n';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastProvider, AppProvider } from './context';

export const initAPIMock = async () => {
  try {
    const { worker } = await import('./server/worker');
    await worker.start({
      onUnhandledRequest: 'bypass',
    });
    console.info('API mock inicializado com sucesso');
  } catch (error) {
    console.error('Falha ao iniciar o API mock:', error);
  }
};

const initApplication = async () => {
  await initAPIMock()
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <AppProvider>
          <ToastProvider>
            <App />
          </ToastProvider>
        </AppProvider>
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
}

initApplication()
