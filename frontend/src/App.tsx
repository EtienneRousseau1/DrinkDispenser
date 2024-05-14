import React, { useState } from "react";
import "./App.css";

const DrinkDispenser: React.FC = () => {
  const [drinkSize, setDrinkSize] = useState<number | undefined>(undefined);
  const [unit, setUnit] = useState<string>("oz");
  const [settings, setSettings] = useState<number[]>([0, 0, 0, 0]);

  const handleSettingChange = (index: number, value: number) => {
    const newSettings = [...settings];
    newSettings[index] = value;
    setSettings(newSettings);
  };

  const handleGo = () => {
    console.log("Go pressed");
    console.log(`Drink Size: ${drinkSize} ${unit}`);
    console.log(`Settings: ${settings}`);
  };

  const handleStop = () => {
    console.log("Stop pressed");
  };

  return (
    <div className="container">
      <h1 className="header">Drink Dispenser</h1>
      <label className="label">How big is your drink?</label>
      <div className="input-container">
        <input
          type="number"
          value={drinkSize}
          onChange={(e) => setDrinkSize(Number(e.target.value))}
          className="input"
        />
        <select value={unit} onChange={(e) => setUnit(e.target.value)} className="input">
          <option value="oz">oz</option>
          <option value="ml">ml</option>
          
        </select>
      </div>
      {[0, 1, 2, 3].map((index) => (
        <div key={index} className="mb-2">
          <label className="label">Liquid {index + 1} (in {unit})</label>
          <input
            type="number"
            value={settings[index]}
            onChange={(e) => handleSettingChange(index, Number(e.target.value))}
            className="input"
          />
        </div>
      ))}
      <div className="button-container">
        <button onClick={handleGo} className="button button-go">
          Go
        </button>
        <button onClick={handleStop} className="button button-stop">
          Stop
        </button>
      </div>
    </div>
  );
};

export default DrinkDispenser;
