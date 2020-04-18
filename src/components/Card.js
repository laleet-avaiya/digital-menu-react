import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.sentenceCase = this.sentenceCase.bind(this);
    this.titleCase = this.titleCase.bind(this);
  }

  titleCase(str) {
    str = str.toLowerCase().split(" ");
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(" ");
  }

  sentenceCase(str) {
    return str
      .replace(/[a-z]/i, function (letter) {
        return letter.toUpperCase();
      })
      .trim();
  }

  render() {
    const { menu, index } = this.props;
    return (
      <div className="res-card" onClick={() => this.props.changeCard(index)}>
        <div className="res-card-container">
          <p className="card-food-title">
            {this.titleCase(menu.type.toLowerCase())}
          </p>
          <p className="card-food-sub-title">Food 1 | Food 2 | Food 3</p>
        </div>
      </div>
    );
  }
}
