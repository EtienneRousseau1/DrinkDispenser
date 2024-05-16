import React from 'react';
import { useDrink } from '../Pages/DrinkContext'; // Adjust the import path as necessary

const SelectedDrinks: React.FC = () => {
  const { selectedDrinks, totalPercentage } = useDrink();

  return (
    <div className='p-4 bg-white shadow-md rounded-lg'>
      <h2 className='text-xl font-semibold mb-4'>Selected Drinks</h2>
      {selectedDrinks.length > 0 ? (
        <ul>
          {selectedDrinks.map((drink, index) => (
            <li key={index} className='mb-2'>
              <span className='font-bold'>{drink.name}</span> - <span className='text-blue-600'>{drink.percentage}%</span>
            </li>
          ))}
        </ul>
      ) : (
        <p>No drinks selected yet.</p>
      )}
      <div className='mt-4'>
        <p className='text-lg font-semibold'>Total Percentage: <span className='text-blue-600'>{totalPercentage}%</span></p>
      </div>
    </div>
  );
};

export default SelectedDrinks;
