import React from 'react';
import logo from './logo.svg';
import './App.css';
import HoverComponent from './HoverCounter';
import ClickComponent from './ClickCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ClickComponent name="HOC Component" />
        <HoverComponent />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
