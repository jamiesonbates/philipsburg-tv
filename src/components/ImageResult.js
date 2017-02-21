import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/ImageResult.css';

class ImageResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgsrc = 'https://img.youtube.com/vi/' + this.props.video.youtube_id + '/mqdefault.jpg';
    const divWidth = (100 / this.props.divisor) + '%';

    return (
      <div className="ImageResult-container" style={{ width: divWidth }}>
        <div className="ImageResult-card">
          <div>
            <img onClick={() => this.props.loadVideo(this.props.video.youtube_id)} src={imgsrc} />
          </div>
          <div className="ImageResult-img-details">
            <div className="ImageResult-video-info">
              <h3>{this.props.video.title}</h3>
              <h5>{this.props.video.name}</h5>
            </div>
            <div className="ImageResult-video">
              <Link className="ImageResult-btn" to={`/organization/${this.props.video.organization_id}`}>All Videos</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ImageResult;
