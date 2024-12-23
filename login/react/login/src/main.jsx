import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/register/RegisterPage';
import UserPage from './pages/users/UsersPage.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define without layout */}
        <Route path='/' element={<LoginPage />} ></Route>

        {/* Register Page */}
        <Route path='/register' element={<RegisterPage />} ></Route>
        <Route path='/userPage' element={<UserPage />}  ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
