
import React from 'react';
import { useDrink } from './DrinkContext';
import Apple from '../images/Apple.png';
import Water from '../images/Water.png';
import Lemonade from '../images/Lemonade.png';
import Cran from '../images/Cran.png';
import Option from '../Components/Option';
import SelectedDrinks from '../Components/SelectedDrinks';
import PresetOptions from '../Components/PresetOptions';

const drinks = [
  { src: Water, alt: 'Water', title: 'Water' },
  { src: Apple, alt: 'Apple Juice', title: 'Apple Juice' },
  { src: Cran, alt: 'Cran', title: 'Cran' },
  { src: Lemonade, alt: 'Lemonade', title: 'Lemonade' },
];

const presets = [
  { 
    title: 'Watery Lemonade', 
    drinks: [ 
      { name: 'Water', percentage: 50 }, 
      { name: 'Lemonade', percentage: 50 } 
    ],
    src: Lemonade // Add appropriate image for each preset
  },
  { 
    title: 'Cran Apple', 
    drinks: [ 
      { name: 'Apple Juice', percentage: 30 }, 
      { name: 'Cran', percentage: 70 } 
    ],
    src: Cran // Add appropriate image for each preset
  },
  { 
    title: 'Lemony Apple', 
    drinks: [ 
      { name: 'Apple Juice', percentage: 40 }, 
      { name: 'Lemonade', percentage: 60 } 
    ],
    src: Apple // Add appropriate image for each preset
  },
  { 
    title: 'Cran Water', 
    drinks: [ 
      { name: 'Water', percentage: 50 }, 
      { name: 'Cran Juice', percentage: 50 } 
    ],
    src: Water // Add appropriate image for each preset
  },
];

const DrinkOptions: React.FC = () => {
  return (
    <div className="h-screen flex item-center justify-center gap-x-16 mx-8">
      <div className="m-auto">
        <header className="text-center text-5xl pb-8 font-semibold font-body text-duen-plum"> Please select a drink </header>
        <Option drinks={drinks} />
        <div className="h-4" />
        <PresetOptions presets={presets} />
        <SelectedDrinks />
      </div>
    </div>
  );
}

export default DrinkOptions;

