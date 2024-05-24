import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrink } from './DrinkContext'; // Ensure this import is correct

const DrinkPercentage: React.FC = () => {
  const { addSelectedDrink } = useDrink();
  const [selectedPercentage, setSelectedPercentage] = useState<number>(0);
  const navigate = useNavigate();

  const handlePercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPercentage(Number(event.target.value));
  };

  const handleSubmit = () => {
    const newDrink = { name: 'Selected Drink', percentage: selectedPercentage };
    addSelectedDrink(newDrink);
    navigate('/');
  };

  return (
    <div className="h-screen flex item-center justify-center gap-x-16 mx-8">
      <div className="m-auto">
        <header className="text-center text-5xl pb-8 font-semibold font-body text-duen-plum"> Set Drink Percentage </header>
        <div className="flex flex-col items-center">
          <input 
            type="number" 
            value={selectedPercentage} 
            onChange={handlePercentageChange} 
            className="p-2 border border-gray-300 rounded-md"
          />
          <button 
            onClick={handleSubmit} 
            className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300 mt-4'
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default DrinkPercentage;

