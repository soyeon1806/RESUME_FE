import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '@/pages/main/MainPage';
import React from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
