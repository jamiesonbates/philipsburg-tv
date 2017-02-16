import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';
import './App.css';
import Results from './components/Results';
import Header from './components/Header';
import Organization from './components/Organization';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={Results} />
        <Route path='/organization' component={Organization} />
      </Router>
    );
  }
}

export default App;
