import React, { Component } from "react";
import InputForm from "../../components/InputForm/InputForm.jsx";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";
import Button from "../../components/Button/Button.jsx";

class LogInForm extends Component {
  render() {
    return (
      <div className="log-in-form">
        <h1 className="log-in-form-header">Вход</h1>
        <div className="log-in-form-login">
          <InputForm style={{'width': '232px'}} placeholders={this.props.placeholders[0]} />
        </div>
        <div className="log-in-form-password">
          <InputForm style={{'width': '232px'}} placeholders={this.props.placeholders[1]} />
        </div>
        <div className="log-in-form-checkbox">
          <Checkbox />
        </div>
        <div className="log-in-form-button">
          <Button />
        </div>
      </div>
    );
  }
}

export default LogInForm;
