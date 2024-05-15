import React from 'react';
import './DrinkOption.css';
import Juice from '../images/Juice.png';
import Water from '../images/Water.png';
import Soda from '../images/Soda.png';
import Coffee from "../images/Coffee.png";

const drinks = [
  { src: Water, alt: 'Water', title: 'Water', description: 'Pure and simple water, essential for hydration and well-being.' },
  { src: Juice, alt: 'Juice', title: 'Juice', description: 'This is a refreshing juice, perfect for a healthy and tasty beverage option.' },
  { src: Soda, alt: 'Soda', title: 'Soda', description: 'A fizzy and refreshing drink to quench your thirst.' },
  { src: Coffee, alt: 'Coffee', title: 'Coffee', description: 'A rich and aromatic coffee, perfect for a quick energy boost.' },
];

const percentages = [
  { src: Water, alt: '25%', label: '25%' },
  { src: Juice, alt: '50%', label: '50%' },
  { src: Soda, alt: '75%', label: '75%' },
  { src: Coffee, alt: '100%', label: '100%' },
];

const DrinkOption: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl">Step One</h1>
        <h2 className="text-xl text-slate-400 text-left">Choose which you would like</h2>
      </div>
      <div className="flex">
        {drinks.map((drink, index) => (
          <div key={index}>
            <img className="h-48 w-48 rounded-lg" src={drink.src} alt={drink.alt} />
            <div>
              <h2>{drink.title}</h2>
              <p>{drink.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-3xl">Percentages</h1>
        <h2 className="text-xl text-slate-400 text-left">How much liquid do you want?</h2>
      </div>
      <div className="flex"> 
        {percentages.map((percentage, index) => (
          <div key={index}>
            <img className="h-48 w-48 rounded-lg" src={percentage.src} alt={percentage.alt} />
            <div>
              <p>{percentage.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkOption;
