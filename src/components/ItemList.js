import React, { Component } from "react";

export default class ItemList extends Component {
  constructor() {
    super();
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
    const menu = this.props.menu;
    return (
      <div>
        {menu.items.map((item, index) => (
          <div key={index} className="item-card">
            <div className="item-container">
              <p className="pull-left">
                <b>{this.titleCase(item.itemName.toLowerCase()) + "  "}</b>
              </p>
              {item.veg ? (
                <p className="pull-right">
                  <span className="veg-indian-vegetarian"></span>
                </p>
              ) : (
                <p className="pull-right">
                  <span className="non-veg-indian-vegetarian"></span>
                </p>
              )}
              <br />

              <p className="item-price">{"Rs. " + item.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
