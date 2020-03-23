import React, { Component } from 'react';
import './App.css';
import firebase from './components/firebase';
import Card from './components/Card';
import ItemList from './components/ItemList';

const restaurantData = {
  name: "Ashish Restaurant",
  address: "102 - 103, Sai Residency, Amroli Katargam Road, Near Gajera School, Katargam, Surat",
  menu: [
    {
      type: "starter",
      items: [
        {
          itemName: "manchurian",
          price: 50
        }
      ]
    },
    {
      type: "main course",
      items: [
        {
          itemName: "panir butter masala",
          price: 40
        }
      ]
    },
    {
      type: "drink",
      items: [
        {
          itemName: "tea",
          price: 20
        }
      ]
    },
  ]
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      selectCard: -1,
      // selectCard:0,
    }

    this.changeCard = this.changeCard.bind(this);
  }

  changeCard(number) {
    this.setState({ selectCard: number });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('restaurant/3');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      console.log(items);
      this.setState({
        data: items
      });
    });
  }

  

  render() {
    var { data, selectCard } = this.state;

    if (data && selectCard == -1) {
      return (
        <div>
          <nav className="navbar navbar-light bg-success text-white justify-content-between">
            <header>
              <h5 className="restaurant-Name">{restaurantData.name}</h5>
              <p className="restaurant-address">{restaurantData.address}</p>
            </header>
          </nav>
          <div className="restaurant-detail">
            <div className="menu-list">
              {

                data.menu.map((menu, index) => {
                  return <Card key={index} index={index} menu={menu} changeCard={this.changeCard}></Card>
                }
                )
              }
            </div>
          </div>
        </div>
      );
    } else if (data && selectCard >= 0) {
      return (
        <div>
          <nav className="navbar navbar-light bg-success text-white justify-content-between">
            <h6 className="restaurant-Name">{data.menu[selectCard].type.toUpperCase()}</h6>
            <button className="btn btn-outline-success pull-right text-white" type="button" onClick={() => this.changeCard(-1)}><b>Home</b></button>
          </nav>
          <div className="restaurant-detail">
            <ItemList menu={data.menu[selectCard]} ></ItemList>
          </div>
        </div>
      );
    }
    else {
      return (
        <div>
          <h2>Loading ... </h2>
        </div>
      );
    }
  }
}
export default App;