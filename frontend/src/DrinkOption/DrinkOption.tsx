import React from 'react';
import './DrinkOption.css';
import Juice from '../images/Juice.png';
import Water from '../images/Water.png';
import Soda from '../images/Soda.png';
import Coffee from "../images/Coffee.png";
import Percentage25 from '../images/25.png';
import Percentage50 from '../images/50.png';
import Percentage75 from '../images/75.png';
import Percentage100 from '../images/100.png';

const drinks = [
  { src: Water, alt: 'Water', title: 'Water', description: 'Pure and simple water, essential for hydration and well-being.' },
  { src: Juice, alt: 'Juice', title: 'Juice', description: 'This is a refreshing juice, perfect for a healthy and tasty beverage option.' },
  { src: Soda, alt: 'Soda', title: 'Soda', description: 'A fizzy and refreshing drink to quench your thirst.' },
  { src: Coffee, alt: 'Coffee', title: 'Coffee', description: 'A rich and aromatic coffee, perfect for a quick energy boost.' },
];

const percentages = [
  { src: Percentage25, alt: '25%', label: '25%' },
  { src: Percentage50, alt: '50%', label: '50%' },
  { src: Percentage75, alt: '75%', label: '75%' },
  { src: Percentage100, alt: '100%', label: '100%' },
];

const DrinkOption: React.FC = () => {
  return (
    <div>
      <div className="header">
        <h1>Drinks</h1>
        <h2>Choose which you would like</h2>
      </div>
      <div className="carousel-container">
        {drinks.map((drink, index) => (
          <div key={index} className="carousel-item">
            <img src={drink.src} alt={drink.alt} className="drink-image" />
            <div className="drink-info">
              <h2>{drink.title}</h2>
              <p>{drink.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="header">
        <h1>Percentages</h1>
        <h2>How much liquid do you want?</h2>
      </div>
      <div className="percentages-container">
        {percentages.map((percentage, index) => (
          <div key={index} className="percentage-item">
            <div className="percentage-background"></div>
            <img src={percentage.src} alt={percentage.alt} className="percentage-image" />
            <div className="percentage-label">
              <p>{percentage.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DrinkOption;
