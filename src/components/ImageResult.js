import React, { Component } from 'react';
import '../css/VideoResult.css';

class ImageResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgsrc = 'https://img.youtube.com/vi/' + this.props.video.YouTubeId + '/mqdefault.jpg';
    const divWidth = (100 / this.props.divisor) + '%';

    return (
      <div className="ImageResult-contaner" style={{ width: divWidth }}>
        <img onClick={() => this.props.loadVideo(this.props.video.YouTubeId)} src={imgsrc} />
        <div className="VideoResult-img-details">
          <h3>{this.props.video.title}</h3>
          <h4>{this.props.video.organization}</h4>
          <h5>Views</h5>
          <button>Play Video</button>
        </div>
      </div>
    )
  }
}
export default ImageResult;
