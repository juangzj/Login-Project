import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import loginPageStyle from './LoginPage.module.css'; // Import styles as an object

const loginUri = 'http://localhost:5000/auth/login';

const LoginPage = () => {
  const navigate = useNavigate(); // Instance to redirect

  // Method to redirect to the register page
  const redirectToRegister = () => {
    navigate('/register');
  };

  // User data for login
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  // Method to handle login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(loginUri, { email: userEmail, password: userPassword });
      if (response.status === 200) {
        const { token } = response.data;

        // Store the token in localStorage
        localStorage.setItem('authToken', token);
        alert('Login successful');
        // Redirect to user page
        navigate('/userPage');
      }
    } catch (error) {
      console.error(error);
      alert('Error, login failed.');
    }
  };

  return (
    <div className={loginPageStyle['login-container']}>
      <div className={loginPageStyle['login-box']}>
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            required
            className={loginPageStyle['input-field']} // Class for styling
          />
          <input
            type="password"
            placeholder="Password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            required
            className={loginPageStyle['input-field']} // Class for styling
          />
          <button type="submit" className={loginPageStyle['submit-button']}>Login</button>
          <p>
            Do not have an account?{' '}
            <a href="#" onClick={redirectToRegister}>Register here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
