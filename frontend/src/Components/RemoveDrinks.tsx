import React, { useState } from 'react';
import { useDrink } from '../Pages/DrinkContext'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

const RemoveDrinks: React.FC = () => {
  const { selectedDrinks, removeDrink } = useDrink();
  const navigate = useNavigate();
  const [selectedToRemove, setSelectedToRemove] = useState<string[]>([]);

  const handleRemove = () => {
    selectedToRemove.forEach((drinkName) => removeDrink(drinkName));
    setSelectedToRemove([]);
  };

  const handleToggleSelect = (name: string) => {
    if (selectedToRemove.includes(name)) {
      setSelectedToRemove((prevSelected) => prevSelected.filter((item) => item !== name));
    } else {
      setSelectedToRemove((prevSelected) => [...prevSelected, name]);
    }
  };

  const handleBack = () => {
    navigate('/drinkOption');
  };

  return (
    <div className='h-screen flex items-center justify-center bg-gray-100'>
      <div className='p-6 bg-white shadow-md rounded-lg w-full max-w-md'>
        <h2 className='text-2xl font-semibold mb-4 text-center'>Remove Drinks</h2>
        {selectedDrinks.length > 0 ? (
          <>
            <ul>
              {selectedDrinks.map((drink, index) => (
                <li key={index} className='mb-2 flex justify-between items-center'>
                  <label className='flex items-center cursor-pointer'>
                    <input
                      type='checkbox'
                      onChange={() => handleToggleSelect(drink.name)}
                      className='mr-2 cursor-pointer'
                    />
                    <span className='font-bold'>{drink.name}</span>
                  </label>
                </li>
              ))}
            </ul>
            <div className='flex justify-between mt-4'>
              <button
                onClick={handleBack}
                className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
              >
                Back
              </button>
              <button
                onClick={handleRemove}
                className='px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'  style={{ backgroundColor: '#ef4444', color: '#ffffff' }}
              >
                Remove Selected
              </button>
            </div>
          </>
        ) : (
          <>
            <p className='text-center mb-4'>No drinks selected to remove.</p>
            <button
              onClick={handleBack}
              className='block mx-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
            >
              Back
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default RemoveDrinks;

