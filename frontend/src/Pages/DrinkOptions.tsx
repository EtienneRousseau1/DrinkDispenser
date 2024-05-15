import React from 'react';
import '../index.css';
import Juice from '../images/Juice.png';
import Water from '../images/Water.png';
import Soda from '../images/Soda.png';
import Coffee from '../images/Coffee.png';
import { useNavigate } from 'react-router-dom';
import { useDrink } from './DrinkContext';

const drinks = [
  { src: Water, alt: 'Water', title: 'Water' },
  { src: Juice, alt: 'Juice', title: 'Juice' },
  { src: Soda, alt: 'Soda', title: 'Soda' },
  { src: Coffee, alt: 'Coffee', title: 'Coffee' },
];

const DrinkOption: React.FC = () => {
  const navigate = useNavigate();
  const { setSelectedDrink } = useDrink();

  const handleDrinkSelect = (drink: string) => {
    setSelectedDrink(drink);
    navigate('/drinkPercentage');
  };

  return (
    <div>
      <div>
        <h1 className="text-3xl">Step one:</h1>
        <h2 className="text-xl text-slate-400 text-left">Choose which drink you would like (Select one)</h2>
      </div>
      <div className="flex space-x-4">
        {drinks.map((drink, index) => (
          <div key={index} onClick={() => handleDrinkSelect(drink.title)} className="cursor-pointer">
            <img className="h-48 w-48 rounded-lg" src={drink.src} alt={drink.alt} />
            <div>
              <h2 className="text-center">{drink.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkOption;
