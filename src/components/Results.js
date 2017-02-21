import React, { Component } from 'react';
import ImageResult from './ImageResult';
import VideoPlayer from './VideoPlayer';
import '../css/Results.css';

class Results extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="results">
          {
            this.props.videos
              .map(video => {
                if (!this.props.videoIsClicked) {
                  video.clicked = false;
                }

                return video;
              })
              .map(video => {
                if (video.clicked) {
                  return <VideoPlayer key={video.youtube_id} video={video} />
                }

                return <ImageResult key={video.youtube_id} divisor={this.props.divisor} loadVideo={this.props.loadVideo} video={video} />
              })
          }
        </div>
      </div>
    )
  }
}

export default Results;
