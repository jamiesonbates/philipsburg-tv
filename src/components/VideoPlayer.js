import React, { Component } from 'react';
import '../css/VideoPlayer.css';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const iframesrc = 'https://www.youtube.com/embed/' + this.props.video.YouTubeId + '?color=white&rel=0&showinfo=0&autoplay=1';

    return (
      <div className="VideoPlayer-container">
        <iframe src={iframesrc}></iframe>
        <div className="VideoPlayer-details">
          <h3>{this.props.video.title}</h3>
          <h4>{this.props.video.organization}</h4>
          <p>This is a video of Philipsburg, Montana. Hopefully you are inspired to visit Pburg!</p>
          <button>See more videos from {this.props.video.organization}</button>
        </div>
      </div>
    )
  }
}

export default VideoPlayer;
