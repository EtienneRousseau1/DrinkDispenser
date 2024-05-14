// ./src/components/DrinkDispenser.tsx
import React, { useState } from "react";
import "./App.css";

const DrinkDispenser: React.FC = () => {
  const [drinkSize, setDrinkSize] = useState<number | undefined>(undefined);
  const [settings, setSettings] = useState<number[]>([0, 0, 0, 0]);

  const handleSettingChange = (index: number, value: number) => {
    const newSettings = [...settings];
    newSettings[index] = value;
    setSettings(newSettings);
  };

  const handleGo = () => {
    console.log("Go pressed");
    console.log("Go pressed");
    console.log(`Drink Size: ${drinkSize}`);
    console.log(`Settings: ${settings}`);
  };

  const handleStop = () => {
    console.log("Stop pressed");
  };

  return (
    <div className="container">
      <h1 className="header">DrinkDispenser</h1>
      <label className="label">How big is your drink? (in oz)</label>
      <input
        type="number"
        value={drinkSize}
        onChange={(e) => setDrinkSize(Number(e.target.value))}
        className="input"
      />
      {[0, 1, 2, 3].map((index) => (
        <div key={index} className="mb-2">
          <label className="label">Setting {index + 1}</label>
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
