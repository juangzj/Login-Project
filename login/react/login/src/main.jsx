import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/register/RegisterPage.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define the routes */}
        <Route path='/' element={<LoginPage />} ></Route>
        <Route path="/register" element={<RegisterPage />} ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
