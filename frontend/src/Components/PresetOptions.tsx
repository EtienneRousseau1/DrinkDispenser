import React from 'react';
import { useDrink } from '../Pages/DrinkContext';

interface Preset {
  title: string;
  drinks: { name: string; percentage: number }[];
  src: string;
}

interface PresetOptionsProps {
  presets: Preset[];
}

const PresetOptions: React.FC<PresetOptionsProps> = ({ presets }) => {
  const { addPresetDrinks } = useDrink();

  const handlePresetClick = (drinks: { name: string; percentage: number }[]) => {
    addPresetDrinks(drinks);
  }

  return (
    <div className="flex justify-center gap-8">
      {presets.map((preset, index) => (
        <div 
          key={index} 
          onClick={() => handlePresetClick(preset.drinks)} 
          className="cursor-pointer flex flex-col items-center">
          <img className="h-20 w-20 rounded-lg object-cover mb-2" src={preset.src} alt={preset.title} />
          <span className="text-center font-body">{preset.title}</span>
        </div>
      ))}
    </div>
  );
}

export default PresetOptions;

