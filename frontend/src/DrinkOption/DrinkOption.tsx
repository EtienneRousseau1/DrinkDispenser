import React from 'react';
import './DrinkOption.css';
import Juice from '../images/Juice.png';
import Water from '../images/Water.png';
import Soda from '../images/Soda.png';
import Coffee from "../images/Coffee.png";

const drinks = [
  { src: Juice, alt: 'Juice', title: 'Juice', description: 'This is a refreshing juice, perfect for a healthy and tasty beverage option.' },
  { src: Water, alt: 'Water', title: 'Water', description: 'Pure and simple water, essential for hydration and well-being.' },
  { src: Soda, alt: 'Soda', title: 'Soda', description: 'A fizzy and refreshing drink to quench your thirst.' },
  { src: Coffee, alt: 'Coffee', title: 'Coffee', description: 'A rich and aromatic coffee, perfect for a quick energy boost.' },
];

const DrinkOption: React.FC = () => {
  return (
    <div>
      <div >
        <h1>Drinks</h1>
        <br />
        <h5>Choose what drink you want</h5>
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
    </div>
  );
};

export default DrinkOption;
