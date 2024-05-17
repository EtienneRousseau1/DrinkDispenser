import React, { useState } from 'react';
import '../index.css';
import { useNavigate } from 'react-router-dom';
import { useDrink } from '../Pages/DrinkContext';

interface Drink {
  src: string;
  alt: string;
  title: string;
}

  interface OptionProps {
  drinks: Drink[];
}

const Option: React.FC<OptionProps> = ({drinks }) => {
  const navigate = useNavigate();
  const [personalSelectedDrink, setPersonalSelectedDrink] = useState("");
  const { setSelectedDrink, totalPercentage } = useDrink();

  const handleDrinkSelect = (drink: string) => {
    setSelectedDrink(drink);
    setPersonalSelectedDrink(drink)
  }

  const goToNewPage = () => {
    navigate("/drinkPercentage");
  }

  return (
    <div>
      <div className="flex px-16 gap-8">
        {drinks.map((drink, index) => (
        <div key={index} onClick={() => handleDrinkSelect(drink.title)} className={`cursor-pointer ${totalPercentage >= 100 ? 'opacity-50 cursor-not-allowed' : ''}`}>
            <img className="h-20 w-20 rounded-lg" src={drink.src} alt={drink.alt} />
            <div>
              <h2 className="text-center font-body">{drink.title}</h2>
            </div>
          </div>
        ))}
         </div>
         <div className='flex justify-center items-center p-4'>
  {personalSelectedDrink ? (
    <div>
      <p className='text-lg font-semibold mb-2'>Your Selected Drink:</p>
      <p className='text-blue-600 font-bold mb-4'>{personalSelectedDrink}</p>
      <button 
        onClick={goToNewPage} 
        className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'
      >
        Select
      </button>
    </div>
  ) : null}
</div>
      

    </div>
  );
}

export default Option;
