import React, { Component } from "react";

class TabButtons extends Component {
  render() {
    return (
      <div className="tab-buttons">
        <a className="tab-button films" style={this.props.clicked ? {
          'color': '#E5261E',
    'paddingBottom': '9px',
    'borderBottom': '3px solid #E5261E'} : {}} href="/#">
          Фильмы
        </a>
        <a className="tab-button tv-channels" style={this.props.clicked ? {
          'color': '#E5261E',
    'paddingBottom': '9px',
    'borderBottom': '3px solid #E5261E'} : {}} href="/#">
          Телеканалы
        </a>
      </div>
    );
  }
}

export default TabButtons;
