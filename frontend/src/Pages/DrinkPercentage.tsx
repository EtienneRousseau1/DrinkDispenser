import React, { useState } from 'react';
import { useDrink } from './DrinkContext';

const DrinkPercentage: React.FC = () => {
  const { selectedDrink } = useDrink();
  const [selectedPercentage, setSelectedPercentage] = useState<number>(0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Drink Select</h2>
      <p className="mt-2">Make sure you do not overfill!</p>
      <p className="mt-2 text-lg">This is the current selected drink!</p>
      <div className="mt-4">
        <div className="mb-4">
          <p>Your Selected Drink: <span className="font-bold">{selectedDrink}</span></p>
        </div>
        <div className="flex space-x-4">
          {[25, 50, 75, 100].map(percentage => (
            <button
              key={percentage}
              className={`px-4 py-2 border rounded ${selectedPercentage === percentage ? 'bg-blue-500 text-white' : 'bg-white text-black'}`}
              onClick={() => setSelectedPercentage(percentage)}
            >
              {percentage}%
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrinkPercentage;
