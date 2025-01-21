import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ToastContextType {
  clickedAreaPopulation: any[] | null;
  showToast: (populationData: any[]) => void;
  hideToast: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [clickedAreaPopulation, setClickedAreaPopulation] = useState<any[] | null>(null);

  const showToast = (populationData: any[]) => {
    setClickedAreaPopulation(populationData);
  };

  const hideToast = () => {
    setClickedAreaPopulation(null);
  };

  return (
    <ToastContext.Provider value={{ clickedAreaPopulation, showToast, hideToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextType => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
