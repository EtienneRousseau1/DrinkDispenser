import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import DrinkOption from './Pages/DrinkOptions';
import { DrinkProvider } from './Pages/DrinkContext';
import DrinkPercentage from './Pages/DrinkPercentage';
import TroubleShooting from './Pages/TroubleShooting';
import Home from './Pages/Home';
import Header from './Components/Header';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Header />
      <DrinkProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/drinkOption" element={<DrinkOption />} />
          <Route path="/drinkPercentage" element={<DrinkPercentage />} />
          <Route path = "/troubleShooting" element={<TroubleShooting />} />
        </Routes>
      </DrinkProvider>
    </Router>
  );
};

export default AppRouter;
