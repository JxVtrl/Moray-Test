

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface AppContextType {
  showLandingPage: boolean;
  setShowLandingPage: (show: boolean) => void;
  showInstructionsModal: boolean;
  setShowInstructionsModal: (show: boolean) => void;
  showLoading: boolean;
  setShowLoading: (show: boolean) => void;
  showMap: boolean;
  setShowMap: (show: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showInstructionsModal, setShowInstructionsModal] = useState(true);
 const [showLoading, setShowLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);
  
  const value = useMemo(() => ({
    showLandingPage,
    setShowLandingPage,
    showInstructionsModal,
    setShowInstructionsModal,
    showLoading,
    setShowLoading,
    showMap,
    setShowMap
  }), [
    showLandingPage,
    setShowLandingPage,
    showInstructionsModal,
    setShowInstructionsModal,
    showLoading,
    setShowLoading,
    showMap,
    setShowMap
  ]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within a AppProvider');
  }
  return context;
};
