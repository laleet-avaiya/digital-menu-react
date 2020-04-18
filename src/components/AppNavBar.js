import React, { Component } from "react";

class AppNavBar extends Component {
  constructor(props) {
    super(props);
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
      <div className="app_nav">
        <i
          className="fas fa-arrow-left backIcon"
          style={{
            fontSize: "18px",
            color: "white",
            margin: "3px 10px 5px 10px",
            display: backButton ? "inline" : "none",
          }}
          // onClick={this.props.goBack(-1)}
        ></i>
        {this.sentenceCase(navbarTitle)}
      </div>
    );
  }
}

export default AppNavBar;
