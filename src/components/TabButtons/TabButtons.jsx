import React, { Component } from "react";

class TabButtons extends Component {
  render() {
    return (
      <div className="tab-buttons">
        <button
          className="tab-button films"
          style={
            this.props.clicked
              ? {
                  color: "#E5261E",
                  paddingBottom: "9px",
                  borderBottom: "3px solid #E5261E",
                }
              : {}
          }
        >
          Фильмы
        </button>
        <button
          className="tab-button tv-channels"
          style={
            this.props.clicked
              ? {
                  color: "#E5261E",
                  paddingBottom: "9px",
                  borderBottom: "3px solid #E5261E",
                }
              : {}
          }
        >
          Телеканалы
        </button>
      </div>
    );
  }
}

export default TabButtons;
