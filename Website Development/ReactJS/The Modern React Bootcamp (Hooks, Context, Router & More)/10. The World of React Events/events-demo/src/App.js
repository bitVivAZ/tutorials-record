import React, { Component } from 'react';
import WiseSquare from './WiseSquare';
import AnnoyingForm from './AnnoyingForm';
import './App.css';
import CopyDemo from './CopyDemo';

class App extends Component {
  render() {
  return (
      <div className="App">
        <WiseSquare />        
        <AnnoyingForm />
        <CopyDemo />
      </div>
    );
  }
}

export default App;
