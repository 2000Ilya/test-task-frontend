import React, { Component } from "react";

class InputForm extends Component {
  render() {
    return <input className="input-form" style={this.props.style} placeholder={this.props.placeholders}></input>;
  }
}

export default InputForm;
