

import React, { createContext, useContext, useState, ReactNode, useMemo } from 'react';

interface AppContextType {
  showLandingPage: boolean;
  setShowLandingPage: (show: boolean) => void;
  showInstructionsModal: boolean;
  setShowInstructionsModal: (show: boolean) => void;

}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [showInstructionsModal, setShowInstructionsModal] = useState(true);

  const value = useMemo(() => ({
    showLandingPage,
    setShowLandingPage,
    showInstructionsModal,
    setShowInstructionsModal,
  }), [
    showLandingPage,
    setShowLandingPage,
    showInstructionsModal,
    setShowInstructionsModal,
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
