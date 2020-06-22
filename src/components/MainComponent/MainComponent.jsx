import React, { Component } from "react";
import "../../components/MainComponent/MainComponent.css";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FilmsList from "../../components/FilmsList/FilmsList.jsx";
import ChannelsList from "../../components/ChannelsList/ChannelsList.jsx";
import LogInForm from "../LogInForm/LogInForm";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenFilmsIsShowing: true,
      logInFormIsShowing: false,
    };
    this.showLogInForm = this.showLogInForm.bind(this);
    this.hideLogInForm = this.hideLogInForm.bind(this);
  }

  showLogInForm() {
    this.setState({
      logInFormIsShowing: true,
    });
  }

  hideLogInForm() {
    this.setState({
      logInFormIsShowing: false,
    });
  }

  render() {
    return (
      <div className="container">
        <div className="tab-tv-channels">
          <Header placeholders={["Поиск..."]} logIn={this.showLogInForm} />
          <div className="tab-tv-channels-tab-buttons">
            <div className="tab-buttons">
              <button
                className="tab-button films"
                style={
                  this.state.screenFilmsIsShowing
                    ? {
                        color: "#E5261E",
                        borderBottom: "2px solid #E5261E",
                      }
                    : {}
                }
                onClick={() =>
                  this.setState({
                    screenFilmsIsShowing: true,
                  })
                }
              >
                Фильмы
              </button>
              <button
                className="tab-button tv-channels"
                style={
                  !this.state.screenFilmsIsShowing
                    ? {
                        color: "#E5261E",
                        borderBottom: "2px solid #E5261E",
                      }
                    : {}
                }
                onClick={() =>
                  this.setState({
                    screenFilmsIsShowing: false,
                  })
                }
              >
                Телеканалы
              </button>
            </div>
          </div>
          <div className="tab-item">
            {this.state.screenFilmsIsShowing ? <FilmsList /> : <ChannelsList />}
          </div>
          <div className="tab-tv-channels-footer">
            <Footer />
          </div>
        </div>
        {this.state.logInFormIsShowing ? <div className="main-log-in-form-container">
          <LogInForm placeholders={["Логин", "Пароль"]} closeLogInForm={this.hideLogInForm} />
        </div> : null }
      </div>
    );
  }
}

export default MainComponent;
