import React from 'react';
import DrinkSelect from './DrinkSelect';
import './App.css';
import DrinkOption from './DrinkOption/DrinkOption';
import PercentageSelector from './PercentageSelector/PercentageSelector';
import DUEN from './images/DUEN.png'
import Water from './images/Water.png'
import Juice from './images/Juice.png'



const App: React.FC = () => {
  return (
    <div className="container">
      <header className="header1">
        <button className="back-button">&lt;</button>
        <div className="logo">
          <img src={DUEN} alt="DUEN" />
        </div>
      </header>
      <DrinkOption />
    </div>
  );
};

export default App;
