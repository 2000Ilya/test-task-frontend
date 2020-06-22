import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button className="button" onClick={this.props.logIn}>
        Войти
      </button>
    );
  }
}

export default Button;
