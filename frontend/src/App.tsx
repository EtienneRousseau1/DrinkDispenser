import React from 'react';
import DrinkSelect from './DrinkSelect';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="app">
      <header className="header">
        <button className="back-button">&lt;</button>
        <div className="logo">DUEN</div>
      </header>
      <DrinkSelect />
      <footer className="footer">
        <button className="footer-button home"></button>
        <button className="footer-button search"></button>
        <button className="footer-button cart"></button>
        <button className="footer-button notification"></button>
        <button className="footer-button menu"></button>
      </footer>
    </div>
  );
};

export default App;
