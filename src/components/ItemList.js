import React, { Component } from 'react'

export default class ItemList extends Component {
    render() {
        const menu = this.props.menu;
        return (
            <div>
            <h3>{menu.type.toUpperCase()}</h3>
                {
                    menu.items.map((item, index) =>
                        <div key={index} className="card">
                            <div className="container">
                                <h4><b>{item.itemName}</b></h4>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    )
                }
            </div>


        )
    }
}
