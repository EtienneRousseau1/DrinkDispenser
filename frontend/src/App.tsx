import React from 'react';
import './index.css';
import DrinkOption from './Pages/DrinkOption';
import Header from './Components/Header';
import Option from './Components/Option';

const App: React.FC = () => {
  return (
    <div >
      <Header />
      <div className="h-screen">
        <DrinkOption/>
      </div>
    </div>
  );
};

export default App;
