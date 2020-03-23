import React, { Component } from 'react'

export default class ItemList extends Component {
    render() {
        const menu = this.props.menu;
        return (
            <div>
                {
                    menu.items.map((item, index) =>
                        <div key={index} className="item-card">
                            <div className="item-container">
                                <p><b>{item.itemName + "  "}</b><span className="veg-indian-vegetarian"></span></p>
                                
                                <p>{"Rs. "+  item.price}</p>
                            </div>
                        </div>
                    )
                }
            </div>


        )
    }
}
