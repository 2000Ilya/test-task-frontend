import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      remember: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "remember" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
    console.log(this.state[name]);
  }

  render() {
    return (
      <form>
        <label>
          <input
            name="remember"
            type="checkbox"
            checked={this.state.remember}
            onChange={this.handleInputChange}
            className="checkbox-input"
          />
          <h4 className="checkbox-text">
          запомнить</h4>
        </label>
      </form>
    );
  }
}

export default Checkbox;
