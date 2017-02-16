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
      </div>
    )
  }
}

export default VideoPlayer;
