import React, { Component } from "react";

class TabButtons extends Component {
  render() {
    return (
      <div className="tab-buttons">
        <a className="tab-button films" href="/#">
          Фильмы
        </a>
        <a className="tab-button tv-channels" href="/#">
          Телеканалы
        </a>
      </div>
    );
  }
}

export default TabButtons;
