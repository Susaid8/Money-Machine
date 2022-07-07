import React, { Component } from 'react';
import Titlepage from './titlepage';
import Budget from './budget/Budget';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Titlepage />
        <div className="container my-5">
            <Budget />
        </div>
      </div>
    );
  }
}
export default App;
