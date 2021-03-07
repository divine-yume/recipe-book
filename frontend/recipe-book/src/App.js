import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    header: "Recipe book"
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.header}</h1>
      </div>
    );
  }
}

export default App;
