import React, { Component } from 'react';
import '../css/Organization.css';
import Header from './Header';
import axios from 'axios';

class Organization extends Component {
  constructor() {
    super();

    this.state = {
      organization: {},
      videos: []
    }
  }
  componentDidMount() {
    axios.get(`/api/organization/${this.props.params.id}`)
      .then(res => this.setState({ organization: res.data[0] }))
      .catch(err => console.log(err));

    axios.get(`/api/videos/${this.props.params.id}`)
      .then(res => this.setState({ videos: res.data }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <Header />
        <div>
          <h2>{this.state.organization.name}</h2>
          <p>{this.state.organization.hours}</p>
          <p>{this.state.organization.phone}</p>
          <a href={this.state.organization.website}>Website</a>
          <a href={this.state.organization.facebook}>Facebook</a>
        </div>
      </div>
    )
  }
}

export default Organization;
