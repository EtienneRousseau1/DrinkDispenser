import React from 'react';
import './PercentageSelector.css';

interface PercentageSelectorProps {
  onSelect: (percentage: number) => void;
}

const percentages = [25, 50, 75];

const PercentageSelector: React.FC<PercentageSelectorProps> = ({ onSelect }) => {
  return (
    <div className="percentage-selector">
      {percentages.map((percentage) => (
        <button key={percentage} onClick={() => onSelect(percentage)}>
          <div className="percentage-icon">{percentage}%</div>
        </button>
      ))}
    </div>
  );
};

export default PercentageSelector;
