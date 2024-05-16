import React from 'react';
import Juice from '../images/Juice.png';
import Water from '../images/Water.png';
import Soda from '../images/Soda.png';
import Coffee from '../images/Coffee.png';
import Option from '../Components/Option';

const drinks = [
  { src: Water, alt: 'Water', title: 'Water' },
  { src: Juice, alt: 'Juice', title: 'Juice' },
  { src: Soda, alt: 'Soda', title: 'Soda' },
  { src: Coffee, alt: 'Coffee', title: 'Coffee' },
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

