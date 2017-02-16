import React, { Component } from 'react';
import './App.css';
import Results from './components/Results';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Results />
      </div>
    );
  }
}

export default App;
