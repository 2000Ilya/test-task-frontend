import React, { Component } from "react";

class GenreCard extends Component {
  render() {
    return (
      <div className="genre-card-container">
        <div className="genre-card" style={{ background: this.props.color }}>
          <h3 className="genre-card-name">{this.props.genre}</h3>
        </div>
        <span className="genre-card-emoji" role="img" aria-label="grin">
          {this.props.smile}
        </span>
      </div>
    );
  }
}

export default GenreCard;
