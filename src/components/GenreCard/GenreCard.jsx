import React, { Component } from "react";

class GenreCard extends Component {
  render() {
    return (
      <div className="genre-card" href="/#" style={{ background: this.props.color }}>
        <span className="genre-card-emoji" role="img" aria-label="grin">
            { this.props.smile }
        </span>
        <h3 className="genre-card-name">{ this.props.genre }</h3>
      </div>
    );
  }
}

export default GenreCard;
