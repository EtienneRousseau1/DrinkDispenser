import React from 'react';
import { useDrink } from './DrinkContext';
import Apple from '../images/Apple.png';
import Water from '../images/Water.png';
import Lemonade from '../images/Lemonade.png';
import Cran from '../images/Cran.png';
import Option from '../Components/Option';
import SelectedDrinks from '../Components/SelectedDrinks';
import PresetOptions from '../Components/PresetOptions';
import Matty from '../images/Matty Ice.png';
import Keshav from '../images/Keshav.png';
import Lauren from '../images/Lauren.png';
import Baymax from '../images/baymax.png';

const drinks = [
  { src: Water, alt: 'Water', title: 'Water' },
  { src: Apple, alt: 'Apple Juice', title: 'Apple Juice' },
  { src: Cran, alt: 'Cran', title: 'Cranberry Juice' },
  { src: Lemonade, alt: 'Lemonade', title: 'Lemonade' },
];

const presets = [
  { 
    title: 'Matty Ice', 
    drinks: [ 
      { name: 'Water', percentage: 100 },  
    ],
    src: Matty
  },
  { 
    title: 'Keshav Kombo', 
    drinks: [ 
      { name: 'Apple Juice', percentage: 10 }, 
      { name: 'Cran', percentage: 10 },
      { name: 'Lemonade', percentage: 10 },
      { name: 'Water', percentage: 70 }
    ],
    src: Keshav
  },
  { 
    title: 'Sour Lauren', 
    drinks: [ 
      { name: 'Cran', percentage: 25 }, 
      { name: 'Lemonade', percentage: 75 } 
    ],
    src: Lauren
  },
  { 
    title: 'Lil Maxies', 
    drinks: [ 
      { name: 'Apple Juice', percentage: 30 }, 
      { name: 'Cran', percentage: 30 },
      { name: 'Lemonade', percentage: 40 } 
    ],
    src: Baymax
  },
];

const DrinkOptions: React.FC = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-8 mx-8">
      <div className="w-full max-w-4xl text-center">
        <header className="text-3xl pb-4 font-semibold font-body text-duen-plum">Discover Our Signature Blends!</header>
        <PresetOptions presets={presets} />
      </div>
      <div className="w-full max-w-4xl text-center">
        <header className="text-3xl pb-4 font-semibold font-body text-duen-plum">Create Your Own!</header>
        <Option drinks={drinks} />
      </div>
      <div className="w-full max-w-4xl text-center">
        <SelectedDrinks />
      </div>
    </div>
  );
}

export default DrinkOptions;

