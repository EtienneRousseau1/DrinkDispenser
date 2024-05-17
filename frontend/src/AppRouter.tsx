import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DrinkOption from './Pages/DrinkOptions';
import { DrinkProvider } from './Pages/DrinkContext';
import DrinkPercentage from './Pages/DrinkPercentage';
import TroubleShooting from './Pages/TroubleShooting';
import RemoveDrinks from './Components/RemoveDrinks';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <DrinkProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/drinkOption" />} />
          <Route path="/drinkOption" element={<DrinkOption />} />
          <Route path="/drinkPercentage" element={<DrinkPercentage />} />
          <Route path = "/troubleShooting" element={<TroubleShooting />} />
          <Route path = "/remove" element={<RemoveDrinks />} />
        </Routes>
      </DrinkProvider>
    </Router>
  );
};

export default AppRouter;
