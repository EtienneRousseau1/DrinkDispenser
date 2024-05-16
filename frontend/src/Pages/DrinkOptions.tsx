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

const DrinkOptions: React.FC = () => {
  return (
    <div className="h-screen flex item-center justify-center">
      <div className="m-auto">
        <header className="text-center text-xl"> Please select a drink </header>
        <Option drinks={drinks} />
      </div>
    </div>
  );
}

export default DrinkOptions;

