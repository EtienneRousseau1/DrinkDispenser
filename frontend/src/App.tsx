import React from 'react';
import DrinkSelect from './Pages/DrinkSelect';
import './App.css';
import DrinkOption from './Pages/DrinkOptions';
import PercentageSelector from './Pages/PercentageSelector';
import DUEN from './images/DUEN.png'
import Water from './images/Water.png'
import Juice from './images/Juice.png'

const App: React.FC = () => {
  return (
    <div className="text-xl">
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
