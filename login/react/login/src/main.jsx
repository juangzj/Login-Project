import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//Import the AuthPage component
// import AuthPage from './pages/auth/AuthPage.jsx'
import UserPage from './pages/users/UsersPage'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserPage></UserPage>

  </StrictMode>,
)
