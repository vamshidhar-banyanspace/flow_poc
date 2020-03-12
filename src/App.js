import React from 'react';
import logo from './logo.svg';
import './App.css';
import WithComponent from './withCounter';
import ClickComponent from './ClickCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React HOC component
        </a>
        <WithComponent />
        <ClickComponent />
      </header>
    </div>
  );
}

export default App;
