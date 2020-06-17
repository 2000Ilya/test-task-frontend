import React, { Component } from "react";

class Channel extends Component {
  render() {
    return (
      <div className="channel">
        <div className="channel-logo-container">
          <img
            className="channel-logo"
            style={this.props.position}
            src={this.props.channel_logo_url}
            alt="channel-logo"
          />
        </div>
        <h1 className="channel-name">{this.props.channel_name}</h1>
        <table className="channel-schedule">
          <tbody>
            <tr className="channel-schedule-first-item">
              <td className="channel-schedule-first-item-time">13:00</td>
              <td className="channel-schedule-first-item-telecast">
                {this.props.telecast[0]}
              </td>
            </tr>
            <tr className="channel-schedule-second-item">
              <td className="channel-schedule-second-item-time">14:00</td>
              <td className="channel-schedule-second-item-telecast">
                {this.props.telecast[1]}
              </td>
            </tr>
            <tr className="channel-schedule-third-item">
              <td className="channel-schedule-third-item-time">15:00</td>
              <td className="channel-schedule-third-item-telecast">
                {this.props.telecast[2]}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Channel;
