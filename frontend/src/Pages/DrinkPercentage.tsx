import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrink } from './DrinkContext';
import '../index.css';

const DrinkPercentage: React.FC = () => {
  const { selectedDrink, addSelectedDrink } = useDrink();
  const [selectedPercentage, setSelectedPercentage] = useState<number>(0);
  const navigate = useNavigate();

  const handleSelectPercentage = (percentage: number) => {
    const success = addSelectedDrink({ name: selectedDrink, percentage });
    if (success) {
      setSelectedPercentage(percentage); // Update the selected percentage
      navigate('/');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen font-sans">
      <div className="p-4 text-center">
        <h2 className="text-5xl font-bold mb-4">Please choose your desired volume</h2>
        <p className="text-3xl mt-4">Don't overfill! </p>
        <div className="mt-4">
          <div className="mb-4">
            <p className="text-3xl mt-4">Your Selected Drink: <span className="text-3xl mt-4 text-black-500 font-bold">{selectedDrink}</span></p>
          </div>
          <div className="flex justify-center space-x-4">
            {[25, 50, 75, 100].map(percentage => (
              <button
                key={percentage}
                className={`px-4 py-2 border rounded ${selectedPercentage === percentage ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
                onClick={() => handleSelectPercentage(percentage)}
              >
                {percentage}%
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkPercentage;
