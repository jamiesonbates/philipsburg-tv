import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/ImageResult.css';

class ImageResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgsrc = 'https://img.youtube.com/vi/' + this.props.video.YouTubeId + '/mqdefault.jpg';
    const divWidth = (100 / this.props.divisor) + '%';

    return (
      <div className="ImageResult-container" style={{ width: divWidth }}>
        <div className="ImageResult-card">
          <div>
            <img onClick={() => this.props.loadVideo(this.props.video.YouTubeId)} src={imgsrc} />
          </div>
          <div className="ImageResult-img-details">
            <div className="ImageResult-video-info">
              <h3>{this.props.video.title}</h3>
              <h5>{this.props.video.organization}</h5>
            </div>
            <div className="ImageResult-video">
              <h5>Views</h5>
              <Link to=`/organization/:${this.props.video.YouTubeId}`>Go to Org</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ImageResult;
