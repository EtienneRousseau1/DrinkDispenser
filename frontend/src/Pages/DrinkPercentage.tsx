import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDrink } from './DrinkContext';

const DrinkPercentage: React.FC = () => {
  const { addSelectedDrink } = useDrink();
  const location = useLocation();
  const navigate = useNavigate();
  const drink = location.state?.drink;
  const [selectedPercentage, setSelectedPercentage] = useState<number>(10);

  const handlePercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setSelectedPercentage(value);
  };

  const handleSubmit = () => {
    if (drink && selectedPercentage > 0) {
      const newDrink = { name: drink.title, percentage: selectedPercentage };
      addSelectedDrink(newDrink);
      navigate('/drinkOption');
    }
  };

  const handleBack = () => {
    navigate('/drinkOption');
  };

  return (
    <div className="h-screen flex items-center justify-center gap-x-16 mx-8">
      <div className="m-auto">
        <header className="text-center text-5xl pb-8 font-semibold font-body text-duen-plum">Set Drink Percentage</header>
        <div className="flex flex-col items-center">
          <input 
            type="range" 
            value={selectedPercentage} 
            min={10}
            max={100}
            step={10}
            onChange={handlePercentageChange} 
            className="w-full"
          />
          <div className="w-full flex justify-between items-center mt-4">
            <span className="text-gray-600">10%</span>
            <span className="text-gray-600">{selectedPercentage}%</span>
            <span className="text-gray-600">100%</span>
          </div>
          <div className="flex justify-between mt-4 w-full">
            <button 
              onClick={handleBack}
              className='bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700 transition duration-300'
            >
              Back
            </button>
            <button 
              onClick={handleSubmit} 
              className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300'
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DrinkPercentage;

