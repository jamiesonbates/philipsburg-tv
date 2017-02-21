import React, { Component } from 'react';
import Header from './Header';
import Results from './Results';
import Footer from './Footer';
import axios from 'axios';
import '../css/Organization.css';

class Organization extends Component {
  constructor() {
    super();

    this.state = {
      organization: {},
      videos: [],
      videoIsClicked: false,
      divisor: Math.floor((window.innerWidth * 0.9) / 400),
      displayBtn: false
    }

    this.loadVideo = this.loadVideo.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  updateDimensions() {
    const nextDivisor = Math.floor((window.innerWidth * 0.9) / 400);
    this.setState({ divisor: nextDivisor});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);

    axios.get(`/api/organization/${this.props.params.id}`)
      .then(res => this.setState({ organization: res.data[0] }))
      .catch(err => console.log(err));

    axios.get(`/api/videos/${this.props.params.id}`)
      .then(res => this.setState({ videos: res.data }))
      .catch(err => console.log(err));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  loadVideo(id) {
    let nextData = this.state.videos.map(video => {
      if (video.youtube_id === id) {
        video.clicked = true;
        return video;
      }

      video.clicked = false;
      return video;
    });

    if (this.state.divisor !== 0) {
      const clicked = this.state.videos.filter(video => video.clicked);
      let idx = nextData.indexOf(clicked[0]);
      nextData.splice(idx, 1);
      const changeBy = (idx % this.state.divisor);
      idx -= changeBy;

      nextData = nextData.slice(0, idx).concat(clicked, nextData.slice(idx));
    }

    this.setState({ videos: nextData, videoIsClicked: true });
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
        <div className="Organization-videos">
          <Results
            videos={this.state.videos}
            loadVideo={this.loadVideo} videoIsClicked={this.state.videoIsClicked} divisor={this.state.divisor}
            displayBtn={this.state.displayBtn}
          />
        </div>
        <h3></h3>
        <Footer />
      </div>
    )
  }
}

export default Organization;
