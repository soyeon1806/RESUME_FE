import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import LoginPage from '@/pages/login/LoginPage';
import MainPage from '@/pages/main/MainPage';

const App = () => {
  const isMouseDown = useRef(false);

  useEffect(() => {
    const handleMouseDown = () => {
      isMouseDown.current = true;
    };

    const handleMouseUp = () => {
      isMouseDown.current = false;
      document.body.classList.remove('text-selecting');
    };

    const handleMouseMove = () => {
      if (!isMouseDown.current) return;

      const selectedText = window.getSelection()?.toString() ?? '';
      if (selectedText.trim().length > 0) {
        document.body.classList.add('text-selecting');
      } else {
        document.body.classList.remove('text-selecting');
      }
    };

    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
