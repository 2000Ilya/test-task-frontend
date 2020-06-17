import React, { Component } from "react";
import Header from "../../components/Header/Header.jsx";
import TabButtons from "../TabButtons/TabButtons";
import ChannelsList from "../../components/ChannelsList/ChannelsList.jsx";
import Footer from "../../components/Footer/Footer.jsx";

class TabTVChannels extends Component {
  render() {
    return (
      <div className="tab-tv-channels">
        <Header />
        <div className="tab-tv-channels-tab-buttons">
          <TabButtons />
        </div>
        <div className="tab-tv-channels-channels-list">
          <ChannelsList />
        </div>
        <div className="tab-tv-channels-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default TabTVChannels;
