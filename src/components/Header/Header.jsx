import React, { Component } from "react";
import Logo from "../../components/Logo/Logo.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import Button from "../../components/Button/Button.jsx";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header-logo">
          <Logo />
        </div>
        <div className="header-search-form">
          <SearchForm placeholders={this.props.placeholders} />
        </div>
        <div className="header-button">
          <Button logIn={this.props.logIn} />
        </div>
      </div>
    );
  }
}

export default Header;
