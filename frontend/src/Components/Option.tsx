import React from 'react';
import '../index.css';

interface Drink {
  src: string;
  alt: string;
  title: string;
}

interface OptionProps {
  drinks: Drink[];
}

const Option: React.FC<OptionProps> = ({drinks }) => {
  return (
  <div>
      <div className="flex">
        {drinks.map((drink, index) => (
          <div key={index}>
            <img className="h-20 w-20 rounded-lg" src={drink.src} alt={drink.alt} />
            <div>
              <h2 className="text-center">{drink.title}</h2>
            </div>
          </div>
        ))}
      </div>
 
    </div>
  );
}

export default Option;
