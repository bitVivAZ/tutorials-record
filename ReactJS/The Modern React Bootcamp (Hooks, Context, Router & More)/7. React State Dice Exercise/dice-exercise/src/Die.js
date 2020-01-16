import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    render() {
        let num = this.props.num;
        return (
            <div>
                <i className={`Die fas fa-dice-${num} ${this.props.rolling &&
          "shaking"}`}></i>
            </div>
        );
    }
}

export default Die;