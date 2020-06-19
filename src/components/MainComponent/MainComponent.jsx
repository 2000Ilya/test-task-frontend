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
    };
  }

  render() {
    return (
      <div className="container">
        <div className="tab-tv-channels">
          <Header placeholders={["поиск..."]} />
          <div className="tab-tv-channels-tab-buttons">
            <div className="tab-buttons">
              <a
                className="tab-button films"
                style={
                  this.state.screenFilmsIsShowing
                    ? {
                        color: "#E5261E",
                        paddingBottom: "7px",
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
              </a>
              <a
                className="tab-button tv-channels"
                style={
                  !this.state.screenFilmsIsShowing
                    ? {
                        color: "#E5261E",
                        paddingBottom: "7px",
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
              </a>
            </div>
          </div>
          <div className="tab-item">
            {this.state.screenFilmsIsShowing ? <FilmsList /> : <ChannelsList />}
          </div>
          <div className="tab-tv-channels-footer">
            <Footer />
          </div>
        </div>
        <div className="log-in-form-container">
          <LogInForm placeholders={["логин", "пароль"]} />
        </div>
      </div>
    );
  }
}

export default MainComponent;
