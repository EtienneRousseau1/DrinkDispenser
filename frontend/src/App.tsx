import React from 'react';
import './index.css';
import Header from './Components/Header';
import AppRouter from './AppRouter';

const App: React.FC = () => {
  return (
    <div className="h-screen">
      <Header />
      <AppRouter />
    </div>
  );
};

export default App;
