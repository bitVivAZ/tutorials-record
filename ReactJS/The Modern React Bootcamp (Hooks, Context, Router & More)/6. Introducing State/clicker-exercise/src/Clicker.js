import React, { Component } from 'react';

class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = { num: 1 };
        this.handleClick = this.handleClick.bind(this);
    }

    setRandom() {
        this.setState({
            num: Math.floor((Math.random() * 10) + 1)
        });
    }

    handleClick(e) {
        this.setRandom();
    }

    render() {
        let button = <button onClick={this.handleClick}>Random Number</button>
        return (
            <div>
                <h1>Number is: {this.state.num}</h1>
                {this.state.num == 7 ? "YOU WIN!" : button}
            </div>
        );
    }
}

export default Clicker;