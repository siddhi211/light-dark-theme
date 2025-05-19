import React, { useState } from 'react';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <header className="top-bar">
        <h1>My Website</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </header>
      <main>
        <h2>Welcome to my website!</h2>
        <p>This is a simple React website with theme switching functionality.</p>
      </main>
    </div>
  );
}

export default App;
