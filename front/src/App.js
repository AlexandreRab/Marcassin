import React, { Component } from 'react';
import logo from './ressources/Marcassin_Logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">MYLEARNINGMARCASSIN</h1>
        </header>
        <p className="App-intro">
          BIENVENUE SUR MYLEARNINGMARCASSIN
        </p>
      </div>
    );
  }
}

export default App;
