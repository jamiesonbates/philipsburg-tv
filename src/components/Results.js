import React, { Component } from 'react';
import '../css/Results.css';
import ImageResult from './ImageResult';
import VideoPlayer from './VideoPlayer';
import data from '../data';

class Results extends Component {
  constructor() {
    super();

    this.state = {
      videos: data,
      videoIsClicked: false,
      divisor: Math.floor((window.innerWidth * 0.9) / 600)
    }

    this.loadVideo = this.loadVideo.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  loadVideo(id) {
    let nextData = data.map(video => {
      if (video.YouTubeId === id) {
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

  updateDimensions() {
    const nextDivisor = Math.floor((window.innerWidth * 0.9) / 400);
    this.setState({ divisor: nextDivisor});
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    return (
      <div>
        <div className="Results-heading">
          <h2>Videos</h2>
        </div>
        <div className="results">
          {
            this.state.videos
              .map(video => {
                if (!this.state.videoIsClicked) {
                  video.clicked = false;
                }

                return video;
              })
              .map(video => {
                if (video.clicked) {
                  return <VideoPlayer key={video.YouTubeId} video={video} />
                }

                return <ImageResult key={video.YouTubeId} divisor={this.state.divisor} loadVideo={this.loadVideo} video={video} />
              })
          }
        </div>
      </div>
    )
  }
}

export default Results;
