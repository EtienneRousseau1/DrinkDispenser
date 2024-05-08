import React, { useState } from 'react';
import './App.css';

function App() {
  // State to store the amount of drinks
  const [drinkAmount, setDrinkAmount] = useState('');

  // Handler for the input change
  // const handleInputChange = (event: HTMLClickE) => {
  //   setDrinkAmount(event.target.value);
  // };

  // Handlers for buttons
  const handleGoClick = () => {
    console.log('Go button clicked');
    // Additional actions can be defined here
  };

  const handleStopClick = () => {
    console.log('Stop button clicked');
    // Additional actions can be defined here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome everyone to DrinkDispenser!</h1>
        <div>
          <button onClick={handleGoClick}>Go</button>
          <button onClick={handleStopClick}>Stop</button>
        </div>
        <div>
          <label>
            Enter the amount of drinks:
            <input type="number" value={drinkAmount}  />
          </label>
        </div>
      </header>
    </div>
  );
}

export default App;
