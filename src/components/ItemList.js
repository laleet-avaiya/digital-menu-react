import React, { Component } from "react";
import { Badge } from "react-bootstrap";

export default class ItemList extends Component {
  constructor() {
    super();
    this.state = {
      quantity: 0,
      cart: {},
    };

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
    var { quantity } = this.state;
    return (
      <div>
        {menu.items.map((item, index) => (
          <div key={index} className="item-card">
            <div className="item-card">
              <div className="item-card-container">
                <div
                  className="item-card-food-title"
                  style={{ fontSize: "16px" }}
                >
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
                <div className="item-card-food-sub-title">
                  {"Rs. " + item.price}

                  <div className="pull-right">
                    <Badge
                      variant="success"
                      style={{ width: "60px", padding: "5px" }}
                    >
                      {quantity > 0 ? (
                        <span style={{ fontSize: "13px" }}>
                          <span
                            className="mx-2"
                            onClick={() => {
                              this.setState({ quantity: quantity - 1 });
                            }}
                          >
                            -
                          </span>
                          {quantity}
                          <span
                            className="mx-2"
                            onClick={() => {
                              this.setState({ quantity: quantity + 1 });
                            }}
                          >
                            +
                          </span>
                        </span>
                      ) : (
                        <span
                          onClick={() => {
                            this.setState({ quantity: quantity + 1 });
                          }}
                        >
                          ADD
                        </span>
                      )}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
