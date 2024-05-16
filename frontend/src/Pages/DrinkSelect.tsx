import React, { useState } from 'react';
import './index.css'; // Make sure to import the CSS file

const DrinkSelect: React.FC = () => {
  const [selectedDrink, setSelectedDrink] = useState<string>('Coffee');
  const [selectedPercentage, setSelectedPercentage] = useState<number>(0);

  return (
    <div>
      <h2>Drink Select</h2>
      <p>Make sure you do not overfill!</p>
      <p>This is the current selected drink!</p>
      <div>
        <div>
          <p>Your Selected Drink: <p>{selectedDrink}</p></p>
        </div>
        <div>
          <div>
            {[25, 50, 75, 100].map(percentage => (
              <button
                key={percentage}
                className={`percentage-button ${selectedPercentage === percentage ? 'selected' : ''}`}
                onClick={() => setSelectedPercentage(percentage)}>
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
