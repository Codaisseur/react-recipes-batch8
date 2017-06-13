// src/recipes/RecipesContainer.js
import React, { PureComponent } from 'react'
import Title from '../components/Title'
import RecipeItem from './RecipeItem'
import './RecipesContainer.css'

class RecipesContainer extends PureComponent {
  renderRecipe(recipe, index) {
    const { toggleLike } = this.props

    return <RecipeItem
      key={index} { ...recipe }
      toggleLike={toggleLike} />
  }

  render() {
    return(
      <div className="recipes wrapper">
        <header>
          <Title content="All Recipes" />
        </header>

        <main>
          { this.props.recipes.map(this.renderRecipe.bind(this)) }
        </main>
      </div>
    )
  }
}

export default RecipesContainer
