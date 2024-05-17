import React, { useState } from 'react';
import { useDrink } from '../Pages/DrinkContext'; // Adjust the import path as necessary
import { Link } from 'react-router-dom';

const SelectedDrinks: React.FC = () => {
  const { selectedDrinks, totalPercentage } = useDrink();
  const [dispensing, setDispensing] = useState(false);

  const handleGoClick = () => {
    setDispensing(true);
    // Simulate drink dispensing process
    setTimeout(() => {
      setDispensing(false);
      alert('Drink dispensed!');
    }, 2000); // Dispense for 2 seconds
  };

  return (
    <div className='p-4 bg-white shadow-md rounded-lg'>
      <h2 className='text-xl font-semibold mb-4 font-body'>Selected Drinks</h2>
      {selectedDrinks.length > 0 ? (
        <>
          <ul>
            {selectedDrinks.map((drink, index) => (
              <li key={index} className='mb-2'>
                <span className='font-bold '>{drink.name}</span> - <span className='text-blue-600'>{drink.percentage}%</span>
              </li>
            ))}
          </ul>
          <div className='mt-4'>
            <p className='text-lg font-semibold'>Total Percentage: <span className='text-blue-600'>{totalPercentage}%</span></p>
          </div>
          <div className='mt-4'>
            <button 
              onClick={handleGoClick}
              className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700'
              disabled={dispensing}
            >
              {dispensing ? 'Dispensing drink currently...' : 'Go'}
            </button>
            <Link to="/remove" className='ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700'>
              Delete
            </Link>
          </div>
        </>
      ) : (
        <p>No drinks selected yet.</p>
      )}
    </div>
  );
};

export default SelectedDrinks;
