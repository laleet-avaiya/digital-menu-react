import React, { Component } from 'react';
import './App.css';
import firebase from './components/firebase';
import Card from './components/Card'
import ItemList from './components/ItemList'
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
      selectCard:null,
      // selectCard:0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeCard = this.changeCard.bind(this);
  }

  changeCard(number) {
    this.setState({selectCard : number});
  }

  

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
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
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {
    var {data,selectCard} = this.state;

    if (data && selectCard==null) {
      return (
        <div className="restaurant-detail">
          <h1 className="restaurant-Name">{restaurantData.name}</h1>
          <p className="restaurant-address">{restaurantData.address}</p>
          <div className="menu-list">
          {

            data.menu.map((menu,index) =>
              {
                return <Card key={index} index={index} menu={menu} changeCard={this.changeCard}></Card>
              }
            )
          }
          </div>
        </div>
      );
    }else if (data && selectCard >= 0) {
        return (
          <div className="restaurant-detail">
            <h1 className="restaurant-Name">{restaurantData.name}</h1>
            <ItemList menu={data.menu[selectCard]} ></ItemList>
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