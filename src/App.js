import React, { Component } from "react";
import "./App.css";
import firebase from "./components/firebase";
import Card from "./components/Card";
import ItemList from "./components/ItemList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectCard: -1,
      // selectCard:0,
    };

    this.changeCard = this.changeCard.bind(this);
    this.sentenceCase = this.sentenceCase.bind(this);
    this.titleCase = this.titleCase.bind(this);
  }

  changeCard(number) {
    this.setState({ selectCard: number });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
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

  componentDidMount() {
    var url = new URL(window.location.href);
    var restaurant_id = url.searchParams.get("restaurant_id");
    if (restaurant_id == null) {
      restaurant_id = prompt("Restaurant Id?");
    }
    if (restaurant_id) {
      const itemsRef = firebase.database().ref("restaurant/" + restaurant_id);
      itemsRef.on("value", (snapshot) => {
        let items = snapshot.val();
        console.log(items);
        this.setState({
          data: items,
        });
      });
    }
  }

  render() {
    var { data, selectCard } = this.state;

    if (data && selectCard === -1) {
      return (
        <div className="home">
          <nav className="navbar navbar-light bg-success text-white justify-content-between">
            <header>
              <h5 className="restaurant-Name">
                {this.titleCase(data.restaurant_name.toLowerCase())}
              </h5>
              <p className="restaurant-address">
                {this.titleCase(data.restaurant_address.toLowerCase())}
              </p>
            </header>
          </nav>
          <div className="restaurant-detail">
            <div className="menu-list">
              {data.menu.map((menu, index) => {
                return (
                  <Card
                    key={index}
                    index={index}
                    menu={menu}
                    changeCard={this.changeCard}
                  ></Card>
                );
              })}
            </div>
          </div>
        </div>
      );
    } else if (data && selectCard >= 0) {
      return (
        <div>
          <nav className="navbar navbar-light bg-success text-white justify-content-between sticky-top ">
            <h6 className="restaurant-Name">
              {this.titleCase(data.menu[selectCard].type.toLowerCase())}
            </h6>
            <button
              className="btn btn-outline-warning pull-right "
              type="button"
              onClick={() => this.changeCard(-1)}
            >
              <b>Home</b>
            </button>
          </nav>
          <div className="restaurant-detail">
            <ItemList menu={data.menu[selectCard]}></ItemList>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Loading ... </h2>
        </div>
      );
    }
  }
}
export default App;
