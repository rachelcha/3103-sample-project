import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [commonPasswords, setCommonPasswords] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-1000.txt')
      .then(response => response.text())
      .then(data => setCommonPasswords(data.split('\n')))
      .catch(error => console.error('Error fetching common passwords:', error));
  }, []);

  const handleLogin = () => {
    const isValidPassword = validatePassword(password);

    if (isValidPassword) {
      setIsLoggedIn(true);
      console.log('Logging in with password:', password);
    } else {
      setErrorMessage('Password does not meet requirements.');
    }
  };

  const validatePassword = (password) => {
    const minLength = 10;
    const isCommonPassword = commonPasswords.includes(password);

    return password.length >= minLength && !isCommonPassword;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setPassword('');
    setErrorMessage('')
  };

  if (isLoggedIn) {
    return (
      <div>
        <header>
          <p>Welcome! Password: {password}</p>
          <button onClick={handleLogout}>Logout</button>
        </header>
      </div>
    );
  }

  return (
    <div>
      <header>
        <p>Home Page</p>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Login</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </header>
    </div>
  );
}

export default App;
