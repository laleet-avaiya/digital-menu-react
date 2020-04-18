import React, { Component } from "react";

class MenuTiles extends Component {
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
    var restaurant_name = this.props.restaurant_name;
    return <div className="app_nav">{this.sentenceCase(restaurant_name)}</div>;
  }
}

export default MenuTiles;
