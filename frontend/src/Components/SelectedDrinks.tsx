import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrink } from '../Pages/DrinkContext';
import { Link } from 'react-router-dom';

const SelectedDrinks: React.FC = () => {
  const ipAddress = "192.168.1.50";
  const DISPENSING_FACTOR = 10000;
  const { selectedDrinks, totalPercentage, cupVolume } = useDrink();
  const [dispensing, setDispensing] = useState(false);
  const [id, setId] = useState(1);
  const navigate = useNavigate();

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

  const handleGoClick = async () => {
    setDispensing(true);

    for (let index = 0; index < selectedDrinks.length; index++) {
      const drink = selectedDrinks[index];
      const valveNum = index;
      const duration = Math.round((drink.percentage / totalPercentage) * (cupVolume / 100) * DISPENSING_FACTOR);
      const currentId = id + index;

      const calculatedVolume = (drink.percentage / 100) * cupVolume;
      console.log(`Drink: ${drink.name}, Percentage: ${drink.percentage}%, Calculated Volume: ${calculatedVolume.toFixed(2)}ml, Duration: ${duration}, Cup Volume: ${cupVolume}ml`);

      await openValve(valveNum, duration, currentId);
      setId(prevId => prevId + 1);
    }

    setTimeout(() => {
      setDispensing(false);
      alert('Drink dispensed!');
      navigate('/confirmation');
    }, DISPENSING_FACTOR * 100); // Adjust the timeout as needed
  };

  return (
    <div className='p-4 bg-white shadow-md rounded-lg mx-8 px-4'>
      <h2 className='text-xl font-semibold mb-4 font-body px-4'>Selected Drinks</h2>
      {selectedDrinks.length > 0 ? (
        <>
          <ul>
            {selectedDrinks.map((drink, index) => (
              <li key={index} className='mb-2'>
                <span className='font-bold font-body px-4'>{drink.name}</span> - <span className='text-blue-600'>{drink.percentage}%</span>
              </li>
            ))}
          </ul>
          <div className='mt-4'>
            <p className='text-lg font-semibold font-body px-4'>Total Percentage: <span className='text-blue-600 '>{totalPercentage}%</span></p>
          </div>
          <div className='mt-4'>
            <button 
              onClick={handleGoClick}
              className={`px-4 py-2 rounded ${dispensing ? 'bg-gray-500 text-gray-300 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
              disabled={dispensing}
            >
              {dispensing ? 'Dispensing drink currently...' : 'Dispense'}
            </button>
            <Link to="/remove" className='ml-4 px-4 py-2 rounded' style={{ backgroundColor: '#ef4444', color: '#ffffff' }}>
              Delete
            </Link>
          </div>
        </>
      ) : (
        <p className='font-body px-4'>No drinks selected yet.</p>
      )}
    </div>
  );
};

export default SelectedDrinks;

