import React, { Component } from 'react';
import { ReactComponent as YourSvg } from '../../images/sign.svg';

class Logo extends Component {
  render() {
    return (
      <div className="logo">
        <YourSvg className="logo-image" />
        <h2 className="logo-name">Видеосервис</h2>
      </div>
    );
  }
}

export default Logo; 