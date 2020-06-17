import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <img
            className="footer-logo"
            src="/images/icons/htc-cs-logo.svg"
            alt="footer-logo"
          />
          <div className="footer-contacts">
            <h4 className="footer-contacts-location">
              426057, Россия, Удмуртская Республика, г. Ижевск, ул. Карла
              Маркса, 246 (ДК «Металлург»)
            </h4>
            <h4 className="footer-contacts-phone">
              +7 (3412) 93-88-61, 43-29-29
            </h4>
            <a className="footer-contacts-link" href="https://htc-cs.ru/">
              htc-cs.ru
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
