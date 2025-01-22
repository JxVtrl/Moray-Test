import React, { useState, useEffect } from 'react';
import { LandingPage, MapViewPage, LoadingPage } from './pages';
import { useApp } from './context';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const { showLandingPage } = useApp();
  const [showLoading, setShowLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  useEffect(() => {
    if (!showLandingPage) {
      setShowLoading(true);
      setTimeout(() => {
        setShowLoading(false);
        setShowMap(true);
      }, 4000); // Tempo da tela de loading antes de exibir o mapa
    }
  }, [showLandingPage]);


  // Animação de transição de tela
  const pageTransition = {
    initial: { opacity: 0, x: '-100%' },
    animate: { opacity: 1, x: '0%' },
    exit: { opacity: 0, x: '100%' },
    transition: { duration: 0.8, ease: 'easeInOut' },
  };

  return (
    <AnimatePresence mode="wait">
      {showLandingPage && (
        <motion.div key="landing" {...pageTransition}>
          <LandingPage />
        </motion.div>
      )}
      {showLoading && (
        <motion.div key="loading" {...pageTransition}>
          <LoadingPage />
        </motion.div>
      )}
      {showMap && (
        <motion.div key="map" {...pageTransition}>
          <MapViewPage />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default App;
