import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './Coin'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Coin />
        </header>
      </div>
      );
  }
}

export default App;
