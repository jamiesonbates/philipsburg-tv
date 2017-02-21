import React, { Component } from 'react';
import '../css/Organization.css';
import Header from './Header';
import axios from 'axios';

class Organization extends Component {
  componentDidMount() {
    console.log(this.props.params.id);
  }
  render() {
    return (
      <div>
        <Header />
        <h1>Hello</h1>
      </div>
    )
  }
}

export default Organization;
