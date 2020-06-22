import React, { Component } from "react";
import InputForm from "../../components/InputForm/InputForm.jsx";

class SearchForm extends Component {
  render() {
    return (
      <div className="search-form">
        <InputForm className="search-form-input" placeholders={this.props.placeholders[0]} />
        <button className="search-form-button">
          Найти
        </button>
      </div>
    );
  }
}

export default SearchForm;
