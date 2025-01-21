import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ToastContextType {
  clickedAreaPopulation: any[] | null;
  setClickedAreaPopulation: (populationData: any[] | null) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [clickedAreaPopulation, setClickedAreaPopulation] = useState<any[] | null>(null);

  return (
    <ToastContext.Provider value={{ clickedAreaPopulation, setClickedAreaPopulation }}>
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
