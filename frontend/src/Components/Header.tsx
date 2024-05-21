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

  const handleTroubleShootingClick = () => {
    navigate('/troubleShooting')
  }

  return (
    <div className="py-4 border-b-2 border-neutral-400">
      <header>
        <div className="flex items-center justify-between">
          <span className="cursor-pointer" onClick={handleTroubleShootingClick}>
            TroubleShooting
          </span>
          <div className="flex-grow flex items-center justify-center">
            <img
              src={DUEN}
              alt="DUEN"
              className="cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>
          <div style={{ width: '60px' }}></div> {/* Placeholder to balance the layout */}
        </div>
      </header>
    </div>
  );
};

export default Header;
