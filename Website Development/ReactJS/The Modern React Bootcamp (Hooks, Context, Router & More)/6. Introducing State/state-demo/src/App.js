import React, { Component } from 'react';
import Game from './Game';
import Rando from './Rando';
import Button from './Button';
import Brokenclick from './Brokenclick';
import './App.css';

class App extends Component {
  render() {
    return <div className="App">
      <Game />
      <Rando maxNum={7} />
      <Button />
      <Brokenclick />
    </div>
    };
}

export default App;
