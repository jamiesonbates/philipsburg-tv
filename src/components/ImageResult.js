import React, { Component } from 'react';
import '../css/VideoResult.css';

class ImageResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgsrc = 'https://img.youtube.com/vi/' + this.props.src + '/mqdefault.jpg';
    const divWidth = (100 / this.props.divisor) + '%';

    return (
      <div className="VideoResult-test" style={{ width: divWidth }}>
        <img onClick={() => this.props.loadVideo(this.props.src)} src={imgsrc} />
      </div>
    )
  }
}
export default ImageResult;
