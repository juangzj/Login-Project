import { useState } from 'react';
import './AuthPage.css';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Switch between Login and Register

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        {/* Show login or registration form based on the state */}
        <form>
          {isLogin ? (
            <>
              <input
                type="text"
                placeholder="Username"
                required
              />
              <input
                type="password"
                placeholder="Password"
                required
              />
              <button type="submit">Login</button>
              <p> Do not have an account? <a href="#" onClick={() => setIsLogin(false)}>Register here</a></p>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                placeholder="Last Name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                required
              />
              <input
                type="password"
                placeholder="Password"
                required
              />
              <button type="submit">Register</button>
              <p>Already have an account? <a href="#" onClick={() => setIsLogin(true)}>Login here</a></p>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
