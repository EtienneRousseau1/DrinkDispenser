import React, { useState } from 'react';
import { useDrink } from '../Pages/DrinkContext'; // Adjust the import path as necessary
import { Link } from 'react-router-dom';


const SelectedDrinks: React.FC = () => {
  const ipAddress = "192.168.1.50";
  const DISPENSING_FACTOR = 10000;
  const { selectedDrinks, totalPercentage } = useDrink();
  const [dispensing, setDispensing] = useState(false);
  const [id, setId] = useState(1);

  const openValve = async (valveNum: number, duration: number, id: number) => {
    const url = `http://${ipAddress}/dispenseDrink/${valveNum}${id}${duration.toString().padStart(4, '0')}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      if (response.ok) {
        console.log('Valve opened successfully');
      } else {
        console.error('Failed to open valve');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  // Send HTTP request here
  const handleGoClick = async () => {
    setDispensing(true);
    
    for (let index = 0; index < selectedDrinks.length; index++) {
      const drink = selectedDrinks[index];
      const valveNum = index; 
      const duration = Math.round((drink.percentage / totalPercentage) * DISPENSING_FACTOR); 
      const currentId = id + index; // Use the index to ensure unique id for each request

      await openValve(valveNum, duration, currentId);
      setId(prevId => prevId + 1);
    }
  
    // Adjust the timeout to match the duration
    setTimeout(() => {
      setDispensing(false);
      alert('Drink dispensed!');
    }, DISPENSING_FACTOR * 100); // Convert tenths of a second to milliseconds
  };

  return (
    <div className='p-4 bg-white shadow-md rounded-lg mx-8'>
      <h2 className='text-xl font-semibold mb-4 font-body'>Selected Drinks</h2>
      {selectedDrinks.length > 0 ? (
        <>
          <ul>
            {selectedDrinks.map((drink, index) => (
              <li key={index} className='mb-2'>
                <span className='font-bold font-body'>{drink.name}</span> - <span className='text-blue-600'>{drink.percentage}%</span>
              </li>
            ))}
          </ul>
          <div className='mt-4'>
            <p className='text-lg font-semibold font-body'>Total Percentage: <span className='text-blue-600'>{totalPercentage}%</span></p>
          </div>
          <div className='mt-4'>
            <button 
              onClick={handleGoClick}
              className={`px-4 py-2 rounded ${dispensing ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
              disabled={dispensing}
            >
              {dispensing ? 'Dispensing drink currently...' : 'Go'}
            </button>
         
            <Link to="/remove" className='ml-4 px-4 py-2 rounded' style={{ backgroundColor: '#ef4444', color: '#ffffff',  }}>
              Delete
            </Link>
          </div>
        </>
      ) : (
        <p className='font-body'>No drinks selected yet.</p>
      )}
    </div>
  );
};

export default SelectedDrinks;
