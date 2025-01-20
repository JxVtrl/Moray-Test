import './main.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

export const initAPIMock = async () => {
  const { worker } = await import("./server/worker")
  await worker.start({
    onUnhandledRequest: "bypass",
  })
}

const initApplication = async () => {
  await initAPIMock()
  const rootElement = document.getElementById('root');
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } else {
    console.error("Root element not found");
  }
}

initApplication()
