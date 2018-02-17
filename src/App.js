import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">This React app is Hosted on an AWS S3 bucket!</h1>
        </header>
        <h2>Welcome to jsons website!</h2>

      </div>
    );
  }
}

export default App;
