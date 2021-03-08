import React, { Component } from 'react';
import './App.css';

import Ingredient from './Ingredient/Ingredient'
import Recipe from './Recipe/Recipe'

class App extends Component {
  state = {
    header: "Recipe book",
    ingredients: [
      "Tomato",
      "Cucumber",
      "Raddish",
      "Carrot"
    ],
    // For now we just hard code it
    recipes: [
      { name: "recipe1", desc: "This is very long text for the purpose of replacing the desc for now", img: "/images/food.jpg" },
      { name: "recipe2", desc: "This is very long text for the purpose of replacing the desc for now", img: "/images/food.jpg" },
      { name: "recipe3", desc: "This is very long text for the purpose of replacing the desc for now", img: "/images/food.jpg" },
      { name: "recipe4", desc: "This is very long text for the purpose of replacing the desc for now", img: "/images/food.jpg" },
      { name: "recipe5", desc: "This is very long text for the purpose of replacing the desc for now", img: "/images/food.jpg" },
      { name: "recipe6", desc: "This is very long text for the purpose of replacing the desc for now", img: "/images/food.jpg" },
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.header}</h1>
        <h3>Choose the ingredients</h3>
        <div className="Ingredients">
          {
            this.state.ingredients.map(ingredient => {
              return <Ingredient ingredient={ingredient} />
            })
          }
        </div>
        <div className="Recipes">
          {
            this.state.recipes.map(recipe => {
              return <Recipe name={recipe.name} desc={recipe.desc} img={recipe.img} />
            })
          }
        </div>
      </div>
    );
  }
}

export default App;
