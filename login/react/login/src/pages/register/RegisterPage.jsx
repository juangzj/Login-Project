import { useState } from 'react';
import axios from 'axios';
import './RegisterPage.css';
import { useNavigate } from 'react-router-dom'

const createUri = 'http://localhost:5000/auth/register';

const RegisterPage = () => {

  const navigate = useNavigate(); // useNavigate instance to redirect

  /**
   * Method to redirect user to login page
   */
  const redirectToLoginPage = () => { navigate('/') }

  // user data to create a new user
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post(createUri, { name: name, lastName: lastName, email: email, password: password });
      navigate('/login')
      alert('User created successfully!');
    } catch (error) {
      console.error(error);
      alert('Error, the user could not be created.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1>Register</h1>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="First Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
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
          <button type="submit">Register</button>
          <p>
            Already have an account?{' '}
            <a href="#" onClick={redirectToLoginPage} >Login here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
