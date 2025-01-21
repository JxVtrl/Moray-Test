import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastProvider } from './context/ToastContext';

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
        <ToastProvider>
          <App />
        </ToastProvider>
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
}

initApplication()
