import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrink } from '../Pages/DrinkContext';
import { Link } from 'react-router-dom';

const drinkMap = new Map([
  ["Water", 0],
  ["Apple Juice", 1],
  ["Peach Juice", 2],
  ["Lemonade", 3]
]);

const SelectedDrinks: React.FC = () => {
  const ipAddress = "172.20.10.9";
  const DISPENSING_FACTOR = 10000;
  const { selectedDrinks, totalPercentage, cupVolume } = useDrink();
  const [dispensing, setDispensing] = useState(false);
  const [dispensingSuccessful, setDispensingSuccessful] = useState(false);
  const navigate = useNavigate();
  let confirmTimeout: NodeJS.Timeout;

  useEffect(() => {
    return () => {
      clearTimeout(confirmTimeout);
    };
  });

  const openValve = async (valveNum: number | undefined, duration: number, id: number) => {
    if (valveNum === undefined) return;
    console.log(`Dispensing ${selectedDrinks[id].name}...`);
    console.log(`Volume: ${duration} ml`);
    const url = `http://${ipAddress}/dispenseDrink/${valveNum}${id}${duration.toString()}`;
    try {
      const response = await fetch(url, { method: 'GET', mode: 'no-cors' });
      if (!response.ok) throw new Error('Dispensing failed');
      setDispensingSuccessful(true); // Set dispensingSuccessful to true if dispensing is successful
    } catch (error) {
      console.error('Error:', error);
      alert('Dispensing failed. Please try again.'); // Show alert if dispensing fails
      setDispensing(false);
      setDispensingSuccessful(false);
    }
  };

  const handleGoClick = async () => {
    setDispensing(true);
    for (let index = 0; index < selectedDrinks.length; index++) {
      const { name, percentage } = selectedDrinks[index];
      const valveNum = drinkMap.get(name);
      if (valveNum === undefined) continue;
      const duration = Math.round((percentage / 100) * cupVolume); 
      await openValve(valveNum, duration, index);
    }

    clearTimeout(confirmTimeout);
    confirmTimeout = setTimeout(() => {
      setDispensing(false);
      if (dispensingSuccessful) {
        navigate("/confirmation");
      }
    }, DISPENSING_FACTOR);
  };

  return (
    <div className='p-4 bg-white shadow-md rounded-lg mx-8 px-4'>
      <h2 className='text-xl font-semibold mb-4 font-body px-4'>Selected Drinks</h2>
      {selectedDrinks.length > 0 ? (
        <>
          <ul>
            {selectedDrinks.map(({ name, percentage }, index) => (
              <li key={index} className='mb-2'>
                <span className='font-bold font-body px-4'>{name}</span> - <span className='text-blue-600'>{percentage}%</span>
              </li>
            ))}
          </ul>
          <div className='mt-4'>
            <p className='text-lg font-semibold font-body px-4'>Total Percentage: <span className='text-blue-600'>{totalPercentage}%</span></p>
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

