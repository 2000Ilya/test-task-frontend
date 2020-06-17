import React, { Component } from "react";

class FilmCard extends Component {
  render() {
    return (
      <div className="film-card">
        <div className="film-card-movie-container">
          <img
            src={this.props.film_url}
            className="film-card-movie-image"
            alt="movie"
          />
          <div className="film-card-movie-overlay">
            <div className="film-card-movie-overlay-text">
              {this.props.description}
            </div>
          </div>
        </div>
        <h2 className="film-card-caption">{this.props.film_caption}</h2>
      </div>
    );
  }
}

export default FilmCard;
