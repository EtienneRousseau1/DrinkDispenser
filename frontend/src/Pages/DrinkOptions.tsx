
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
    title: 'Matty Ice', 
    drinks: [ 
      { name: 'Water', percentage: 100 },  
    ],
    src: Lemonade // Add appropriate image for each preset
  },
  { 
    title: 'Keshav Kombo', 
    drinks: [ 
      { name: 'Apple Juice', percentage: 10 }, 
      { name: 'Cran', percentage: 10 },
      { name: 'Lemonade', percentage: 10 },
      { name: 'Water', percentage: 70 }
    ],
    src: Cran // Add appropriate image for each preset
  },
  { 
    title: 'Sour Lauren', 
    drinks: [ 
      { name: 'Cran', percentage: 25 }, 
      { name: 'Lemonade', percentage: 75 } 
    ],
    src: Apple // Add appropriate image for each preset
  },
  { 
    title: 'Lil Maxies', 
    drinks: [ 
      { name: 'Apple Juice', percentage: 30 }, 
      { name: 'Cran', percentage: 30 },
      { name: 'Lemonade', percentage: 40 } 
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

