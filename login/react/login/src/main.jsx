import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage.jsx';
import RegisterPage from './pages/register/RegisterPage.jsx';
import UserPage from './pages/users/UsersPage.jsx'
//import UserTable from './components/userTable/UserTable.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Define the auth routes */}
        <Route path='/' element={<LoginPage />} ></Route>
        <Route path="/register" element={<RegisterPage />} ></Route>
      </Routes>
      {/* Define the user  routes */}
      <Routes>
        <Route path='/userPage' element={<UserPage />} ></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
