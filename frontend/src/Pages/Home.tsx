
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrink } from '../Pages/DrinkContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [volume, setVolume] = useState('');
  const { setCupVolume } = useDrink();

  const handleNavigate = () => {
    setCupVolume(Number(volume));
    navigate('/drinkOption');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-bold text-center mb-8">Welcome to DUEN's Drink Dispenser!</h2>
      <p className="text-xl text-center mb-4">Would you like to customize your own drink?</p>
      <p className="text-l text-slate-400 text-center mb-4">Please input the volume of your cup and then click yes</p>
      <input 
        type="number" 
        value={volume} 
        onChange={handleChange} 
        placeholder="Enter cup volume (ml)" 
        className="mb-4 px-4 py-2 border border-gray-300 rounded"
      />
      <button 
        onClick={handleNavigate} 
        className={`mt-8 px-6 py-3 rounded ${volume ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-500 text-gray-300 cursor-not-allowed'}`}
        disabled={!volume}
      >
        YES
      </button>
   </div>
  );
};

export default Home;

