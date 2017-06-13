import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import recipes from './seeds/recipes'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RecipesContainer recipes={recipes} />
      </div>
    )
  }
}

export default App
