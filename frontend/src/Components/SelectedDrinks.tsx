import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrink } from '../Pages/DrinkContext';
import { Link } from 'react-router-dom';

const drinkMap = new Map();
drinkMap.set("Water", 0);
drinkMap.set("Apple Juice", 1);
drinkMap.set("Peach Juice", 2);
drinkMap.set("Lemonade", 3);


const SelectedDrinks: React.FC = () => {
  const ipAddress = "172.20.10.9";
  const DISPENSING_FACTOR = 10000;
  const { selectedDrinks, totalPercentage, cupVolume } = useDrink();
  const [dispensing, setDispensing] = useState(false);
  const [id, setId] = useState(1);
  const navigate = useNavigate();

  const openValve = async (valveNum: number, duration: number, id: number) => {
    const url = `http://${ipAddress}/dispenseDrink/${valveNum}${id}${duration.toString()}`;
    console.log(url);
    try {
      const response = await fetch(url, {
        method: 'GET',
        mode: 'no-cors',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGoClick = async () => {
    setDispensing(true);
    for (let index = 0; index < selectedDrinks.length; index++) {
      const drink = selectedDrinks[index];
      console.log(drink);
      const valveNum = drinkMap.get(drink.name);
      console.log(valveNum);
      console.log(drinkMap.get("Apple Juice"));
      const duration = Math.round((drink.percentage / 100) * cupVolume); 
      await openValve(valveNum, duration, index);
      
    }

    setTimeout(() => {
      setDispensing(false);
      navigate("/confirmation");
    }, DISPENSING_FACTOR); // Convert tenths of a second to milliseconds
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

