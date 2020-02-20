import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
    static defaultProps = {
        sides: ["one", "two", "three", "four", "five", "six"]
    };

    constructor(props) {
        super(props);
        this.state = { num1: "one", num2: "one", rolling: false};
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        let newDieOne = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        let newDieTwo = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
        this.setState({
            num1: newDieOne, num2: newDieTwo, rolling: true
        });

        setTimeout(() => {
            this.setState({ rolling: false });
          }, 1000);
    }

    render() {
        return (
            <div className="RollDice">
                <div className="RollDice-container">
                    <Die num={this.state.num1} rolling={this.state.rolling} />
                    <Die num={this.state.num2} rolling={this.state.rolling} />
                </div>
                <div className="RollDice-button">
                    <button onClick={this.rollDice} disabled={this.state.rolling}>{this.state.rolling ? "Rolling..." : "Role Dice!"}</button>
                </div>
            </div>
        );
    }
}

export default RollDice;