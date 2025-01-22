import React from 'react';
import { LandingPage, MapViewPage } from './pages';
import { useApp } from './context';

const App: React.FC = () => {
  const { showLandingPage } = useApp()
  return (
    <>
      {showLandingPage ? (
        <LandingPage />
      ) : (
        <MapViewPage />
      )}
    </>
  );
};

export default App;
