import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <LoginPage></LoginPage>
      <Routes>
        {/* Define the routes */}


      </Routes>
    </BrowserRouter>
  </StrictMode>
);
