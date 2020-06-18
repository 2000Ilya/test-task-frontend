import React, { Component } from "react";
import "../../components/MainComponent/MainComponent.css";
import Logo from "../../components/Logo/Logo.jsx";
import InputForm from "../../components/InputForm/InputForm.jsx";
import SearchForm from "../../components/SearchForm/SearchForm.jsx";
import Button from "../../components/Button/Button.jsx";
import GenreCard from "../../components/GenreCard/GenreCard.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import FilmCard from "../../components/FilmCard/FilmCard.jsx";
import LogInForm from "../../components/LogInForm/LogInForm.jsx";
import TabFilms from "../../components/TabFilms/TabFilms.jsx";
import Channel from "../../components/Channel/Channel.jsx";
import Checkbox from "../../components/Checkbox/Checkbox.jsx";
import ChannelsList from "../../components/ChannelsList/ChannelsList.jsx";
import TabButtons from "../TabButtons/TabButtons";
import TabTVChannels from "../TabTVChannels/TabTVChannels";

class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenFilmsIsShowing: true,
    };
  }

  render() {
    return (
      <div>
        <div className="tab-tv-channels">
          <Header />
          <div className="tab-tv-channels-tab-buttons">
            <div className="tab-buttons">
              <a
                className="tab-button films"
                style={
                  this.state.screenFilmsIsShowing
                    ? {
                        'color': "#E5261E",
                        'paddingBottom': "7px",
                        'borderBottom': "2px solid #E5261E",
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
                        'color': "#E5261E",
                        'paddingBottom': "7px",
                        'borderBottom': "2px solid #E5261E",
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
            {this.state.screenFilmsIsShowing ? <TabFilms /> : <ChannelsList />}
          </div>
          <div className="tab-tv-channels-footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default MainComponent;
