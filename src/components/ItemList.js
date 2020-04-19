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
            <div className="res-card">
              <div
                className="res-card-container"
                style={{ boxShadow: "0px 0px 9px 4px rgba(0, 125, 0, 0.2)" }}
              >
                <div className="card-food-title" style={{ fontSize: "16px" }}>
                  {item.veg ? (
                    <img
                      alt="veg"
                      className="mr-2"
                      src={require("../assets/veg.png")}
                      style={{ width: "16px" }}
                    />
                  ) : (
                    <img
                      alt="non-veg"
                      className="mr-2"
                      src="https://img.icons8.com/color/48/000000/non-vegetarian-food-symbol.png"
                      style={{ width: "20px" }}
                    />
                  )}
                  {this.titleCase(item.itemName.toLowerCase()) + "  "}
                </div>
                <div
                  className="card-food-sub-title"
                  style={{ paddingLeft: "28px" }}
                >
                  {"Rs. " + item.price}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
