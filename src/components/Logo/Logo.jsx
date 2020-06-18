import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <img
          className="logo-image"
          src="images/icons/sign.svg"
          alt="header-logo"
        />
        <h2 className="logo-name">Видеосервис</h2>
      </div>
    );
  }
}

export default Logo;
