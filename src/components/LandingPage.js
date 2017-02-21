import React, { Component } from 'react';
import Header from './Header';
import Results from './Results';
import Footer from './Footer';
import axios from 'axios';
import '../css/LandingPage.css';

class LandingPage extends Component {
  constructor() {
    super();

    this.state = {
      videos: [],
      videoIsClicked: false,
      divisor: Math.floor((window.innerWidth * 0.9) / 400)
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

    axios.get('/api/videos')
      .then((res) => {
        const nextVideos = res.data;
        this.setState({ videos: nextVideos });
      });
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
        <div className="LandingPage-heading">
          <h2>Videos</h2>
        </div>
        <Results
          videos={this.state.videos}
          loadVideo={this.loadVideo} videoIsClicked={this.state.videoIsClicked} divisor={this.state.divisor}
        />
        <Footer />
      </div>
    );
  }
}

export default LandingPage;
