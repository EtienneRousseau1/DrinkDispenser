import React, { createContext, useState, ReactNode, useContext } from 'react';

interface SelectedDrink {
  name: string;
  percentage: number;
}

interface DrinkContextProps {
  selectedDrinks: SelectedDrink[];
  setSelectedDrinks: React.Dispatch<React.SetStateAction<SelectedDrink[]>>;
  addSelectedDrink: (drink: SelectedDrink) => boolean;
  addPresetDrinks: (drinks: SelectedDrink[]) => void;
  removeDrink: (name: string) => void;
  clearAllDrinks: () => void;
  totalPercentage: number;
  cupVolume: number;
  setCupVolume: React.Dispatch<React.SetStateAction<number>>;
  selectedDrink: string;
  setSelectedDrink: React.Dispatch<React.SetStateAction<string>>;
}

const DrinkContext = createContext<DrinkContextProps | undefined>(undefined);

export const DrinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedDrinks, setSelectedDrinks] = useState<SelectedDrink[]>([]);
  const [selectedDrink, setSelectedDrink] = useState<string>('Coffee');
  const [cupVolume, setCupVolume] = useState<number>(100);

  const totalPercentage = selectedDrinks.reduce((acc, curr) => acc + curr.percentage, 0);

  const addSelectedDrink = (drink: SelectedDrink) => {
    if (totalPercentage + drink.percentage > 100) {
      alert("Total percentage cannot exceed 100%");
      return false;
    }
    setSelectedDrinks((prevDrinks) => [...prevDrinks, drink]);
    return true;
  };

  const addPresetDrinks = (drinks: SelectedDrink[]) => {
    const newTotalPercentage = drinks.reduce((acc, curr) => acc + curr.percentage, 0);
    if (totalPercentage + newTotalPercentage > 100) {
      alert("Total percentage cannot exceed 100%");
      return;
    }
    setSelectedDrinks((prevDrinks) => [...prevDrinks, ...drinks]);
  };

  const removeDrink = (name: string) => {
    setSelectedDrinks((prevDrinks) => prevDrinks.filter(drink => drink.name !== name));
  };

  const clearAllDrinks = () => {
    setSelectedDrinks([]);
  };

  return (
    <DrinkContext.Provider value={{ 
      selectedDrinks, 
      setSelectedDrinks, 
      addSelectedDrink, 
      addPresetDrinks,
      removeDrink, 
      clearAllDrinks, 
      totalPercentage, 
      cupVolume, 
      setCupVolume,
      selectedDrink,
      setSelectedDrink
    }}>
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

