import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DrinkOption from './Pages/DrinkOptions';
import { DrinkProvider } from './Pages/DrinkContext';
import DrinkPercentage from './Pages/DrinkPercentage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <DrinkProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/drinkOption" />} />
          <Route path="/drinkOption" element={<DrinkOption />} />
          <Route path="/drinkPercentage" element={<DrinkPercentage />} />
        </Routes>
      </DrinkProvider>
    </Router>
  );
};

export default AppRouter;
