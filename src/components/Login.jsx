import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false); // State to track email format error
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleLogin = (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setEmailError(true); // Set email error state to true
      return;
    }
    setEmailError(false); // Reset email error state
    if (email === 'test@test.com' && password === 'test@123') {
      localStorage.setItem('token', '123456');
      setIsAuthenticated(true); // Set authentication status to true
      navigate('/doctors'); // Redirect to Doctors page
    } else {
      alert('Invalid credentials');
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
    return re.test(String(email).toLowerCase());
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className={`form-group ${emailError ? 'has-error' : ''}`}>
          <label>Email</label>
          <input type="email" className={`form-control ${emailError ? 'is-invalid' : ''}`} 
                 value={email} onChange={(e) => setEmail(e.target.value)} required />
          {emailError && <div className="invalid-feedback">Please enter a valid email address.</div>} 
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
