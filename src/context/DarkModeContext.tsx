// src/context/DarkModeContext.tsx

import React, { createContext, useState, ReactNode, useContext } from 'react';

// Context to hold dark mode state
interface DarkModeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

// Props for the provider to include children
interface DarkModeProviderProps {
  children: ReactNode;
}

// Create the context with undefined as the default value
const DarkModeContext = createContext<DarkModeContextType | undefined>(undefined);

export const DarkModeProvider: React.FC<DarkModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false); // Default is light mode

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = (): DarkModeContextType => {
  const context = useContext(DarkModeContext);
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};