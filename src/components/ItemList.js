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
              {item.veg ? (
                <img
                  className="mr-2"
                  src={require("../assets/veg.png")}
                  style={{ width: "18px" }}
                />
              ) : (
                <img
                  className="mr-2"
                  src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                  style={{ width: "22px" }}
                />
              )}
              <span style={{ fontSize: "20px", fontWeight: "600" }}>
                {this.titleCase(item.itemName.toLowerCase()) + "  "}
              </span>
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  paddingLeft: "25px",
                }}
              >
                {"Rs. " + item.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
