import React, { useState } from 'react';
import '../styles/Login.css'; 
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   
  const navigate = useNavigate();

  const handleLogin = () => {
    // Check credentials
    if (email === 'user@example.com' && password === 'password') {
      // Redirect to dashboard (replace with your navigation logic)
      navigate('/dashboard');
    } else {
      setErrorMessage('Wrong credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="logo"></div>
      <p className='line'>We are Electric</p>
      <input
        type="text"
        placeholder="   Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-box"
      />
      <input
        type="password"
        placeholder="  Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-box"
      />
      <button onClick={handleLogin} className="login-button">
        Login
      </button>
      <a href='#'><p className="forgot-password-text">Forgot Password ?</p></a>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Login;
