import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/drinkOption');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold">Home</h2>
      <p className="mt-2">Welcome to DUEN's Drink Dispenser!</p>
      <p className="mt-2">Would you like to customize your own drink?</p>
      <button 
        onClick={handleNavigate} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Yes
      </button>
      <button 
        onClick={handleNavigate} 
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Of Course
      </button>

    </div>
  );
};

export default Home;
