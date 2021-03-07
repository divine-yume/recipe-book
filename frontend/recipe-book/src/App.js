import React, { Component } from 'react';
import './App.css';

import Ingredient from './Ingredient/Ingredient'

class App extends Component {
  state = {
    header: "Recipe book",
    ingredients: [
      "Pork",
      "Turkey",
      "Chicken",
      "Steak"
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.header}</h1>
        <div className="Ingredients">
          {
            this.state.ingredients.map(ingredient => {
              return <Ingredient ingredient={ingredient} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
