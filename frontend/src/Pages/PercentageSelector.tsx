import React from 'react';
import '../index.css';

interface PercentageSelectorProps {
  onSelect: (percentage: number) => void;
}

const percentages = [25, 50, 75];

const PercentageSelector: React.FC<PercentageSelectorProps> = ({ onSelect }) => {
  return (
    <div> 
      {percentages.map((percentage) => (
        <button key={percentage} onClick={() => onSelect(percentage)}>
          <div>{percentage}%</div>
        </button>
      ))}
    </div>
  );
};

export default PercentageSelector;
