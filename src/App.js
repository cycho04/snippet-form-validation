import React from 'react';

import Form from './Form';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Form Validation
        </p>
        <Form />
      </header>
    </div>
  );
}

export default App;
