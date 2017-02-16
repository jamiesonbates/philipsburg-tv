import React, { Component } from 'react';
import '../css/VideoResult.css';


class ImageResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imgsrc: 'https://img.youtube.com/vi/' + this.props.src + '/mqdefault.jpg',
      divWidth: (100 / this.props.divisor) + '%'
    }
  }

  render() {
    return (
      <div className="VideoResult-test" style={{ width: this.state.divWidth }}>
        <img onClick={() => this.props.loadVideo(this.props.src)} src={this.state.imgsrc} />
      </div>
    )
  }
}
export default ImageResult;
