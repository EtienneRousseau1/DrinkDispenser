import React from 'react';
import { useDrink } from '../Pages/DrinkContext'; // Adjust the import path as necessary
import { useNavigate } from 'react-router-dom';

const RemoveDrinks: React.FC = () => {
  const { selectedDrinks, removeDrink } = useDrink();
  const navigate = useNavigate();

  const handleRemove = (name: string) => {
    removeDrink(name);
  };

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className='p-4 bg-white shadow-md rounded-lg'>
      <h2 className='text-xl font-semibold mb-4'>Remove Drinks</h2>
      {selectedDrinks.length > 0 ? (
        <ul>
          {selectedDrinks.map((drink, index) => (
            <li key={index} className='mb-2'>
              <span className='font-bold'>{drink.name}</span> - 
              <button 
                onClick={() => handleRemove(drink.name)}
                className='ml-2 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-700'
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No drinks selected to remove.</p>
      )}
      <button 
        onClick={handleBack}
        className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
      >
        Back
      </button>
    </div>
  );
};

export default RemoveDrinks;
