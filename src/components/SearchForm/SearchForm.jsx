import React, { Component } from "react";
import InputForm from "../../components/InputForm/InputForm.jsx";

class SearchForm extends Component {
  render() {
    return (
      <div className="search-form">
        <InputForm className="search-form-input" />
        <a className="search-form-button" href="/#">
          Найти
        </a>
      </div>
    );
  }
}

export default SearchForm;
