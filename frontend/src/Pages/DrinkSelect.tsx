import React, { useState } from 'react';
import './App.css'; // Make sure to import the CSS file

const DrinkSelect: React.FC = () => {
  const [selectedDrink, setSelectedDrink] = useState<string>('Coffee');
  const [selectedPercentage, setSelectedPercentage] = useState<number>(0);

  return (
    <div className="drink-select">
      <h2>Drink Select</h2>
      <p>Make sure you do not overfill!</p>
      <p className="selected-drink-info">This is the current selected drink!</p>
      <div className="row">
        <div className="col-md-3 selected-drink-container">
          <p>Your Selected Drink: <p className="selected-drink">{selectedDrink}</p></p>
        </div>
        <div className="col-md-3 percentage-buttons-container">
          <div className="percentage-buttons">
            {[25, 50, 75, 100].map(percentage => (
              <button
                key={percentage}
                className={`percentage-button ${selectedPercentage === percentage ? 'selected' : ''}`}
                onClick={() => setSelectedPercentage(percentage)}
              >
                {percentage}%
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkSelect;
