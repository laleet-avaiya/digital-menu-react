import React, { Component } from "react";

class AppNavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  sentenceCase(str) {
    return str
      .replace(/[a-z]/i, function (letter) {
        return letter.toUpperCase();
      })
      .trim();
  }

  render() {
    var { navbarTitle, backButton } = this.props;
    return (
      <>
        <div
          className="res-detail-card"
          style={{ display: backButton ? "none" : "block" }}
        >
          <div className="card-food-title">
            {this.sentenceCase(navbarTitle)}
          </div>
          <div className="card-food-sub-title">
            Fast Food | Panjabi | Chines
          </div>
        </div>

        <div
          className="app_nav"
          style={{ display: backButton ? "block" : "none" }}
        >
          <i
            className="fas fa-arrow-left backIcon"
            style={{
              fontSize: "18px",
              color: "white",
              margin: "3px 10px 5px 10px",
            }}
            onClick={this.props.goBack}
          ></i>
          {this.sentenceCase(navbarTitle)}
        </div>
      </>
    );
  }
}

export default AppNavBar;
