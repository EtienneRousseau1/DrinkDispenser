import React from 'react';
import '../index.css';
import Juice from '../images/Juice.png';
import Water from '../images/Water.png';
import Soda from '../images/Soda.png';
import Coffee from '../images/Coffee.png';
import Option from '../Components/Option';

const drinks = [
  { src: Water, alt: 'Water', title: 'Water', description: 'Fresh and clean water to quench your thirst.' },
  { src: Juice, alt: 'Juice', title: 'Juice', description: 'Delicious and healthy fruit juice.' },
  { src: Soda, alt: 'Soda', title: 'Soda', description: 'Bubbly and refreshing soda.' },
  { src: Coffee, alt: 'Coffee', title: 'Coffee', description: 'Rich and aromatic coffee to energize your day.' },
];

const DrinkOption: React.FC = () => {
  return (
    <div>
      <div>
        <h1 className="text-3xl">Step one:</h1>
        <h2 className="text-xl text-slate-400 text-left">Choose which drink you would like (Select one)</h2>
      </div>
      <Option drinks={drinks} />
    </div>
  );
}

export default DrinkOption;

