import React, { createContext, useState, ReactNode, useContext } from 'react';

interface DrinkContextProps {
  selectedDrink: string;
  setSelectedDrink: React.Dispatch<React.SetStateAction<string>>;
}

const DrinkContext = createContext<DrinkContextProps | undefined>(undefined);

export const DrinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedDrink, setSelectedDrink] = useState<string>('Coffee');
  return (
    <DrinkContext.Provider value={{ selectedDrink, setSelectedDrink }}>
      {children}
    </DrinkContext.Provider>
  );
};

export const useDrink = (): DrinkContextProps => {
  const context = useContext(DrinkContext);
  if (!context) {
    throw new Error('useDrink must be used within a DrinkProvider');
  }
  return context;
};
