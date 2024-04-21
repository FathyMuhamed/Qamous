import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LogIn.scss';
import { useMutation } from 'react-query';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  
  const mutation = useMutation((data: {
    username: string;
    password: string;
  }) => fetch('http://localhost:3000/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }));
  
  const onLoginClick = () => {
    // Clear previous errors
    setUsernameError('');
    setPasswordError('');
    
    // Basic Username validation
    if (!username || '' === username) {
      setUsernameError('Username is required');
      return;
    }
    // SQL injection prevention
    if (username.includes('\'') || username.includes('"') || username.includes(';')) {
      setUsernameError('Invalid username');
      return;
    }
    // Basic password validation
    if (!password || '' === password) {
      setPasswordError('Password is required');
      return;
    }
    
    // Call the mutation
    mutation.mutate({ username, password });
    
    // If login is successful, navigate to another page
    if (mutation.isSuccess) {
      alert('Login successful');
      navigate('/');
    } else {
      alert('Login failed. Please try again.');
    }
  };
  
  const onSignUpClick = () => {
    // Redirect to the sign up page
    navigate('/signup');
  };
  
  return (
    <div className={'container'}>
      <div className={'container-title'}>
        <div>Log in</div>
      </div>
      <br />
      <div className={'container-input'}>
        <input
          type={'username'}
          value={username}
          placeholder="Enter your username here"
          onChange={(ev) => setUsername(ev.target.value)}
          className={'container-input-box'}
        />
        <label className="container-input-error">{usernameError}</label>
      </div>
      <br />
      <div className={'container-input'}>
        <input
          type={'password'}
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'container-input-box'}
        />
        <label className="container-input-error">{passwordError}</label>
      </div>
      <br />
      <div className={'container-buttons'}>
        <button
          className={'container-buttons-button'}
          type="button"
          onClick={onLoginClick}
          value={'Log in'}
        >
          Log in
        </button>
        <button
          className="container-buttons-button container-buttons-button-secondary"
          onClick={onSignUpClick}
          value={'Sign Up'}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default Login;