import React, { Component } from 'react';
import '../css/VideoPlayer.css';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iframesrc: 'https://www.youtube.com/embed/' + this.props.src + '?color=white&rel=0&showinfo=0&autoplay=1'
    }
  }

  render() {
    return (
      <div className="VideoPlayer-container">
        <iframe src={this.state.iframesrc}></iframe>
      </div>
    )
  }
}

export default VideoPlayer;
