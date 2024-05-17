import React from 'react';
import './index.css';
import AppRouter from './AppRouter';

const App: React.FC = () => {
  return (
    <div className="h-screen">
      <AppRouter />
    </div>
  );
};

export default App;
