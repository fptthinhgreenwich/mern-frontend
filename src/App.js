import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/') // Replace with your Render backend URL later
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => console.error("Error fetching backend:", err));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERN Stack CI/CD Demo</h1>
        <p>Frontend says: Hello from React!</p>
        <p>Backend says: {message}</p>
      </header>
    </div>
  );
}

export default App;

