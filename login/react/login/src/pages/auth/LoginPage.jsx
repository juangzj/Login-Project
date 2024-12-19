import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

const loginUri = 'http://localhost:5000/auth/login';

const LoginPage = () => {

  const navigate = useNavigate();// navigate intance to redirect 

  /**
   * Method to redirect to the register page
   */
  const redirectToRegisterPage = () => {
    navigate('/register')

  }


  // User data to login 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  /**
   * Method to log a user
   * @param {*} e 
   */
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios.post(loginUri, { email, password });

    } catch (error) {
      console.error(error);
      alert('Error, login failed.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          <p>
            Do not have an account?{' '}
            <a href="#" onClick={redirectToRegisterPage}>Register here</a>

          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
