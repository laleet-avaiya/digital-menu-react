import React, { Component } from "react";
import "./App.css";
import firebase from "./components/firebase";
import Card from "./components/Card";
import ItemList from "./components/ItemList";
import AppNavBar from "./components/AppNavBar";
import { Spinner } from "react-bootstrap";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectCard: -1,
      // selectCard:0,
    };

    this.changeCard = this.changeCard.bind(this);
    this.titleCase = this.titleCase.bind(this);
  }

  changeCard(number) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        <div style={{ backgroundColor: "#f5fcff" }}>
          <AppNavBar
            navbarTitle={data.restaurant_name}
            backButton={false}
          ></AppNavBar>
          <div className="restaurant-detail m-0">
            <div className="menu-list">
              {data.menu.map((menu, index) => {
                return (
                  <Card
                    key={index}
                    index={index}
                    menu={menu}
                    changeCard={() => this.changeCard(index)}
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
          <AppNavBar
            navbarTitle={data.menu[selectCard].type}
            backButton={true}
            goBack={() => this.changeCard(-1)}
          ></AppNavBar>
          <div className="restaurant-detail">
            <ItemList menu={data.menu[selectCard]}></ItemList>
          </div>
        </div>
      );
    } else {
      return (
        <div className="loading">
          <Spinner animation="grow" variant="primary" />
          <Spinner animation="grow" variant="secondary" />
          <Spinner animation="grow" variant="success" />
          <Spinner animation="grow" variant="danger" />
          <Spinner animation="grow" variant="warning" />
          <Spinner animation="grow" variant="info" />
        </div>
      );
    }
  }
}
export default App;
