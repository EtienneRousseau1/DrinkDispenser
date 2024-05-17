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
  removeDrink: (name: string) => void;
  totalPercentage: number;
}

const DrinkContext = createContext<DrinkContextProps | undefined>(undefined);

export const DrinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedDrinks, setSelectedDrinks] = useState<SelectedDrink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<string>('Coffee');

  const totalPercentage = selectedDrinks.reduce((acc, curr) => acc + curr.percentage, 0);

  const addSelectedDrink = (drink: SelectedDrink) => {
    if (totalPercentage + drink.percentage > 100) {
      alert("Total percentage cannot exceed 100%");
      return false;
    }
    setSelectedDrinks((prevDrinks) => [...prevDrinks, drink]);
    return true;
  };

  const removeDrink = (name: string) => {
    setSelectedDrinks((prevDrinks) => prevDrinks.filter(drink => drink.name !== name));
  };

  return (
    <DrinkContext.Provider value={{ selectedDrinks, selectedDrink, setSelectedDrink, addSelectedDrink, removeDrink, totalPercentage }}>
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
