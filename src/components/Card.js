import React, { Component } from 'react'

export default class Card extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { menu, index } = this.props;
        return (
            <div className="res-card" onClick={() => this.props.changeCard(index)}>
                <div className="container">
                    <p className="card-title"><b>{menu.type.toUpperCase()}</b></p>
                </div>
            </div>
        )
    }
}
