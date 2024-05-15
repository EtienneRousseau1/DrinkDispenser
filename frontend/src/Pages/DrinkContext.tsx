import React, { createContext, useState, ReactNode, useContext } from 'react';

interface SelectedDrink {
  name: string;
  percentage: number;
}

interface DrinkContextProps {
  selectedDrinks: SelectedDrink[];
  selectedDrink: string;
  setSelectedDrink: React.Dispatch<React.SetStateAction<string>>;
  addSelectedDrink: (drink: SelectedDrink) => boolean;
}

const DrinkContext = createContext<DrinkContextProps | undefined>(undefined);

export const DrinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedDrinks, setSelectedDrinks] = useState<SelectedDrink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<string>('Coffee');

  const addSelectedDrink = (drink: SelectedDrink) => {
    const totalPercentage = selectedDrinks.reduce((acc, curr) => acc + curr.percentage, 0) + drink.percentage;
    if (totalPercentage > 100) {
      alert("Total percentage cannot exceed 100%");
      return false;
    }
    setSelectedDrinks((prevDrinks) => [...prevDrinks, drink]);
    return true;
  };

  return (
    <DrinkContext.Provider value={{ selectedDrinks, selectedDrink, setSelectedDrink, addSelectedDrink }}>
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
