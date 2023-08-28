import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

function LoginPage() {
  const { setToken } = useContext(UserContext);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data being sent:", { email, password }); // Debugging line
    axios.post('http://localhost:3002/auth/login', { email, password })
      .then(response => {
        console.log("Token received:", response.data.token);
        setToken(response.data.token);
      })
      .catch(error => {
        console.error('Login failed:', error);
        if (error.response) {
          console.error('Error response:', error.response.data);
        }
      });
  };

  const handleSubmitRegister = (e) => {
    e.preventDefault();
    console.log("Data being sent:", { email, password }); // Debugging line
    axios.post('http://localhost:3002/auth/register', { email, password })
      .then(response => {
        console.log("Registration successful:", response.data.token);
        setToken(response.data.token);
      })
      .catch(error => {
        console.error('Registration failed:', error);
        if (error.response) {
          console.error('Error response:', error.response.data);
        }
      });
  };

  return (
    <div className="login-page">
      <div className="tabs">
        <button onClick={() => setIsLogin(true)} className={isLogin ? 'active' : ''}>Login</button>
        <button onClick={() => setIsLogin(false)} className={!isLogin ? 'active' : ''}>Register</button>
      </div>
      {isLogin ? (
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Login</button>
        </form>
      ) : (
        <form onSubmit={handleSubmitRegister}>
          <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
          <button type="submit">Register</button>
        </form>
      )}
    </div>
  );
}

export default LoginPage;
