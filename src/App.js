import React, { Component } from 'react'
import RecipesContainer from './recipes/RecipesContainer'
import recipes from './seeds/recipes'
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      recipes,
    }
  }

  toggleLike(recipeId) {
    console.log('App:', recipeId)


    const { recipes } = this.state

    const newRecipes = recipes.map((recipe) => {
      if (recipe._id !== recipeId) return recipe
      return { ...recipe, liked: !recipe.liked }
    })

    this.setState({
      recipes: newRecipes
    })
  }

  render() {
    const { recipes } = this.state

    return (
      <div className="App">
        <RecipesContainer
          recipes={recipes}
          toggleLike={this.toggleLike.bind(this)} />
      </div>
    )
  }
}

export default App
