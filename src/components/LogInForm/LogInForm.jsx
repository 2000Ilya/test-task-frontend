import React, { Component } from 'react';
import InputForm from '../../components/InputForm/InputForm.jsx';
import Button from "../../components/Button/Button.jsx";

class LogInForm extends Component {
  render() {
    return (
      <div>
        <InputForm />
        <InputForm />
        <Button />
      </div>
    );
  }
}

export default LogInForm; 