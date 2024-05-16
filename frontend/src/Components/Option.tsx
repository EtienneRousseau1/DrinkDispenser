import React from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useDrink } from '../Pages/DrinkContext';

interface Drink {
  src: string;
  alt: string;
  title: string;
}

  interface OptionProps {
  drinks: Drink[];
}

const Option: React.FC<OptionProps> = ({drinks }) => {
  const navigate = useNavigate();
  const { setSelectedDrink } = useDrink();

  const handleDrinkSelect = (drink: string) => {
    setSelectedDrink(drink);
    navigate('/drinkPercentage');
  }

  return (
    <div>
      <div className="flex">
        {drinks.map((drink, index) => (
        <div key={index} onClick={() => handleDrinkSelect(drink.title)} className="cursor-pointer">
            <img className="h-20 w-20 rounded-lg" src={drink.src} alt={drink.alt} />
            <div>
              <h2 className="text-center">{drink.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Option;
