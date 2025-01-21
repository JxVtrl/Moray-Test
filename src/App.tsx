import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import MapView from './pages/MapViewPage';

const App: React.FC = () => {
  const [showLandingPage, setShowLandingPage] = useState(true);

  return (
    <>
      {showLandingPage ? (
        <LandingPage onEnter={() => setShowLandingPage(false)} />
      ) : (
        <MapView />
      )}
    </>
  );
};

export default App;
