
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/drinkOption');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-bold text-center mb-8">Welcome to DUEN's Drink Dispenser!</h2>
      <p className="text-xl text-center mb-4">Would you like to customize your own drink?</p>
      <button 
        onClick={handleNavigate} 
        className="mt-8 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Yes
      </button>
   </div>
  );
};

export default Home;

