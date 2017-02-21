import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import './App.css';
import LandingPage from './components/LandingPage';
import Organization from './components/Organization';

class App extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={LandingPage} />
        <Route path='/organization/:id' component={Organization} />
      </Router>
    );
  }
}

export default App;
