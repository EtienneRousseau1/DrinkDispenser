import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css';
import DUEN from '../images/DUEN.png';
import { useDrink } from '../Pages/DrinkContext';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { clearAllDrinks } = useDrink();

  const handleLogoClick = () => {
    clearAllDrinks();
    navigate('/');
  };

  return (
    <div className="py-4 border-b-2 border-neutral-400">
      <header>
        <div className="flex items-center justify-center">
          <img
            src={DUEN}
            alt="DUEN"
            className="cursor-pointer"
            onClick={handleLogoClick}
          />
        </div>
      </header>
    </div>
  );
};

export default Header;

