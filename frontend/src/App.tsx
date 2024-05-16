import React from 'react';
import './index.css';
import DrinkOptions from './Pages/DrinkOptions';
import Header from './Components/Header';
import Option from './Components/Option';

const App: React.FC = () => {
  return (
    <div >
      <Header />
      <div className="h-screen">
        <DrinkOptions/>
      </div>
    </div>
  );
};

export default App;
