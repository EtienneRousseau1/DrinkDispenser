import React from 'react';
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

const Option: React.FC<OptionProps> = ({ drinks }) => {
  const navigate = useNavigate();
  const { totalPercentage } = useDrink();

  const handleDrinkClick = (drink: Drink) => {
    if (totalPercentage < 100) {
      navigate('/drinkPercentage', { state: { drink } });
    }
  };

  return (
    <div>
      <div className="flex justify-center gap-8">
        {drinks.map((drink, index) => (
          <div 
            key={index} 
            className={`cursor-pointer flex flex-col items-center ${totalPercentage >= 100 ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => handleDrinkClick(drink)}
          >
            <img 
              className="h-20 w-20 rounded-lg object-cover mb-2" 
              src={drink.src} 
              alt={drink.alt} 
            />
            <h2 className="text-center font-body">{drink.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Option;

