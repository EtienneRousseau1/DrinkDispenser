import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDrink } from './DrinkContext'; // Import the useDrink hook

const Confirmation: React.FC = () => {
  const navigate = useNavigate();
  const { clearAllDrinks } = useDrink(); // Access the clearAllDrinks function from the context

  const handleNavigate = () => {
    clearAllDrinks(); // Call the clearAllDrinks function when navigating away from the Confirmation page
    navigate('/drinkOption');
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-4xl font-bold text-center mb-8">Confirmation</h2>
      <p className="text-xl text-center mt-2">Success..kinda</p>
      <p className="text-xl text-center mt-2">Your drink taste like dog poop</p>
      <button 
        onClick={handleNavigate} 
        className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Make another drink
      </button>
    </div>
  );
};

export default Confirmation;

