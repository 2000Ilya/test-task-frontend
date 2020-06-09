import React, { Component } from 'react';

class GenreCard extends Component {
  render() {
    return (
        <div className="genre-card" href="/#">
            <span className="genre-card-emoji" role="img" aria-label="grin">😁</span>
            <h3 className="genre-card-name">
                Комедии
            </h3>
        </div>
    );
  }
}

export default GenreCard;