import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ToastContextType {

  clickedArea: any | null;
  setClickedArea: (area: any | null) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [clickedArea, setClickedArea] = useState<any | null>(null);


  return (
    <ToastContext.Provider value={{
      clickedArea, setClickedArea
     }}>
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
