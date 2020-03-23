import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { menu, index } = this.props;
        return (
            <div className="card" onClick={() => this.props.changeCard(index)}>
                <div className="container">
                    <h4><b>{menu.type.toUpperCase()}</b></h4>
                    <img className="card-icon"
                        src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
                        alt="new"
                    />
                </div>
            </div>
        )
    }
}
