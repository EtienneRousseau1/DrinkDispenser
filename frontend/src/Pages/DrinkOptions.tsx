import React from 'react';
import '../index.css';
import Juice from '../images/Juice.png';
import Water from '../images/Water.png';
import Soda from '../images/Soda.png';
import Coffee from "../images/Coffee.png";

<head>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap');
  </style>
</head>

const drinks = [
  { src: Water, alt: 'Water', title: 'Water'},
  { src: Juice, alt: 'Juice', title: 'Juice'},
  { src: Soda, alt: 'Soda', title: 'Soda'},
  { src: Coffee, alt: 'Coffee', title: 'Coffee'},
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
        <h1 className="text-3xl">Step one:</h1>
        <h2 className="text-xl text-slate-400 text-left">Choose which drink you would like (Select one)</h2>
      </div>
      <div className="flex">
        {drinks.map((drink, index) => (
          <div key={index}>
            <img className="h-48 w-48 rounded-lg" src={drink.src} alt={drink.alt} />
            <div>
              <h2>{drink.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h1 className="text-3xl">Step two:</h1>
        <h2 className="text-xl text-slate-400 text-left">How much liquid do you want? (Select one)</h2>
      </div>
      <div className="flex"> 
        {percentages.map((percentage, index) => (
          <div key={index}>
            <img className="h-48 w-48 rounded-lg" src={percentage.src} alt={percentage.alt} />
            <div>
              <p className="text-center font-Lexend">{percentage.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkOption;
