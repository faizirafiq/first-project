import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';

function LoginPage() {
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        useremail: useremail,
        password: password,
      });

      if (response.data.message === 'Login successful') {
        // Navigate to the dashboard page upon successful login
        navigate('/dashboard');
      } else {
        setMessage('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error.message);
      setMessage('An error occurred');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="useremail">Useremail:</label>
          <input
            type="email"
            id="useremail"
            value={useremail}
            onChange={(e) => setUseremail(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button type="submit">Login</button>
        </form>
        <p>{message}</p>

        {/* Signup button navigates to registration screen */}
        <Link to="/RegistrationForm">Signup</Link>
      </div>
    </div>
  );
}

export default LoginPage;
