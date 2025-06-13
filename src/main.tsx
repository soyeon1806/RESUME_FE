import '@/styles/index.css';

import { BrowserRouter } from 'react-router-dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

// HTML의 <div id="root"> 요소를 가져와서 그 안에 React 앱을 랜더링함
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      {/* App 컴포넌트를 React 방식으로 랜더링 */}
      <App />
    </BrowserRouter>
  </StrictMode>,
);
