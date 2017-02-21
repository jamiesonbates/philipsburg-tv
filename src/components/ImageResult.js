import React, { Component } from 'react';
import { Link } from 'react-router';
import '../css/ImageResult.css';

const LinkDetermination = (props) => {
  console.log(props);
  if (props.displayBtn) {
    return (
      <div className="ImageResult-video">
        <Link className="ImageResult-btn" to={`/organization/${props.video.organization_id}`}>All Videos</Link>
      </div>
    )
  }

  return;
}

class ImageResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgsrc = 'https://img.youtube.com/vi/' + this.props.video.youtube_id + '/mqdefault.jpg';
    const divWidth = (100 / this.props.divisor) + '%';
    const LinkJSX = LinkDetermination(this.props);

    return (
      <div className="ImageResult-container" style={{ width: divWidth }}>
        <div className="ImageResult-card">
          <img onClick={() => this.props.loadVideo(this.props.video.youtube_id)} src={imgsrc} />
          <div className="ImageResult-img-details">
            <div className="ImageResult-video-info">
              <h3>{this.props.video.title}</h3>
              <h5>{this.props.video.name}</h5>
            </div>
            { LinkJSX }
          </div>
        </div>
      </div>
    )
  }
}
export default ImageResult;
