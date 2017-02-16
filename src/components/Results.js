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
      videoIsClicked: false
    }

    this.loadVideo = this.loadVideo.bind(this);
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

    const clicked = this.state.videos.filter(video => video.clicked);
    let idx = nextData.indexOf(clicked[0]);
    nextData.splice(idx, 1);
    const changeBy = (idx % 4);
    idx -= changeBy;

    nextData = nextData.slice(0, idx).concat(clicked, nextData.slice(idx));
    console.log(nextData);


    this.setState({ videos: nextData, videoIsClicked: true });
  }

  render() {
    return (
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
                return <VideoPlayer key={video.YouTubeId} src={video.YouTubeId} />
              }

              return <ImageResult loadVideo={this.loadVideo} key={video.YouTubeId} src={video.YouTubeId} />
            })
        }
      </div>
    )
  }

}
export default Results;
