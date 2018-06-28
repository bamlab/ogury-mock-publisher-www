import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Ogury Mocked Publisher</h1>
        </header>
        <button style={styles.button}>Open the consent-manager (inactive for now)</button>
      </div>
    );
  }
}

const styles = {
  button: {
    width: 300,
    height: 30,
    marginTop: 50,
  },
};

export default App;
